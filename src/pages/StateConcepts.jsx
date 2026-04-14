import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what-is-state',   label: 'What is State?' },
  { id: 'typed-state',     label: 'Typed State' },
  { id: 'reducers',        label: 'Reducers (Parallel Merges)' },
  { id: 'state-types',     label: 'State Types' },
  { id: 'patterns',        label: 'Design Patterns' },
  { id: 'serialization',   label: 'Serialization' },
]

export default function StateConcepts() {
  const { language } = useLanguage()
  const isRust = language === 'rust'

  return (
    <DocLayout anchors={anchors}>
      <h1 style={h1}>State</h1>
      <p style={lead}>
        State is the single source of truth that flows through your entire graph.
        Every node reads from state and writes to state. Getting state design right is the most important decision in a Flowgentra agent.
      </p>

      <Section id="what-is-state" title="What is State?">
        <p style={muted}>
          Think of state as a shared whiteboard. When the graph starts, it's initialized with your input data.
          Each node reads from the board, does its work, and writes its output back.
          When the graph finishes, you read the final answers from the board.
        </p>
        <p style={muted}>
          Unlike function arguments, state <strong style={{ color: '#e6edf3' }}>accumulates</strong> across nodes.
          A node can read a key written by any previous node in the execution path.
        </p>

        <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '16px 20px', marginTop: 4 }}>
          <pre style={{ margin: 0, color: '#8b949e', fontSize: '0.85rem', lineHeight: 2, fontFamily: 'JetBrains Mono, monospace' }}>{`initial state: { query: "..." }
        ↓
  [classify node]  → writes: { category: "technical" }
        ↓
  [answer node]    → writes: { response: "..." }
        ↓
  [format node]    → writes: { formatted: "..." }
        ↓
final state: { query: "...", category: "technical", response: "...", formatted: "..." }`}</pre>
        </div>
      </Section>

      <Section id="typed-state" title="Typed State">
        <p style={muted}>
          The recommended approach is to use <strong style={{ color: '#e6edf3' }}>typed state</strong>.
          In Rust, this means a struct with <code style={inlineCode}>#[derive(State)]</code>.
          In Python, this means a <code style={inlineCode}>TypedDict</code>.
          Typed state gives you IDE autocomplete and catches typos at compile time (Rust) or during development (Python).
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::prelude::*;
use serde::{Serialize, Deserialize};

// Derive State + standard derives
#[derive(State, Default, Clone, Debug, Serialize, Deserialize)]
struct AgentState {
    // Input fields (set before invocation)
    query:      String,
    user_id:    String,

    // Output fields (written by nodes)
    category:   String,
    response:   String,
    formatted:  String,

    // Control fields (used for routing)
    done:       bool,
    error:      Option<String>,
}

// Nodes receive a mutable reference — just modify in place
#[node]
async fn classify(state: &mut AgentState) -> Result<()> {
    state.category = classify_query(&state.query).await?;
    Ok(())
}

// Build graph with the typed state
let graph = StateGraph::<AgentState>::builder()
    .add_node("classify", classify)
    .set_entry("classify")
    .build()?;`}
          python={`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

# TypedDict gives you type hints and IDE autocomplete
class AgentState(TypedDict):
    # Input fields
    query:     str
    user_id:   str

    # Output fields
    category:  str
    response:  str
    formatted: str

    # Control fields
    done:      bool
    error:     str | None  # Python 3.10+

# Nodes receive state dict, return updated dict (immutable pattern)
def classify(state: AgentState) -> AgentState:
    return {**state, "category": classify_query(state["query"])}

