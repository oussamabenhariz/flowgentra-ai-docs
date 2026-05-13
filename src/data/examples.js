export const examples = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hello-world',
    title: 'Hello World Agent',
    description: 'The simplest graph — one node that echoes the input. Use this as a blank slate for new projects.',
    rust: `use flowgentra_ai::prelude::*;
use std::sync::Arc;

#[derive(State, Default, Clone)]
struct EchoState {
    input: String,
    output: String,
}

async fn echo(state: &EchoState, _ctx: &Context) -> Result<EchoStateUpdate> {
    Ok(EchoStateUpdate {
        output: Some(format!("Echo: {}", state.input)),
        ..Default::default()
    })
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraphBuilder::<EchoState>::new()
        .add_node("echo", Arc::new(NodeFunction::new(echo)))
        .set_entry_point("echo")
        .compile()?;

    let result = graph.invoke(EchoState {
        input: "Hello, Flowgentra!".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.output);
    // Echo: Hello, Flowgentra!
    Ok(())
}`,
    python: `from flowgentra_ai.graph import StateGraph
from typing import TypedDict

class EchoState(TypedDict):
    input: str
    output: str

def echo(state: EchoState) -> EchoState:
    return {**state, "output": f"Echo: {state['input']}"}

builder = StateGraph(EchoState)
builder.add_node("echo", echo)
builder.set_entry_point("echo")
graph = builder.compile()

result = graph.invoke({"input": "Hello, Flowgentra!"})
print(result["output"])
# Echo: Hello, Flowgentra!`,
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'register-handler-config',
    title: 'Handler Registration + from_config_path',
    description: 'The recommended production pattern. Define handlers with #[register_handler] (Rust) or @register_handler (Python), write the graph in YAML, and call from_config_path() — zero manual wiring.',
    rust: `// handlers.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn validate_input(state: DynState) -> Result<DynState> {
    let input = state.get("input")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    if input.is_empty() {
        return Err(FlowgentraError::ValidationError(
            "Input is required".into()
        ));
    }
    state.set("validated", json!(true));
    Ok(state)
}

#[register_handler]
pub async fn process(state: DynState) -> Result<DynState> {
    let input = state.get("input")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    state.set("output", json!(input.to_uppercase()));
    Ok(state)
}

// ---
// config.yaml
// name: my_agent
// llm:
//   provider: openai
//   model: gpt-4o-mini
//   api_key: \${OPENAI_API_KEY}
// graph:
//   nodes:
//     - name: validate
//       handler: validate_input
//     - name: process
//       handler: process
//   edges:
//     - from: START
//       to: validate
//     - from: validate
//       to: process
//     - from: process
//       to: END
// state_schema:
//   input: "string - User query"
//   output: "string - Result"
// ---

// main.rs
#[tokio::main]
async fn main() -> Result<()> {
    // Auto-discovers validate_input and process handlers
    let mut agent = from_config_path("config.yaml")?;

    agent.state.set("input", json!("hello world"));
    let result = agent.run().await?;

    println!("{}", result.get("output").unwrap());
    // "HELLO WORLD"
    Ok(())
}`,
    python: `# handlers.py
from flowgentra_ai.agent import register_handler

@register_handler
def validate_input(state: dict) -> dict:
    if not state.get("input"):
        raise ValueError("Input is required")
    return {**state, "validated": True}

@register_handler
def process(state: dict) -> dict:
    return {**state, "output": state["input"].upper()}

# config.yaml
# name: my_agent
# python_handler_module: handlers   ← auto-imports handlers.py
# llm:
#   provider: openai
#   model: gpt-4o-mini
#   api_key: \${OPENAI_API_KEY}
# graph:
#   nodes:
#     - name: validate
#       handler: validate_input
#     - name: process
#       handler: process
#   edges:
#     - from: START
#       to: validate
#     - from: validate
#       to: process
#     - from: process
#       to: END
# state_schema:
#   input: "string - User query"
#   output: "string - Result"

# main.py
from flowgentra_ai.agent import Agent
import asyncio

async def main():
    agent = Agent.from_config_path("config.yaml")
    result = await agent.run({"input": "hello world"})
    print(result["output"])  # "HELLO WORLD"

asyncio.run(main())`,
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'multi-turn-memory',
    title: 'Multi-Turn Conversation with Memory',
    description: 'Use run_with_thread() + a checkpointer to persist state across turns. The agent "remembers" previous messages automatically.',
    rust: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::{
    InMemoryConversationMemory, MemoryCheckpointer
};
use serde_json::json;
use std::sync::Arc;

