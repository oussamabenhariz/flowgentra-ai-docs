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
      description: 'Top-level convenience function (in `prelude`). Reads the YAML file, validates the graph, and wires all handlers discovered via `#[register_handler]`. LLM is created from the `llm:` block. Prefer this over `Agent::from_config`.',
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
SummaryMemory::new(llm, config)

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
    summary: 'Seven production-ready agent presets — ZeroShotReAct, FewShotReAct, Conversational, ToolCalling, StructuredChatZeroShotReAct, SelfAskWithSearch, ReactDocstore. Each is a compiled StateGraph. No graph wiring required.',
    rust: {
      signature: `// All 7 types — pick one
AgentBuilder::new(AgentType::ZeroShotReAct)           // <action> tag loop
AgentBuilder::new(AgentType::FewShotReAct)            // <action> tag + few-shot examples
AgentBuilder::new(AgentType::Conversational)          // single-node, history injected
AgentBuilder::new(AgentType::ToolCalling)             // chat_with_tools() + response.tool_calls
AgentBuilder::new(AgentType::StructuredChatZeroShotReAct) // JSON blob actions
AgentBuilder::new(AgentType::SelfAskWithSearch)       // Follow up / Intermediate answer loop
AgentBuilder::new(AgentType::ReactDocstore)           // Search[q] / Lookup[t] / Finish[a]

// Common builder chain (same for all types)
AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("my-agent")
    .with_llm_config("gpt-4o")        // or with_llm(LLMConfig)
    .with_tool(ToolSpec::new("search", "Search the web")
        .with_parameter("query", "string")
        .required("query"))
    .with_tool_executor(|name, args| dispatch(name, args))
    .with_temperature(0.2)
    .with_max_tokens(4096)
    .with_retries(2)
    .build_graph()?                   // → GraphBasedAgent`,
      description: 'Seven built-in agent types, each compiled to a `StateGraph<DynState>`. **ZeroShotReAct / FewShotReAct** use `AgentReasoningNode` and parse `<action>` / `<answer>` text tags. **Conversational** is a single `ConversationalNode` that injects conversation history. **ToolCalling** uses `ToolCallingNode` which calls `chat_with_tools()` and reads `response.tool_calls`. **StructuredChatZeroShotReAct** uses `StructuredChatNode` parsing JSON blobs with `"action"/"action_input"` keys. **SelfAskWithSearch** uses `SelfAskNode` accumulating a scratchpad of Follow-up/Intermediate-answer pairs. **ReactDocstore** uses `DocstoreNode` parsing `Action: Search[q]`, `Action: Lookup[t]`, `Action: Finish[a]`.',
      params: [
        { name: 'AgentType::ZeroShotReAct', type: 'AgentType', description: 'General-purpose ReAct. Uses <action>tool(args)</action> and <answer>…</answer> tags. Works with any text model.' },
        { name: 'AgentType::FewShotReAct', type: 'AgentType', description: 'Same graph as ZeroShotReAct but system prompt includes worked examples. Best for specialized domains.' },
        { name: 'AgentType::Conversational', type: 'AgentType', description: 'Single-node: ConversationalNode injects conversation_history from state. No tool loop.' },
        { name: 'AgentType::ToolCalling', type: 'AgentType', description: 'Native function calling via chat_with_tools(). ToolSpec → JSON Schema ToolDefinition. Reads response.tool_calls; stores tc_call_id for proper tool_result messages.' },
        { name: 'AgentType::StructuredChatZeroShotReAct', type: 'AgentType', description: 'JSON blob actions: {"action":"tool","action_input":"…"}. Final answer: {"action":"Final Answer","action_input":"…"}. parse_structured_action() handles extraction.' },
        { name: 'AgentType::SelfAskWithSearch', type: 'AgentType', description: 'Requires "search" tool. Decomposes questions via Follow up: / Intermediate answer: pairs. Built-in 4 few-shot examples. parse_self_ask_response() detects FollowUp or FinalAnswer.' },
        { name: 'AgentType::ReactDocstore', type: 'AgentType', description: 'Requires "search" and "lookup" tools. Parses Action: Search[q], Action: Lookup[t], Action: Finish[a]. Scratchpad accumulates Thought/Action/Observation blocks.' },
        { name: '.with_llm_config(model: &str)', type: 'fn', description: 'Model name — provider auto-resolved: gpt-*/o1/o3 → OpenAI, claude-* → Anthropic, mistral-* → Mistral, llama-*/mixtral-* → Groq.' },
        { name: '.with_llm(LLMConfig)', type: 'fn', description: 'Full LLMConfig (provider, model, api_key, temperature, max_tokens). Takes precedence over with_llm_config.' },
        { name: '.with_tool_executor(fn)', type: 'fn', description: 'Closure (tool_name: &str, args: &str) → String. Called by ToolExecutorNode for every tool dispatch.' },
        { name: '.with_tool(ToolSpec)', type: 'fn', description: 'ToolSpec::new(name, desc).with_parameter(name, type).required(name).' },
        { name: '.with_memory_steps(n)', type: 'fn', description: 'Enable conversation history; retain last n turns. Used by Conversational.' },
        { name: '.build_graph()', type: '→ GraphBasedAgent', description: 'Compile and return the concrete GraphBasedAgent. Call .execute_input(str).await? on it.' },
      ],
      returns: 'GraphBasedAgent (build_graph) | Box<dyn Agent> (build)',
      example: `use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

// ── ZeroShotReAct ────────────────────────────────────────────────────────────
let search = ToolSpec::new("web_search", "Search the web")
    .with_parameter("query", "string").required("query");
let calc = ToolSpec::new("calculator", "Evaluate math")
    .with_parameter("expression", "string").required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool(search).with_tool(calc)
    .with_tool_executor(|name, args| match name {
        "web_search" => web_search(args),
        "calculator" => calc_eval(args),
        _ => "unknown".to_string(),
    })
    .build_graph()?;
let answer = agent.execute_input("Population of France ÷ 1000?").await?;

// ── ToolCalling (native function calling) ────────────────────────────────────
let weather = ToolSpec::new("get_weather", "Get weather")
    .with_parameter("location", "string").required("location");

let tc_agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_llm_config("gpt-4o")
    .with_tool(weather)
    .with_tool_executor(|_, args| format!("72°F, sunny — {}", args))
    .build_graph()?;

// ── SelfAskWithSearch ─────────────────────────────────────────────────────────
let sa_agent = AgentBuilder::new(AgentType::SelfAskWithSearch)
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Search Wikipedia")
        .with_parameter("query", "string").required("query"))
    .with_tool_executor(|_, q| wikipedia_search(q))
    .build_graph()?;
let ans = sa_agent.execute_input("Who was the maternal grandfather of George Washington?").await?;
// → "Joseph Ball"

// ── ReactDocstore ─────────────────────────────────────────────────────────────
let rd_agent = AgentBuilder::new(AgentType::ReactDocstore)
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Find doc").with_parameter("query","string").required("query"))
    .with_tool(ToolSpec::new("lookup", "Lookup term").with_parameter("term","string").required("term"))
    .with_tool_executor(|name, args| if name == "search" { ds.search(args) } else { ds.lookup(args) })
    .build_graph()?;`,
    },
    python: {
      signature: `# ── Typed constructors (preferred) ───────────────────────────────────────────
from flowgentra_ai.agent import ZeroShotReAct, FewShotReAct, Conversational, ToolCalling, StructuredChat, SelfAskWithSearch, ReactDocstore
from flowgentra_ai.llm import LLM

llm = LLM(provider="openai", model="gpt-4o")
agent = ZeroShotReAct(name="my-agent", llm=llm, retries=2)  # → GraphBasedAgent-like
result = agent.execute_input("Your question")               # → str

# ── AgentBuilder (for advanced configuration) ────────────────────────────────
from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

agent = (
    AgentBuilder(AgentType.zero_shot_react(), llm)
    .with_name("my-agent")
    .with_tool(ToolSpec("search", "Search the web"))
    .with_temperature(0.2)
    .with_retries(2)
    .build_graph()
)`,
      description: 'Seven built-in agent presets, each compiled to a StateGraph. Use the typed constructors (ZeroShotReAct, FewShotReAct, etc.) for the simplest API — pass an LLM directly. Use AgentBuilder for advanced configuration (temperature, custom params). The type determines which StateGraph is compiled.',
      params: [
        { name: 'ZeroShotReAct(name, llm, ...)', type: 'class', description: 'General ReAct: AgentReasoningNode parses <action>…</action> tags. Terminates on <answer>…</answer>.' },
        { name: 'FewShotReAct(name, llm, system_prompt, ...)', type: 'class', description: 'Same graph as ZeroShot; pass examples via system_prompt.' },
        { name: 'Conversational(name, llm, ...)', type: 'class', description: 'ConversationalNode: injects conversation_history from state. Single-node, no tool loop.' },
        { name: 'ToolCalling(name, llm, ...)', type: 'class', description: 'ToolCallingNode: passes ToolSpec → JSON-Schema ToolDefinition to chat_with_tools().' },
        { name: 'StructuredChat(name, llm, ...)', type: 'class', description: 'StructuredChatNode: parses JSON blob {"action":…,"action_input":…}. Final answer on "Final Answer" action.' },
        { name: 'SelfAskWithSearch(name, llm, ...)', type: 'class', description: 'SelfAskNode: requires "search" tool. Decomposes via Follow up / Intermediate answer pairs.' },
        { name: 'ReactDocstore(name, llm, ...)', type: 'class', description: 'DocstoreNode: requires "search" and "lookup" tools. Parses Action: Search[q] / Lookup[t] / Finish[a].' },
        { name: 'llm', type: 'LLM', description: 'LLM instance (provider + model). Create with LLM(provider="openai", model="gpt-4o").' },
        { name: 'tools', type: 'List[ToolSpec]', description: 'List of ToolSpec objects. ToolSpec(name, desc) then .add_parameter(name, type) / .set_required(name).' },
        { name: 'memory_steps', type: 'int | None', description: 'Keep last n conversation turns in state. Primarily used by Conversational.' },
        { name: '.build_graph()', type: '→ GraphBasedAgent', description: 'AgentBuilder only: compile and return GraphBasedAgent.' },
        { name: 'agent.execute_input(str)', type: '→ str', description: 'Run agent. Typed constructors expose this directly; so does GraphBasedAgent from AgentBuilder.' },
      ],
      returns: 'GraphBasedAgent',
      example: `from flowgentra_ai.agent import ZeroShotReAct, FewShotReAct, ToolCalling, StructuredChat, SelfAskWithSearch, ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

# ── ZeroShotReAct — typed constructor (preferred) ─────────────────────────────
llm = LLM(provider="openai", model="gpt-4o")
search = ToolSpec("web_search", "Search the web")
search.add_parameter("query", "string")
search.set_required("query")

agent = ZeroShotReAct(
    name="research-agent",
    llm=llm,
    tools=[search],
    retries=2,
)
print(agent.execute_input("What is the capital of Japan?"))

# ── FewShotReAct — embed examples in system_prompt ────────────────────────────
classifier = FewShotReAct(
    name="classifier",
    llm=LLM(provider="anthropic", model="claude-opus-4-6"),
    system_prompt="Example 1: ...\nExample 2: ...",
    tools=[search],
    retries=2,
    memory_steps=10,
)

# ── ToolCalling — native function-calling API ─────────────────────────────────
weather = ToolSpec("get_weather", "Get weather for a location")
weather.add_parameter("location", "string")
weather.set_required("location")

tc_agent = ToolCalling(
    name="weather-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[weather],
)

# ── StructuredChat — JSON-blob tool actions ───────────────────────────────────
calc = ToolSpec("calculator", "Evaluate math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

sc_agent = StructuredChat(
    name="math-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[calc],
)
print(sc_agent.execute_input("What is 15% of 2847?"))

# ── SelfAskWithSearch — decompose questions ───────────────────────────────────
sa_agent = SelfAskWithSearch(
    name="researcher",
    llm=LLM(provider="openai", model="gpt-4o"),
)
print(sa_agent.execute_input("Who was the maternal grandfather of George Washington?"))

# ── ReactDocstore — Search + Lookup loop ──────────────────────────────────────
rd_agent = ReactDocstore(
    name="doc-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
)
print(rd_agent.execute_input("What is the elevation range of the High Plains?"))`,
    },
  },

  // ─── LLMS ─────────────────────────────────────────────────────────────
  {
    id: 'llm-clients',
    topic: 'llm',
    name: 'LLMs & Providers',
    summary: 'Built-in clients for 7 LLM providers, plus CachedLLM, FallbackLLM, and RetryLLM wrappers.',
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
CachedLLM::new(inner)
FallbackLLM::new(vec![primary, backup])
RetryLLM::new(inner, max_retries)`,
      description: 'All implement the `LLM` trait: `chat()`, `chat_stream()`, `chat_with_tools()`, `chat_structured()`. Streaming returns a `tokio::sync::mpsc::Receiver<String>`. Structured output uses `ResponseFormat::Json` or `ResponseFormat::JsonSchema`.',
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
let client  = FallbackLLM::new(vec![Arc::new(primary), Arc::new(backup)]);

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
      signature: `from flowgentra_ai.llm import LLMConfig, LLM, Message

# Option A — direct constructor (provider + model as positional args)
client = LLM("openai",     "gpt-4o",                         api_key="sk-...")
client = LLM("anthropic",  "claude-3-5-haiku-20241022",      api_key="sk-ant-...")
client = LLM("groq",       "llama3-70b-8192",                api_key="...")
client = LLM("ollama",     "llama3")               # Local — no api_key needed
client = LLM("mistral",    "mistral-large",        api_key="...", temperature=0.3)

# Option B — LLMConfig + from_config (useful when reusing the same config)
config = LLMConfig("openai", "gpt-4o", api_key="sk-...", temperature=0.7, max_tokens=1000)
client = LLM.from_config(config)

# Wrappers via method chaining
client = client.with_retry(max_retries=3)
client = client.cached(max_entries=100)
client = client.with_fallback(backup_client)`,
      description: 'Two ways to create a client: `LLM(provider, model, api_key=...)` directly, or `LLM.from_config(LLMConfig(...))` when you want to reuse or mutate the config (e.g. `set_response_format`). No separate provider-specific classes. Wrappers (retry, cache, fallback) chain as methods.',
      params: [
        { name: 'LLMConfig(provider, model, api_key?, temperature?, max_tokens?, top_p?)', type: 'config', description: 'Providers: "openai" | "anthropic" | "mistral" | "groq" | "ollama" | "huggingface" | "azure". api_key optional for ollama.' },
        { name: 'LLM.from_config(config)', type: 'classmethod', description: 'Create client from LLMConfig.' },
        { name: 'client.chat(messages)', type: 'fn → Message', description: 'Standard completion.' },
        { name: 'client.chat_with_usage(messages)', type: 'fn → (Message, TokenUsage|None)', description: 'Chat with token count and cost tracking.' },
        { name: 'client.chat_with_tools(messages, tools)', type: 'fn → Message', description: 'Function calling. Check response.has_tool_calls() / response.tool_calls().' },
        { name: 'client.with_retry(max_retries=3)', type: 'fn → LLM', description: 'Wrap with exponential backoff retry.' },
        { name: 'client.cached(max_entries=100)', type: 'fn → LLM', description: 'Wrap with response cache.' },
        { name: 'client.with_fallback(backup)', type: 'fn → LLM', description: 'Falls back to backup client on error.' },
        { name: 'config.set_response_format(fmt)', type: 'fn', description: 'ResponseFormat.json() or ResponseFormat.json_schema(name, schema) for structured output.' },
      ],
      returns: 'Message | (Message, TokenUsage | None) depending on method',
      example: `import os
from flowgentra_ai.llm import LLMConfig, LLM, Message, ToolDefinition
from flowgentra_ai.types import ResponseFormat

# Direct constructor — shortest form
client = LLM(
    "anthropic",
    "claude-3-5-haiku-20241022",
    api_key=os.environ["ANTHROPIC_API_KEY"],
    temperature=0.7,
)

# Or via LLMConfig when you need set_response_format()
config = LLMConfig("anthropic", "claude-3-5-haiku-20241022",
                   api_key=os.environ["ANTHROPIC_API_KEY"])
client = LLM.from_config(config)

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
backup = LLM.from_config(LLMConfig("openai", "gpt-4o-mini", api_key=os.environ["OPENAI_API_KEY"]))
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
      signature: `Supervisor::new(name, strategy, llm)
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
    llm.clone(),
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

  // ─── DOCUMENT LOADERS ────────────────────────────────────────────────────────
  {
    id: 'document-loaders',
    topic: 'data-loading',
    name: 'Document Loaders',
    summary: 'Load and process documents from files, directories, and various formats (PDF, Markdown, HTML, JSON, CSV, plain text).',
    rust: {
      signature: 'load_document(path: &Path) -> Result<LoadedDocument>',
      description: 'Auto-detects file type and extracts content. Supports PDF text extraction, Markdown parsing, HTML stripping, and structured data formats.',
      params: [
        { name: 'path', type: '&Path', description: 'Path to document file' },
      ],
      returns: 'LoadedDocument with metadata and content',
      example: `use flowgentra_ai::data::load_document;

let doc = load_document("./research_paper.pdf")?;
println!("Loaded: {} ({} chars)", doc.filename, doc.content.len());`,
    },
    python: {
      signature: 'load_document(path: str) -> LoadedDocument',
      description: 'Load a single document with automatic format detection. Returns document content, metadata, and file information.',
      params: [
        { name: 'path', type: 'str', description: 'Path to the document file' },
      ],
      returns: 'LoadedDocument — content, metadata, filename, file_type',
      example: `from flowgentra_ai.document_loaders import load_document

doc = load_document("./research_paper.pdf")
print(f"Loaded: {doc.filename} ({len(doc.content)} chars)")
print(f"Type: {doc.file_type}")`,
    },
  },

  // ─── TEXT SPLITTING ──────────────────────────────────────────────────────────
  {
    id: 'text-splitters',
    topic: 'text-processing',
    name: 'Text Splitters',
    summary: 'Split large documents into chunks for embedding and retrieval. Choose from character-based, token-based, or content-aware splitters.',
    rust: {
      signature: 'RecursiveCharacterTextSplitter::new(config: ChunkConfig) -> Self',
      description: 'Smart text splitting that respects content structure. Tries paragraph → sentence → word boundaries before falling back to character splitting.',
      params: [
        { name: 'chunk_size', type: 'usize', description: 'Maximum characters per chunk' },
        { name: 'chunk_overlap', type: 'usize', description: 'Characters to overlap between chunks' },
        { name: 'separators', type: 'Vec<String>', description: 'Ordered list of separator strings to try' },
      ],
      returns: 'Configured text splitter',
      example: `use flowgentra_ai::text_splitter::RecursiveCharacterTextSplitter;

let splitter = RecursiveCharacterTextSplitter::new(ChunkConfig {
    chunk_size: 1000,
    chunk_overlap: 200,
    separators: vec!["\\n\\n".to_string(), "\\n".to_string(), " ".to_string()],
});

let chunks = splitter.split_documents(documents)?;`,
    },
    python: {
      signature: 'RecursiveCharacterTextSplitter(chunk_size=1000, overlap=200, separators=None)',
      description: 'Content-aware text splitting. Automatically tries separators in order: paragraphs, sentences, words, characters.',
      params: [
        { name: 'chunk_size', type: 'int', description: 'Maximum characters per chunk. Default: 1000' },
        { name: 'overlap', type: 'int', description: 'Character overlap between chunks. Default: 200' },
        { name: 'separators', type: 'List[str]', description: 'Custom separator priority list. Default: ["\\n\\n", "\\n", " ", ""]' },
      ],
      returns: 'Configured splitter instance',
      example: `from flowgentra_ai.rag import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, overlap=200)