# Build graph with typed state
builder = StateGraph(AgentState)
builder.add_node("classify", classify)
builder.set_entry_point("classify")
builder.add_edge("classify", END)
graph = builder.compile()`}
        />

        <Callout type="tip" title="Use .get() for optional fields (Python)">
          When a key might not be set yet (e.g., before a node has run), use
          <code style={inlineCode}>state.get("key")</code> instead of <code style={inlineCode}>state["key"]</code> to avoid KeyError.
        </Callout>
      </Section>

      <Section id="reducers" title="Reducers — Parallel Branch Merges">
        <p style={muted}>
          When two branches of a parallel graph both write to the same state key,
          Flowgentra needs to know <em>how</em> to merge them. This is what <strong style={{ color: '#e6edf3' }}>reducers</strong> do.
        </p>
        <p style={muted}>
          Without a reducer, the last write wins (default overwrite behavior).
          With a reducer, you can accumulate, sum, merge maps, and more.
        </p>

        <CodeBlock
          rust={`use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct ResearchState {
    // Append: new items are added to the vec (don't replace it)
    #[reducer(Append)]
    messages: Vec<String>,

    // Sum: adds numeric values from parallel branches
    #[reducer(Sum)]
    total_tokens: u64,

    // MergeMap: merges HashMap entries (new keys win on conflict)
    #[reducer(MergeMap)]
    metadata: std::collections::HashMap<String, String>,

    // Min / Max: keeps the extreme value
    #[reducer(Min)]
    best_score: f32,

    // Default (no annotation): last write wins
    final_answer: String,
}

