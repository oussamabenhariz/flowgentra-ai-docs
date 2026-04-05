import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import CodeBlock from '../components/CodeBlock'
import LanguageSwitcher from '../components/LanguageSwitcher'

const heroRust = `use flowgentra::prelude::*;

#[derive(State, Default)]
struct MyState {
    input: String,
    output: String,
}

#[node]
async fn hello(state: &mut MyState) -> Result<()> {
    state.output = format!("Hello from {}!", state.input);
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<MyState>::builder()
        .add_node("hello", hello)
        .set_entry("hello")
        .build()?;

    let result = graph.invoke(MyState {
        input: "Flowgentra".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.output);
    // Hello from Flowgentra!
    Ok(())
}`

const heroPython = `from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

class MyState(TypedDict):
    input: str
    output: str

def hello(state: MyState) -> MyState:
    return {**state, "output": f"Hello from {state['input']}!"}

builder = StateGraph(MyState)
builder.add_node("hello", hello)
builder.set_entry_point("hello")
builder.add_edge("hello", END)
graph = builder.compile()

result = graph.invoke({"input": "Flowgentra"})
print(result["output"])
# Hello from Flowgentra!`

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description: 'Zero-cost abstractions in Rust. Python bindings with near-native performance via PyO3. Async-first throughout.',
  },
  {
    icon: '🔒',
    title: 'Type Safe',
    description: "Rust's compile-time state guarantees. Python TypedDicts for runtime validation. Catch graph errors before they run.",
  },
  {
    icon: '🔀',
    title: 'Dual Language',
    description: 'Write your agent logic in Rust or Python — or mix them. Share YAML configs across both runtimes.',
  },
]

function LanguageChooseScreen({ onChoose }) {
  const [hovered, setHovered] = useState(null)

  const card = (lang, icon, label, tagline, accent) => {
    const isHov = hovered === lang
    return (
      <button
        onClick={() => onChoose(lang)}
        onMouseEnter={() => setHovered(lang)}
        onMouseLeave={() => setHovered(null)}
        style={{
          background: '#161b22',
          border: `2px solid ${isHov ? accent : '#21262d'}`,
          borderRadius: 14,
          padding: '40px 52px',
          cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
          width: 240,
          transform: isHov ? 'translateY(-4px) scale(1.02)' : 'none',
          transition: 'border-color 0.2s, transform 0.18s, box-shadow 0.2s',
          boxShadow: isHov ? `0 8px 32px ${accent}33` : 'none',
        }}
      >
        <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{icon}</span>
        <span style={{ fontSize: '1.375rem', fontWeight: 700, color: '#e6edf3' }}>{label}</span>
        <span style={{ fontSize: '0.875rem', color: '#8b949e', textAlign: 'center', lineHeight: 1.5 }}>{tagline}</span>
        <span style={{ marginTop: 4, background: accent, color: '#fff', fontSize: '0.8125rem', fontWeight: 600, padding: '5px 18px', borderRadius: 20 }}>
          Choose →
        </span>
      </button>
    )
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', gap: 48 }}>
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#e6edf3', marginBottom: 16, marginTop: 0, letterSpacing: '-0.03em' }}>
          Which language are you using?
        </h1>
        <p style={{ color: '#8b949e', fontSize: '1.0625rem', lineHeight: 1.7, margin: 0 }}>
          We'll theme the entire site and show you the right API signatures and code examples.
          You can always switch from the navbar.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
        {card('rust',   '🦀', 'Rust',   'Type-safe, zero-cost, async-first', '#CE422B')}
        {card('python', '🐍', 'Python', 'Ergonomic, LangGraph-compatible',   '#3572A5')}
      </div>
    </div>
  )
}

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

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, #161b22 0%, #0d1117 100%)', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 60px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ flex: '1 1 360px', minWidth: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent-dim)', border: '1px solid var(--accent)', borderRadius: 20, padding: '4px 12px', fontSize: '0.8125rem', color: 'var(--accent)', marginBottom: 20, transition: 'all 0.2s' }}>
                <span>{isRust ? '🦀' : '🐍'}</span>
                {isRust ? 'Built in Rust' : 'Python native'}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#e6edf3', marginBottom: 20, marginTop: 0 }}>
                Agent graphs for<br />
                <span style={{ color: 'var(--accent)', transition: 'color 0.3s' }}>
                  {isRust ? 'Rust & Python' : 'Python & Rust'}
                </span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#8b949e', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
                Flowgentra lets you build stateful, multi-step AI agents as typed graphs.
                Define nodes, wire edges, and invoke — in Rust or Python.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
                <Link to="/docs/getting-started" style={{
                  background: 'var(--accent)', color: '#fff',
                  padding: '10px 24px', borderRadius: 6, textDecoration: 'none',
                  fontWeight: 600, fontSize: '0.9375rem', transition: 'opacity 0.15s',
                }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}>
                  Get Started →
                </Link>
                <Link to="/docs/api-reference" style={{
                  background: 'transparent', color: '#e6edf3',
                  padding: '10px 24px', borderRadius: 6, textDecoration: 'none',
                  fontWeight: 500, fontSize: '0.9375rem', border: '1px solid #30363d',
                  transition: 'border-color 0.15s',
                }}
                  onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.borderColor = '#30363d'}>
                  API Reference
                </Link>
              </div>
              <LanguageSwitcher />
            </div>

            {/* Right — code block */}
            <div style={{ flex: '1 1 440px', minWidth: 0 }}>
              <CodeBlock rust={heroRust} python={heroPython} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 0 }}>
          Why Flowgentra?
        </h2>
        <p style={{ textAlign: 'center', color: '#8b949e', marginBottom: 48 }}>
          Production-ready agent infrastructure — without the boilerplate.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: '#161b22', border: '1px solid #21262d',
              borderRadius: 10, padding: '28px 28px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>{f.title}</h3>
              <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0, fontSize: '0.9375rem' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ background: '#161b22', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#e6edf3', marginBottom: 12, marginTop: 0 }}>
            Ready to build?
          </h2>
          <p style={{ color: '#8b949e', marginBottom: 28 }}>
            Start with our quickstart guide and ship your first agent in minutes.
          </p>
          <Link to="/docs/getting-started" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '12px 32px', borderRadius: 6, textDecoration: 'none',
            fontWeight: 600, fontSize: '1rem', display: 'inline-block',
            transition: 'opacity 0.15s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #21262d' }}>
        <span style={{ color: '#484f58', fontSize: '0.875rem' }}>© 2024 flowgentra</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {[['GitHub', 'https://github.com'], ["crates.io", 'https://crates.io'], ['PyPI', 'https://pypi.org']].map(([label, href]) => (
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
