import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'

const anchors = [
  { id: 'overview',       label: 'Overview' },
  { id: 'init-tracing',   label: 'Enable Tracing' },
  { id: 'execution-tracer', label: 'ExecutionTracer' },
  { id: 'visualization',  label: 'Graph Visualization' },
  { id: 'token-usage',    label: 'Token Usage & Cost' },
  { id: 'debugging',      label: 'Debugging Tips' },
]

export default function ObservabilityGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={h1}>Observability & Tracing</h1>
      <p style={lead}>
        Understand what your agent is doing, how long each node takes, and how much it costs.
        Flowgentra has built-in tracing, execution metrics, and graph visualization — no external tools required.
      </p>

      <Section id="overview" title="Overview">
        <p style={muted}>Flowgentra's observability stack includes:</p>
        <ul style={ul}>
          <li><strong style={{ color: '#e6edf3' }}>Structured logging</strong> — per-node span logs with timing</li>
          <li><strong style={{ color: '#e6edf3' }}>ExecutionTracer</strong> — programmatic event capture and inspection</li>
          <li><strong style={{ color: '#e6edf3' }}>Graph visualization</strong> — Mermaid flowcharts and Graphviz DOT export</li>
          <li><strong style={{ color: '#e6edf3' }}>Token tracking</strong> — built into <code style={inlineCode}>LLM.chat_with_usage()</code></li>
          <li><strong style={{ color: '#e6edf3' }}>Cost estimation</strong> — per-model pricing via <code style={inlineCode}>TokenUsage.estimated_cost()</code></li>
        </ul>
      </Section>

      <Section id="init-tracing" title="Enable Tracing">
        <p style={muted}>
          Call <code style={inlineCode}>init_tracing()</code> once at startup to enable structured span logging.
          All node starts, ends, and edge traversals will be logged automatically.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::observability::init_tracing;

#[tokio::main]
async fn main() -> Result<()> {
    // "debug" | "info" | "warn" | "error"
    init_tracing("info");

    // Now run your graph — logs appear automatically
    let result = graph.invoke(state).await?;
    Ok(())
}`}
          python={`from flowgentra_ai.observability import init_tracing

# Call once at app startup
init_tracing("info")  # "debug" | "info" | "warn" | "error"

# All graph.invoke() calls will now emit structured logs:
# [INFO] flowgentra::graph  node_start  node=classify
# [INFO] flowgentra::graph  node_end    node=classify  duration_ms=142  success=true
# [INFO] flowgentra::graph  edge        from=classify  to=technical  condition_met=true`}
        />
      </Section>

      <Section id="execution-tracer" title="ExecutionTracer — Programmatic Capture">
        <p style={muted}>
          For programmatic access to execution events (e.g., in tests or dashboards), use <code style={inlineCode}>ExecutionTracer</code>.
          It captures every node execution, edge traversal, and state update.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::observability::{ExecutionTracer, ExecutionTrace};

let tracer = ExecutionTracer::new();
let traced_graph = graph.with_tracer(tracer.clone());

let result = traced_graph.invoke(state).await?;

// Inspect the trace
let trace = tracer.last_trace().unwrap();
println!("Nodes visited: {:?}", trace.execution_path());
println!("Total duration: {}ms", trace.total_duration_ms().unwrap_or(0));

// JSON export for logging/monitoring
println!("{}", tracer.get_events_json());`}
          python={`from flowgentra_ai.observability import ExecutionTracer, ExecutionTrace

tracer = ExecutionTracer()

# Manually instrument (or use with-tracer API)
tracer.trace_node_start("classify")
# ... node runs ...
tracer.trace_node_end("classify", duration_ms=142, success=True)
tracer.trace_edge_traversal("classify", "technical", condition_met=True)
tracer.trace_state_update("category", "technical")
tracer.trace_custom("llm_tokens", "prompt=45, completion=112")

# Read events as JSON
import json
events = json.loads(tracer.get_events_json())
for event in events:
    print(f"[{event['type']}] {event.get('node_id', '')} — {event.get('duration_ms', '')}ms")

# Clear for next run
tracer.clear()`}
        />

        <p style={{ ...muted, marginTop: 16 }}>
          The <code style={inlineCode}>ExecutionTrace</code> class provides a higher-level summary:
        </p>
        <CodeBlock
          rust={`let trace = ExecutionTrace::from_agent("my-agent");
let path      = trace.execution_path();    // ["classify", "technical", "__end__"]
let duration  = trace.total_duration_ms(); // Some(387)
let json      = trace.to_json();`}
          python={`from flowgentra_ai.observability import ExecutionTrace