// If branch A writes messages: ["Hello"]
// and branch B writes messages: ["World"]
// After merge: messages = ["Hello", "World"]  ✓ (Append)
// Without reducer: messages = ["World"]        ✗ (last write wins)`}
          python={`from flowgentra_ai.graph import StateGraph
from typing import TypedDict, Annotated, List
import operator

class ResearchState(TypedDict):
    # Annotated[list, operator.add] → append reducer
    messages: Annotated[List[str], operator.add]

    # Plain field → last write wins (default)
    final_answer: str
    category: str

# In Python, add_reducer() lets you register custom reducers:
def deep_merge_reducer(a: dict, b: dict) -> dict:
    """Merge two dicts, recursively."""
    result = {**a}
    for k, v in b.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge_reducer(result[k], v)
        else:
            result[k] = v
    return result`}
        />

        <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '18px 20px', marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 12, fontSize: '0.9rem' }}>Available Reducers (Rust)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
            {[
              ['Append',    'Appends new items to a Vec'],
              ['Sum',       'Adds numeric values together'],
              ['MergeMap',  'Merges HashMap (new keys win)'],
              ['Min',       'Keeps the minimum value'],
              ['Max',       'Keeps the maximum value'],
              ['AppendUnique', 'Appends, deduplicates'],
            ].map(([name, desc]) => (
              <div key={name} style={{ background: '#0d1117', borderRadius: 6, padding: '10px 12px' }}>
                <code style={{ ...inlineCode, display: 'block', marginBottom: 4, fontWeight: 600, color: 'var(--accent)' }}>#[reducer({name})]</code>
                <span style={{ color: '#8b949e', fontSize: '0.8rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="state-types" title="State Types">
        <p style={muted}>Flowgentra provides several state implementations for different use cases:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {isRust ? [
            {
              name: 'DynState',
              when: 'Quick prototypes, JSON-compatible data',
              body: 'Dynamic key-value store. Values are JSON-compatible (String, i64, f64, bool, arrays, objects). No compile-time schema.',
              code: `let mut state = DynState::new();
state.set("key", "value");
state.get_string("key"); // Option<&str>`,
            },
            {
              name: '#[derive(State)] struct',
              when: 'Production — recommended',
              body: 'Typed, compiled struct. Fields are accessed directly. Supports reducers. Zero runtime overhead vs plain Rust structs.',
              code: `#[derive(State, Default)]\nstruct MyState { name: String }`,
            },
            {
              name: 'SharedState',
              when: 'Concurrent node execution',
              body: 'Thread-safe Arc-wrapped state. Required when nodes run in parallel threads. Ensures safe concurrent reads/writes.',
              code: `let shared = SharedState::new(MyState::default());\nlet guard = shared.write().await;\nguard.name = "Alice".into();`,
            },
            {
              name: 'ScopedState',
              when: 'Namespace isolation',
              body: 'Namespaced view into a larger state. Each node can work on its own slice without polluting the global namespace.',
              code: `let scoped = state.scope("classifier");\nscoped.set("confidence", 0.95f64);`,
            },
          ].map(t => (
            <div key={t.name} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: 'var(--accent)' }}>{t.name}</code>
                <span style={{ background: '#21262d', borderRadius: 10, padding: '2px 8px', fontSize: '0.75rem', color: '#8b949e' }}>Use when: {t.when}</span>
              </div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 12 }}>{t.body}</p>
              <pre style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '10px 12px', fontSize: '0.8rem', lineHeight: 1.6, color: '#e6edf3', margin: 0, overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace' }}>{t.code}</pre>
            </div>
          )) : [
            {
              name: 'TypedDict',
              when: 'Recommended for most cases',
              body: 'A plain Python dict with type annotations. Nodes return a new dict (immutable pattern). Compatible with type checkers like mypy and pyright.',
              code: `class MyState(TypedDict):\n    name: str\n    score: int\n\n# Node returns a new dict\ndef node(state: MyState) -> MyState:\n    return {**state, "score": state["score"] + 1}`,
            },
            {
              name: 'State',
              when: 'Dynamic / flexible schemas',
              body: 'Flowgentra\'s built-in mutable state class. Supports any key-value data including nested dicts, lists, and objects. Good for prototyping.',
              code: `from flowgentra_ai import State\n\nstate = State({"name": "Alice"})\nstate["score"] = 42\nstate.get("missing")  # None, no KeyError`,
            },
            {
              name: 'PlainState',
              when: 'Simple scripts without thread safety',
              body: 'Non-thread-safe state with typed getters. Slightly faster than State for single-threaded use.',
              code: `from flowgentra_ai import PlainState\n\nstate = PlainState({"count": 0})\nstate.get_int("count")   # int | None\nstate.get_float("ratio") # float | None\nstate.get_bool("flag")   # bool | None`,
            },
          ].map(t => (
            <div key={t.name} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: 'var(--accent)' }}>{t.name}</code>
                <span style={{ background: '#21262d', borderRadius: 10, padding: '2px 8px', fontSize: '0.75rem', color: '#8b949e' }}>Use when: {t.when}</span>
              </div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 12 }}>{t.body}</p>
              <pre style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '10px 12px', fontSize: '0.8rem', lineHeight: 1.6, color: '#e6edf3', margin: 0, overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace' }}>{t.code}</pre>
            </div>
          ))}
        </div>
      </Section>

      <Section id="patterns" title="State Design Patterns">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PatternCard
            title="Flat structure"
            badge="Best practice"
            body="Keep state flat — avoid deeply nested objects. Flat state is easier to read in router functions and easier to debug when things go wrong."
          >
            <CodeBlock
              rust={`// ✓ Good — flat and readable
#[derive(State, Default)]
struct GoodState {
    query:    String,
    answer:   String,
    category: String,
    tokens:   u64,
}

// ✗ Avoid — hard to work with in routers
#[derive(State, Default)]
struct BadState {
    data: serde_json::Value, // too generic
}`}
              python={`# ✓ Good — flat and readable
class GoodState(TypedDict):
    query:    str
    answer:   str
    category: str
    tokens:   int

# ✗ Avoid — opaque, hard to route on
class BadState(TypedDict):
    data: dict  # what's in here?`}
            />
          </PatternCard>

          <PatternCard
            title="Input / output / control separation"
            badge="Tip"
            body="Group fields by role: inputs (set before invoke), outputs (written by nodes), control flags (used for routing). Comment each group."
          >
            <CodeBlock
              rust={`#[derive(State, Default)]
struct PipelineState {
    // ── Inputs ──────────────────────────────
    query:   String,
    user_id: String,

    // ── Outputs ─────────────────────────────
    #[reducer(Append)]
    findings: Vec<String>,
    summary:  String,

    // ── Routing control ──────────────────────
    done:       bool,
    error_msg:  Option<String>,
    retry_count: u8,
}`}
              python={`class PipelineState(TypedDict):
    # ── Inputs ──────────────────────────────
    query:   str
    user_id: str

    # ── Outputs ─────────────────────────────
    findings: list[str]  # accumulated by multiple nodes
    summary:  str

    # ── Routing control ──────────────────────
    done:        bool
    error_msg:   str | None
    retry_count: int`}
            />
          </PatternCard>

          <PatternCard
            title="Store large objects by reference"
            badge="Performance"
            body="Don't put large blobs directly in state (big PDFs, images, embeddings). Store them in a database/file system and keep only an ID in state."
          >
            <CodeBlock
              rust={`// ✗ Avoid — puts megabytes of bytes in state
#[derive(State, Default)]
struct BadState {
    document_bytes: Vec<u8>,  // 50MB PDF
    embeddings: Vec<Vec<f32>>, // 10K x 1536 floats
}

// ✓ Better — keep references
#[derive(State, Default)]
struct GoodState {
    document_id:   String, // lookup in object store
    embeddings_id: String, // lookup in vector DB
}`}
              python={`# ✗ Avoid — puts megabytes in state
class BadState(TypedDict):
    document_bytes: bytes   # 50MB PDF
    embeddings: list[list[float]]  # huge matrix

# ✓ Better — store IDs, look up on demand
class GoodState(TypedDict):
    document_id:   str   # S3 key, local path, etc.
    embeddings_id: str   # Chroma collection ID`}
            />
          </PatternCard>
        </div>
      </Section>

      <Section id="serialization" title="Serialization">
        <p style={muted}>State serializes to and from JSON — useful for logging, checkpointing, and debugging.</p>
        <CodeBlock
          rust={`// To JSON
let json_str  = state.to_json()?;
let json_val  = serde_json::to_value(&state)?;

// From JSON
let state: MyState = serde_json::from_str(&json_str)?;
let state = DynState::from_json(&json_str)?;

// Clone state (deep copy)
let checkpoint = state.clone();`}
          python={`# To dict / JSON
d     = state.to_dict()    # {"query": "...", "answer": "..."}
j     = state.to_json()    # '{"query":"...","answer":"..."}'

# From dict / JSON
state = State.from_dict(d)
state = State.from_json(j)

# Deep clone (copy, not reference)
checkpoint = state.deep_clone()

# String getter helper
value = state.get_string("key")  # str | None`}
        />
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 52 }}>
      <h2 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  )
}

