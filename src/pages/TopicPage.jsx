import { useParams, Navigate } from 'react-router-dom'
import { apiEntries } from '../data/api'
import DocLayout from '../components/DocLayout'
import ApiEntry from '../components/ApiEntry'
import { useLanguage } from '../context/LanguageContext'

const TOPIC_META = {
  'state-graph':     { title: 'StateGraph',        desc: 'Core graph builder, typed state, and field reducers.' },
  'execution':       { title: 'Execution Control', desc: 'Budgets (steps, wall-clock, tokens, cost), cancellation, streaming, caching, and human-in-the-loop interrupts.' },
  'handlers-config': { title: 'Handlers & Config', desc: 'Handler registration, from_config_path, and the full YAML config schema.' },
  'security':        { title: 'Security Model',    desc: 'Secret API keys, the allow_python_handlers gate, and checkpoint hardening.' },
  'memory':          { title: 'Memory',             desc: 'Checkpointers, conversation memory, and multi-turn thread execution.' },
  'builtin-nodes':   { title: 'Built-in Nodes',    desc: 'Ready-to-use node types — LLMNode, RetryNode, TimeoutNode, HumanInTheLoop, and more.' },
  'nodes':           { title: 'Advanced Nodes',    desc: 'Parallel, join, loop, and subgraph node types for complex control flow.' },
  'agents':          { title: 'Agents',             desc: 'Predefined agent types: ZeroShotReAct, FewShotReAct, Conversational, and MemoryAwareAgent.' },
  'llm':             { title: 'LLMs',               desc: 'All providers, streaming, structured output, tool calling, caching, cost tracking, and the offline MockLLM.' },
  'tools':           { title: 'Tools',              desc: 'Tool registry plus the built-in search, knowledge, file, data, code-execution, and communication tools.' },
  'rag':             { title: 'RAG',                desc: 'Retrieval-augmented generation — vector stores, embeddings, and retrieval utilities.' },
  'data-loading':    { title: 'Document Loaders',  desc: 'Load PDFs, HTML, CSV, JSON, and more into documents for RAG.' },
  'text-processing': { title: 'Text Splitters',    desc: 'Chunking strategies: character, token, recursive, and semantic splitters.' },
  'search-ranking':  { title: 'Rerankers',          desc: 'Re-rank retrieved documents: reciprocal rank fusion, LLM rerankers, and more.' },
  'evaluation':      { title: 'Evaluation',         desc: 'Scoring, grading, metrics, and self-correction for agent outputs.' },
  'supervisor':      { title: 'Supervisor',         desc: 'Multi-agent orchestration with sequential, parallel, or LLM-routed strategies.' },
  'multi-agent':     { title: 'Multi-Agent Patterns', desc: 'Supervision strategies, routing rules, and agent-to-agent handoff.' },
  'observability':   { title: 'Observability',      desc: 'Execution tracing, graph visualization (Mermaid / DOT), and token/cost accounting.' },
}

export default function TopicPage() {
  const { topicId } = useParams()
  const { language } = useLanguage()

  if (!TOPIC_META[topicId]) {
    return <Navigate to="/docs/api/state-graph" replace />
  }

  const entries = apiEntries.filter(e => e.topic === topicId)
  const anchors = entries.map(e => ({ id: e.id, label: e.name }))
  const { title, desc } = TOPIC_META[topicId]
  const langLabel = language === 'rust' ? 'Rust' : 'Python'
  const langIcon  = language === 'rust' ? '🦀' : '🐍'

  return (
    <DocLayout anchors={anchors}>
      {/* Language badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--accent-dim, rgba(206,66,43,0.12))', border: '1px solid var(--accent)', borderRadius: 20, padding: '3px 12px', fontSize: '0.8125rem', color: 'var(--accent)', marginBottom: 16 }}>
        <span>{langIcon}</span> {langLabel} API
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        {title}
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 48, lineHeight: 1.7 }}>
        {desc}
      </p>

      {entries.length === 0 ? (
        <p style={{ color: '#484f58' }}>No entries for this topic yet.</p>
      ) : (
        entries.map(entry => <ApiEntry key={entry.id} entry={entry} />)
      )}
    </DocLayout>
  )
}