#[register_handler]
pub async fn chat(state: DynState) -> Result<DynState> {
    // Access the LLM config injected by the runtime
    let _llm_config = state.get("_llm_config");

    // In production: use state.get("messages") for history
    // and call the LLM with full context
    let user_input = state.get("user_input")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    // Simulate LLM response
    let reply = format!("You said: '{user_input}'. I remember everything.");
    state.set("reply", json!(reply));

    // Append to message history
    let mut msgs: Vec<serde_json::Value> =
        state.get("messages")
            .and_then(|v| v.as_array().cloned())
            .unwrap_or_default();
    msgs.push(json!({"role": "user",      "content": user_input}));
    msgs.push(json!({"role": "assistant", "content": reply}));
    state.set("messages", json!(msgs));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    let memory = InMemoryConversationMemory::new()
        .with_max_messages(20)
        .with_system_prompt("You are a helpful assistant.".into());

    let mut agent = from_config_path("config.yaml")?
        .with_checkpointer(Arc::new(MemoryCheckpointer::new()))
        .with_conversation_memory(Arc::new(memory));

    // Turn 1
    agent.state.set("user_input", json!("My name is Alice."));
    agent.run_with_thread("session-alice").await?;

    // Turn 2 — state reloaded, history preserved
    agent.state.set("user_input", json!("What's my name?"));
    let result = agent.run_with_thread("session-alice").await?;
    println!("{}", result.get("reply").unwrap());
    Ok(())
}`,
    python: `from flowgentra_ai.agent import register_handler, from_config_path
from flowgentra_ai.memory import FileCheckpointer
import asyncio

@register_handler
def chat(state: dict) -> dict:
    user_input = state.get("user_input", "")
    msgs = state.get("messages", [])
    msgs = msgs + [
        {"role": "user",      "content": user_input},
        {"role": "assistant", "content": f"You said: '{user_input}'"},
    ]
    return {**state, "messages": msgs,
            "reply": f"You said: '{user_input}'"}

# config.yaml enables memory:
# memory:
#   checkpointer: { type: memory }
#   conversation: { enabled: true, max_messages: 20 }
# python_handler_module: handlers

async def main():
    agent = from_config_path("config.yaml")
    agent.set_checkpointer(FileCheckpointer("./checkpoints"))

    # Turn 1 — set state fields before each run
    agent.set_custom_field("user_input", "My name is Alice.")
    agent.set_custom_field("messages", [])
    await agent.run_with_thread("alice")

    # Turn 2 — previous state automatically restored
    agent.set_custom_field("user_input", "What's my name?")
    result = await agent.run_with_thread("alice")
    print(result.get("reply"))

asyncio.run(main())`,
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'llm-streaming',
    title: 'LLM Streaming Response',
    description: 'Stream tokens from the LLM as they arrive instead of waiting for the full response. Works with all providers that support streaming.',
    rust: `use flowgentra_ai::core::llm::{
    LLMConfig, LLMProvider, LLM, Message, create_llm
};

#[tokio::main]
async fn main() -> flowgentra_ai::core::error::Result<()> {
    let config = LLMConfig::new(
        LLMProvider::Anthropic,
        "claude-3-5-haiku-20241022".into(),
        std::env::var("ANTHROPIC_API_KEY").unwrap(),
    ).with_temperature(0.7);

    let client = create_llm(&config)?;

    let messages = vec![
        Message::system("You are a creative writer."),
        Message::user("Write a short story about a robot learning to code."),
    ];

    print!("Story: ");
    let mut rx = client.chat_stream(messages).await?;
    while let Some(chunk) = rx.recv().await {
        print!("{chunk}");
        // Flush for real-time output in terminals
        use std::io::Write;
        std::io::stdout().flush().ok();
    }
    println!();
    Ok(())
}`,
    python: `from flowgentra_ai.llm import LLM, Message
import os

def stream_response():
    client = LLM(
        "anthropic",
        "claude-3-5-haiku-20241022",
        api_key=os.environ["ANTHROPIC_API_KEY"],
        temperature=0.7,
    )

    messages = [
        Message(role="system",
                content="You are a creative writer."),
        Message(role="user",
                content="Write a short story about a robot learning to code."),
    ]

    print("Story: ", end="", flush=True)
    for chunk in client.chat_stream(messages):
        print(chunk, end="", flush=True)
    print()

