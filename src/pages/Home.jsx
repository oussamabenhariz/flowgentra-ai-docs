import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import CodeBlock from '../components/CodeBlock'
import LanguageSwitcher from '../components/LanguageSwitcher'

// ── Hero code examples ────────────────────────────────────────────────────────
const heroRust = `use flowgentra_ai::prelude::*;

#[derive(State, Default)]
struct AgentState {
    query:    String,
    response: String,
}

#[node]
async fn answer(state: &mut AgentState) -> Result<()> {
    let client = LLM::openai("gpt-4o");
    let msg = Message::user(&state.query);
    state.response = client.chat(vec![msg]).await?.content;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<AgentState>::builder()
        .add_node("answer", answer)
        .set_entry("answer")
        .build()?;

    let result = graph.invoke(AgentState {
        query: "What is Flowgentra?".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.response);
    Ok(())
}`

const heroPython = `from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from typing import TypedDict

class AgentState(TypedDict):
    query: str
    response: str

config = LLMConfig(provider="openai", model="gpt-4o")
client = LLM.from_config(config)

def answer(state: AgentState) -> AgentState:
    msg = Message.user(state["query"])
    reply = client.chat([msg])
    return {**state, "response": reply.content}

builder = StateGraph(AgentState)
builder.add_node("answer", answer)
builder.set_entry_point("answer")
builder.add_edge("answer", END)
graph = builder.compile()

result = graph.invoke({"query": "What is Flowgentra?", "response": ""})
print(result["response"])`

// ── Feature cards ─────────────────────────────────────────────────────────────
const features = [
  {
    icon: '⚡',
    title: 'Built on Rust',
    description: 'Zero-cost abstractions and async-first design. Python bindings run at near-native speed via PyO3. No GIL bottlenecks.',
  },
  {
    icon: '🗺️',
    title: 'Graph-First Design',
    description: 'Model any agent logic as a directed graph. Conditional routing, parallel branches, subgraphs — all composable.',
  },
  {
    icon: '💾',
    title: 'Stateful by Default',
    description: 'Strongly-typed state flows through every node. Reducers handle concurrent merges. Checkpointing gives you resumability for free.',
  },
  {
    icon: '🔌',
    title: 'LLM-Agnostic',
    description: 'One API for OpenAI, Anthropic, Ollama, Groq, Mistral, Azure, and HuggingFace. Switch providers with one config line.',
  },
  {
    icon: '🤖',
    title: 'Multi-Agent Ready',
    description: '11 orchestration strategies out of the box: Sequential, Parallel, Map-Reduce, Debate, LLM-Routed, and more.',
  },
  {
    icon: '🔍',
    title: 'Built-in RAG',
    description: 'Embeddings, vector stores (in-memory, Chroma, Pinecone), hybrid retrieval, ingestion pipelines — all first-class.',
  },
]

// ── Comparison table ──────────────────────────────────────────────────────────
const comparison = [
  { feature: 'Language',         flowgentra: 'Rust + Python (PyO3)', langgraph: 'Python only', langchain: 'Python + JS' },
  { feature: 'Performance',      flowgentra: 'Native (Rust engine)', langgraph: 'Python runtime', langchain: 'Python runtime' },
  { feature: 'State typing',     flowgentra: 'Compile-time (Rust) / TypedDict (Python)', langgraph: 'TypedDict', langchain: 'Weakly typed' },
  { feature: 'Multi-agent',      flowgentra: '11 strategies built-in', langgraph: 'Manual wiring', langchain: 'Via LCEL chains' },
  { feature: 'Config-driven',    flowgentra: 'YAML + auto-discovery', langgraph: 'Code only', langchain: 'Partial (LangServe)' },
  { feature: 'Checkpointing',    flowgentra: 'File + in-memory', langgraph: 'File, Redis, Postgres', langchain: 'Via LangSmith' },
  { feature: 'Built-in RAG',     flowgentra: 'Yes (embeddings + stores)', langgraph: 'Via LangChain', langchain: 'Yes' },
  { feature: 'Observability',    flowgentra: 'Built-in tracer + Mermaid', langgraph: 'LangSmith required', langchain: 'LangSmith required' },
]

