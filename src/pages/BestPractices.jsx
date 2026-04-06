import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'state-design', label: 'State Design' },
  { id: 'graph-design', label: 'Graph Design' },
  { id: 'llm-calls', label: 'LLM Calls' },
  { id: 'rag', label: 'RAG' },
  { id: 'memory', label: 'Memory' },
  { id: 'error-handling', label: 'Error Handling' },
]

export default function BestPractices() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Best Practices
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Patterns that work well in production Flowgentra deployments.
      </p>

      <Section id="state-design" title="State Design">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Keep state flat.</strong> Nested dicts are harder to read and update. Prefer <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["user_name"]</code> over <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["user"]["name"]</code>.</li>
          <li><strong style={{ color: '#e6edf3' }}>Use descriptive key names.</strong> <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["llm_response"]</code> is clearer than <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["res"]</code>. You'll thank yourself when debugging a trace.</li>
          <li><strong style={{ color: '#e6edf3' }}>Don't store large objects in state.</strong> State is serialized to JSON for checkpointing. Keep it to strings, numbers, and small lists. Store large data (embeddings, binary files) outside state and reference them by ID.</li>
          <li><strong style={{ color: '#e6edf3' }}>Document your state schema.</strong> Add a comment at the top of your graph file explaining what keys each node reads and writes. This becomes essential as graphs grow.</li>
        </ul>
        <CodeBlock python={`# State schema:
# "question"     (str)  — user's input question
# "context_docs" (list) — retrieved documents
# "answer"       (str)  — final LLM response
# "sources"      (list) — source file paths`} />
      </Section>

      <Section id="graph-design" title="Graph Design">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>One node, one responsibility.</strong> If a node does three things, split it into three nodes. Smaller nodes are easier to retry, test, and replace.</li>
          <li><strong style={{ color: '#e6edf3' }}>Name nodes as verbs.</strong> <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>fetch_data</code>, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>classify_intent</code>, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>generate_response</code> — not <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>node_1</code>, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>handler</code>, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>step_3</code>.</li>
          <li><strong style={{ color: '#e6edf3' }}>Make routers explicit.</strong> Your conditional edge router should be a named function, not an inline lambda. Give it a docstring explaining the routing logic.</li>
          <li><strong style={{ color: '#e6edf3' }}>Always set <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>max_steps</code>.</strong> The default (1000) is high. For production agents, set it to a reasonable value (50–100) to catch runaway loops early.</li>
        </ul>
        <CodeBlock python={`def quality_router(state):
    """Route to 'retry' if score is below threshold, else 'finalize'."""
    if (state.get("score") or 0) < 0.8:
        return "retry"
    return "finalize"`} />
      </Section>

      <Section id="llm-calls" title="LLM Calls">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Don't call the LLM in a loop without a termination condition.</strong> ReAct agents must have a maximum step count. Set it via <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>builder.set_max_steps(n)</code>.</li>
          <li><strong style={{ color: '#e6edf3' }}>Use low temperature for tool-calling and reasoning.</strong> <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>temperature=0.0–0.3</code> produces more reliable function calls. Use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>0.7+</code> only for creative writing tasks.</li>
          <li><strong style={{ color: '#e6edf3' }}>Add retries to all LLM clients.</strong> Networks fail. Rate limits happen. <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>client.with_retry(max_retries=3)</code> costs almost nothing and prevents a lot of pain.</li>
          <li><strong style={{ color: '#e6edf3' }}>Use caching in development.</strong> <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>client.cached()</code> prevents re-running the same prompts while you're iterating. Disable it in production if you need fresh responses.</li>
          <li><strong style={{ color: '#e6edf3' }}>Check token usage.</strong> Use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>client.chat_with_usage()</code> to track costs during development. It's easy to accidentally build a workflow that costs $5 per run.</li>
        </ul>
      </Section>

      <Section id="rag" title="RAG">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Chunk size matters.</strong> Too small (&lt; 200 chars) → each chunk lacks context. Too large (&gt; 1000 chars) → chunks contain irrelevant content. Start at 400–600 chars.</li>
          <li><strong style={{ color: '#e6edf3' }}>Always use overlap.</strong> A 50–100 char overlap between chunks prevents splitting a sentence mid-thought.</li>
          <li><strong style={{ color: '#e6edf3' }}>Match embedding model with your content type.</strong> <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>text-embedding-3-small</code> works for most text. For code, consider a code-specific model.</li>
          <li><strong style={{ color: '#e6edf3' }}>Hybrid search &gt; pure semantic for most cases.</strong> Pure semantic can miss exact keyword matches. Add 20–40% BM25 weight as a baseline.</li>
          <li><strong style={{ color: '#e6edf3' }}>Test retrieval quality independently.</strong> Before building the full RAG pipeline, manually test that <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>retriever.retrieve(question)</code> returns the right chunks. If retrieval is wrong, the LLM can't fix it.</li>
        </ul>
      </Section>

      <Section id="memory" title="Memory">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>ConversationMemory</code> with a cap.</strong> Unlimited memory is dangerous — 100+ messages will exceed the LLM's context window. Set <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>max_messages=50</code> as a safe default.</li>
          <li><strong style={{ color: '#e6edf3' }}><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>SummaryMemory</code> for long sessions.</strong> If users have conversations that run for hours, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>TokenBufferMemory</code> will drop important early context. <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>SummaryMemory</code> preserves it in compressed form.</li>
          <li><strong style={{ color: '#e6edf3' }}>Don't store memory in state.</strong> Conversation history shouldn't be in the graph state. Keep it in a <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>ConversationMemory</code> object that lives outside the graph and is loaded at the start of each turn.</li>
        </ul>
      </Section>

      <Section id="error-handling" title="Error Handling">
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Use state for errors, not exceptions.</strong> In a graph, raising an exception terminates the run. Use a state key (<code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>state["error"]</code>) so the graph can route to an error-handling node.</li>
        </ul>
        <CodeBlock python={`def risky_node(state):
    try:
        state["result"] = do_something()
    except Exception as e:
        state["error"] = str(e)
    return state

def router(state):
    return "error_node" if state.get("error") else "next_node"`} />
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