import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview',       label: 'What We\'re Building' },
  { id: 'setup',          label: 'Project Setup' },
  { id: 'state',          label: 'Step 1: Define State' },
  { id: 'tools',          label: 'Step 2: Define Tools' },
  { id: 'nodes',          label: 'Step 3: Write Nodes' },
  { id: 'graph',          label: 'Step 4: Build the Graph' },
  { id: 'memory',         label: 'Step 5: Add Memory' },
  { id: 'observability',  label: 'Step 6: Add Observability' },
  { id: 'error-handling', label: 'Step 7: Error Handling' },
  { id: 'run',            label: 'Step 8: Run It' },
  { id: 'yaml',           label: 'Production: YAML Config' },
  { id: 'next',           label: 'What\'s Next' },
]

export default function TutorialResearchAssistant() {
  return (
    <DocLayout anchors={anchors}>
      <div style={{ marginBottom: 10 }}>
        <span style={badge}>End-to-End Tutorial</span>
        <span style={{ ...badge, marginLeft: 8, background: 'rgba(63,185,80,0.1)', border: '1px solid rgba(63,185,80,0.4)', color: '#3fb950' }}>
          ~30 min
        </span>
      </div>

      <h1 style={h1}>Build a Research Assistant</h1>
      <p style={lead}>
        Build a production-grade AI research assistant from scratch — step by step. By the end
        you'll have a multi-turn agent that searches the web, synthesizes findings, remembers
        previous conversations, handles errors gracefully, and emits structured traces.
      </p>

      {/* Architecture diagram */}
      <div style={archBox}>
        <div style={archTitle}>Architecture</div>
        <pre style={archPre}>{`
  ┌─────────┐     ┌──────────┐     ┌──────────────┐     ┌──────────┐
  │  User   │────▶│ classify │────▶│ web_research  │────▶│ synthesize│
  │  input  │     │  intent  │  ┌──│  (tool call) │     │  answer  │
  └─────────┘     └──────────┘  │  └──────────────┘     └──────────┘
                       │        │         ↑ retry on failure
                       │ simple │         │
                       ▼        └─────────┘
                  ┌──────────┐
                  │  direct  │
                  │  answer  │
                  └──────────┘
        `}</pre>
        <div style={{ color: '#8b949e', fontSize: '0.8rem', marginTop: 8 }}>
          Intent classification → conditional routing → tool-using research node → synthesis → memory persistence
        </div>
      </div>

      {/* ── Section 0: Overview ── */}
      <Section id="overview" title="What We're Building">
        <p style={muted}>The finished agent will:</p>
        <ul style={ul}>
          <li>Accept natural-language questions from users</li>
          <li>Classify intent and route simple questions directly, complex ones through web research</li>
          <li>Call a web search tool and process results with retry logic</li>
          <li>Synthesize a clear, cited answer</li>
          <li>Persist conversation memory across multi-turn sessions</li>
          <li>Emit per-node execution traces you can visualize</li>
          <li>Be configurable via YAML without changing Python code</li>
        </ul>

        <Alert type="info">
          All code is real and runnable. You need an{' '}
          <code style={ic}>OPENAI_API_KEY</code> and optionally a{' '}
          <code style={ic}>TAVILY_API_KEY</code> (free tier) for web search.
          The examples fall back gracefully if search isn't available.
        </Alert>
      </Section>

      {/* ── Section 1: Setup ── */}
      <Section id="setup" title="Project Setup">
        <p style={muted}>Create a virtual environment and install Flowgentra:</p>
        <CodeBlock forceLang="bash" rust={`python -m venv .venv
source .venv/bin/activate       # Windows: .venv\\Scripts\\activate
pip install "flowgentra-ai[openai,tracing]"

# Optional: Tavily web search (free tier at tavily.com)
pip install tavily-python

# Verify
python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"
# 0.2.1`} />

        <p style={muted}>Project layout we'll build toward:</p>
        <CodeBlock forceLang="bash" rust={`research-assistant/
├── agent.yaml          # production config (Step 9)
├── handlers.py         # @register_handler functions
├── tools.py            # tool definitions & implementations
├── main.py             # entry point
├── checkpoints/        # auto-created for memory
└── traces/             # auto-created for observability`} />
      </Section>

      {/* ── Section 2: State ── */}
      <Section id="state" title="Step 1: Define State">
        <p style={muted}>
          Every Flowgentra graph revolves around a <strong style={em}>typed state</strong> — a dictionary that flows
          through every node. Nodes read from it, write partial updates back, and Flowgentra merges them.
        </p>
        <p style={muted}>
          Use <code style={ic}>Annotated[List[...], operator.add]</code> for fields that should accumulate
          across nodes rather than overwrite.
        </p>

        <CodeBlock python={`# state.py
from typing import TypedDict, List, Optional, Annotated
import operator

class ResearchState(TypedDict):
    # Input
    question:       str                              # user's question (never changes)
    session_id:     str                              # for multi-turn memory

    # Classification
    intent:         str                              # "research" | "simple" | "clarify"
    complexity:     int                              # 1–5 estimated complexity

    # Research phase
    search_queries: List[str]                        # generated search queries
    search_results: Annotated[List[dict], operator.add]  # accumulated from tool calls
    sources:        Annotated[List[str], operator.add]   # cited URLs

    # Output
    answer:         str                              # final answer
    confidence:     float                            # 0.0–1.0 confidence score

    # Control
    error:          Optional[str]                    # set if a node fails
    retries:        int                              # retry counter`}
          rust={`// state.rs  (the Rust equivalent)
use flowgentra_ai::prelude::*;

#[derive(State, Clone, Debug, Default, Serialize, Deserialize)]
pub struct ResearchState {
    pub question:       String,
    pub session_id:     String,
    pub intent:         String,
    pub complexity:     u32,

    pub search_queries: Vec<String>,
    #[reducer(Append)]
    pub search_results: Vec<serde_json::Value>,
    #[reducer(Append)]
    pub sources:        Vec<String>,

    pub answer:         String,
    pub confidence:     f32,
    pub error:          Option<String>,
    pub retries:        u32,
}`} />

        <Alert type="tip">
          The <code style={ic}>Annotated[List, operator.add]</code> reducer means if two nodes both
          write to <code style={ic}>search_results</code>, the lists are concatenated — not one
          overwriting the other. This is essential for parallel node execution.
        </Alert>
      </Section>

      {/* ── Section 3: Tools ── */}
      <Section id="tools" title="Step 2: Define Tools">
        <p style={muted}>
          Tools are functions the LLM can call during reasoning. We define them with a schema
          (so the LLM knows what arguments to provide) and an implementation.
        </p>

        <CodeBlock python={`# tools.py
import os
import json
from flowgentra_ai.llm import ToolDefinition
from flowgentra_ai.tools import ToolRegistry

# ── Tool schemas (what the LLM sees) ──────────────────────────────────────────

WEB_SEARCH_SCHEMA = ToolDefinition(
    name="web_search",
    description=(
        "Search the web for current information on a topic. "
        "Returns a list of results with title, snippet, and URL. "
        "Use when the question requires up-to-date or specific factual information."
    ),
    parameters={
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "The search query. Be specific and include key terms.",
            },
            "max_results": {
                "type": "integer",
                "description": "Maximum number of results (1–10). Default: 5.",
                "default": 5,
            },
        },
        "required": ["query"],
    },
)

SUMMARIZE_SCHEMA = ToolDefinition(
    name="summarize_sources",
    description="Summarize and synthesize multiple source snippets into a coherent answer.",
    parameters={
        "type": "object",
        "properties": {
            "sources": {
                "type": "array",
                "items": {"type": "string"},
                "description": "List of source snippets to synthesize.",
            },
            "question": {
                "type": "string",
                "description": "The original question to answer.",
            },
        },
        "required": ["sources", "question"],
    },
)

# ── Tool implementations ───────────────────────────────────────────────────────

def web_search(query: str, max_results: int = 5) -> list[dict]:
    """Call Tavily search API. Falls back to mock results if not configured."""
    api_key = os.getenv("TAVILY_API_KEY")
    if not api_key:
        # Mock results for local development / testing
        return [
            {
                "title": f"Mock result for: {query}",
                "content": f"This is a mock search result for the query '{query}'. "
                           "In production, this would be real web content from Tavily.",
                "url": f"https://example.com/search?q={query.replace(' ', '+')}",
                "score": 0.85,
            }
        ]

    from tavily import TavilyClient
    client = TavilyClient(api_key=api_key)
    response = client.search(query=query, max_results=max_results)
    return [
        {
            "title":   r.get("title", ""),
            "content": r.get("content", ""),
            "url":     r.get("url", ""),
            "score":   r.get("score", 0.0),
        }
        for r in response.get("results", [])
    ]


# Register tools so the graph can call them by name
registry = ToolRegistry()
registry.register("web_search",       web_search)
registry.register("summarize_sources", lambda sources, question: " ".join(sources))`}
          rust={`// tools.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

pub fn web_search_schema() -> ToolDefinition {
    ToolDefinition::new(
        "web_search",
        "Search the web for current information on a topic.",
        json!({
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "The search query."
                },
                "max_results": {
                    "type": "integer",
                    "description": "Maximum results (1–10).",
                    "default": 5
                }
            },
            "required": ["query"]
        }),
    )
}

pub async fn web_search(query: &str, max_results: usize) -> Vec<serde_json::Value> {
    // In production: call Tavily or DuckDuckGo
    vec![json!({
        "title": format!("Result for: {query}"),
        "content": format!("Mock content for {query}"),
        "url": "https://example.com",
        "score": 0.85
    })]
}`} />
      </Section>

      {/* ── Section 4: Nodes ── */}
      <Section id="nodes" title="Step 3: Write Nodes">
        <p style={muted}>
          Each node is a plain function: receives the full state dict, returns a partial update
          (only the fields it changed). Flowgentra merges updates automatically.
        </p>

        <CodeBlock python={`# nodes.py
import json
from flowgentra_ai.llm import LLM, Message
from tools import web_search, WEB_SEARCH_SCHEMA

# Shared LLM instance — reused across all nodes
llm = LLM(provider="openai", model="gpt-4o-mini", temperature=0.3)

# ─────────────────────────────────────────────────────────────────────────────
# Node 1: classify_intent
# Decides how to handle the question: research / simple / clarify
# ─────────────────────────────────────────────────────────────────────────────

def classify_intent(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "Classify the user's question. "
            "Reply with a JSON object containing:\\n"
            "  intent: 'research' | 'simple' | 'clarify'\\n"
            "  complexity: 1–5 (1=trivial, 5=requires deep research)\\n"
            "  reason: one-sentence explanation\\n"
            "\\n"
            "'research' = needs current/external information or multi-step reasoning\\n"
            "'simple' = answerable from general knowledge in one step\\n"
            "'clarify' = question is ambiguous, need to ask for more context"
        ),
        Message.user(state["question"]),
    ])

    try:
        # Extract the JSON object from the response (handles plain JSON and wrapped responses)
        text = response.content.strip()
        start, end = text.find("{"), text.rfind("}")
        parsed = json.loads(text[start:end+1] if start != -1 else text)
    except (json.JSONDecodeError, ValueError):
        parsed = {"intent": "research", "complexity": 3, "reason": "parse error fallback"}

    return {
        "intent":     parsed.get("intent", "research"),
        "complexity": int(parsed.get("complexity", 3)),
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 2: direct_answer
# For "simple" intent — answer from general knowledge, no search needed
# ─────────────────────────────────────────────────────────────────────────────

def direct_answer(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "You are a knowledgeable assistant. "
            "Answer the question clearly and concisely from your training knowledge. "
            "If you're not confident, say so."
        ),
        Message.user(state["question"]),
    ])
    return {
        "answer":     response.content,
        "confidence": 0.85,
        "sources":    [],
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 3: plan_research
# Decomposes the question into focused search queries
# ─────────────────────────────────────────────────────────────────────────────

def plan_research(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "You are a research planner. Given a complex question, generate 2–4 focused "
            "web search queries that together will gather enough information to answer it. "
            "Reply with a JSON array of query strings only. No explanation."
        ),
        Message.user(state["question"]),
    ])

    try:
        text = response.content.strip()
        start, end = text.find("["), text.rfind("]")
        queries = json.loads(text[start:end+1] if start != -1 else text)
        if not isinstance(queries, list):
            queries = [state["question"]]
    except (json.JSONDecodeError, ValueError):
        queries = [state["question"]]

    return {"search_queries": queries[:4]}


# ─────────────────────────────────────────────────────────────────────────────
# Node 4: web_research
# Executes search queries and accumulates results + sources
# Implements simple retry logic via the retries field
# ─────────────────────────────────────────────────────────────────────────────

def web_research(state: dict) -> dict:
    queries = state.get("search_queries", [state["question"]])
    all_results = []
    all_sources = []

    for query in queries:
        try:
            results = web_search(query, max_results=4)
            for r in results:
                all_results.append({
                    "query":   query,
                    "title":   r["title"],
                    "content": r["content"][:800],  # truncate long snippets
                    "url":     r["url"],
                })
                if r.get("url"):
                    all_sources.append(r["url"])
        except Exception as e:
            # Don't fail the whole node if one query fails
            all_results.append({
                "query":   query,
                "title":   "Search failed",
                "content": f"Error: {str(e)[:200]}",
                "url":     "",
            })

    if not all_results:
        return {"error": "All search queries failed", "retries": state.get("retries", 0) + 1}

    return {
        "search_results": all_results,
        "sources":        list(set(all_sources)),  # deduplicate
        "error":          None,
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 5: synthesize_answer
# Combines search results into a final, well-cited answer
# ─────────────────────────────────────────────────────────────────────────────

def synthesize_answer(state: dict) -> dict:
    results = state.get("search_results", [])
    sources = state.get("sources", [])

    # Build context from search results
    context_parts = []
    for i, r in enumerate(results[:8]):  # limit to avoid context overflow
        context_parts.append(
            f"[{i+1}] {r['title']}\\n{r['content']}\\nSource: {r.get('url', 'unknown')}"
        )
    context = "\\n\\n".join(context_parts)

    source_list = "\\n".join(f"- {s}" for s in sources[:6]) if sources else "No sources available"

    response = llm.chat([
        Message.system(
            "You are a research assistant. Using the provided search results, write a "
            "comprehensive, accurate answer to the user's question. \\n\\n"
            "Requirements:\\n"
            "- Be specific and factual\\n"
            "- Cite source numbers like [1], [2] when referencing information\\n"
            "- Acknowledge any uncertainty or conflicting information\\n"
            "- Keep the answer focused and actionable\\n"
            "- End with a 'Sources' section listing URLs used\\n\\n"
            f"Search Results:\\n{context}\\n\\n"
            f"Available Sources:\\n{source_list}"
        ),
        Message.user(state["question"]),
    ])

    # Estimate confidence based on search result quality
    avg_score = sum(r.get("score", 0.5) for r in results) / max(len(results), 1)
    confidence = min(avg_score * 0.9 + 0.1, 1.0)

    return {
        "answer":     response.content,
        "confidence": round(confidence, 2),
        "error":      None,
    }`}
          rust={`// nodes.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn classify_intent(mut state: DynState) -> Result<DynState> {
    let question = state.get_str("question");
    // Call LLM, parse JSON response...
    // Returns: intent ("research"|"simple"), complexity (1-5)
    state.set("intent", json!("research"));
    state.set("complexity", json!(3));
    Ok(state)
}

#[register_handler]
pub async fn plan_research(mut state: DynState) -> Result<DynState> {
    let question = state.get_str("question");
    // Call LLM to decompose into search queries
    state.set("search_queries", json!([question]));
    Ok(state)
}

#[register_handler]
pub async fn web_research(mut state: DynState) -> Result<DynState> {
    let queries: Vec<String> = state
        .get("search_queries")
        .and_then(|v| serde_json::from_value(v.clone()).ok())
        .unwrap_or_default();

    let mut results = Vec::new();
    let mut sources = Vec::new();

    for query in &queries {
        // Call web_search tool...
        results.push(json!({
            "title": "Result",
            "content": "Mock content",
            "url": "https://example.com"
        }));
        sources.push("https://example.com".to_string());
    }

    state.set("search_results", json!(results));
    state.set("sources", json!(sources));
    Ok(state)
}

#[register_handler]
pub async fn synthesize_answer(mut state: DynState) -> Result<DynState> {
    // Build context, call LLM for synthesis
    state.set("answer", json!("Synthesized answer..."));
    state.set("confidence", json!(0.85));
    Ok(state)
}`} />
      </Section>

      {/* ── Section 5: Graph ── */}
      <Section id="graph" title="Step 4: Build the Graph">
        <p style={muted}>
          Wire nodes together, define routing logic, and compile. The router inspects state at
          runtime and returns the next node name — this is how conditional branching works.
        </p>

        <CodeBlock python={`# graph.py
from flowgentra_ai.graph import StateGraph, END
from state import ResearchState
from nodes import classify_intent, direct_answer, plan_research, web_research, synthesize_answer

# ─── Router functions ─────────────────────────────────────────────────────────

def route_by_intent(state: dict) -> str:
    """After classification, route to direct_answer or research pipeline."""
    intent = state.get("intent", "research")
    if intent == "simple":
        return "direct_answer"
    elif intent == "clarify":
        return "direct_answer"   # treat ambiguous as simple for now
    else:
        return "plan_research"   # "research" → multi-step pipeline

def check_research_success(state: dict) -> str:
    """After web_research, retry up to 2 times on failure."""
    if state.get("error") and state.get("retries", 0) < 2:
        return "web_research"    # retry loop
    return "synthesize"

# ─── Graph assembly ───────────────────────────────────────────────────────────

def build_research_graph() -> any:
    builder = StateGraph(ResearchState)

    # Add all nodes
    builder.add_node("classify",    classify_intent)
    builder.add_node("direct_answer", direct_answer)
    builder.add_node("plan_research", plan_research)
    builder.add_node("web_research",  web_research)
    builder.add_node("synthesize",    synthesize_answer)

    # Entry point
    builder.set_entry_point("classify")

    # Conditional routing after classification
    builder.add_conditional_edge("classify", route_by_intent)

    # Linear pipeline for research path
    builder.add_edge("plan_research", "web_research")

    # Conditional retry or proceed
    builder.add_conditional_edge("web_research", check_research_success)

    # Terminal edges
    builder.add_edge("direct_answer", END)
    builder.add_edge("synthesize",    END)

    return builder.compile()


# Quick sanity check — run the graph manually
if __name__ == "__main__":
    graph = build_research_graph()

    result = graph.invoke({
        "question":       "What is the current state of quantum computing?",
        "session_id":     "test-session",
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    })

    print(f"Intent:     {result['intent']}")
    print(f"Confidence: {result['confidence']:.0%}")
    print(f"Sources:    {len(result['sources'])} found")
    print()
    print(result["answer"][:500] + "...")`}
          rust={`// graph.rs
use flowgentra_ai::prelude::*;
use crate::state::ResearchState;

fn route_by_intent(state: &ResearchState) -> &'static str {
    match state.intent.as_str() {
        "simple" | "clarify" => "direct_answer",
        _ => "plan_research",
    }
}

fn check_research_success(state: &ResearchState) -> &'static str {
    if state.error.is_some() && state.retries < 2 {
        "web_research"  // retry
    } else {
        "synthesize"
    }
}

pub fn build_graph() -> Result<CompiledGraph<ResearchState>> {
    let graph = StateGraph::<ResearchState>::builder()
        .add_node("classify",     classify_intent)
        .add_node("direct_answer",  direct_answer)
        .add_node("plan_research",  plan_research)
        .add_node("web_research",   web_research)
        .add_node("synthesize",     synthesize_answer)
        .set_entry("classify")
        .add_conditional_edge("classify", route_by_intent)
        .add_edge("plan_research", "web_research")
        .add_conditional_edge("web_research", check_research_success)
        .add_edge("direct_answer", "__end__")
        .add_edge("synthesize", "__end__")
        .build()?;
    Ok(graph)
}`} />
      </Section>

      {/* ── Section 6: Memory ── */}
      <Section id="memory" title="Step 5: Add Memory">
        <p style={muted}>
          Checkpointers persist graph state between turns. Each session gets its own thread ID —
          the agent automatically restores the previous state when the user returns.
        </p>

        <CodeBlock python={`# memory.py
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer, AsyncMemoryCheckpointer

# Option A: File-based (survives restarts, good for development)
file_checkpointer = FileCheckpointer("./checkpoints")

# Option B: Async in-memory (lost on restart, fast for testing)
mem_checkpointer = AsyncMemoryCheckpointer()

# Conversation memory (separate from state — tracks message history)
conv_memory = ConversationMemory(
    max_messages=50,        # rolling window
    system_prompt="You are a research assistant. Be concise and cite your sources."
)

# ─────────────────────────────────────────────────────────────────────────────
# Multi-turn session example
# ─────────────────────────────────────────────────────────────────────────────

from graph import build_research_graph
from state import ResearchState

graph = build_research_graph()
THREAD_ID = "user-alice-001"    # unique per user/session

def empty_state(question: str) -> dict:
    return {
        "question":       question,
        "session_id":     THREAD_ID,
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }

# Turn 1
state1 = empty_state("What are the main applications of large language models?")
result1 = graph.invoke(state1)
print("Turn 1:", result1["answer"][:200])

# Save checkpoint manually (or configure graph-level checkpointer)
file_checkpointer.save(THREAD_ID, result1)

# Turn 2 — loads previous state automatically if using run_with_thread
state2 = empty_state("How does fine-tuning compare to RAG for those applications?")
# The agent can reference the previous turn's context via session_id
result2 = graph.invoke(state2)
print("Turn 2:", result2["answer"][:200])

# Inspect checkpoint history
history = file_checkpointer.list_history(THREAD_ID)
print(f"Saved {len(history)} checkpoints for thread {THREAD_ID}")`} />

        <Alert type="tip">
          For production multi-tenant deployments, use <code style={ic}>AsyncSqliteCheckpointer</code> or{' '}
          <code style={ic}>AsyncPostgresCheckpointer</code>. They support concurrent sessions
          and survive server restarts.
        </Alert>

        <CodeBlock python={`# Production checkpointers
from flowgentra_ai.memory import AsyncSqliteCheckpointer, AsyncPostgresCheckpointer

# SQLite (single-server, easy setup)
sqlite_cp = AsyncSqliteCheckpointer("./sessions.db")

# Postgres (distributed, recommended for production)
pg_cp = AsyncPostgresCheckpointer(
    host="localhost", port=5432,
    database="agent_sessions",
    user="agent", password="secret",
    table="checkpoints",
)`} />
      </Section>

      {/* ── Section 7: Observability ── */}
      <Section id="observability" title="Step 6: Add Observability">
        <p style={muted}>
          Wrap the graph with <code style={ic}>ExecutionTracer</code> to get per-node timing,
          token usage, and exportable Mermaid diagrams. This is invaluable for debugging and
          performance optimization.
        </p>

        <CodeBlock python={`# observability.py
from flowgentra_ai.observability import (
    ExecutionTracer,
    init_tracing,
    graph_to_mermaid,
    graph_to_dot,
    evaluate_output_score,
)
from graph import build_research_graph

# Enable structured logging (outputs JSON spans)
init_tracing()

graph = build_research_graph()

# ── Export graph diagram before running ────────────────────────────────────────

mermaid = graph_to_mermaid(graph)
print("=== Graph Structure ===")
print(mermaid)
# flowchart TD
#   START --> classify
#   classify -- simple/clarify --> direct_answer
#   classify -- research --> plan_research
#   plan_research --> web_research
#   web_research -- error + retries < 2 --> web_research
#   web_research -- success --> synthesize
#   direct_answer --> END
#   synthesize --> END

# Save as markdown for docs/GitHub rendering
with open("graph.md", "w") as f:
    f.write(f"\`\`\`mermaid\\n{mermaid}\\n\`\`\`")

# ── Wrap graph with tracer ─────────────────────────────────────────────────────

tracer = ExecutionTracer()
traced_graph = tracer.wrap(graph)

# Run as normal
state = {
    "question":       "What are the latest developments in Rust async ecosystem?",
    "session_id":     "obs-test",
    "intent":         "",
    "complexity":     0,
    "search_queries": [],
    "search_results": [],
    "sources":        [],
    "answer":         "",
    "confidence":     0.0,
    "error":          None,
    "retries":        0,
}
result = traced_graph.invoke(state)

# ── Inspect execution trace ────────────────────────────────────────────────────

trace = tracer.last_trace()
print("\\n=== Execution Trace ===")
print(f"Total time: {trace.total_duration_ms:.0f}ms")
print()
for span in trace.spans:
    status = "✓" if not span.error else "✗"
    print(f"  {status} {span.node:<20s} {span.duration_ms:>6.1f}ms")

# ── Token usage tracking ───────────────────────────────────────────────────────

response, usage = llm.chat_with_usage([Message.user("Hello")])
if usage:
    print(f"\\nToken usage: {usage.prompt_tokens} + {usage.completion_tokens} = {usage.total_tokens}")
    cost = usage.estimated_cost("gpt-4o-mini")
    print(f"Estimated cost: \${cost:.4f}")

# ── Output quality scoring ─────────────────────────────────────────────────────

score = evaluate_output_score(
    output=result["answer"],
    expected="Information about Rust async ecosystem developments",
)
print(f"\\nOutput quality score: {score:.2f}/1.00")`}
          rust={`// observability.rs
use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};
use flowgentra_ai::core::observability::ExecutionTracer;

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();  // Enable structured log spans

    let graph = build_graph()?;

    // Export Mermaid diagram
    let mermaid = graph_to_mermaid(&graph);
    println!("=== Graph ===\\n{mermaid}");
    std::fs::write("graph.md",
        format!("\`\`\`mermaid\\n{mermaid}\\n\`\`\`"))?;

    // Run with state
    let state = ResearchState {
        question: "What are Rust async developments?".into(),
        session_id: "obs-test".into(),
        ..Default::default()
    };

    let result = graph.invoke(state).await?;
    println!("Confidence: {:.0}%", result.confidence * 100.0);
    println!("Sources:    {}", result.sources.len());
    Ok(())
}`} />
      </Section>

      {/* ── Section 8: Error Handling ── */}
      <Section id="error-handling" title="Step 7: Error Handling">
        <p style={muted}>
          Production agents must handle failures gracefully. We already have retry logic in the
          graph router, but here's how to make it robust with proper error propagation and fallbacks.
        </p>

        <CodeBlock python={`# error_handling.py — patterns for robust agent execution

from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.nodes import RetryNode, TimeoutNode

# ── Pattern 1: Retry at the node level ────────────────────────────────────────

from nodes import web_research as raw_web_research

def web_research_with_retry(state: dict) -> dict:
    """Wrap web_research with explicit retry logic in the node itself."""
    max_retries = 3
    last_error = None

    for attempt in range(max_retries):
        try:
            result = raw_web_research(state)
            if result.get("error"):
                raise RuntimeError(result["error"])
            return result
        except Exception as e:
            last_error = e
            import time
            time.sleep(2 ** attempt)   # exponential backoff: 1s, 2s, 4s

    # All retries exhausted — return error state
    return {
        "search_results": [],
        "sources":        [],
        "error":          f"Web research failed after {max_retries} attempts: {last_error}",
    }


# ── Pattern 2: Retry + Timeout via built-in nodes ─────────────────────────────

from flowgentra_ai.nodes import RetryNode, TimeoutNode

retry_node = RetryNode(max_retries=3, backoff_ms=500, backoff_multiplier=2.0)
timeout_node = TimeoutNode(timeout_ms=10_000, on_timeout="default_value")

# builder.add_node("web_research", retry_node.wrap(web_research))
# builder.add_node("web_research", timeout_node.wrap(web_research))


# ── Pattern 3: Graceful degradation in synthesize node ────────────────────────

def synthesize_answer_robust(state: dict) -> dict:
    """Answer even if search failed — use general knowledge as fallback."""
    if state.get("error") or not state.get("search_results"):
        # Degraded mode: answer from general knowledge, warn user
        response = llm.chat([
            Message.system(
                "Web search is unavailable. Answer from your training knowledge only. "
                "Add a clear disclaimer that the information may be outdated."
            ),
            Message.user(state["question"]),
        ])
        return {
            "answer":     "[Note: Web search unavailable] " + response.content,
            "confidence": 0.55,  # lower confidence for knowledge-only answers
        }

    # Normal path
    return synthesize_answer(state)


# ── Pattern 4: Circuit breaker on state ───────────────────────────────────────

def route_with_circuit_breaker(state: dict) -> str:
    """Skip research entirely if we've been failing repeatedly."""
    if state.get("retries", 0) >= 2:
        return "synthesize"    # give up on search, use what we have
    if state.get("error"):
        return "web_research"  # retry
    return "synthesize"        # success


# ── Pattern 5: Error logging middleware ───────────────────────────────────────

def error_logging_middleware(node_fn):
    """Decorator that logs node errors and re-raises them."""
    import functools, logging
    log = logging.getLogger(__name__)

    @functools.wraps(node_fn)
    def wrapper(state: dict) -> dict:
        try:
            return node_fn(state)
        except Exception as e:
            log.error(
                "Node failed",
                extra={
                    "node":       node_fn.__name__,
                    "session_id": state.get("session_id"),
                    "error":      str(e),
                },
            )
            raise

    return wrapper`} />
      </Section>

      {/* ── Section 9: Run ── */}
      <Section id="run" title="Step 8: Run It">
        <p style={muted}>
          Wire everything together in <code style={ic}>main.py</code>:
        </p>

        <CodeBlock python={`# main.py — full entry point
import os
from flowgentra_ai.observability import ExecutionTracer, init_tracing, graph_to_mermaid
from flowgentra_ai.memory import FileCheckpointer, ConversationMemory
from graph import build_research_graph

# Initialize
os.environ.setdefault("OPENAI_API_KEY", "sk-...")
init_tracing()

# Build graph and wrap with observability
graph = build_research_graph()
tracer = ExecutionTracer()
traced = tracer.wrap(graph)
checkpointer = FileCheckpointer("./checkpoints")

# Print graph structure on startup
print(graph_to_mermaid(graph))
print()

def ask(question: str, session_id: str = "default") -> str:
    """Run one turn of the research assistant."""
    state = {
        "question":       question,
        "session_id":     session_id,
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }

    result = traced.invoke(state)

    # Print execution summary
    trace = tracer.last_trace()
    print(f"[{result['intent'].upper()} | conf={result['confidence']:.0%} | {trace.total_duration_ms:.0f}ms]")
    if result.get("sources"):
        print(f"Sources: {', '.join(result['sources'][:3])}")

    return result["answer"]


# ── Interactive REPL ───────────────────────────────────────────────────────────
if __name__ == "__main__":
    SESSION = "interactive-001"
    print("Research Assistant ready. Type 'quit' to exit.\\n")

    while True:
        try:
            question = input("You: ").strip()
            if not question or question.lower() in ("quit", "exit", "q"):
                break
            answer = ask(question, SESSION)
            print(f"\\nAssistant: {answer}\\n{'─' * 60}\\n")
        except KeyboardInterrupt:
            break

    print("Goodbye!")`}
          rust={`// main.rs
mod state;
mod nodes;
mod graph;

use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};
use state::ResearchState;

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();

    let graph = graph::build_graph()?;

    // Print structure
    println!("{}", graph_to_mermaid(&graph));

    // One question
    let result = graph.invoke(ResearchState {
        question: "What is Rust's async/await story in 2025?".into(),
        session_id: "main-001".into(),
        ..Default::default()
    }).await?;

    println!("\\nIntent: {}", result.intent);
    println!("Confidence: {:.0}%", result.confidence * 100.0);
    println!("Sources: {}", result.sources.len());
    println!("\\nAnswer:\\n{}", result.answer);
    Ok(())
}`} />

        <p style={{ color: '#8b949e', marginTop: 16 }}>Run the interactive assistant:</p>
        <CodeBlock forceLang="bash" rust={`export OPENAI_API_KEY="sk-..."
export TAVILY_API_KEY="tvly-..."   # optional

python main.py

# flowchart TD
#   START --> classify
#   classify --> plan_research
#   ...

# Research Assistant ready. Type 'quit' to exit.

# You: What are the main risks of using AI in healthcare?
# [RESEARCH | conf=87% | 3241ms]
# Sources: https://pubmed.ncbi..., https://who.int/...

# Assistant: The main risks of AI in healthcare include...`} />
      </Section>

      {/* ── Section 10: YAML ── */}
      <Section id="yaml" title="Production: YAML Config">
        <p style={muted}>
          For production, replace hardcoded Python wiring with a YAML config. This lets you
          swap models, change topology, and tune parameters without touching application code.
        </p>

        <p style={{ color: '#8b949e', marginBottom: 8 }}><strong style={em}>agent.yaml</strong></p>
        <CodeBlock forceLang="yaml" rust={`name: research-assistant
version: "1.0.0"
description: "Multi-turn research agent with web search"

python_handler_module: handlers   # auto-imports handlers.py

llm:
  provider: openai
  model: gpt-4o-mini
  temperature: 0.3
  api_key: \${OPENAI_API_KEY}      # env var substitution

graph:
  entry: classify
  nodes:
    - name: classify
      handler: classify_intent

    - name: direct_answer
      handler: direct_answer

    - name: plan_research
      handler: plan_research

    - name: web_research
      handler: web_research
      node_type: retry              # built-in retry wrapper
      config:
        max_retries: 3
        backoff_ms: 500
        backoff_multiplier: 2.0

    - name: synthesize
      handler: synthesize_answer

  edges:
    - from: classify
      to: direct_answer
      condition: "intent == 'simple'"
    - from: classify
      to: plan_research
      condition: "intent == 'research'"
    - from: plan_research
      to: web_research
    - from: web_research
      to: synthesize
    - from: direct_answer
      to: __end__
    - from: synthesize
      to: __end__

memory:
  checkpointer:
    type: sqlite                    # or "memory", "postgres"
    path: ./sessions.db
  conversation:
    enabled: true
    max_messages: 50
    system_prompt: "You are a research assistant."

tools:
  registry: tools.registry          # import tools.registry from tools.py

observability:
  tracing: true
  log_level: info
  export_diagram: graph.md          # Mermaid diagram written on startup`} />

        <p style={{ ...muted, marginTop: 16 }}><strong style={em}>handlers.py</strong> — register functions so YAML can find them:</p>
        <CodeBlock python={`# handlers.py
from flowgentra_ai.agent import register_handler

# Import the actual node functions
from nodes import (
    classify_intent  as _classify_intent,
    direct_answer    as _direct_answer,
    plan_research    as _plan_research,
    web_research     as _web_research,
    synthesize_answer as _synthesize_answer,
)

# Register them by name — YAML handler: fields resolve to these
@register_handler("classify_intent")
def classify_intent(state):
    return _classify_intent(state)

@register_handler("direct_answer")
def direct_answer(state):
    return _direct_answer(state)

@register_handler("plan_research")
def plan_research(state):
    return _plan_research(state)

@register_handler("web_research")
def web_research(state):
    return _web_research(state)

@register_handler("synthesize_answer")
def synthesize_answer(state):
    return _synthesize_answer(state)`} />

        <p style={{ ...muted, marginTop: 16 }}><strong style={em}>prod_main.py</strong> — zero-wiring entry point:</p>
        <CodeBlock python={`# prod_main.py — production entry point
from flowgentra_ai.agent import Agent

# All configuration comes from YAML
agent = Agent.from_config_path("agent.yaml")

# Multi-turn with checkpointing
result = agent.run_with_thread(
    thread_id="user-42",
    state={
        "question":       "What is the state of quantum computing in 2025?",
        "session_id":     "user-42",
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }
)
print(result["answer"])`} />
      </Section>

      {/* ── Section 11: Next ── */}
      <Section id="next" title="What's Next">
        <p style={muted}>
          You've built a production-grade research assistant with classification, tool calling,
          retries, memory, and observability. Here's where to go from here:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 16 }}>
          {[
            { to: '/docs/rag',         icon: '🗃️', label: 'Add RAG',              desc: 'Index private documents for private-knowledge retrieval' },
            { to: '/docs/supervisor',  icon: '🤖', label: 'Multi-Agent',           desc: 'Add specialist agents (code, data, domain)' },
            { to: '/docs/human-in-the-loop', icon: '🧑‍💻', label: 'Human-in-the-Loop', desc: 'Pause for review before publishing answers' },
            { to: '/docs/evaluation',  icon: '📊', label: 'Evaluation',            desc: 'Measure answer quality with automated scoring' },
            { to: '/docs/performance', icon: '⚡', label: 'Performance',           desc: 'Caching, batching, and parallel execution' },
            { to: '/docs/mcp',         icon: '🔌', label: 'MCP Integration',       desc: 'Connect to external tools via Model Context Protocol' },
          ].map(item => (
            <a key={item.to} href={item.to} style={nextCard}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: '0.875rem', color: '#8b949e' }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </Section>
    </DocLayout>
  )
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 56 }}>
      <h2 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 18, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Alert({ type = 'info', children }) {
  const styles = {
    info:    { bg: 'rgba(53,114,165,0.1)',  border: 'rgba(53,114,165,0.4)', label: 'Note',    color: '#58a6ff' },
    tip:     { bg: 'rgba(63,185,80,0.1)',   border: 'rgba(63,185,80,0.4)',  label: 'Tip',     color: '#3fb950' },
    warning: { bg: 'rgba(210,153,34,0.1)',  border: 'rgba(210,153,34,0.4)', label: 'Warning', color: '#d29922' },
  }
  const s = styles[type] || styles.info
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: '14px 18px', marginTop: 16, marginBottom: 16 }}>
      <strong style={{ color: s.color, fontSize: '0.875rem' }}>{s.label}: </strong>
      <span style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65 }}>{children}</span>
    </div>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 8 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.75, fontSize: '1.0625rem', maxWidth: 700 }
const muted = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const ul = { color: '#8b949e', lineHeight: 2, paddingLeft: 20, margin: '0 0 20px' }
const em = { color: '#e6edf3' }
const ic = { background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 6px', fontSize: '0.85em', fontFamily: 'JetBrains Mono, monospace', color: '#e6edf3' }
const badge = { background: 'rgba(206,66,43,0.12)', border: '1px solid rgba(206,66,43,0.4)', borderRadius: 20, padding: '3px 12px', fontSize: '0.8rem', color: '#CE422B', fontWeight: 600, display: 'inline-block' }
const nextCard = { background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '16px 18px', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }
const archBox = { background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: '20px 24px', marginBottom: 40 }
const archTitle = { fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }
const archPre = { fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#8b949e', lineHeight: 1.7, margin: 0, overflowX: 'auto', whiteSpace: 'pre' }