// ── Language choose screen ────────────────────────────────────────────────────
function LanguageChooseScreen({ onChoose }) {
  const [hovered, setHovered] = useState(null)

  const card = (lang, icon, label, tagline, accent, dest) => {
    const isHov = hovered === lang
    return (
      <button
        onClick={() => onChoose(lang)}
        onMouseEnter={() => setHovered(lang)}
        onMouseLeave={() => setHovered(null)}
        style={{
          background: '#161b22',
          border: `2px solid ${isHov ? accent : '#21262d'}`,
          borderRadius: 14, padding: '44px 60px',
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          minWidth: 240,
          transform: isHov ? 'translateY(-4px) scale(1.02)' : 'none',
          transition: 'all 0.2s',
          boxShadow: isHov ? `0 12px 40px ${accent}33` : 'none',
        }}
      >
        <span style={{ fontSize: '4rem', lineHeight: 1 }}>{icon}</span>
        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#e6edf3' }}>{label}</span>
        <span style={{ fontSize: '0.875rem', color: '#8b949e', textAlign: 'center', lineHeight: 1.6, maxWidth: 200 }}>{tagline}</span>
        <span style={{
          marginTop: 4, background: accent, color: '#fff',
          fontSize: '0.875rem', fontWeight: 600, padding: '7px 22px', borderRadius: 20,
        }}>
          Start with {label} →
        </span>
      </button>
    )
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', gap: 52 }}>
      <div style={{ textAlign: 'center', maxWidth: 600 }}>
        <div style={{ display: 'inline-block', background: 'rgba(206,66,43,0.12)', border: '1px solid rgba(206,66,43,0.4)', borderRadius: 20, padding: '4px 14px', fontSize: '0.8rem', color: '#CE422B', marginBottom: 20, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Welcome to Flowgentra
        </div>
        <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)', fontWeight: 700, color: '#e6edf3', marginBottom: 16, marginTop: 0, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Which language are you using?
        </h1>
        <p style={{ color: '#8b949e', fontSize: '1.0625rem', lineHeight: 1.7, margin: 0 }}>
          We'll show you the right API signatures, code examples, and installation instructions throughout the entire site.
          You can switch anytime from the navbar.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {card('rust',   '🦀', 'Rust',   'Type-safe, zero-cost, compile-time guarantees', '#CE422B')}
        {card('python', '🐍', 'Python', 'Ergonomic, fast iteration, LangGraph-compatible', '#3572A5')}
      </div>
      <p style={{ color: '#484f58', fontSize: '0.875rem' }}>
        Not sure? <button onClick={() => onChoose('python')} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer', fontSize: '0.875rem', textDecoration: 'underline' }}>Start with Python</button> — you can always switch.
      </p>
    </div>
  )
}

// ── Main Home ─────────────────────────────────────────────────────────────────
export default function Home() {
  const { language, setLanguage } = useLanguage()
  const isRust = language === 'rust'

  const [hasChosen, setHasChosen] = useState(
    () => localStorage.getItem('fg-lang-chosen') === 'true'
  )

  const chooseLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('fg-lang-chosen', 'true')
    setHasChosen(true)
  }

  if (!hasChosen) {
    return <LanguageChooseScreen onChoose={chooseLanguage} />
  }

  const accent = isRust ? '#CE422B' : '#3572A5'
  const quickstartPath = isRust ? '/docs/quickstart-rust' : '/docs/quickstart-python'

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(180deg, #161b22 0%, #0d1117 60%)', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 24px 72px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--accent-dim)', border: '1px solid var(--accent)',
                borderRadius: 20, padding: '4px 14px', fontSize: '0.8125rem',
                color: 'var(--accent)', marginBottom: 22,
              }}>
                <span>{isRust ? '🦀' : '🐍'}</span>
                <span>{isRust ? 'Zero-cost Rust engine' : 'Python — powered by Rust'}</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800,
                lineHeight: 1.1, letterSpacing: '-0.04em', color: '#e6edf3',
                marginBottom: 20, marginTop: 0,
              }}>
                Build stateful AI agents<br />
                <span style={{ color: 'var(--accent)' }}>as typed graphs.</span>
              </h1>

              <p style={{ fontSize: '1.125rem', color: '#8b949e', lineHeight: 1.75, marginBottom: 12, maxWidth: 480 }}>
                Flowgentra is a high-performance framework for building multi-step AI agents.
                Define nodes, connect edges, share typed state — in {isRust ? 'Rust or Python' : 'Python or Rust'}.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#8b949e', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                Inspired by LangGraph. Built for production — with <strong style={{ color: '#e6edf3' }}>Rust performance</strong>,{' '}
                <strong style={{ color: '#e6edf3' }}>compile-time state guarantees</strong>, and{' '}
                <strong style={{ color: '#e6edf3' }}>11 multi-agent strategies</strong> out of the box.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
                <Link to={quickstartPath} style={{
                  background: 'var(--accent)', color: '#fff',
                  padding: '11px 28px', borderRadius: 7, textDecoration: 'none',
                  fontWeight: 700, fontSize: '0.9375rem', transition: 'opacity 0.15s',
                }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}>
                  {isRust ? 'Get Started with Rust →' : 'Get Started with Python →'}
                </Link>
                <Link to={isRust ? '/docs/quickstart-python' : '/docs/quickstart-rust'} style={{
                  background: 'transparent', color: '#e6edf3',
                  padding: '11px 28px', borderRadius: 7, textDecoration: 'none',
                  fontWeight: 500, fontSize: '0.9375rem', border: '1px solid #30363d',
                  transition: 'border-color 0.15s',
                }}
                  onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.borderColor = '#30363d'}>
                  {isRust ? 'Python Quickstart' : 'Rust Quickstart'}
                </Link>
              </div>

              <LanguageSwitcher />

              {/* Quick stats */}
              <div style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap' }}>
                {[['7+', 'LLM Providers'], ['11', 'Multi-Agent Strategies'], ['3', 'Memory Types']].map(([n, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent)' }}>{n}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#8b949e' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — code */}
            <div style={{ flex: '1 1 460px', minWidth: 0 }}>
              <CodeBlock rust={heroRust} python={heroPython} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 0 }}>
            Everything you need to build production agents
          </h2>
          <p style={{ color: '#8b949e', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            From simple single-LLM nodes to complex multi-agent orchestration — Flowgentra has you covered.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 18 }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: '#161b22', border: '1px solid #21262d',
              borderRadius: 10, padding: '28px',
              transition: 'border-color 0.2s, transform 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#21262d'; e.currentTarget.style.transform = 'none' }}>
              <div style={{ fontSize: '1.875rem', marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>{f.title}</h3>
              <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Architecture diagram (text) ── */}
      <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3', marginBottom: 12, marginTop: 0 }}>
              How Flowgentra works
            </h2>
            <p style={{ color: '#8b949e', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Three primitives. Infinite flexibility.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, alignItems: 'stretch', justifyContent: 'center' }}>
            {[
              {
                num: '01', title: 'Define State',
                body: 'Declare a typed struct (Rust) or TypedDict (Python). State is the single source of truth that every node reads and writes.',
                code: isRust
                  ? `#[derive(State, Default)]\nstruct MyState {\n    messages: Vec<String>,\n    step: u32,\n}`
                  : `class MyState(TypedDict):\n    messages: list[str]\n    step: int`,
              },
              {
                num: '02', title: 'Write Nodes',
                body: 'Each node is a pure function: receive state, do work (call LLM, run tools, transform data), return updated state.',
                code: isRust
                  ? `#[node]\nasync fn process(\n    state: &mut MyState\n) -> Result<()> {\n    state.step += 1;\n    Ok(())\n}`
                  : `def process(state: MyState) -> MyState:\n    return {**state, "step": state["step"] + 1}`,
              },
              {
                num: '03', title: 'Connect & Run',
                body: 'Wire nodes with edges, add conditional routing, and compile. Invoke with initial state — get final state back.',
                code: isRust
                  ? `let graph = StateGraph::<MyState>::builder()\n    .add_node("process", process)\n    .set_entry("process")\n    .build()?;\nlet result = graph.invoke(state).await?;`
                  : `builder.add_node("process", process)\nbuilder.set_entry_point("process")\nbuilder.add_edge("process", END)\ngraph = builder.compile()\nresult = graph.invoke(state)`,
              },
            ].map((step, i, arr) => (
              <div key={step.num} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  background: '#0d1117', border: '1px solid #21262d',
                  borderRadius: 10, padding: '28px 28px',
                  flex: 1, maxWidth: 320,
                }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                    Step {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>{step.title}</h3>
                  <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 16 }}>{step.body}</p>
                  <pre style={{
                    background: '#161b22', border: '1px solid #30363d', borderRadius: 6,
                    padding: '12px 14px', fontSize: '0.75rem', lineHeight: 1.6,
                    color: '#e6edf3', margin: 0, overflowX: 'auto', whiteSpace: 'pre',
                  }}>{step.code}</pre>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ color: '#484f58', fontSize: '1.5rem', padding: '0 16px', flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3', marginBottom: 12, marginTop: 0 }}>
            How does Flowgentra compare?
          </h2>
          <p style={{ color: '#8b949e', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Inspired by LangGraph, built for higher performance and multi-language teams.
          </p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                {['Feature', 'Flowgentra', 'LangGraph', 'LangChain'].map((h, i) => (
                  <th key={h} style={{
                    textAlign: i === 0 ? 'left' : 'center',
                    padding: '12px 16px', borderBottom: '1px solid #21262d',
                    color: i === 1 ? 'var(--accent)' : '#8b949e',
                    fontWeight: 600, fontSize: '0.875rem',
                    background: i === 1 ? 'var(--accent-dim)' : 'transparent',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, ri) => (
                <tr key={row.feature} style={{ background: ri % 2 === 0 ? 'transparent' : '#0a0f14' }}>
                  <td style={{ padding: '11px 16px', color: '#e6edf3', fontWeight: 500, whiteSpace: 'nowrap' }}>{row.feature}</td>
                  <td style={{ padding: '11px 16px', color: '#e6edf3', textAlign: 'center', background: 'rgba(206,66,43,0.04)' }}>{row.flowgentra}</td>
                  <td style={{ padding: '11px 16px', color: '#8b949e', textAlign: 'center' }}>{row.langgraph}</td>
                  <td style={{ padding: '11px 16px', color: '#8b949e', textAlign: 'center' }}>{row.langchain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)', fontWeight: 700, color: '#e6edf3', marginBottom: 12, marginTop: 0 }}>
            Ready to build your first agent?
          </h2>
          <p style={{ color: '#8b949e', marginBottom: 36, lineHeight: 1.7, fontSize: '1.0625rem', maxWidth: 520, margin: '0 auto 36px' }}>
            Follow the quickstart for your language and ship a working agent in under 10 minutes.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs/quickstart-rust" style={{
              background: '#CE422B', color: '#fff',
              padding: '12px 28px', borderRadius: 7, textDecoration: 'none',
              fontWeight: 700, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'opacity 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              🦀 Quick Start — Rust
            </Link>
            <Link to="/docs/quickstart-python" style={{
              background: '#3572A5', color: '#fff',
              padding: '12px 28px', borderRadius: 7, textDecoration: 'none',
              fontWeight: 700, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'opacity 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              🐍 Quick Start — Python
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ maxWidth: 1160, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #21262d' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: 5, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>F</div>
          <span style={{ color: '#484f58', fontSize: '0.875rem' }}>© 2025 Flowgentra</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[['GitHub', 'https://github.com/oussamabenhariz'], ['crates.io', 'https://crates.io'], ['PyPI', 'https://pypi.org']].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: '#8b949e', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = '#8b949e'}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
