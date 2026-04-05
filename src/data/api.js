export const apiEntries = [
  // ─── STATE GRAPH ─────────────────────────────────────────────────────────────
  {
    id: 'state-graph',
    topic: 'state-graph',
    name: 'StateGraph',
    summary: 'Core graph builder. Define nodes, edges, and entry points to compose your agent workflow.',
    rust: {
      signature: 'StateGraph::<S>::builder() -> GraphBuilder<S>',
      description: 'Creates a typed graph builder. `S` must implement the `State` trait (use `#[derive(State)]`). For config-driven agents, prefer `from_config_path()` instead.',
      params: [
        { name: 'S', type: 'impl State', description: 'Generic state type shared across all nodes.' },
      ],
      returns: 'GraphBuilder<S>',
      example: `use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct MyState {
    #[reducer(Append)]
    messages: Vec<String>,
    turn: u32,
}

let graph = StateGraph::<MyState>::builder()
    .add_node("greet",   greet_node)
    .add_node("respond", respond_node)
    .add_edge("greet",   "respond")
    .set_entry("greet")
    .set_finish("respond")
    .build()?;`,
    },
    python: {
      signature: 'StateGraph(state_schema) -> GraphBuilder',
      description: 'Creates a graph builder. Accepts TypedDict or a plain dict schema. Compatible with LangGraph-style API.',
      params: [
        { name: 'state_schema', type: 'type | TypedDict', description: 'Class or TypedDict that defines the shared state shape.' },
      ],
      returns: 'GraphBuilder — call .add_node(), .add_edge(), .compile()',
      example: `from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict, List

class MyState(TypedDict):
    messages: List[str]
    turn: int

builder = StateGraph(MyState)
builder.add_node("greet",   greet_node)
builder.add_node("respond", respond_node)
builder.add_edge("greet",   "respond")
builder.set_entry_point("greet")
graph = builder.compile()`,
    },
  },

  // ─── DERIVE STATE ─────────────────────────────────────────────────────────────
  {
    id: 'derive-state',
    topic: 'state-graph',
    name: '#[derive(State)] + Reducers',
    summary: 'Compile-time proc-macro that generates a typed Update struct and per-field merge reducers for your state.',
    rust: {
      signature: `#[derive(State, Clone, Debug, Serialize, Deserialize)]
struct MyState { ... }`,
      description: 'Generates a `MyStateUpdate` struct where every field is `Option<T>`. Per-field reducers control how concurrent updates merge. Available reducers: `Append`, `Sum`, `MergeMap`, `Min`, `Max`, or custom.',
      params: [
        { name: '#[reducer(Append)]', type: 'field attr', description: 'Appends new items to a Vec field instead of replacing.' },
        { name: '#[reducer(Sum)]', type: 'field attr', description: 'Adds numeric values together.' },
        { name: '#[reducer(MergeMap)]', type: 'field attr', description: 'Merges HashMap entries (new keys win).' },
        { name: '#[reducer(Min)] / Max', type: 'field attr', description: 'Keeps min or max numeric value.' },
      ],
      returns: 'Implements the State trait; generates {Name}Update struct',
      example: `#[derive(State, Default, Clone, Debug, Serialize, Deserialize)]
struct AgentState {
    /// Appends new messages instead of replacing the whole vec
    #[reducer(Append)]
    messages: Vec<String>,

    /// Sums token counts from parallel branches
    #[reducer(Sum)]
    total_tokens: u64,

    /// Merges metadata from different nodes
    #[reducer(MergeMap)]
    metadata: std::collections::HashMap<String, String>,

    /// Plain replace — last write wins (default)
    current_step: String,
}`,
    },
    python: {
      signature: `class MyState(TypedDict):
    field: type`,
      description: 'In Python, use TypedDict for static typing. Reducers are set programmatically via `add_reducer()` on the builder, or fields with `Annotated[list, operator.add]` are auto-merged.',
      params: [
        { name: 'TypedDict', type: 'type', description: 'Recommended. Provides IDE autocompletion and runtime hints.' },
        { name: 'Annotated[list, operator.add]', type: 'field type', description: 'Auto-appends list fields from parallel branches.' },
      ],
      returns: 'Dict-like state passed between nodes',
      example: `from typing import TypedDict, Annotated, List
import operator

class AgentState(TypedDict):
    # Annotated with operator.add → auto-appended across branches
    messages: Annotated[List[str], operator.add]
    total_tokens: int
    current_step: str`,
    },
  },

  // ─── REGISTER HANDLER ─────────────────────────────────────────────────────────
  {
    id: 'register-handler',
    topic: 'handlers-config',
    name: '#[register_handler] / @register_handler',
    summary: 'Mark a function as an auto-discoverable agent handler. Used with from_config_path() — no manual wiring needed.',
    rust: {
      signature: '#[register_handler]\npub async fn my_handler(state: DynState) -> Result<DynState>',
      description: 'Proc-macro that registers the function into a global inventory. `from_config_path()` auto-discovers all registered handlers at startup. The function name must match the `handler:` field in your YAML node config.',
      params: [
        { name: 'state', type: 'DynState', description: 'Current graph state. Read with state.get("key"), write with state.set("key", json!(...)).' },
      ],
      returns: 'Result<DynState> — return the (modified) state',
      example: `use flowgentra_ai::prelude::*;
use serde_json::json;

// The function name "fetch_data" must match handler: fetch_data in config.yaml
#[register_handler]
pub async fn fetch_data(state: DynState) -> Result<DynState> {
    let url = state.get("url")
        .and_then(|v| v.as_str())
        .unwrap_or("https://example.com");

    let body = reqwest::get(url).await?.text().await?;
    state.set("content", json!(body));
    Ok(state)
}

#[register_handler]
pub async fn summarize(state: DynState) -> Result<DynState> {
    let content = state.get("content")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    state.set("summary", json!(&content[..200.min(content.len())]));
    Ok(state)
}

// main.rs — no manual handler wiring!
#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("config.yaml")?;
    agent.state.set("url", json!("https://example.com"));
    let result = agent.run().await?;
    println!("{}", result.get("summary").unwrap());
    Ok(())
}`,
    },
    python: {
      signature: `@register_handler
def my_handler(state: dict) -> dict`,
      description: 'Decorator that marks a Python function as an agent handler. The module must be specified via `python_handler_module:` in config.yaml so it is auto-imported at startup. The function name must match the `handler:` field in the YAML node.',
      params: [
        { name: 'state', type: 'dict', description: 'Current agent state. Return a full or partial dict (merged into state).' },
      ],
      returns: 'dict — returned state is merged into current state',
      example: `# handlers.py
from flowgentra_ai.agent import register_handler

@register_handler
def fetch_data(state: dict) -> dict:
    import httpx
    r = httpx.get(state.get("url", "https://example.com"))
    return {**state, "content": r.text}

@register_handler
def summarize(state: dict) -> dict:
    content = state.get("content", "")
    return {**state, "summary": content[:200]}

# config.yaml must include:
#   python_handler_module: handlers

# main.py
from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("config.yaml")
import asyncio
result = asyncio.run(agent.run({"url": "https://example.com"}))
print(result["summary"])`,
    },
  },

  // ─── FROM_CONFIG_PATH ─────────────────────────────────────────────────────────
  {
    id: 'from-config-path',
    topic: 'handlers-config',
    name: 'from_config_path / Agent.from_config_path',
    summary: 'The primary production API. Load a fully configured agent from YAML — handlers are auto-discovered, no manual wiring.',
    rust: {
      signature: 'from_config_path(config_path: &str) -> Result<Agent>',
      description: 'Top-level convenience function (in `prelude`). Reads the YAML file, validates the graph, and wires all handlers discovered via `#[register_handler]`. LLM client is created from the `llm:` block. Prefer this over `Agent::from_config`.',
      params: [
        { name: 'config_path', type: '&str', description: 'Path to the agent config YAML file.' },
      ],
      returns: 'Result<Agent>',
      example: `use flowgentra_ai::prelude::*;

#[register_handler]
pub async fn process(state: DynState) -> Result<DynState> {
    let input = state.get("input").and_then(|v| v.as_str()).unwrap_or("");
    state.set("output", serde_json::json!(input.to_uppercase()));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("agent.yaml")?;
    agent.state.set("input", serde_json::json!("hello world"));

    let result = agent.run().await?;
    println!("{}", result.get("output").unwrap());
    // "HELLO WORLD"
    Ok(())
}`,
    },
    python: {
      signature: 'Agent.from_config_path(path: str) -> Agent',
      description: 'Class method that loads the YAML config. If `python_handler_module` is set, that module is imported and `@register_handler` functions are auto-discovered. Also supports inline `python.module:function` paths in node `handler:` fields.',
      params: [
        { name: 'path', type: 'str', description: 'Path to the agent config YAML file.' },
      ],
      returns: 'Agent',
      example: `# agent.yaml
# python_handler_module: handlers   ← auto-imports handlers.py

from flowgentra_ai.agent import Agent
import asyncio

async def main():
    agent = Agent.from_config_path("agent.yaml")
    result = await agent.run({"input": "hello world"})
    print(result["output"])  # HELLO WORLD

asyncio.run(main())`,
    },
  },

  // ─── AGENT RUN / RUN_WITH_THREAD ──────────────────────────────────────────────
  {
    id: 'agent-run',
    topic: 'memory',
    name: 'agent.run / agent.run_with_thread',
    summary: 'Execute the agent. Use run() for stateless execution, run_with_thread() for persistent multi-turn conversations with checkpointing.',
    rust: {
      signature: `agent.run() -> Result<DynState>
agent.run_with_thread(thread_id: &str) -> Result<DynState>`,
      description: '`run()` executes the graph once. `run_with_thread()` loads the last checkpoint for `thread_id` before execution and saves state after each node — enabling multi-turn conversations. Requires a checkpointer to be set (via config or `with_checkpointer()`).',
      params: [
        { name: 'thread_id', type: '&str', description: 'Unique identifier for a conversation thread. Same ID resumes the conversation.' },
      ],
      returns: 'Result<DynState> — the final state after execution',
      example: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::MemoryCheckpointer;
use std::sync::Arc;

#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("agent.yaml")?
        .with_checkpointer(Arc::new(MemoryCheckpointer::new()));

    // Turn 1
    agent.state.set("user_input", serde_json::json!("My name is Alice."));
    agent.run_with_thread("thread-42").await?;

    // Turn 2 — previous state is reloaded automatically
    agent.state.set("user_input", serde_json::json!("What's my name?"));
    let result = agent.run_with_thread("thread-42").await?;
    println!("{}", result.get("reply").unwrap());
    // → "Your name is Alice."
    Ok(())
}`,
    },
    python: {
      signature: `await agent.run(initial_state: dict) -> dict
await agent.run_with_thread(thread_id: str, initial_state: dict) -> dict`,
      description: '`run()` is a one-shot execution. `run_with_thread()` persists state between calls using a checkpointer. Both are async — use `await` or `asyncio.run()`.',
      params: [
        { name: 'initial_state', type: 'dict', description: 'Initial state values. Merged with any previously saved checkpoint.' },
        { name: 'thread_id', type: 'str', description: 'Unique ID for this conversation thread.' },
      ],
      returns: 'dict — final state after execution',
      example: `from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import FileCheckpointer
import asyncio

async def main():
    checkpointer = FileCheckpointer("./checkpoints")
    agent = Agent.from_config_path("agent.yaml",
                                   checkpointer=checkpointer)

    # Turn 1
    await agent.run_with_thread("user-42",
        {"user_input": "My name is Alice."})

    # Turn 2 — state is automatically reloaded
    result = await agent.run_with_thread("user-42",
        {"user_input": "What's my name?"})
    print(result["reply"])  # "Your name is Alice."

asyncio.run(main())`,
    },
  },

  // ─── BUILT-IN NODES ───────────────────────────────────────────────────────────
  {
    id: 'builtin-nodes',
    topic: 'builtin-nodes',
    name: 'Built-in Nodes',
    summary: 'Ready-to-use node types: LLMNode, ToolNode, RetryNode, TimeoutNode, HumanInTheLoopNode, ConditionalRouter. Add to any graph without writing handler functions.',
    rust: {
      signature: `LLMNode::new(name)
ToolNode::new(name, tool_name, method)
RetryNode::new(name).with_max_retries(n).with_inner_node(node)
TimeoutNode::new(name, timeout_ms).with_inner_node(node)
HumanInTheLoopNode::new(name, prompt).require_approval(true)
ConditionalRouter::new(name).register_condition("name", |state| ...).add_rule("name", "target")`,
      description: 'These nodes implement `PluggableNode<DynState>` and can be added to graphs directly. Use `node_type:` in YAML config to activate them without any handler code.',
      params: [
        { name: 'LLMNode', type: 'PluggableNode', description: 'Sends prompt to an LLM, stores response in state.' },
        { name: 'ToolNode', type: 'PluggableNode', description: 'Executes an MCP tool, stores result in state.' },
        { name: 'RetryNode', type: 'PluggableNode', description: 'Wraps any node with exponential backoff retry (via Tower).' },
        { name: 'TimeoutNode', type: 'PluggableNode', description: 'Enforces a timeout on a wrapped node. on_timeout: "error" | "skip" | "default_value".' },
        { name: 'HumanInTheLoopNode', type: 'PluggableNode', description: 'Pauses for human approval. Sets _human_approved and _human_timestamp in state.' },
        { name: 'ConditionalRouter', type: 'PluggableNode', description: 'Evaluates conditions and sets _next_node in state.' },
      ],
      returns: 'NodeOutput<DynState>',
      example: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::node::builtin_nodes::*;

// Retry node wrapping a custom handler
let inner = MyApiNode::new("api_call");
let retry = RetryNode::new("retry_api")
    .with_max_retries(3)
    .with_inner_node(Box::new(inner));

// Timeout node — fail fast if > 5 seconds
let timed = TimeoutNode::new("timed_op", 5000)
    .with_inner_node(Box::new(slow_node));

// Human-in-the-loop for sensitive actions
let approval = HumanInTheLoopNode::new(
    "approve_payment",
    "Please review and approve this payment"
)
.add_editable_field("amount")
.require_approval(true);

// Conditional router
let router = ConditionalRouter::new("intent_router")
    .register_condition("is_urgent", |state: &DynState| {
        state.get("priority")
            .and_then(|v| v.as_str())
            == Some("high")
    })
    .add_rule("is_urgent", "fast_path")
    .add_rule("default",   "slow_path");`,
    },
    python: {
      signature: `from flowgentra_ai.nodes import RetryNode, TimeoutNode

RetryNode(max_retries=3, backoff_ms=500)
TimeoutNode(timeout_ms=5000, on_timeout="error")`,
      description: 'Python exposes RetryNode and TimeoutNode directly. LLMNode, ToolNode, HumanInTheLoop, and ConditionalRouter are configured via `node_type:` in YAML — no Python code needed.',
      params: [
        { name: 'RetryNode(max_retries, backoff_ms)', type: 'node', description: 'Retries the wrapped node on failure with exponential backoff.' },
        { name: 'TimeoutNode(timeout_ms, on_timeout)', type: 'node', description: 'on_timeout: "error" | "skip" | "default_value"' },
      ],
      returns: 'Node instance — pass to builder.add_node()',
      example: `from flowgentra_ai.nodes import RetryNode, TimeoutNode
from flowgentra_ai.graph import StateGraph

builder = StateGraph(dict)

# Wrap your handler with retry logic
retry = RetryNode(max_retries=3, backoff_ms=500)
builder.add_node("fetch", retry.wrap(fetch_data))

# Or configure via YAML:
# nodes:
#   - name: fetch
#     handler: fetch_data
#     node_type: retry
#     config:
#       max_retries: 3
#       backoff_ms: 500

# Human-in-the-loop (YAML only):
# nodes:
#   - name: approve
#     node_type: human_in_the_loop
#     config:
#       prompt: "Approve this action?"
#       require_approval: true
#       editable_fields: [amount]`,
    },
  },

  // ─── MEMORY ───────────────────────────────────────────────────────────────────
  {
    id: 'memory',
    topic: 'memory',
    name: 'Memory & Checkpointing',
    summary: 'Persist state between runs with checkpointers, and manage conversation history with ConversationMemory. Both configurable via YAML or code.',
    rust: {
      signature: `// Checkpointer
MemoryCheckpointer::new()
FileCheckpointer::new(path)

// Conversation Memory
InMemoryConversationMemory::new()
    .with_max_messages(20)
    .with_system_prompt("You are helpful")
    .with_summarize_threshold(4000)

TokenBufferMemory::new(max_tokens)
SummaryMemory::new(llm_client, config)

// Agent wiring
agent.with_checkpointer(Arc::new(checkpointer))
agent.with_conversation_memory(Arc::new(memory))
agent.run_with_thread("thread-id").await`,
      description: '**Checkpointer** saves/loads full state per thread — enables resuming long workflows. **ConversationMemory** stores message history per thread with optional sliding-window, token-buffer, or summarization strategies.',
      params: [
        { name: 'MemoryCheckpointer', type: 'in-process', description: 'In-memory checkpointer (lost on restart). Good for testing.' },
        { name: 'FileCheckpointer', type: 'persistent', description: 'Saves state to disk. Survives restarts.' },
        { name: 'InMemoryConversationMemory', type: 'in-process', description: 'Stores messages per thread in a HashMap.' },
        { name: 'TokenBufferMemory', type: 'buffer', description: 'Keeps last N tokens worth of messages.' },
        { name: 'SummaryMemory', type: 'compressed', description: 'Summarizes old messages via LLM when threshold is reached.' },
      ],
      returns: 'State persisted and loaded transparently',
      example: `use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::{
    InMemoryConversationMemory, MemoryCheckpointer
};
use std::sync::Arc;

#[tokio::main]
async fn main() -> Result<()> {
    let memory = InMemoryConversationMemory::new()
        .with_max_messages(20)           // sliding window
        .with_system_prompt("You are a helpful assistant.".into());

    let checkpointer = MemoryCheckpointer::new();

    let mut agent = from_config_path("agent.yaml")?
        .with_checkpointer(Arc::new(checkpointer))
        .with_conversation_memory(Arc::new(memory));

    // Turn 1
    agent.add_message("user", "Hello! My name is Alice.")?;
    agent.run_with_thread("session-1").await?;

    // Turn 2 — memory is loaded automatically
    agent.add_message("user", "What's my name?")?;
    let result = agent.run_with_thread("session-1").await?;
    println!("{}", result.get("reply").unwrap());
    Ok(())
}`,
    },
    python: {
      signature: `from flowgentra_ai.memory import (
    ConversationMemory,
    FileCheckpointer,
    TokenBufferMemory,
    SummaryMemory,
)`,
      description: 'Python exposes the same memory types. Configure in YAML under `memory:` to avoid any Python setup code.',
      params: [
        { name: 'ConversationMemory', type: 'in-process', description: 'In-memory message history per thread.' },
        { name: 'FileCheckpointer(path)', type: 'persistent', description: 'Disk-backed state persistence.' },
        { name: 'TokenBufferMemory(max_tokens)', type: 'buffer', description: 'Token-bounded message history.' },
        { name: 'SummaryMemory(config)', type: 'compressed', description: 'LLM-based summarization of old messages.' },
      ],
      returns: 'Wired automatically when passed to Agent or set in YAML',
      example: `from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
import asyncio

async def multi_turn():
    checkpointer = FileCheckpointer("./checkpoints")
    memory = ConversationMemory(max_messages=20)

    agent = Agent.from_config_path("agent.yaml",
        checkpointer=checkpointer,
        conversation_memory=memory)

    # Turn 1
    r1 = await agent.run_with_thread("alice",
        {"user_input": "Hi, I'm Alice."})

    # Turn 2
    r2 = await agent.run_with_thread("alice",
        {"user_input": "What's my name?"})
    print(r2["reply"])  # "Your name is Alice."

asyncio.run(multi_turn())

# Or configure entirely in YAML:
# memory:
#   checkpointer:
#     type: memory   # or "file" with path: ./checkpoints
#   conversation:
#     enabled: true
#     max_messages: 20
#     state_key: messages`,
    },
  },

  // ─── PREDEFINED AGENTS ───────────────────────────────────────────────────────
  {
    id: 'predefined-agents',
    topic: 'agents',
    name: 'Predefined Agent Types',
    summary: 'High-level agent presets — ZeroShotReAct, FewShotReAct, Conversational, and MemoryAwareAgent. Build agents in a few lines without defining a graph.',
    rust: {
      signature: `AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4")
    .with_tool(ToolSpec::new("search", "Search the web"))
    .build()?

AgentBuilder::new(AgentType::Conversational)
    .with_memory_steps(10)
    .with_system_prompt("You are a helpful assistant")
    .build()?`,
      description: 'Three built-in agent personalities. All follow the ReAct (Reason + Act) paradigm. `ZeroShotReAct` is general-purpose; `FewShotReAct` adds example demonstrations; `Conversational` focuses on multi-turn dialogue with memory.',
      params: [
        { name: 'AgentType::ZeroShotReAct', type: 'AgentType', description: 'General reasoning + tool use. No example demonstrations needed.' },
        { name: 'AgentType::FewShotReAct', type: 'AgentType', description: 'ReAct with example traces for better few-shot performance.' },
        { name: 'AgentType::Conversational', type: 'AgentType', description: 'Multi-turn chat agent with built-in memory.' },
      ],
      returns: 'Box<dyn Agent>',
      example: `use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search_tool = ToolSpec::new("search", "Search the web for information")
    .with_parameter("query", "string")
    .required("query");

let calc_tool = ToolSpec::new("calculator", "Perform math calculations")
    .with_parameter("expression", "string")
    .required("expression");

// Zero-shot ReAct agent
let mut agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool(search_tool)
    .with_tool(calc_tool)
    .build()?;

// Conversational agent with 10-message memory window
let mut conv_agent = AgentBuilder::new(AgentType::Conversational)
    .with_memory_steps(10)
    .with_system_prompt("You are a friendly assistant.")
    .build()?;`,
    },
    python: {
      signature: `# ── Way 1: Agent.create() — model name string, quick setup ──────────────────
from flowgentra_ai.agent import Agent

agent = Agent.create(
    agent_type="zero_shot_react",   # or "few_shot_react" | "conversational"
    model="gpt-4o",                 # model name string
    memory_steps=10,
)
result = agent.run_with_input("What is 42 × 1_000_000?")  # → {"result": str}

# ── Way 2: AgentBuilder → GraphBasedAgent — full builder API ─────────────────
from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

builder = AgentBuilder(AgentType.zero_shot_react())
builder.with_name("my_agent")
builder.with_llm_config("gpt-4o")
builder.with_system_prompt("You are helpful.")
builder.with_tool(tool_spec)        # ToolSpec objects
builder.with_memory_steps(10)
builder.with_temperature(0.7)
builder.with_max_tokens(1024)
builder.with_retries(3)
agent = builder.build_graph()       # → GraphBasedAgent
result = agent.execute_input("Hello")  # → str

# ── Way 3: Agent.from_config_path — fully YAML-driven ────────────────────────
agent = Agent.from_config_path("config.yaml")
state = agent.run()
state = agent.run_with_thread("thread_id")`,
      description: 'Three ways to build a predefined agent (`zero_shot_react`, `few_shot_react`, `conversational`). **Way 1** (`Agent.create`) takes a model name string and returns an `Agent` — call `run_with_input(str)` on it. **Way 2** (`AgentBuilder`) exposes the full builder API with temperature, tools, retries, etc. — call `build_graph()` then `execute_input(str)`. **Way 3** (`Agent.from_config_path`) is fully YAML-driven — call `run()` or `run_with_thread(id)`.',
      params: [
        { name: 'Agent.create(agent_type, model?, memory_steps?)', type: 'classmethod → Agent', description: 'agent_type: "zero_shot_react" | "few_shot_react" | "conversational". model: model name string (default "gpt-4"). Returns Agent — call run_with_input(str).' },
        { name: 'agent.run_with_input(str)', type: '→ dict', description: 'Run Agent created via Agent.create(). Returns {"result": str}.' },
        { name: 'AgentType.zero_shot_react()', type: '→ AgentType', description: 'General-purpose ReAct (Reason+Act). No example demonstrations.' },
        { name: 'AgentType.few_shot_react()', type: '→ AgentType', description: 'ReAct with example traces for better few-shot performance.' },
        { name: 'AgentType.conversational()', type: '→ AgentType', description: 'Multi-turn chat agent with built-in memory.' },
        { name: 'builder.with_llm_config(model)', type: 'fn', description: 'Set model name string for AgentBuilder.' },
        { name: 'builder.with_temperature(f) / with_max_tokens(n)', type: 'fn', description: 'Fine-tune LLM parameters (AgentBuilder only).' },
        { name: 'builder.with_tool(ToolSpec)', type: 'fn', description: 'Add a tool. ToolSpec(name, desc) + .add_parameter(name, type) + .set_required(name).' },
        { name: 'builder.with_memory_steps(n)', type: 'fn', description: 'Conversation memory window (number of turns to retain).' },
        { name: 'builder.with_retries(n)', type: 'fn', description: 'Retry count on node failure.' },
        { name: 'builder.build_graph()', type: '→ GraphBasedAgent', description: 'Compile AgentBuilder. Raises on misconfiguration.' },
        { name: 'graph_agent.execute_input(str)', type: '→ str', description: 'Run GraphBasedAgent with text input, returns text response.' },
        { name: 'agent.run() / run_with_thread(id)', type: '→ dict', description: 'Execute config-based Agent (Way 3). run_with_thread enables persistent memory.' },
      ],
      returns: 'Agent (Way 1 & 3) | GraphBasedAgent (Way 2)',
      example: `import os
from flowgentra_ai.agent import Agent, AgentBuilder, AgentType, ToolSpec

# ── Way 1: Agent.create — model name string, simplest API ───────────────────
agent = Agent.create(
    agent_type="zero_shot_react",
    model="claude-3-5-haiku-20241022",
    memory_steps=10,
)
result = agent.run_with_input("What is 42 × 1_000_000?")
print(result["result"])

# ── Way 2: AgentBuilder — full builder, tool + retry control ────────────────
search = ToolSpec("search", "Search the web")
search.add_parameter("query", "string")
search.set_required("query")

builder = AgentBuilder(AgentType.zero_shot_react())
builder.with_name("research_agent")
builder.with_llm_config("gpt-4o")
builder.with_system_prompt("You are a research assistant.")
builder.with_tool(search)
builder.with_retries(2)
graph_agent = builder.build_graph()

print(graph_agent.execute_input("What is the capital of Japan?"))

# Conversational with memory
conv = AgentBuilder(AgentType.conversational())
conv.with_llm_config("gpt-4o-mini")
conv.with_memory_steps(10)
conv_agent = conv.build_graph()
print(conv_agent.execute_input("Hi, I'm Alice."))
print(conv_agent.execute_input("What's my name?"))  # remembers

# ── Way 3: YAML config ───────────────────────────────────────────────────────
agent = Agent.from_config_path("agent.yaml")
state = agent.run_with_thread("session_42")`,
    },
  },

  // ─── LLM CLIENTS ─────────────────────────────────────────────────────────────
  {
    id: 'llm-clients',
    topic: 'llm',
    name: 'LLM Clients & Providers',
    summary: 'Built-in clients for 7 LLM providers, plus CachedLLMClient, FallbackLLMClient, and RetryLLMClient wrappers.',
    rust: {
      signature: `// Direct construction
OpenAIClient::new(api_key, model)
AnthropicClient::new(api_key, model)
OllamaClient::new(model)              // Local, no key
AzureOpenAIClient::new(...)
GroqClient::new(api_key, model)
MistralClient::new(api_key, model)
HuggingFaceClient::new(api_key, model)

// Wrappers
CachedLLMClient::new(inner)
FallbackLLMClient::new(vec![primary, backup])
RetryLLMClient::new(inner, max_retries)`,
      description: 'All implement the `LLMClient` trait: `chat()`, `chat_stream()`, `chat_with_tools()`, `chat_structured()`. Streaming returns a `tokio::sync::mpsc::Receiver<String>`. Structured output uses `ResponseFormat::Json` or `ResponseFormat::JsonSchema`.',
      params: [
        { name: 'chat(messages)', type: 'async fn', description: 'Standard chat completion.' },
        { name: 'chat_stream(messages)', type: 'async fn', description: 'Streaming response via mpsc channel.' },
        { name: 'chat_with_tools(messages, tools)', type: 'async fn', description: 'Function/tool calling — response may contain ToolCall objects.' },
        { name: 'chat_structured(messages)', type: 'async fn', description: 'Forces JSON output, parses to serde_json::Value.' },
        { name: 'chat_with_usage(messages)', type: 'async fn', description: 'Returns (Message, Option<TokenUsage>) for cost tracking.' },
      ],
      returns: 'Result<Message> or Result<Receiver<String>> for streaming',
      example: `use flowgentra_ai::core::llm::*;
use std::sync::Arc;

// Primary provider with fallback
let primary = OpenAIClient::new(std::env::var("OPENAI_API_KEY")?, "gpt-4o");
let backup  = AnthropicClient::new(std::env::var("ANTHROPIC_API_KEY")?, "claude-3-haiku-20240307");
let client  = FallbackLLMClient::new(vec![Arc::new(primary), Arc::new(backup)]);

// Streaming
let mut rx = client.chat_stream(vec![
    Message::system("You are helpful."),
    Message::user("Write a haiku about Rust."),
]).await?;
while let Some(chunk) = rx.recv().await {
    print!("{chunk}");
}
println!();

// Structured JSON output
let response = client.chat_structured(vec![
    Message::user("List 3 Rust features as JSON array"),
]).await?;
println!("{}", response);

// Token cost tracking
let (msg, usage) = client.chat_with_usage(vec![
    Message::user("Hello!")
]).await?;
if let Some(u) = usage {
    println!("Cost: \${:.4}", u.estimated_cost("gpt-4o").unwrap_or(0.0));
}`,
    },
    python: {
      signature: `from flowgentra_ai.llm import LLMConfig, LLMClient, Message

# Option A — direct constructor (provider + model as positional args)
client = LLMClient("openai",     "gpt-4o",                         api_key="sk-...")
client = LLMClient("anthropic",  "claude-3-5-haiku-20241022",      api_key="sk-ant-...")
client = LLMClient("groq",       "llama3-70b-8192",                api_key="...")
client = LLMClient("ollama",     "llama3")               # Local — no api_key needed
client = LLMClient("mistral",    "mistral-large",        api_key="...", temperature=0.3)

# Option B — LLMConfig + from_config (useful when reusing the same config)
config = LLMConfig("openai", "gpt-4o", api_key="sk-...", temperature=0.7, max_tokens=1000)
client = LLMClient.from_config(config)

# Wrappers via method chaining
client = client.with_retry(max_retries=3)
client = client.cached(max_entries=100)
client = client.with_fallback(backup_client)`,
      description: 'Two ways to create a client: `LLMClient(provider, model, api_key=...)` directly, or `LLMClient.from_config(LLMConfig(...))` when you want to reuse or mutate the config (e.g. `set_response_format`). No separate provider-specific classes. Wrappers (retry, cache, fallback) chain as methods.',
      params: [
        { name: 'LLMConfig(provider, model, api_key?, temperature?, max_tokens?, top_p?)', type: 'config', description: 'Providers: "openai" | "anthropic" | "mistral" | "groq" | "ollama" | "huggingface" | "azure". api_key optional for ollama.' },
        { name: 'LLMClient.from_config(config)', type: 'classmethod', description: 'Create client from LLMConfig.' },
        { name: 'client.chat(messages)', type: 'fn → Message', description: 'Standard completion.' },
        { name: 'client.chat_with_usage(messages)', type: 'fn → (Message, TokenUsage|None)', description: 'Chat with token count and cost tracking.' },
        { name: 'client.chat_with_tools(messages, tools)', type: 'fn → Message', description: 'Function calling. Check response.has_tool_calls() / response.tool_calls().' },
        { name: 'client.with_retry(max_retries=3)', type: 'fn → LLMClient', description: 'Wrap with exponential backoff retry.' },
        { name: 'client.cached(max_entries=100)', type: 'fn → LLMClient', description: 'Wrap with response cache.' },
        { name: 'client.with_fallback(backup)', type: 'fn → LLMClient', description: 'Falls back to backup client on error.' },
        { name: 'config.set_response_format(fmt)', type: 'fn', description: 'ResponseFormat.json() or ResponseFormat.json_schema(name, schema) for structured output.' },
      ],
      returns: 'Message | (Message, TokenUsage | None) depending on method',
      example: `import os
from flowgentra_ai.llm import LLMConfig, LLMClient, Message, ToolDefinition
from flowgentra_ai.types import ResponseFormat

# Direct constructor — shortest form
client = LLMClient(
    "anthropic",
    "claude-3-5-haiku-20241022",
    api_key=os.environ["ANTHROPIC_API_KEY"],
    temperature=0.7,
)

# Or via LLMConfig when you need set_response_format()
config = LLMConfig("anthropic", "claude-3-5-haiku-20241022",
                   api_key=os.environ["ANTHROPIC_API_KEY"])
client = LLMClient.from_config(config)

# Standard chat
response = client.chat([
    Message.system("You are a helpful assistant."),
    Message.user("What is Rust?"),
])
print(response.content)

# Token usage & cost
response, usage = client.chat_with_usage([Message.user("Hello!")])
if usage:
    print(f"Tokens: {usage.total_tokens}")
    cost = usage.estimated_cost("claude-3-5-haiku-20241022")
    if cost: print(f"Cost: \${cost:.4f}")

# Structured JSON output
config.set_response_format(ResponseFormat.json_schema("person", {
    "type": "object",
    "properties": {"name": {"type": "string"}, "age": {"type": "integer"}},
    "required": ["name", "age"],
}))
result = client.chat([Message.user("Return a person object")])
import json; print(json.loads(result.content))

# Tool calling
tools = [ToolDefinition(
    "get_weather",
    "Get current weather for a city",
    {"type": "object", "properties": {"city": {"type": "string"}}, "required": ["city"]},
)]
response = client.chat_with_tools([Message.user("Weather in Paris?")], tools)
if response.has_tool_calls():
    for tc in response.tool_calls():
        print(tc.name, tc.arguments)

# Production setup: retry + cache + fallback — all via method chaining
backup = LLMClient.from_config(LLMConfig("openai", "gpt-4o-mini", api_key=os.environ["OPENAI_API_KEY"]))
production_client = client.with_retry(max_retries=3).cached(max_entries=500).with_fallback(backup)`,
    },
  },

  // ─── SUPERVISOR ───────────────────────────────────────────────────────────────
  {
    id: 'supervisor',
    topic: 'supervisor',
    name: 'Supervisor / Multi-Agent',
    summary: 'Orchestrate multiple agents as children of a Supervisor. The supervisor routes tasks, aggregates results, and can run children in parallel.',
    rust: {
      signature: `Supervisor::new(name, strategy, llm_client)
    .add_child("worker_a", agent_a)
    .add_child("worker_b", agent_b)`,
      description: 'Supervisor is itself a `PluggableNode`. Add it to a StateGraph as a node. Strategies: `Sequential`, `Parallel`, `LLMRouted` (LLM decides which child to call).',
      params: [
        { name: 'OrchestrationStrategy::Sequential', type: 'strategy', description: 'Children run one after another.' },
        { name: 'OrchestrationStrategy::Parallel', type: 'strategy', description: 'All children run concurrently, results merged.' },
        { name: 'OrchestrationStrategy::LLMRouted', type: 'strategy', description: 'LLM decides which child agent handles the task.' },
      ],
      returns: 'NodeOutput<DynState>',
      example: `use flowgentra_ai::core::agents::supervisor::Supervisor;
use flowgentra_ai::core::agents::supervisor::OrchestrationStrategy;

let researcher = build_research_agent()?;
let writer     = build_writer_agent()?;

let supervisor = Supervisor::new(
    "editorial_supervisor",
    OrchestrationStrategy::Sequential,
    llm_client.clone(),
)
.add_child("researcher", Box::new(researcher))
.add_child("writer",     Box::new(writer));

// Add supervisor as a node in your graph
let graph = StateGraph::<DynState>::builder()
    .add_node("supervisor", supervisor)
    .set_entry("supervisor")
    .build()?;`,
    },
    python: {
      signature: `from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy
)`,
      description: 'In Python, Supervisor and PlannerNode are available from `flowgentra_ai.supervision`. Configure via YAML `node_type: supervisor` for zero-code orchestration.',
      params: [
        { name: 'Supervisor(agents, strategy)', type: 'class', description: 'Multi-agent coordinator.' },
        { name: 'OrchestrationStrategy', type: 'enum', description: 'Sequential | Parallel | LLMRouted' },
        { name: 'PlannerNode', type: 'class', description: 'LLM generates a plan and dynamically routes to sub-agents.' },
      ],
      returns: 'Node or state dict from orchestrated execution',
      example: `from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy, PlannerNode
)
from flowgentra_ai.graph import StateGraph

# Configure via YAML (recommended):
# nodes:
#   - name: orchestrator
#     node_type: supervisor
#     config:
#       strategy: llm_routed
#       children: [research, write, review]
#
# Or in code:
supervisor = Supervisor(
    agents={"research": research_agent, "write": write_agent},
    strategy=OrchestrationStrategy.LLMRouted,
)

builder = StateGraph(dict)
builder.add_node("supervisor", supervisor)
builder.set_entry_point("supervisor")
graph = builder.compile()
result = graph.invoke({"task": "Write a blog post about Rust."})`,
    },
  },

  // ─── RAG ─────────────────────────────────────────────────────────────────────
  {
    id: 'rag',
    topic: 'rag',
    name: 'RAG (Retrieval-Augmented Generation)',
    summary: 'Built-in RAG pipeline: chunk documents, embed them, store in a vector DB, and retrieve context at query time.',
    rust: {
      signature: `// In YAML config:
// graph:
//   rag:
//     vector_store: { type: chroma, endpoint: "...", collection: "docs" }
//     embeddings: { provider: openai, model: text-embedding-3-small }
//     retrieval: { top_k: 5, similarity_threshold: 0.7 }`,
      description: 'RAG is fully config-driven. Set `graph.rag` in your YAML and the runtime auto-injects `_rag_config` into state for handlers to use. Supported vector stores: `memory`, `chroma`, `pinecone`. Embedding providers: `openai`, `mistral`, `ollama`.',
      params: [
        { name: 'vector_store.type', type: 'string', description: '"memory" | "chroma" | "pinecone"' },
        { name: 'embeddings.provider', type: 'string', description: '"openai" | "mistral" | "ollama"' },
        { name: 'retrieval.top_k', type: 'usize', description: 'Number of documents to retrieve. Default: 5.' },
        { name: 'retrieval.similarity_threshold', type: 'f32', description: 'Minimum similarity score. Default: 0.7.' },
        { name: 'pdf.chunk_size', type: 'usize', description: 'Characters per chunk. Default: 1000.' },
      ],
      returns: 'RAG config injected into state as _rag_config',
      example: `# agent.yaml with RAG
name: rag_agent
llm:
  provider: openai
  model: gpt-4o-mini
  api_key: \${OPENAI_API_KEY}

graph:
  rag:
    vector_store:
      type: chroma
      endpoint: "http://localhost:8000"
      collection: "my_docs"
    embeddings:
      provider: openai
      model: text-embedding-3-small
      api_key: \${OPENAI_API_KEY}
    retrieval:
      top_k: 5
      similarity_threshold: 0.7
    pdf:
      chunk_size: 1000
      chunk_overlap: 200
  nodes:
    - name: retrieve
      handler: retrieve_context
    - name: answer
      handler: generate_answer
  edges:
    - from: START
      to: retrieve
    - from: retrieve
      to: answer
    - from: answer
      to: END`,
    },
    python: {
      signature: `from flowgentra_ai.rag import (
    InMemoryVectorStore, ChromaStore, Embeddings,
    RecursiveCharacterTextSplitter,
    bm25_score, hybrid_merge, decompose_query
)`,
      description: 'Python exposes the full RAG toolkit directly. Use InMemoryVectorStore for testing and ChromaStore for production.',
      params: [
        { name: 'RecursiveCharacterTextSplitter(chunk_size)', type: 'splitter', description: 'Also: MarkdownTextSplitter, HTMLTextSplitter, TokenTextSplitter, CodeTextSplitter.' },
        { name: 'InMemoryVectorStore(embeddings)', type: 'store', description: 'Fast in-process vector store for prototyping.' },
        { name: 'ChromaStore(config)', type: 'store', description: 'Production-grade ChromaDB integration.' },
        { name: 'hybrid_merge(bm25, semantic)', type: 'fn', description: 'Merge BM25 and semantic results with RRF.' },
        { name: 'decompose_query(query)', type: 'fn', description: 'Break a complex query into sub-queries for multi-hop retrieval.' },
      ],
      returns: 'List[SearchResult] or Document list',
      example: `from flowgentra_ai.rag import (
    InMemoryVectorStore, Embeddings,
    RecursiveCharacterTextSplitter,
    Document
)
from flowgentra_ai.document_loaders import load_document

# Load and chunk a document
docs = load_document("whitepaper.pdf")
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

# Embed and store
embeddings = Embeddings(provider="openai",
    model="text-embedding-3-small")
store = InMemoryVectorStore(embeddings)
store.add_documents(chunks)

# Retrieve
results = store.similarity_search("What is the main finding?", k=5)
for r in results:
    print(f"Score: {r.score:.2f} — {r.document.content[:80]}")`,
    },
  },

  // ─── OBSERVABILITY ────────────────────────────────────────────────────────────
  {
    id: 'observability',
    topic: 'observability',
    name: 'Observability & Visualization',
    summary: 'Trace node execution, export graphs to Mermaid/DOT, and score output quality.',
    rust: {
      signature: `// Init structured logging
init_tracing()

// Graph visualization
graph_to_mermaid(&graph) -> String
graph_to_dot(&graph) -> String`,
      description: 'Flowgentra uses `tracing` for structured logging. Call `init_tracing()` at startup for span/event output. Graph visualization exports to Mermaid (paste into mermaid.live) or Graphviz DOT.',
      params: [
        { name: 'init_tracing()', type: 'fn', description: 'Initializes subscriber for tracing spans and events.' },
        { name: 'graph_to_mermaid(graph)', type: 'fn', description: 'Returns Mermaid flowchart string.' },
        { name: 'graph_to_dot(graph)', type: 'fn', description: 'Returns Graphviz DOT format string.' },
        { name: 'evaluate_output_score(output, expected)', type: 'fn', description: 'Returns a 0.0–1.0 quality score.' },
      ],
      returns: 'String diagram or f64 score',
      example: `use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};

init_tracing(); // Call once at startup

let agent = from_config_path("agent.yaml")?;

// Export the graph as Mermaid
let diagram = graph_to_mermaid(agent.runtime_mut().graph());
println!("{diagram}");
// flowchart TD
//   START --> fetch_data
//   fetch_data --> summarize
//   summarize --> END`,
    },
    python: {
      signature: `from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing,
    graph_to_mermaid, visualize_graph,
    evaluate_output_score
)`,
      description: 'Python provides the same observability tools. `ExecutionTracer` wraps a graph and records per-node execution time, input/output state snapshots.',
      params: [
        { name: 'init_tracing()', type: 'fn', description: 'Enable structured logging.' },
        { name: 'ExecutionTracer()', type: 'class', description: 'Wrap a compiled graph to capture execution traces.' },
        { name: 'graph_to_mermaid(graph)', type: 'fn', description: 'Returns Mermaid diagram string.' },
        { name: 'evaluate_output_score(output, expected)', type: 'fn', description: 'Heuristic quality score 0.0–1.0.' },
      ],
      returns: 'String | float | ExecutionTrace',
      example: `from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing, graph_to_mermaid
)
from flowgentra_ai.graph import StateGraph

init_tracing()  # once at startup

builder = StateGraph(dict)
builder.add_node("step", my_step)
builder.set_entry_point("step")
graph = builder.compile()

# Visualize
print(graph_to_mermaid(graph))
# flowchart TD
#   START --> step
#   step --> END

# Trace execution
tracer = ExecutionTracer()
traced_graph = tracer.wrap(graph)
result = traced_graph.invoke({"input": "hello"})

trace = tracer.last_trace()
for span in trace.spans:
    print(f"{span.node}: {span.duration_ms:.1f}ms")`,
    },
  },

  // ─── YAML CONFIG REFERENCE ────────────────────────────────────────────────────
  {
    id: 'yaml-config',
    topic: 'handlers-config',
    name: 'Full YAML Config Reference',
    summary: 'Complete schema for agent config YAML files — all top-level keys, node options, LLM providers, memory, RAG, evaluation, and parallel execution settings.',
    rust: {
      signature: 'AgentConfig::from_file(path) -> Result<AgentConfig>',
      description: 'Every field shown. `${ENV_VAR}` substitution is supported in any string value.',
      params: [
        { name: 'name', type: 'string', description: 'Agent identifier (required).' },
        { name: 'llm.provider', type: 'string', description: '"openai" | "anthropic" | "mistral" | "groq" | "ollama" | "azure" | "huggingface"' },
        { name: 'graph.nodes[].node_type', type: 'string', description: '"llm" | "tool" | "retry" | "timeout" | "human_in_the_loop" | "memory" | "supervisor" | "subgraph" | "planner"' },
        { name: 'graph.recursion_limit', type: 'usize', description: 'Max execution steps before abort. Default: 25.' },
        { name: 'graph.allow_cycles', type: 'bool', description: 'Allow cycles in graph. Default: true.' },
        { name: 'graph.parallel', type: 'Vec<Vec<String>>', description: 'Explicit parallel groups. E.g. [[node_a, node_b]]' },
        { name: 'memory.checkpointer.type', type: 'string', description: '"memory" | "file"' },
        { name: 'evaluation.min_confidence', type: 'f64', description: 'Retry threshold 0.0–1.0. Default: 0.8.' },
      ],
      returns: 'Fully validated AgentConfig struct',
      example: `name: production_agent
description: "A production-ready research agent"

llm:
  provider: openai
  model: gpt-4o
  temperature: 0.3
  max_tokens: 2048
  top_p: 0.9
  api_key: \${OPENAI_API_KEY}
  # For Azure:
  # provider: azure
  # extra_params:
  #   resource_name: my-azure-resource
  #   api_version: "2024-02-15-preview"

graph:
  recursion_limit: 50      # default 25
  allow_cycles: true
  parallel:                # run these groups concurrently
    - [analyze_logs, analyze_pcap]

  nodes:
    - name: classify
      handler: classify_handler        # must match #[register_handler] fn name
      node_type: llm                   # or: tool, retry, timeout, human_in_the_loop

    - name: fetch
      handler: fetch_handler
      mcps: [web_search]               # attach MCP tools to this node

    - name: approval
      node_type: human_in_the_loop
      config:
        prompt: "Approve this action?"
        require_approval: true
        editable_fields: [amount]

    - name: retry_fetch
      node_type: retry
      config:
        max_retries: 3
        backoff_ms: 500

    - name: timed_op
      node_type: timeout
      config:
        timeout_ms: 10000
        on_timeout: skip              # error | skip | default_value

  edges:
    - from: START
      to: classify
    - from: classify
      to: fetch
    - from: fetch
      to: END

  mcps:
    web_search:
      type: stdio
      command: ["npx", "-y", "@modelcontextprotocol/server-brave-search"]
      env:
        BRAVE_API_KEY: \${BRAVE_API_KEY}

  rag:
    vector_store:
      type: chroma
      endpoint: "http://localhost:8000"
      collection: "docs"
    embeddings:
      provider: openai
      model: text-embedding-3-small
      api_key: \${OPENAI_API_KEY}
    retrieval:
      top_k: 5
      similarity_threshold: 0.7

  planner:
    enabled: true
    max_plan_steps: 5

state_schema:
  input:
    type: string
    description: "User query"
  output:
    type: string
    description: "Final answer"
  # Legacy format also supported:
  # input: "string - User query"

memory:
  checkpointer:
    type: memory          # "memory" or "file" (add path: ./checkpoints)
  conversation:
    enabled: true
    state_key: messages   # syncs messages to state["messages"]
  buffer:
    max_messages: 20

evaluation:
  enabled: true
  min_confidence: 0.8
  max_retries: 3
  retry_policy: exponential
  retry_delay_ms: 1000`,
    },
    python: {
      signature: 'Agent.from_config_path(path) -> Agent',
      description: 'Identical YAML schema used in Python. Add `python_handler_module:` at top-level to auto-import your handler module.',
      params: [
        { name: 'python_handler_module', type: 'string', description: 'Module name to auto-import. @register_handler functions in that module are discovered automatically.' },
        { name: 'graph.nodes[].handler', type: 'string', description: 'Can be "python.mymodule:my_function" for explicit inline module:function path.' },
      ],
      returns: 'Agent with Python handlers wired automatically',
      example: `# Full Python-specific config additions:

name: python_agent
python_handler_module: my_handlers   # auto-imports my_handlers.py

llm:
  provider: anthropic
  model: claude-3-5-sonnet-20241022
  api_key: \${ANTHROPIC_API_KEY}
  temperature: 0.5

graph:
  nodes:
    - name: process
      handler: process_handler      # matches @register_handler def process_handler

    - name: inline_node
      # Explicit module:function path — no @register_handler needed
      handler: "python.my_handlers:process_handler"

  edges:
    - from: START
      to: process
    - from: process
      to: END

state_schema:
  input:
    type: string
    description: "User input"
  output:
    type: string
    description: "Processed result"

memory:
  checkpointer:
    type: file
    path: ./checkpoints
  conversation:
    enabled: true
    max_messages: 20`,
    },
  },
]