function PatternCard({ title, badge, body, children }) {
  const badgeColors = {
    'Best practice': { bg: 'rgba(63,185,80,0.1)', border: 'rgba(63,185,80,0.4)', text: '#3fb950' },
    'Tip':           { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', text: '#58a6ff' },
    'Performance':   { bg: 'rgba(206,66,43,0.1)', border: 'rgba(206,66,43,0.4)', text: '#CE422B' },
  }
  const bc = badgeColors[badge] || badgeColors['Tip']
  return (
    <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <strong style={{ color: '#e6edf3', fontSize: '1rem' }}>{title}</strong>
        <span style={{ background: bc.bg, border: `1px solid ${bc.border}`, color: bc.text, fontSize: '0.72rem', padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>{badge}</span>
      </div>
      <p style={{ color: '#8b949e', lineHeight: 1.65, marginBottom: children ? 14 : 0, fontSize: '0.9rem' }}>{body}</p>
      {children}
    </div>
  )
}

function Callout({ type, title, children }) {
  const colors = {
    info: { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', text: '#58a6ff' },
    tip:  { bg: 'rgba(63,185,80,0.1)',  border: 'rgba(63,185,80,0.4)',  text: '#3fb950' },
  }
  const c = colors[type] || colors.info
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8, padding: '14px 18px', marginTop: 16 }}>
      {title && <div style={{ fontWeight: 600, color: c.text, marginBottom: 6, fontSize: '0.9rem' }}>{title}</div>}
      <div style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.7, fontSize: '1.0625rem' }
const muted = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const inlineCode = { background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 6px', fontSize: '0.85em', fontFamily: 'JetBrains Mono, monospace' }
