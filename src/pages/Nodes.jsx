import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'node-contract', label: 'The Node Contract' },
  { id: 'node-types', label: 'Node Types' },
]

export default function Nodes() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Nodes
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        A node is the fundamental unit of work in a Flowgentra graph. It's just a function.
      </p>

      <Section id="node-contract" title="The Node Contract">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Every node must:
        </p>
        <ol style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>Accept a single <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>State</code> argument (Python) or <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>DynState</code> / your typed state (Rust)</li>
          <li>Return a <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>State</code> (usually the same object, modified)</li>
        </ol>
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
      </Section>

      <Section id="node-types" title="Node Types">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Regular Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The default. A plain function added with <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>add_node</code>.
        </p>
        <CodeBlock python={`builder.add_node("process", process_fn)`} />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Retry Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Automatically retries with exponential backoff when the function raises an exception.
        </p>
        <CodeBlock python={`builder.add_retry_node("fetch", fetch_fn, max_retries=3, backoff_ms=1000)`} />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use this for: API calls, database queries, network requests — anything that can fail transiently.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Timeout Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Terminates the function if it exceeds a time limit.
        </p>
        <CodeBlock python={`builder.add_timeout_node("slow_op", slow_fn, timeout_ms=5000, on_timeout="skip")`} />
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>on_timeout="error"</code> — raises an exception (default)</li>
          <li><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>on_timeout="skip"</code> — returns the original state unchanged</li>
        </ul>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>LLM Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A pre-wired node that reads a prompt from state, calls an LLM, and writes the response.
        </p>
        <CodeBlock python={`builder.add_llm_node(
    "generate",
    client,
    prompt_key="user_query",
    output_key="llm_response",
    system_prompt="You are a helpful assistant.",
)`} />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Planner Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Uses an LLM to decide the next node dynamically at runtime.
        </p>
        <CodeBlock python={`builder.add_planner_node("planner", client)`} />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The planner reads <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["_reachable_nodes"]</code> (a list of node names) and writes <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["_next_node"]</code> (the chosen next node).
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Evaluation Nodes</h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Wraps a node in an iterative refinement loop — runs the node, evaluates the output, and re-runs until quality meets a threshold.
        </p>
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