chunks = splitter.split("Long document text...")

# Content-aware splitters
markdown_splitter = MarkdownTextSplitter(chunk_size=500)
html_splitter = HTMLTextSplitter(chunk_size=500)
code_splitter = CodeTextSplitter(chunk_size=500)  # Respects function/class boundaries`,
    },
  },

  // ─── RERANKERS ───────────────────────────────────────────────────────────────
  {
    id: 'rerankers',
    topic: 'search-ranking',
    name: 'Rerankers',
    summary: 'Improve search result quality by reranking retrieved documents. Choose from RRF, cross-encoders, or LLM-based reranking.',
    rust: {
      signature: 'RRFReranker::new(k: usize) -> Self',
      description: 'Reciprocal Rank Fusion combines multiple ranking signals. Effective for hybrid search (semantic + keyword).',
      params: [
        { name: 'k', type: 'usize', description: 'RRF parameter controlling rank influence. Default: 60' },
      ],
      returns: 'Configured RRF reranker',
      example: `use flowgentra_ai::reranking::RRFReranker;

let reranker = RRFReranker::new(60);
let reranked = reranker.rerank(search_results)?;`,
    },
    python: {
      signature: 'RRFReranker(k=60)',
      description: 'Reciprocal Rank Fusion for combining multiple ranking sources. Mathematically sound approach to fusion.',
      params: [
        { name: 'k', type: 'int', description: 'RRF parameter. Higher = more influence from original ranking. Default: 60' },
      ],
      returns: 'Reranker instance',
      example: `from flowgentra_ai.rerankers import RRFReranker, CrossEncoderReranker

# RRF for hybrid search
rrf = RRFReranker(k=60)
reranked_results = rrf.rerank(search_results)

# Cross-encoder for quality (slower but better)
cross_encoder = CrossEncoderReranker(model="cross-encoder/ms-marco-MiniLM-L-6-v2")
reranked = cross_encoder.rerank(results)

# LLM-based reranking (most accurate)
llm_reranker = LLMReranker(model="gpt-4", prompt_template=custom_prompt)`,
    },
  },

  // ─── EVALUATION METRICS ──────────────────────────────────────────────────────
  {
    id: 'evaluation-metrics',
    topic: 'evaluation',
    name: 'Evaluation Metrics',
    summary: 'Measure retrieval and generation quality with standard metrics: Hit Rate, MRR, NDCG, and custom scoring functions.',
    rust: {
      signature: 'hit_rate(results: &[SearchResult], ground_truth: &[String]) -> f64',
      description: 'Fraction of queries where at least one relevant document was retrieved. Simple but effective baseline metric.',
      params: [
        { name: 'results', type: '&[SearchResult]', description: 'Retrieved documents for each query' },
        { name: 'ground_truth', type: '&[String]', description: 'Relevant document IDs for each query' },
      ],
      returns: 'Hit rate as fraction (0.0 to 1.0)',
      example: `use flowgentra_ai::evaluation::{hit_rate, mrr};

let hit_rate_score = hit_rate(&retrieval_results, &ground_truth)?;
let mrr_score = mrr(&retrieval_results, &ground_truth)?;`,
    },
    python: {
      signature: 'hit_rate(results: List[List[SearchResult]], ground_truth: List[List[str]]) -> float',
      description: 'Hit Rate: Fraction of queries that retrieved at least one relevant document. Good baseline metric.',
      params: [
        { name: 'results', type: 'List[List[SearchResult]]', description: 'Retrieved results for each query' },
        { name: 'ground_truth', type: 'List[List[str]]', description: 'Relevant document IDs for each query' },
      ],
      returns: 'Hit rate as float (0.0 to 1.0)',
      example: `from flowgentra_ai.evaluation import hit_rate, mrr, mean_ndcg

# Basic metrics
hr = hit_rate(retrieval_results, ground_truth)
mrr_score = mrr(retrieval_results, ground_truth)
ndcg = mean_ndcg(retrieval_results, ground_truth, k=10)

# Full evaluation pipeline
from flowgentra_ai.evaluation import rag_evaluate, EvaluationConfig

config = EvaluationConfig(
    metrics=["hit_rate", "mrr", "ndcg@5", "ndcg@10"],
    grading_config=GradingConfig(temperature=0.1)
)

results = rag_evaluate(queries, results, ground_truth, config)`,
    },
  },

  // ─── MEMORY TYPES ────────────────────────────────────────────────────────────
  {
    id: 'memory-types',
    topic: 'memory',
    name: 'Memory Systems',
    summary: 'Persistent conversation memory with different strategies: conversation buffer, token limits, summarization, and checkpoints.',
    rust: {
      signature: 'ConversationMemory::new() -> Self',
      description: 'Simple append-only memory for conversation history. Grows indefinitely — use TokenBufferMemory for bounded memory.',
      params: [],
      returns: 'Conversation memory instance',
      example: `use flowgentra_ai::memory::ConversationMemory;

let memory = ConversationMemory::new();
memory.add_message("user", "Hello")?;
memory.add_message("assistant", "Hi there!");

// Retrieve full conversation
let history = memory.get_messages()?;`,
    },
    python: {
      signature: 'ConversationMemory()',
      description: 'Basic conversation memory that stores all messages. Use TokenBufferMemory for memory with size limits.',
      params: [],
      returns: 'Memory instance',
      example: `from flowgentra_ai.memory import ConversationMemory, TokenBufferMemory

# Unlimited conversation memory
memory = ConversationMemory()
memory.add_message("user", "Hello")
memory.add_message("assistant", "Hi!")

# Bounded memory (token limit)
token_memory = TokenBufferMemory(max_tokens=2000, llm_for_count="gpt-4")

# Summarization memory (compresses old messages)
summary_memory = SummaryMemory(
    llm=LLM(provider="openai", model="gpt-4"),
    summary_prompt="Summarize the conversation so far:"
)`,
    },
  },

  // ─── ADVANCED NODES ──────────────────────────────────────────────────────────
  {
    id: 'advanced-nodes',
    topic: 'nodes',
    name: 'Advanced Node Types',
    summary: 'Sophisticated workflow nodes: retry logic, timeouts, parallel execution, branching, loops, and subgraph composition.',
    rust: {
      signature: 'RetryNode::new(max_retries: usize, backoff: BackoffStrategy) -> Self',
      description: 'Automatically retry failed node executions with exponential backoff. Useful for unreliable operations.',
      params: [
        { name: 'max_retries', type: 'usize', description: 'Maximum retry attempts' },
        { name: 'backoff', type: 'BackoffStrategy', description: 'Exponential, linear, or fixed delay strategy' },
      ],
      returns: 'Configured retry node',
      example: `use flowgentra_ai::nodes::RetryNode;

let retry_node = RetryNode::new(3, BackoffStrategy::Exponential);
graph.add_node("unreliable_task", retry_node.wrap(my_fallible_node))?;`,
    },
    python: {
      signature: 'RetryNode(max_retries=3, backoff_strategy="exponential")',
      description: 'Wrap any node with automatic retry logic. Handles transient failures gracefully.',
      params: [
        { name: 'max_retries', type: 'int', description: 'Maximum retry attempts. Default: 3' },
        { name: 'backoff_strategy', type: 'str', description: '"exponential" | "linear" | "fixed". Default: "exponential"' },
      ],
      returns: 'Retry node wrapper',
      example: `from flowgentra_ai.nodes import RetryNode, TimeoutNode, ParallelNodeConfig

# Retry failed operations
retry_node = RetryNode(max_retries=3)
builder.add_node("unreliable_api", retry_node.wrap(api_call_node))

# Timeout protection
timeout_node = TimeoutNode(timeout_seconds=30.0)
builder.add_node("slow_task", timeout_node.wrap(processing_node))

# Parallel execution
parallel_config = ParallelNodeConfig(
    nodes=["task_a", "task_b", "task_c"],
    merge_strategy="concatenate"
)`,
    },
  },

  // ─── SUPERVISION ─────────────────────────────────────────────────────────────
  {
    id: 'supervision',
    topic: 'multi-agent',
    name: 'Multi-Agent Supervision',
    summary: 'Orchestrate multiple agents with supervisors, planners, and parallel execution strategies.',
    rust: {
      signature: 'Supervisor::new(agents: Vec<Agent>, strategy: OrchestrationStrategy) -> Self',
      description: 'Coordinate multiple agents with different orchestration patterns: sequential, parallel, or hierarchical.',
      params: [
        { name: 'agents', type: 'Vec<Agent>', description: 'Child agents to supervise' },
        { name: 'strategy', type: 'OrchestrationStrategy', description: 'How to coordinate agents' },
      ],
      returns: 'Configured supervisor',
      example: `use flowgentra_ai::supervision::Supervisor;

let supervisor = Supervisor::new(
    vec![research_agent, writing_agent],
    OrchestrationStrategy::Parallel
);

graph.add_node("team_work", supervisor.node())?;`,
    },
    python: {
      signature: 'Supervisor(agents: List[Agent], strategy: OrchestrationStrategy = "parallel")',
      description: 'Manage multiple agents with different coordination strategies. Distribute work and aggregate results.',
      params: [
        { name: 'agents', type: 'List[Agent]', description: 'List of agents to coordinate' },
        { name: 'strategy', type: 'str', description: '"sequential" | "parallel" | "hierarchical". Default: "parallel"' },
      ],
      returns: 'Supervisor instance',
      example: `from flowgentra_ai.supervision import Supervisor, PlannerNode

# Parallel agent execution
supervisor = Supervisor(
    agents=[research_agent, analysis_agent, writer_agent],
    strategy="parallel"
)

# Planner-based orchestration
planner = PlannerNode(
    llm=LLM(provider="openai", model="gpt-4"),
    available_agents=[agent1, agent2, agent3]
)

builder.add_node("plan_and_execute", planner)
builder.add_node("supervise", supervisor)`,
    },
  },

  // ─── TOOL REGISTRY ───────────────────────────────────────────────────────────
  {
    id: 'tool-registry',
    topic: 'tools',
    name: 'Tool Registry & Built-in Tools',
    summary: 'Register tools and dispatch calls by name. with_builtins() pre-registers 13 keyless tools: calculator, file, web_request, duckduckgo_search, wikipedia, json/csv data tools, and file operations.',
    rust: {
      signature: 'ToolRegistry::with_builtins() -> Self',
      description: 'Central registry for tool definitions and execution. with_builtins() registers all keyless, non-destructive tools. API-key and subprocess tools must be added manually.',
      params: [],
      returns: 'ToolRegistry pre-loaded with 13 built-in tools',
      example: `use flowgentra_ai::core::tools::ToolRegistry;
use std::sync::Arc;

// 13 keyless tools registered automatically
let mut registry = ToolRegistry::with_builtins();

// Add API-key tools manually
registry.register("tavily", Arc::new(TavilySearchTool::from_env()?))?;
registry.register("weather", Arc::new(OpenWeatherMapTool::from_env()?))?;

// Call by name
let result = registry
    .call_tool("calculator", json!({"expression": "2^10"}))
    .await?;

// Inspect
for def in registry.list_definitions() {
    println!("{}: {}", def.name, def.description);
}`,
    },
    python: {
      signature: 'ToolRegistry.with_builtins()',
      description: 'Pre-seeds the registry with all keyless built-in tools. Pass a list or dict to the constructor to build a custom registry instead.',
      params: [],
      returns: 'ToolRegistry with 13 built-in tools',
      example: `from flowgentra_ai.tools import (
    ToolRegistry, ToolNode, create_tool_node, check_tools_condition,
    CalculatorTool, FilesTool, WebRequestTool,
    DuckDuckGoSearchTool, WikipediaTool,
    TavilySearchTool, OpenWeatherMapTool,
)

# All 13 keyless tools pre-registered
registry = ToolRegistry.with_builtins()

# Add API-key tools
registry = ToolRegistry([
    CalculatorTool(),
    FilesTool(),
    WebRequestTool(),
    DuckDuckGoSearchTool(),
    TavilySearchTool(),          # reads TAVILY_API_KEY
    OpenWeatherMapTool(),         # reads OPENWEATHERMAP_API_KEY
])

# Wire into a graph
tool_node = create_tool_node(registry)
builder.add_node("tools", tool_node)
builder.add_conditional_edges("agent", check_tools_condition, {
    "tools": "tools", "__end__": END,
})
builder.add_edge("tools", "agent")`,
    },
  },

  // ─── SEARCH TOOLS ─────────────────────────────────────────────────────────────
  {
    id: 'search-tools',
    topic: 'tools',
    name: 'Search Tools',
    summary: 'Five web search providers. DuckDuckGoSearchTool is free; Tavily, SerpApi, GoogleSerper, and Brave require API keys. All return {query, results:[{title,url,snippet}], count}.',
    rust: {
      signature: 'DuckDuckGoSearchTool::new() / TavilySearchTool::new(api_key)',
      description: 'All search tools implement the Tool trait and return a uniform results array. API-key tools also expose from_env() constructors.',
      params: [
        { name: 'query', type: 'str', description: 'Search query string' },
        { name: 'max_results', type: 'int (optional)', description: 'Maximum number of results to return (default: 5)' },
      ],
      returns: '{ query: str, results: [{title, url, snippet}], count: int }',
      example: `use flowgentra_ai::core::tools::search::{
    DuckDuckGoSearchTool, TavilySearchTool,
    SerpApiSearchTool, GoogleSerperTool, BraveSearchTool,
};

// Free — no key
let ddg = DuckDuckGoSearchTool::new();
let result = ddg.call(json!({"query": "Rust 2024 edition", "max_results": 5})).await?;

// API-key tools — from env or explicit
let tavily = TavilySearchTool::from_env()?;  // TAVILY_API_KEY
let brave  = BraveSearchTool::new("YOUR_BRAVE_KEY");`,
    },
    python: {
      signature: 'DuckDuckGoSearchTool() / TavilySearchTool(api_key=None)',
      description: 'All five search tools share the same call interface. When api_key is omitted, the tool reads its env var.',
      params: [
        { name: 'query', type: 'str', description: 'Search query string' },
        { name: 'max_results', type: 'int (optional)', description: 'Maximum number of results (default: 5)' },
      ],
      returns: '{ query, results: [{title, url, snippet}], count }',
      example: `from flowgentra_ai.tools import (
    DuckDuckGoSearchTool, TavilySearchTool,
    SerpApiSearchTool, GoogleSerperTool, BraveSearchTool,
)

# Free — no key
ddg = DuckDuckGoSearchTool()
result = ddg.call({"query": "Python async patterns", "max_results": 5})

# API-key tools
tavily = TavilySearchTool()             # TAVILY_API_KEY
serp   = SerpApiSearchTool()            # SERPAPI_API_KEY
serper = GoogleSerperTool()             # SERPER_API_KEY
brave  = BraveSearchTool(api_key="...") # or BRAVE_API_KEY

for r in result["results"]:
    print(r["title"], "—", r["url"])`,
    },
  },

  // ─── KNOWLEDGE TOOLS ──────────────────────────────────────────────────────────
  {
    id: 'knowledge-tools',
    topic: 'tools',
    name: 'Knowledge Tools',
    summary: 'Wikipedia, ArXiv, PubMed, and Wolfram Alpha. Wikipedia/ArXiv/PubMed are free; Wolfram Alpha requires WOLFRAM_ALPHA_APPID.',
    rust: {
      signature: 'WikipediaTool::new() / WolframAlphaTool::new(appid)',
      description: 'Four tools for encyclopedic and scientific knowledge. All implement the Tool trait.',
      params: [],
      returns: 'Structured JSON — see each tool description',
      example: `use flowgentra_ai::core::tools::knowledge::{
    WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool,
};

let wiki   = WikipediaTool::new();
let arxiv  = ArxivTool::new();
let pubmed = PubMedTool::new();
let wolfram = WolframAlphaTool::from_env()?;  // WOLFRAM_ALPHA_APPID

let summary = wiki.call(json!({"title": "Transformer (machine learning)"})).await?;
// {"title": "...", "extract": "...", "url": "..."}

let papers = arxiv.call(json!({"query": "attention is all you need", "max_results": 3})).await?;
// {"results": [{"id": "...", "title": "...", "summary": "...", "published": "..."}]}`,
    },
    python: {
      signature: 'WikipediaTool() / WolframAlphaTool(api_key=None)',
      description: 'Knowledge tools for agents that need encyclopedic or scientific data.',
      params: [],
      returns: 'Structured JSON per tool',
      example: `from flowgentra_ai.tools import WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool

wiki   = WikipediaTool()
arxiv  = ArxivTool()
pubmed = PubMedTool()
wolfram = WolframAlphaTool()  # reads WOLFRAM_ALPHA_APPID

result = wiki.call({"title": "Attention (machine learning)"})
print(result["extract"][:200])

papers = arxiv.call({"query": "RLHF language models", "max_results": 5})
for p in papers["results"]:
    print(p["title"], p["published"])`,
    },
  },

  // ─── CODE EXEC TOOLS ──────────────────────────────────────────────────────────
  {
    id: 'code-exec-tools',
    topic: 'tools',
    name: 'Code Execution Tools',
    summary: 'Execute Python, Node.js, or shell commands in a subprocess. All return {output, error, exit_code}. Timeouts kill the child process automatically.',
    rust: {
      signature: 'PythonReplTool::new() / ShellTool::new(allowed, timeout_secs)',
      description: 'Subprocess execution with tokio::process::Command, async stdin write, and tokio::time::timeout for kill-on-timeout.',
      params: [
        { name: 'code / command', type: 'str', description: 'Code or shell command to execute' },
        { name: 'timeout_secs', type: 'u64 (constructor)', description: 'Kill timeout in seconds (default: 30)' },
      ],
      returns: '{ output: str, error: str, exit_code: i32 }',
      example: `use flowgentra_ai::core::tools::code_exec::{
    PythonReplTool, NodeJsReplTool, ShellTool,
};

let py   = PythonReplTool::new();
let node = NodeJsReplTool::new();

// Restricted shell — only listed commands allowed
let shell = ShellTool::new(vec!["ls".into(), "cat".into(), "echo".into()], 30);

// Unrestricted — explicit opt-in required
let shell_unr = ShellTool::unrestricted(30);

let r = py.call(json!({"code": "print(sum(range(100)))"})).await?;
// {"output": "4950", "error": "", "exit_code": 0}`,
    },
    python: {
      signature: 'PythonReplTool() / ShellTool(allowed_commands=[], timeout_secs=30)',
      description: 'Code execution tools. ShellTool blocks all commands by default unless you pass an allowlist or call unrestricted().',
      params: [
        { name: 'code', type: 'str', description: 'Python or JavaScript source code' },
        { name: 'command', type: 'str (ShellTool)', description: 'Shell command to run' },
      ],
      returns: '{ output, error, exit_code }',
      example: `from flowgentra_ai.tools import PythonReplTool, NodeJsReplTool, ShellTool

py   = PythonReplTool()
node = NodeJsReplTool()
shell = ShellTool(allowed_commands=["ls", "cat", "wc"])
shell_unr = ShellTool.unrestricted()

r = py.call({"code": "import math; print(math.factorial(10))"})
# {"output": "3628800", "error": "", "exit_code": 0}

r = node.call({"code": "process.stdout.write(String(2**32))"})
# {"output": "4294967296", "error": "", "exit_code": 0}

r = shell.call({"command": "wc -l README.md"})
# {"output": "42 README.md", "error": "", "exit_code": 0}`,
    },
  },

  // ─── FILE TOOLS ───────────────────────────────────────────────────────────────
  {
    id: 'file-tools',
    topic: 'tools',
    name: 'Extended File Tools',
    summary: 'CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool — all sandbox-validated to prevent path traversal. Registered in with_builtins().',
    rust: {
      signature: 'CopyFileTool::new() / FileSearchTool::new()',
      description: 'All file tools validate paths against a sandbox root (default: cwd). Path traversal attempts return an error.',
      params: [],
      returns: 'JSON confirmation or match list',
      example: `use flowgentra_ai::core::tools::files_extended::{
    CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool,
};

let copy   = CopyFileTool::new();
let delete = DeleteFileTool::new();
let mv     = MoveFileTool::new();
let search = FileSearchTool::new();

copy.call(json!({"src": "report.md", "dst": "backup/report.md"})).await?;
delete.call(json!({"path": "tmp/", "recursive": true})).await?;
mv.call(json!({"src": "draft.txt", "dst": "final/v1.txt"})).await?;

let hits = search.call(json!({
    "directory": "src/",
    "pattern": "TODO|FIXME",
    "max_results": 100,
})).await?;`,
    },
    python: {
      signature: 'CopyFileTool() / FileSearchTool()',
      description: 'Extended file operations beyond the core FilesTool. All paths are sandbox-validated.',
      params: [],
      returns: 'JSON confirmation or {matches: [{file, line_number, line_content}]}',
      example: `from flowgentra_ai.tools import CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool

CopyFileTool().call({"src": "report.md", "dst": "backup/report.md"})
DeleteFileTool().call({"path": "tmp/cache/", "recursive": True})
MoveFileTool().call({"src": "draft.txt", "dst": "published/v1.txt"})

result = FileSearchTool().call({
    "directory": "src/",
    "pattern": r"unwrap\\(\\)",
    "max_results": 50,
})
for hit in result["matches"]:
    print(f"{hit['file']}:{hit['line_number']}  {hit['line_content'].strip()}")`,
    },
  },

  // ─── DATA TOOLS ───────────────────────────────────────────────────────────────
  {
    id: 'data-tools',
    topic: 'tools',
    name: 'Data Tools',
    summary: 'Pure in-memory JSON and CSV manipulation — no I/O, no API keys. JsonGetValueTool, JsonListKeysTool, CsvQueryTool. Registered in with_builtins().',
    rust: {
      signature: 'JsonGetValueTool::new() / CsvQueryTool::new()',
      description: 'Three lightweight data tools that operate on string inputs. Ideal for agents that process structured data from prior tool calls.',
      params: [],
      returns: 'Extracted value, key list, or filtered rows',
      example: `use flowgentra_ai::core::tools::data::{JsonGetValueTool, JsonListKeysTool, CsvQueryTool};

let jget  = JsonGetValueTool::new();
let jkeys = JsonListKeysTool::new();
let csv   = CsvQueryTool::new();

let v = jget.call(json!({
    "json": r#"{"user":{"name":"Alice","age":30}}"#,
    "path": "user.name"
})).await?;
// {"value": "Alice", "found": true}

let r = csv.call(json!({
    "csv": "name,score\\nAlice,95\\nBob,82",
    "filter": "score=95"
})).await?;
// {"rows": [{"name":"Alice","score":"95"}], "count": 1}`,
    },
    python: {
      signature: 'JsonGetValueTool() / CsvQueryTool()',
      description: 'In-memory data tools. Use to parse and query structured data returned by other tools.',
      params: [],
      returns: 'Structured result dict',
      example: `from flowgentra_ai.tools import JsonGetValueTool, JsonListKeysTool, CsvQueryTool

# Dot-notation JSON path
result = JsonGetValueTool().call({
    "json": '{"config": {"model": "gpt-4", "temp": 0.7}}',
    "path": "config.model"
})
# {"value": "gpt-4", "found": true}

# List all keys (depth-limited)
result = JsonListKeysTool().call({
    "json": '{"a":1,"b":{"c":2,"d":{"e":3}}}',
    "depth": 3
})
# {"keys": ["a", "b", "b.c", "b.d", "b.d.e"]}

# CSV filter
result = CsvQueryTool().call({
    "csv": "city,pop\\nTokyo,14000000\\nOsaka,2700000\\nKyoto,1500000",
    "filter": "city=Tokyo"
})
# {"rows": [{"city":"Tokyo","pop":"14000000"}], "count": 1}`,
    },
  },

  // ─── COMMUNICATION TOOLS ──────────────────────────────────────────────────────
  {
    id: 'communication-tools',
    topic: 'tools',
    name: 'Communication Tools',
    summary: 'GmailTool (send/list/read) and SlackTool (post_message/list_channels). Both require access tokens via constructor or env var.',
    rust: {
      signature: 'GmailTool::new(access_token) / SlackTool::from_env()',
      description: 'Communication tools for sending and reading messages. Tokens passed explicitly or read from GMAIL_ACCESS_TOKEN / SLACK_BOT_TOKEN.',
      params: [],
      returns: 'Operation result as JSON',
      example: `use flowgentra_ai::core::tools::communication::{GmailTool, SlackTool};

let gmail = GmailTool::from_env()?;   // GMAIL_ACCESS_TOKEN
let slack = SlackTool::from_env()?;   // SLACK_BOT_TOKEN

gmail.call(json!({
    "operation": "send",
    "to": "team@example.com",
    "subject": "Build passed",
    "body": "All tests green.",
})).await?;

slack.call(json!({
    "operation": "post_message",
    "channel": "#deployments",
    "text": ":white_check_mark: v1.2.0 deployed",
})).await?;`,
    },
    python: {
      signature: 'GmailTool(access_token=None) / SlackTool(bot_token=None)',
      description: 'Send messages and read inboxes. Tokens read from env when omitted.',
      params: [
        { name: 'operation', type: 'str', description: 'Gmail: "send"|"list"|"read". Slack: "post_message"|"list_channels"' },
      ],
      returns: 'Operation result as dict',
      example: `from flowgentra_ai.tools import GmailTool, SlackTool

gmail = GmailTool()  # GMAIL_ACCESS_TOKEN
slack = SlackTool()  # SLACK_BOT_TOKEN

# Gmail: send
gmail.call({
    "operation": "send",
    "to": "boss@example.com",
    "subject": "Weekly summary",
    "body": "Done. See attached.",
})

# Gmail: read latest
msgs = gmail.call({"operation": "list", "max_results": 3})
msg  = gmail.call({"operation": "read", "message_id": msgs["messages"][0]["id"]})

# Slack
slack.call({"operation": "post_message", "channel": "#alerts", "text": "Done!"})
channels = slack.call({"operation": "list_channels"})`,
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
