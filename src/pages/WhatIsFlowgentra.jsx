import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'mental-model', label: 'Mental Model' },
  { id: 'core-primitives', label: 'Core Primitives' },
  { id: 'engine-features', label: 'Engine Features' },
  { id: 'two-patterns', label: 'Two Patterns' },
  { id: 'languages', label: 'Languages' },
  { id: 'next-steps', label: 'Next Steps' },
]

export default function WhatIsFlowgentra() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        What is Flowgentra?
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra is a framework for building <strong style={{ color: '#e6edf3' }}>AI agent workflows</strong>. It gives you the building blocks to create anything from a simple LLM-powered function to a complex multi-agent system with memory, tools, evaluation, and observability.
      </p>

      <Section id="overview" title="Overview">
        <p style={{ color: '#8b949e', lineHeight: 1.75, margin: 0 }}>
          The core idea is simple: your agent logic is a <strong style={{ color: '#e6edf3' }}>graph</strong>. Nodes are functions. Edges connect them. State flows through.
        </p>
      </Section>

      <Section id="mental-model" title="The Mental Model">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Think of your agent as a flowchart:
        </p>
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
          {`          ┌─────────────┐
Input ───►│  Classify   │
          └──────┬──────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
┌─────────────┐   ┌─────────────┐
│  Use Tools  │   │  Answer LLM │
└──────┬──────┘   └──────┬──────┘
       │                 │
       └────────┬────────┘
                ▼
           ┌─────────┐
           │  Output │
           └─────────┘`}
        </div>
        <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
          Each box is a <strong style={{ color: '#e6edf3' }}>node</strong> — a function that reads state in and returns state out. The arrows are <strong style={{ color: '#e6edf3' }}>edges</strong> — connections that tell the engine what to run next. Some edges are fixed; others are <strong style={{ color: '#e6edf3' }}>conditional</strong> (the router function decides at runtime).
        </p>
      </Section>

      <Section id="core-primitives" title="Core Primitives">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 16, marginTop: 24 }}>State</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          State is the data container that travels through your graph. Every node reads from it and writes to it.
        </p>
        <CodeBlock
          rust={`state.set("user_query", "What is Rust?");
state.get_string("answer");`}
          python={`state["user_query"] = "What is Rust?"
state["answer"]  # read it later`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 16, marginTop: 24 }}>Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A node is just a function. It receives state, does something (call an LLM, run a query, format text), and returns updated state.
        </p>
        <CodeBlock
          rust={`async fn my_node(mut state: DynState) -> Result<DynState> {
    let input = state.get_string("input").unwrap_or_default();
    let result = process(&input).await?;
    state.set("output", result);
    Ok(state)
}`}
          python={`def my_node(state):
    # Read from state
    input_data = state["input"]

    # Do work
    result = process(input_data)

    # Write to state
    state["output"] = result

    return state   # always return state`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 16, marginTop: 24 }}>Graphs</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A graph wires nodes together and tells the engine the execution order.
        </p>
        <CodeBlock
          rust={`let graph = StateGraph::builder()
    .add_node("fetch",   fetch_fn)
    .add_node("process", process_fn)
    .edge("fetch",   "process")
    .edge("process", "__end__")
    .build();`}
          python={`builder = StateGraph()
builder.add_node("fetch",   fetch_fn)
builder.add_node("process", process_fn)
builder.add_edge("fetch", "process")
builder.add_edge("process", END)
graph = builder.compile()`}
        />
      </Section>

      <Section id="engine-features" title="What the Engine Gives You">
        <p style={{ color: '#8b949e', marginBottom: 20 }}>
          On top of this simple model, Flowgentra's engine adds:
        </p>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Feature</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Checkpointing</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Persist state to disk between nodes — resume after crashes or for human review</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Retries</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Automatically retry failed nodes with exponential backoff</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Timeouts</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Kill slow nodes after a deadline</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Tracing</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Record every node execution, state change, and timing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Visualization</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Export your graph as Mermaid or Graphviz diagrams</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Parallel execution</td>
                <td style={{ padding: '8px' }}>Run multiple branches simultaneously and merge results</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="two-patterns" title="The Two Patterns">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          There are two ways to use Flowgentra. Both use the same engine.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>1. Code-first (direct API)</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Build the graph programmatically. Best for complex logic with non-trivial routing.
        </p>
        <CodeBlock
          python={`builder = StateGraph()
builder.add_node("step_a", fn_a)
builder.add_node("step_b", fn_b)
builder.set_entry_point("step_a")
builder.add_conditional_edge("step_a", router)
builder.add_edge("step_b", END)
graph = builder.compile()`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>2. Config-driven (YAML + handlers)</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Define the graph in YAML; write handlers in code. Best for production deployments where non-engineers need to adjust the flow.
        </p>
        <CodeBlock
          yaml={`# agent.yaml
name: my-agent
graph:
  entry: fetch
  edges:
    - from: fetch
      to: process
    - from: process
      to: __end__`}
        />
        <CodeBlock
          python={`from flowgentra_ai.agent import Agent
agent = Agent.from_config_path("agent.yaml")
result = agent.run()`}
        />
      </Section>

      <Section id="languages" title="How Rust and Python Relate">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The Python library is a thin PyO3 wrapper around the Rust engine. When you call <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>graph.invoke()</code> in Python, you're calling the same Rust execution loop that you'd use directly in Rust.
        </p>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Rust</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Python</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>StateGraph::&lt;S&gt;::builder()</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>StateGraph()</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>DynState</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>State</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>#[derive(State)]</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>TypedDict / dict</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>#[register_handler]</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>@register_handler</code></td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}><code>Agent::from_config_path()</code></td>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}><code>Agent.from_config_path()</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
          The key difference: Rust uses generics for compile-time type safety; Python uses dynamic dispatch for flexibility. Both are full-featured.
        </p>
      </Section>

      <Section id="next-steps" title="Next Steps">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20 }}>
          <li><Link to="/docs/installation" style={{ color: '#58a6ff' }}>Installation</Link> — set up Rust or Python</li>
          <li><Link to="/docs/getting-started" style={{ color: '#58a6ff' }}>Quick Start</Link> — build your first graph in 5 minutes</li>
          <li><Link to="/docs/concepts/state" style={{ color: '#58a6ff' }}>State Management</Link> — understand how state works</li>
          <li><Link to="/docs/concepts/graphs" style={{ color: '#58a6ff' }}>Graph Execution</Link> — understand how graphs execute</li>
        </ul>
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