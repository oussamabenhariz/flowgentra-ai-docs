import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'general', label: 'General' },
  { id: 'installation', label: 'Installation' },
  { id: 'graphs', label: 'Graphs' },
  { id: 'llm', label: 'LLM' },
  { id: 'memory', label: 'Memory & Checkpointing' },
]

export default function FAQ() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        FAQ & Troubleshooting
      </h1>

      <Section id="general" title="General">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          What's the difference between Flowgentra and LangChain/LangGraph?
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          LangGraph is the closest comparison. Key differences:
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>Flowgentra's execution engine is written in Rust — significantly faster for CPU-bound operations and concurrent workloads</li>
          <li>Flowgentra has a native Python API (via PyO3) rather than a pure-Python reimplementation</li>
          <li>Both use the same graph-based model with state, nodes, and edges</li>
          <li>LangGraph has a larger ecosystem of integrations; Flowgentra is newer</li>
        </ul>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Do I need to know Rust to use the Python library?
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          No. The Python library is a complete, standalone package. You install it with <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>pip</code> and write Python. You only need Rust if you're building from source or contributing to the library itself.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Can I use both Rust and Python in the same project?
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Yes. The Rust engine is used by both, but you can't directly share graphs between them at runtime. You can, however, use them side-by-side: run performance-critical parts in Rust and prototyping/orchestration in Python.
        </p>
      </Section>

      <Section id="installation" title="Installation">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>pip install flowgentra-ai</code> fails with "no matching distribution found"
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Check your Python version: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>python --version</code>. Flowgentra requires Python 3.9+. If you're on an older version or an unsupported platform (e.g., 32-bit Linux), you'll need to build from source.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>maturin develop</code> fails with "linker not found"
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          You need a C linker. On Ubuntu/Debian: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>sudo apt install build-essential</code>. On macOS: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>xcode-select --install</code>.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          ImportError: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>flowgentra_ai._native</code> not found
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The native extension wasn't compiled. Run <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>maturin develop</code> again from the <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>flowgentra-ai-py</code> directory.
        </p>
      </Section>

      <Section id="graphs" title="Graphs">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          My graph runs forever / hits max_steps
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Your graph has a loop with no exit condition. Check that:
        </p>
        <ol style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>Your conditional edge router can return <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"__end__"</code> (or use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>END</code>)</li>
          <li>The condition that breaks the loop can actually be reached</li>
          <li>You've set <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>builder.set_max_steps(n)</code> to a reasonable value</li>
        </ol>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>KeyError: "my_key"</code> inside a node
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          You used <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["my_key"]</code> but the key wasn't set. Use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state.get("my_key")</code> (returns <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>None</code> instead of raising) or check <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"my_key" in state</code> first.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          "Unknown node: xyz" error when building the graph
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Your router returned a node name that doesn't exist. Common causes:
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>Typo in the node name</li>
          <li>The node was added to the builder but with a different name</li>
          <li>The router returns a string that varies at runtime — check all possible return values</li>
        </ul>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Graph compiles but never terminates (no error)
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          You have a cycle with no exit. Make sure at least one path from every node eventually reaches <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>END</code> / <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"__end__"</code>.
        </p>
      </Section>

      <Section id="llm" title="LLM">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          LLM calls fail with rate limit errors
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Add retries: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>client.with_retry(max_retries=5)</code>. The retry client uses exponential backoff by default.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Responses are inconsistent / not following instructions
        </h3>
        <ol style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>Lower the temperature (try <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>0.1–0.3</code> for structured tasks)</li>
          <li>Check your system prompt — it should be clear and specific</li>
          <li>For structured output, use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>ResponseFormat.json_schema(...)</code> instead of asking "respond in JSON"</li>
        </ol>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Tool calls are malformed / arguments are missing
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Make sure your <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>ToolDefinition.parameters</code> has the correct JSON Schema, including <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>"required"</code> for mandatory fields. The LLM ignores schema constraints it doesn't know about.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>chat_with_tools</code> returns a message without tool calls
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The LLM decided it doesn't need the tools. This is expected behavior — it might answer directly. Check <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>response.has_tool_calls()</code> before processing tool calls.
        </p>
      </Section>

      <Section id="memory" title="Memory & Checkpointing">
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          How do I clear a user's conversation history?
        </h3>
        <CodeBlock python={`memory.clear("user-thread-id")`} />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>
          Checkpoints are growing unboundedly on disk
        </h3>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Implement periodic cleanup. Delete old checkpoint files from the checkpoint directory based on age or thread ID. The checkpoint format is plain JSON files — you can safely delete them.
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