trace = ExecutionTrace(agent_name="my-agent")
path     = trace.execution_path()     # ["classify", "technical", "__end__"]
duration = trace.total_duration_ms()  # 387
json_str = trace.to_json()            # full JSON export`}
        />
      </Section>

      <Section id="visualization" title="Graph Visualization">
        <p style={muted}>
          Export your compiled graph as a Mermaid flowchart or Graphviz DOT diagram.
          Great for documentation and debugging routing logic.
        </p>
        <CodeBlock
          rust={`let graph = builder.build()?;

// Mermaid diagram (paste into mermaid.live)
let mermaid = graph.to_mermaid();
println!("{}", mermaid);

// Graphviz DOT (use with dot -Tpng graph.dot > graph.png)
let dot = graph.to_dot();
println!("{}", dot);

// JSON representation
let json = serde_json::to_string_pretty(&graph.to_json())?;`}
          python={`from flowgentra_ai.observability import graph_to_mermaid, graph_to_dot

graph = builder.compile()

# Mermaid — paste into https://mermaid.live or GitHub markdown
mermaid_str = graph.to_mermaid()
print(mermaid_str)
# graph TD
#   classify --> |technical| technical_answer
#   classify --> |general| general_answer
#   technical_answer --> __end__
#   general_answer --> __end__

# Graphviz DOT
dot_str = graph.to_dot()

# JSON
graph_dict = graph.to_json()
print(graph_dict["nodes"])   # list of node names
print(graph_dict["edges"])   # list of {from, to} dicts`}
        />

        <Callout type="tip" title="Embed in Jupyter notebooks">
          In a Jupyter notebook, render the Mermaid diagram inline:
          <pre style={codeStyle}>{`from IPython.display import display, HTML

mermaid = graph.to_mermaid()
display(HTML(f"""
<div class="mermaid">{mermaid}</div>
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
"""))`}</pre>
        </Callout>
      </Section>

      <Section id="token-usage" title="Token Usage & Cost Estimation">
        <p style={muted}>
          Use <code style={inlineCode}>chat_with_usage()</code> to get token counts alongside the response.
          Then estimate cost per-model with <code style={inlineCode}>TokenUsage.estimated_cost()</code>.
        </p>
        <CodeBlock
          rust={`let (response, usage) = client.chat_with_usage(messages).await?;

if let Some(u) = usage {
    println!("Prompt tokens:     {}", u.prompt_tokens);
    println!("Completion tokens: {}", u.completion_tokens);
    println!("Total:             {}", u.total_tokens());
    if let Some(cost) = u.estimated_cost("gpt-4o") {
        println!("Estimated cost: ${'{'}:.6{'}'}", cost);
    }
}`}
          python={`from flowgentra_ai.llm import LLM, LLMConfig, Message

client = LLM.from_config(LLMConfig(provider="openai", model="gpt-4o"))

response, usage = client.chat_with_usage([
    Message.system("You are a helpful assistant."),
    Message.user("Explain RAG in one sentence."),
])

if usage:
    print(f"Prompt:     {usage.prompt_tokens} tokens")
    print(f"Completion: {usage.completion_tokens} tokens")
    print(f"Total:      {usage.total_tokens} tokens")

    cost = usage.estimated_cost("gpt-4o")
    if cost:
        print(f"Estimated:  ${'{'}cost:.6f{'}'}")

# Get per-model pricing
from flowgentra_ai.llm import model_pricing
input_price, output_price = model_pricing("gpt-4o")
# (2.50, 10.00) — $ per million tokens`}
        />

        <Callout type="info" title="Track costs across a workflow">
          Accumulate usage across multiple LLM calls by adding a <code style={inlineCode}>total_tokens</code> field to your state
          with a <code style={inlineCode}>#[reducer(Sum)]</code> (Rust) or by manually accumulating in Python.
        </Callout>
      </Section>

      <Section id="debugging" title="Debugging Tips">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            {
              title: 'Agent loops forever',
              fix: 'Your conditional router never returns "__end__". Add a max_steps limit and print the state in your router to see what condition is failing.',
              code: `builder.set_max_steps(25)  # Python\n// or\nStateGraph::<S>::builder().max_steps(25)  // Rust`,
            },
            {
              title: '"Unknown node: xyz" error',
              fix: 'The router returned a node name that doesn\'t exist in the graph. Check spelling — node names are case-sensitive.',
              code: `# Python: print what your router returns\ndef debug_router(state):\n    next_node = my_router(state)\n    print(f"Router → {next_node!r}")\n    return next_node`,
            },
            {
              title: 'State key is None unexpectedly',
              fix: 'Use .get() with a default value instead of direct key access. Nodes that haven\'t run yet won\'t have populated their output keys.',
              code: `# Safe access:\nvalue = state.get("key", "default")  # Python\nstate.get_string("key").unwrap_or_default()  // Rust`,
            },
            {
              title: 'LLM returns inconsistent JSON',
              fix: 'Use ResponseFormat.json_schema() to enforce a schema. Set temperature to 0.0 for deterministic structured output.',
              code: `from flowgentra_ai.types import ResponseFormat\n\nconfig.set_response_format(\n    ResponseFormat.json_schema("output", {\n        "type": "object",\n        "properties": {"answer": {"type": "string"}},\n        "required": ["answer"]\n    })\n)`,
            },
          ].map(item => (
            <div key={item.title} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '18px 20px' }}>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 6 }}>{item.title}</div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 12 }}>{item.fix}</p>
              <pre style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '10px 14px', fontSize: '0.8rem', lineHeight: 1.6, color: '#e6edf3', margin: 0, overflowX: 'auto', fontFamily: 'JetBrains Mono, monospace' }}>{item.code}</pre>
            </div>
          ))}
        </div>
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

function Callout({ type, title, children }) {
  const colors = {
    info: { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', text: '#58a6ff' },
    tip:  { bg: 'rgba(63,185,80,0.1)',  border: 'rgba(63,185,80,0.4)',  text: '#3fb950' },
    warn: { bg: 'rgba(210,153,34,0.1)', border: 'rgba(210,153,34,0.4)', text: '#d29922' },
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
const ul = { color: '#8b949e', lineHeight: 2, paddingLeft: 20, margin: '0 0 16px' }
const inlineCode = { background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 6px', fontSize: '0.85em', fontFamily: 'JetBrains Mono, monospace' }
const codeStyle = {
  background: '#161b22', border: '1px solid #30363d', borderRadius: 6,
  padding: '10px 14px', fontSize: '0.8rem', lineHeight: 1.6,
  color: '#e6edf3', margin: '10px 0 0', overflowX: 'auto', whiteSpace: 'pre',
  fontFamily: 'JetBrains Mono, monospace',
}