stream_response()`,
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'structured-output',
    title: 'Structured JSON Output',
    description: 'Force the LLM to return valid JSON — useful for extraction tasks, classification, or feeding results into downstream nodes.',
    rust: `use flowgentra_ai::core::llm::*;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Debug)]
struct PersonInfo {
    name: String,
    age: u32,
    occupation: String,
}

#[tokio::main]
async fn main() -> flowgentra_ai::core::error::Result<()> {
    let config = LLMConfig::new(
        LLMProvider::OpenAI,
        "gpt-4o-mini".into(),
        std::env::var("OPENAI_API_KEY").unwrap(),
    ).with_response_format(ResponseFormat::Json);

    let client = create_llm(&config)?;

    let response = client.chat_structured(vec![
        Message::system("Extract person information from the text as JSON."),
        Message::user("Alice is a 30-year-old software engineer."),
    ]).await?;

    let person: PersonInfo = serde_json::from_value(response)?;
    println!("Name: {}, Age: {}, Job: {}",
        person.name, person.age, person.occupation);
    // Name: Alice, Age: 30, Job: software engineer
    Ok(())
}`,
    python: `from flowgentra_ai.llm import LLM, LLMConfig, Message
from flowgentra_ai.types import ResponseFormat
import json, os

config = LLMConfig("openai", "gpt-4o-mini",
                   api_key=os.environ["OPENAI_API_KEY"])
config.set_response_format(ResponseFormat.json())  # forces JSON output
client = LLM.from_config(config)

msg = client.chat([
    Message(role="system",
            content="Extract person info from text as JSON with keys: name, age, occupation."),
    Message(role="user",
            content="Alice is a 30-year-old software engineer."),
])

person = json.loads(msg.content)
print(f"Name: {person['name']}, Age: {person['age']}, Job: {person['occupation']}")
# Name: Alice, Age: 30, Job: software engineer`,
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'retry-timeout',
    title: 'RetryNode + TimeoutNode',
    description: 'Wrap unreliable operations with automatic exponential backoff retry, or enforce strict execution deadlines with TimeoutNode.',
    rust: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::node::builtin_nodes::{RetryNode, TimeoutNode};
use serde_json::json;

// Simulates a flaky external API
#[register_handler]
pub async fn call_flaky_api(state: DynState) -> Result<DynState> {
    // Randomly fail for demo purposes
    if rand::random::<f32>() < 0.5 {
        return Err(FlowgentraError::NodeExecutionError(
            "API temporarily unavailable".into()
        ));
    }
    state.set("api_result", json!("success"));
    Ok(state)
}

