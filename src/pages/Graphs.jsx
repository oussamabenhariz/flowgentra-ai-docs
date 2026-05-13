import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'anatomy', label: 'Anatomy of a Graph' },
  { id: 'building', label: 'Building a Graph' },
  { id: 'conditional-routing', label: 'Conditional Routing' },
  { id: 'invoking', label: 'Invoking a Graph' },
  { id: 'special-nodes', label: 'Special Nodes' },
]

export default function Graphs() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Graph Execution
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        A graph is the core execution unit in Flowgentra. It defines which nodes run, in which order, and under what conditions.
      </p>

      <Section id="anatomy" title="Anatomy of a Graph">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20,
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#8b949e',
          textAlign: 'center'
        }}>
          {`          entry point
               │
               ▼
          [Node A]
         /        \\
   (cond)          (cond)
       │                │
       ▼                ▼
  [Node B]          [Node C]
       │                │
       └────────┬───────┘
                ▼
             __end__`}
        </div>
        <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
          Every graph has:
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginTop: 12 }}>
          <li>An <strong style={{ color: '#e6edf3' }}>entry point</strong> — the first node to run</li>
          <li><strong style={{ color: '#e6edf3' }}>Nodes</strong> — functions that transform state</li>
          <li><strong style={{ color: '#e6edf3' }}>Edges</strong> — connections between nodes (fixed or conditional)</li>
          <li>A <strong style={{ color: '#e6edf3' }}>terminal</strong> — <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>END</code> / <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"__end__"</code> signals the graph to stop</li>
        </ul>
      </Section>

      <Section id="building" title="Building a Graph">
        <CodeBlock
          rust={`use flowgentra_ai::{StateGraph, DynState};

let graph = StateGraph::builder()
    .add_node("fetch",   fetch_fn)
    .add_node("process", process_fn)
    .add_node("respond", respond_fn)
    .entry("fetch")
    .edge("fetch",   "process")
    .edge("process", "respond")
    .edge("respond", "__end__")
    .build();`}
          python={`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

class MyState(TypedDict):
    input: str
    result: str

builder = StateGraph(MyState)

# Add nodes
builder.add_node("fetch",   fetch_fn)
builder.add_node("process", process_fn)
builder.add_node("respond", respond_fn)

# Set entry point
builder.set_entry_point("fetch")

# Fixed edges
builder.add_edge("fetch", "process")
builder.add_edge("process", "respond")
builder.add_edge("respond", END)

# Compile — after this the graph is immutable
graph = builder.compile()

# Run
result = graph.invoke({"input": "hello", "result": ""})`}
        />
      </Section>

      <Section id="conditional-routing" title="Conditional Routing">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          When you need different nodes to run based on state, use a <strong style={{ color: '#e6edf3' }}>conditional edge</strong>. Your router function receives the current state and returns the name of the next node.
        </p>
        <CodeBlock
          rust={`.conditional_edge("evaluate", |state: &DynState| {
    let score = state.get_float("confidence").unwrap_or(0.0);
    if score > 0.8 { "accept" }
    else if score > 0.5 { "review" }
    else { "reject" }
})`}
          python={`def router(state):
    score = state.get("confidence") or 0
    if score > 0.8:
        return "accept"
    elif score > 0.5:
        return "review"
    return "reject"

builder.add_conditional_edge("evaluate", router)
# Each possible return value must be a node name`}
        />
        <div style={{
          background: '#0d1117',
          border: '1px solid #d29922',
          borderRadius: 8,
          padding: '16px',
          marginTop: 16,
          marginBottom: 16
        }}>
          <div style={{ color: '#d29922', fontWeight: 600, marginBottom: 8 }}>⚠️ Tip</div>
          <p style={{ color: '#8b949e', margin: 0, lineHeight: 1.6 }}>
            Your router's return values must be node names (or <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"__end__"</code>). If a router returns an unknown name, the engine will panic at compile/build time — not silently at runtime.
          </p>
        </div>
      </Section>

      <Section id="invoking" title="Invoking a Graph">
        <CodeBlock
          rust={`// Basic
let result = graph.invoke(state).await?;

// With thread ID
let result = graph.invoke_with_thread("thread-1", state).await?;`}
          python={`# Basic — no persistence
result = graph.invoke(State({"input": "data"}))

# With thread ID — enables checkpointing
result = graph.invoke_with_thread("thread-1", State({"input": "data"}))`}
        />
      </Section>

      <Section id="special-nodes" title="Special Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The builder has convenience methods for common patterns. Use these instead of implementing the logic manually.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Retry Node</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Automatically retries with exponential backoff when the node function fails.
        </p>
        <CodeBlock
          rust={`.add_retry_node("fetch_api", fetch_fn, RetryConfig {
    max_retries: 3,
    backoff_ms: 1000,
    backoff_multiplier: 2.0,
    max_backoff_ms: 30_000,
})`}
          python={`builder.add_retry_node(
    "fetch_api",
    fetch_fn,
    max_retries=3,         # attempt count (default: 3)
    backoff_ms=1000,       # first wait (default: 1000ms)
    backoff_multiplier=2.0, # doubles each retry (default: 2.0)
    max_backoff_ms=30000,   # cap (default: 30s)
)`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Timeout Node</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Kills the function if it takes too long.
        </p>
        <CodeBlock
          rust={`.add_timeout_node("slow_op", slow_fn, TimeoutConfig {
    timeout_ms: 5000,
    on_timeout: OnTimeout::Error,
})`}
          python={`builder.add_timeout_node(
    "slow_op",
    slow_fn,
    timeout_ms=5000,
    on_timeout="error",   # "error" (default) or "skip"
)
# on_timeout="skip" returns the original state unchanged`}
        />
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}