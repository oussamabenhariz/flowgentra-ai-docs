import DocLayout from '../components/DocLayout'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what',          label: 'What is Flowgentra?' },
  { id: 'choose-path',   label: 'Choose Your Path' },
  { id: 'three-concepts', label: 'Three Core Concepts' },
  { id: 'explore',       label: 'Explore the Docs' },
]

export default function GettingStarted() {
  const { language, setLanguage } = useLanguage()
  const isRust = language === 'rust'

  return (
    <DocLayout anchors={anchors}>
      <h1 style={h1}>Introduction</h1>
      <p style={lead}>
        Flowgentra is a high-performance framework for building stateful, multi-step AI agents as typed graphs.
        It has a Rust core with Python bindings — you can use either language independently.
      </p>

      <Section id="what" title="What is Flowgentra?">
        <p style={muted}>
          Modern AI applications are more than a single LLM call. They involve sequences of steps: fetching data, calling tools, making decisions, looping until a goal is met.
          Managing this complexity with plain code becomes unmaintainable fast.
        </p>
        <p style={muted}>
          Flowgentra gives you a <strong style={{ color: '#e6edf3' }}>graph abstraction</strong> for this.
          You define your agent as a directed graph of nodes (functions), connect them with edges, and Flowgentra handles execution, state management, checkpointing, and routing.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginTop: 16 }}>
          {[
            { icon: '⚡', title: 'Rust-powered', body: 'The execution engine is written in Rust. Python bindings run at near-native speed via PyO3 — no GIL bottlenecks on graph execution.' },
            { icon: '📊', title: 'Inspired by LangGraph', body: 'If you\'ve used LangGraph, Flowgentra will feel familiar. It uses the same graph model with additional performance, multi-language support, and built-in multi-agent strategies.' },
            { icon: '🏭', title: 'Production-ready', body: 'Built-in checkpointing, retry nodes, timeout nodes, token tracking, cost estimation, and observability tracing.' },
          ].map(f => (
            <div key={f.title} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '18px 20px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 6 }}>{f.title}</div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="choose-path" title="Choose Your Path">
        <p style={muted}>
          The documentation is organized with two parallel paths — one for Rust, one for Python.
          Use the language switcher in the navbar to toggle code examples throughout the site.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 8 }}>
          <Link to="/docs/quickstart-rust" style={{
            flex: '1 1 260px',
            display: 'flex', gap: 18, alignItems: 'flex-start',
            background: isRust ? 'rgba(206,66,43,0.08)' : '#161b22',
            border: `2px solid ${isRust ? '#CE422B' : '#21262d'}`,
            borderRadius: 10, padding: '22px 24px', textDecoration: 'none',
            transition: 'border-color 0.2s',
          }}
            onClick={() => setLanguage('rust')}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#CE422B'}
            onMouseLeave={e => e.currentTarget.style.borderColor = isRust ? '#CE422B' : '#21262d'}>
            <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🦀</span>
            <div>
              <div style={{ fontWeight: 700, color: '#e6edf3', marginBottom: 6, fontSize: '1.0625rem' }}>Rust Quickstart</div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 12px' }}>
                Compile-time state guarantees, zero-cost abstractions, async-first. Best for performance-critical production systems.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Type-safe', 'Async', 'Zero-cost'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(206,66,43,0.12)', border: '1px solid rgba(206,66,43,0.3)', borderRadius: 12, padding: '2px 8px', fontSize: '0.75rem', color: '#CE422B' }}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>

          <Link to="/docs/quickstart-python" style={{
            flex: '1 1 260px',
            display: 'flex', gap: 18, alignItems: 'flex-start',
            background: !isRust ? 'rgba(53,114,165,0.08)' : '#161b22',
            border: `2px solid ${!isRust ? '#3572A5' : '#21262d'}`,
            borderRadius: 10, padding: '22px 24px', textDecoration: 'none',
            transition: 'border-color 0.2s',
          }}
            onClick={() => setLanguage('python')}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#3572A5'}
            onMouseLeave={e => e.currentTarget.style.borderColor = !isRust ? '#3572A5' : '#21262d'}>
            <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🐍</span>
            <div>
              <div style={{ fontWeight: 700, color: '#e6edf3', marginBottom: 6, fontSize: '1.0625rem' }}>Python Quickstart</div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 12px' }}>
                Ergonomic API, fast iteration, LangGraph-compatible patterns. Best for prototyping and data science workflows.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Ergonomic', 'Familiar', 'LangGraph-compatible'].map(tag => (
                  <span key={tag} style={{ background: 'rgba(53,114,165,0.12)', border: '1px solid rgba(53,114,165,0.3)', borderRadius: 12, padding: '2px 8px', fontSize: '0.75rem', color: '#3572A5' }}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </Section>

      <Section id="three-concepts" title="Three Core Concepts">
        <p style={muted}>You only need three things to build a Flowgentra agent:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            {
              num: '1', accent: '#CE422B', title: 'State',
              body: 'A typed container of key-value data that flows through the entire graph. Every node reads from and writes to state. In Rust: a struct with #[derive(State)]. In Python: a TypedDict or State instance.',
              link: '/docs/state-concepts',
            },
            {
              num: '2', accent: '#3572A5', title: 'Nodes',
              body: 'Functions that receive state and return updated state. Nodes do the actual work: call LLMs, execute tools, transform data, make decisions. One node = one unit of responsibility.',
              link: '/docs/nodes',
            },
            {
              num: '3', accent: '#3fb950', title: 'Graph',
              body: 'The wiring that connects nodes. Edges define execution order. Conditional edges route dynamically based on state. You compile a graph once, then invoke it many times.',
              link: '/docs/graphs',
            },
          ].map(c => (
            <Link key={c.num} to={c.link} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              background: '#161b22', border: '1px solid #21262d',
              borderRadius: 8, padding: '18px 20px', textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = c.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: c.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', fontWeight: 700, color: '#fff', flexShrink: 0,
              }}>{c.num}</div>
              <div>
                <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 4 }}>{c.title}</div>
                <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{c.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="explore" title="Explore the Docs">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {[
            { to: '/docs/installation',       emoji: '📦', label: 'Installation',        desc: 'Cargo, pip, or build from source' },
            { to: '/docs/agents',             emoji: '🤖', label: 'Building Agents',     desc: 'ZeroShotReAct, conversational, config-driven' },
            { to: '/docs/llm-client',         emoji: '🔌', label: 'LLM Integration',     desc: '7 providers, tool calling, streaming' },
            { to: '/docs/rag',                emoji: '🔍', label: 'RAG',                 desc: 'Embeddings, vector stores, retrieval' },
            { to: '/docs/supervisor',         emoji: '🎯', label: 'Multi-Agent',         desc: '11 orchestration strategies' },
            { to: '/docs/memory',             emoji: '💾', label: 'Memory',              desc: 'Conversation history, checkpointing' },
            { to: '/docs/api/state-graph',    emoji: '📖', label: 'API Reference',       desc: 'Complete API for all modules' },
            { to: '/docs/examples',           emoji: '💡', label: 'Examples',            desc: 'Chatbot, RAG agent, multi-agent' },
            { to: '/docs/tutorials/research-assistant', emoji: '🔬', label: 'E2E Tutorial', desc: 'Build a research assistant from scratch' },
          ].map(item => (
            <Link key={item.to} to={item.to} style={card}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
              <span style={{ fontSize: '1.25rem', marginBottom: 6, display: 'block' }}>{item.emoji}</span>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 4, fontSize: '0.9375rem' }}>{item.label}</div>
              <div style={{ fontSize: '0.8125rem', color: '#8b949e', lineHeight: 1.5 }}>{item.desc}</div>
            </Link>
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

const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.7, fontSize: '1.0625rem' }
const muted = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const card = {
  background: '#161b22', border: '1px solid #21262d',
  borderRadius: 8, padding: '18px 18px', textDecoration: 'none',
  display: 'block', transition: 'border-color 0.2s',
}