// In config.yaml, use node_type: retry instead of code:
// nodes:
//   - name: fetch
//     handler: call_flaky_api
//     node_type: retry
//     config:
//       max_retries: 3
//       backoff_ms: 500
//       backoff_multiplier: 2.0
//       max_backoff_ms: 5000
//
//   - name: timed_fetch
//     handler: call_flaky_api
//     node_type: timeout
//     config:
//       timeout_ms: 3000
//       on_timeout: skip    # error | skip | default_value`,
    python: `from flowgentra_ai.graph import StateGraph
import httpx, asyncio

async def fetch_data(state: dict) -> dict:
    async with httpx.AsyncClient() as client:
        r = await client.get(state["url"], timeout=2.0)
        return {**state, "content": r.text}

async def main():
    builder = StateGraph(dict)

    # add_retry_node wraps the handler with exponential backoff
    builder.add_retry_node("fetch", fetch_data, max_retries=3, backoff_ms=500)
    # add_timeout_node enforces a hard deadline
    # builder.add_timeout_node("fetch", fetch_data, timeout_ms=3000, on_timeout="skip")
    builder.set_entry_point("fetch")
    graph = builder.compile()

    result = await graph.ainvoke({"url": "https://example.com"})
    print(result["content"][:100])

# Or configure entirely in YAML (zero Python code needed):
# nodes:
#   - name: fetch
#     handler: fetch_data
#     node_type: retry
#     config:
#       max_retries: 3
#       backoff_ms: 500
#
#   - name: timed_fetch
#     handler: fetch_data
#     node_type: timeout
#     config:
#       timeout_ms: 3000
#       on_timeout: skip

asyncio.run(main())`,
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'zero-shot-react',
    title: 'ZeroShotReAct Agent',
    description: 'Spin up a reasoning + tool-use agent in a few lines using the AgentBuilder preset. No graph wiring required.',
    rust: `use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};
use flowgentra_ai::core::error::Result;

#[tokio::main]
async fn main() -> Result<()> {
    let search = ToolSpec::new("web_search", "Search the internet for information")
        .with_parameter("query", "string")
        .required("query");

    let calculator = ToolSpec::new("calculator", "Evaluate a math expression")
        .with_parameter("expression", "string")
        .required("expression");

    let mut agent = AgentBuilder::new(AgentType::ZeroShotReAct)
        .with_llm_config("gpt-4o")
        .with_tool(search)
        .with_tool(calculator)
        .build()?;

    let state = flowgentra_ai::core::state::DynState::new();
    agent.initialize(&mut state.clone())?;

    let result = agent.process(
        "What is the population of Japan divided by 1000?",
        &state
    )?;

    println!("Answer:    {}", result.output);
    println!("Reasoning: {}", result.reasoning.unwrap_or_default());
    for call in &result.tool_calls {
        println!("Tool called: {} → {:?}", call.tool_name, call.result);
    }
    Ok(())
}`,
    python: `from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

search = (ToolSpec(name="web_search",
                   description="Search the internet")
          .with_parameter("query", "string")
          .required("query"))

calc   = (ToolSpec(name="calculator",
                   description="Evaluate a math expression")
          .with_parameter("expression", "string")
          .required("expression"))

agent = (AgentBuilder(AgentType.ZeroShotReAct)
         .with_llm_config("gpt-4o")
         .with_tool(search)
         .with_tool(calc)
         .build())

result = agent.process(
    "What is the population of Japan divided by 1000?"
)

print("Answer:   ", result.output)
print("Reasoning:", result.reasoning)
for call in result.tool_calls:
    print(f"Tool: {call.tool_name} → {call.result}")`,
  },

  // 8 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'rag-pipeline',
    title: 'RAG Pipeline',
    description: 'Index documents into a vector store and retrieve relevant chunks at query time to ground LLM responses with factual context.',
    rust: `// config.yaml enables RAG automatically — just write handlers:
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn retrieve_context(state: DynState) -> Result<DynState> {
    // The runtime injects _rag_config from your YAML automatically
    let query = state.get("query")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    // In production: use the injected _rag_config to init a VectorStore
    // and call store.similarity_search(query, 5).await
    state.set("context", json!([
        "Flowgentra supports async-first execution.",
        "StateGraph is the core primitive.",
    ]));
    Ok(state)
}

#[register_handler]
pub async fn answer_with_context(state: DynState) -> Result<DynState> {
    let query   = state.get("query").and_then(|v| v.as_str()).unwrap_or("");
    let context = state.get("context").and_then(|v| v.as_array()).cloned()
        .unwrap_or_default();

    let ctx_str = context.iter()
        .filter_map(|v| v.as_str())
        .collect::<Vec<_>>()
        .join("\\n");

    // Call LLM with context (simplified)
    state.set("answer", json!(format!(
        "Based on context: {}\\n\\nAnswer to '{}': ...",
        ctx_str, query
    )));
    Ok(state)
}`,
    python: `from flowgentra_ai.rag import (
    InMemoryVectorStore, Embeddings,
    RecursiveCharacterTextSplitter,
    Document
)
from flowgentra_ai.llm import LLM, LLMConfig, Message
import asyncio

async def build_rag_pipeline(docs_text: str, query: str):
    # 1. Chunk the document
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500, chunk_overlap=50)
    docs = splitter.create_documents([docs_text])

    # 2. Embed and index
    embeddings = Embeddings(
        provider="openai",
        model="text-embedding-3-small",
        api_key="\${OPENAI_API_KEY}"
    )
    store = InMemoryVectorStore(embeddings)
    await store.aadd_documents(docs)

    # 3. Retrieve relevant chunks
    results = await store.asimilarity_search(query, k=3)
    context = "\\n\\n".join(r.document.content for r in results)

    # 4. Generate answer with context
    config = LLMConfig(provider="openai", model="gpt-4o-mini",
                       api_key="\${OPENAI_API_KEY}")
    client = LLM(config)

    answer = client.call([
        Message(role="system",
                content=f"Answer using this context:\\n{context}"),
        Message(role="user", content=query),
    ])
    return answer.content

result = asyncio.run(build_rag_pipeline(
    docs_text="Flowgentra is an async-first agent graph framework...",
    query="What is Flowgentra?"
))
print(result)`,
  },

  // 9 ─────────────────────────────────────────────────────────────────────────
  {
    id: 'supervisor-multiagent',
    title: 'Supervisor Multi-Agent',
    description: 'Orchestrate a team of specialized agents with a Supervisor that routes tasks using LLM reasoning.',
    rust: `use flowgentra_ai::core::agents::supervisor::{Supervisor, OrchestrationStrategy};
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn research_task(state: DynState) -> Result<DynState> {
    let topic = state.get("task").and_then(|v| v.as_str()).unwrap_or("");
    state.set("research", json!(format!("Research findings on: {topic}")));
    Ok(state)
}

#[register_handler]
pub async fn write_task(state: DynState) -> Result<DynState> {
    let research = state.get("research").and_then(|v| v.as_str()).unwrap_or("");
    state.set("draft", json!(format!("Article based on: {research}")));
    Ok(state)
}

// In config.yaml, declare supervisor node:
// nodes:
//   - name: coordinator
//     node_type: supervisor
//     config:
//       strategy: sequential      # sequential | parallel | llm_routed
//       children: [researcher, writer]
//
//   - name: researcher
//     handler: research_task
//
//   - name: writer
//     handler: write_task`,
    python: `from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy
)
from flowgentra_ai.graph import StateGraph
import asyncio

async def research(state: dict) -> dict:
    return {**state,
            "research": f"Findings on: {state.get('task', '')}"}

async def write(state: dict) -> dict:
    return {**state,
            "draft": f"Article: {state.get('research', '')}"}

async def main():
    supervisor = Supervisor(
        agents={"researcher": research, "writer": write},
        strategy=OrchestrationStrategy.Sequential,
    )

    builder = StateGraph(dict)
    builder.add_node("supervisor", supervisor)
    builder.set_entry_point("supervisor")
    graph = builder.compile()

    result = await graph.ainvoke({"task": "Rust programming language"})
    print(result["draft"])

# Or configure in YAML (zero Python code for orchestration):
# nodes:
#   - name: supervisor
#     node_type: supervisor
#     config:
#       strategy: llm_routed
#       children: [researcher, writer, reviewer]

asyncio.run(main())`,
  },

  // 10 ────────────────────────────────────────────────────────────────────────
  {
    id: 'graph-visualization',
    title: 'Graph Visualization & Observability',
    description: 'Export your agent graph to Mermaid or Graphviz DOT, trace node execution with spans, and score output quality.',
    rust: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};

#[register_handler]
pub async fn step_a(state: DynState) -> Result<DynState> {
    state.set("a_done", serde_json::json!(true));
    Ok(state)
}

#[register_handler]
pub async fn step_b(state: DynState) -> Result<DynState> {
    state.set("b_done", serde_json::json!(true));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    // Enable structured tracing (spans for each node execution)
    init_tracing();

    let mut agent = from_config_path("config.yaml")?;

    // Export Mermaid diagram before running
    let diagram = graph_to_mermaid(agent.runtime_mut().graph());
    println!("=== Graph ===");
    println!("{diagram}");
    // flowchart TD
    //   START --> step_a
    //   step_a --> step_b
    //   step_b --> END

    // Save to file for rendering
    std::fs::write("graph.md",
        format!("\`\`\`mermaid\\n{diagram}\\n\`\`\`"))?;

    // Run with tracing active
    agent.state.set("input", serde_json::json!("test"));
    let result = agent.run().await?;
    println!("Done: {:?}", result.to_json_string()?);
    Ok(())
}`,
    python: `from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing,
    graph_to_mermaid, evaluate_output_score
)
from flowgentra_ai.graph import StateGraph

init_tracing()  # Enable span logging

def step_a(state: dict) -> dict:
    return {**state, "a_done": True}

def step_b(state: dict) -> dict:
    return {**state, "b_done": True}

builder = StateGraph(dict)
builder.add_node("step_a", step_a)
builder.add_node("step_b", step_b)
builder.add_edge("step_a", "step_b")
builder.set_entry_point("step_a")
graph = builder.compile()

# Export Mermaid diagram
diagram = graph_to_mermaid(graph)
print("=== Graph ===")
print(diagram)
# flowchart TD
#   START --> step_a
#   step_a --> step_b
#   step_b --> END

# Wrap with tracer for execution spans
tracer = ExecutionTracer()
traced = tracer.wrap(graph)
result = traced.invoke({"input": "test"})

# Print per-node timings
trace = tracer.last_trace()
for span in trace.spans:
    print(f"{span.node:20s} {span.duration_ms:.1f}ms")

# Score output quality
score = evaluate_output_score(result.get("output", ""), "expected answer")
print(f"Quality score: {score:.2f}")`,
  },
]
