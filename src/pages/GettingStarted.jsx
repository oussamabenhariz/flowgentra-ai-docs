import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'two-patterns', label: 'Two Patterns' },
  { id: 'next-steps', label: 'Next Steps' },
]

export default function GettingStarted() {
  const { language } = useLanguage()
  const isRust = language === 'rust'

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Getting Started
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Build your first Flowgentra agent in {isRust ? 'Rust' : 'Python'} in 5 minutes.
      </p>

      <Section id="overview" title="Overview">
        <p style={{ color: '#8b949e', lineHeight: 1.75, margin: 0 }}>
          Flowgentra models your AI agent as a <strong style={{ color: '#e6edf3' }}>directed graph</strong>.
          Each node is a function that reads and writes shared state.
          Edges define execution order. Conditional edges allow dynamic branching.
          The compiled graph runs synchronously or asynchronously, returning final state.
        </p>
      </Section>

      <Section id="quick-start" title="Quick Start">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          {isRust
            ? 'Add flowgentra to your Cargo.toml, then:'
            : 'Install flowgentra, then:'}
        </p>
        <CodeBlock
          rust={`use flowgentra::prelude::*;

#[derive(State, Default)]
struct GreetState {
    name: String,
    greeting: String,
}

#[node]
async fn greet(state: &mut GreetState) -> Result<()> {
    state.greeting = format!("Hello, {}! 👋", state.name);
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<GreetState>::builder()
        .add_node("greet", greet)
        .set_entry("greet")
        .build()?;

    let result = graph.invoke(GreetState {
        name: "world".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.greeting);
    Ok(())
}`}
          python={`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

class GreetState(TypedDict):
    name: str
    greeting: str

def greet(state: GreetState) -> GreetState:
    return {**state, "greeting": f"Hello, {state['name']}! 👋"}

builder = StateGraph(GreetState)
builder.add_node("greet", greet)
builder.set_entry_point("greet")
builder.add_edge("greet", END)
graph = builder.compile()

result = graph.invoke({"name": "world", "greeting": ""})
print(result["greeting"])
# Hello, world! 👋`}
        />
      </Section>

      <Section id="two-patterns" title="Two Patterns">
        <p style={{ color: '#8b949e', lineHeight: 1.75, marginBottom: 24 }}>
          Flowgentra supports two complementary ways to build agents. Both work in {isRust ? 'Rust' : 'Python'}.
        </p>

        <PatternCard
          number="1"
          title="Code-Driven"
          badge="Good for: scripts, prototypes"
          description="Define the graph entirely in code. Best for small agents where the graph topology is fixed."
        >
          <CodeBlock
            rust={`// All wiring in code
let graph = StateGraph::<MyState>::builder()
    .add_node("a", node_a)
    .add_node("b", node_b)
    .add_edge("a", "b")
    .set_entry("a")
    .build()?;`}
            python={`# All wiring in code
builder = StateGraph(MyState)
builder.add_node("a", node_a)
builder.add_node("b", node_b)
builder.add_edge("a", "b")
builder.set_entry_point("a")
graph = builder.compile()`}
          />
        </PatternCard>

        <PatternCard
          number="2"
          title="Config-Driven"
          badge="Recommended for production"
          description="Define topology in YAML, handlers in code with @register_handler. Swap configs without recompiling."
        >
          <CodeBlock
            rust={`// agent.yaml defines the graph
// handlers discovered via #[register_handler]
let agent = Agent::from_config_path("agent.yaml")?;
let result = agent.invoke(serde_json::json!({
    "query": "tell me about Rust"
})).await?;`}
            python={`# agent.yaml defines the graph
# handlers discovered via @register_handler
agent = Agent.from_config_path("agent.yaml")
result = await agent.invoke({
    "query": "tell me about Python"
})`}
          />
        </PatternCard>
      </Section>

      <Section id="next-steps" title="Next Steps">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { to: '/docs/installation', label: '📦 Installation', desc: 'Add to your project' },
            { to: '/docs/api-reference', label: '📖 API Reference', desc: 'Full API docs' },
            { to: '/docs/examples', label: '💡 Examples', desc: 'Real-world patterns' },
          ].map(item => (
            <Link key={item.to} to={item.to} style={{
              background: '#161b22', border: '1px solid #21262d',
              borderRadius: 8, padding: '16px 18px', textDecoration: 'none',
              display: 'block', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: '0.875rem', color: '#8b949e' }}>{item.desc}</div>
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

function PatternCard({ number, title, badge, description, children }) {
  return (
    <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '20px', marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ background: 'var(--accent)', color: '#fff', width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{number}</span>
        <strong style={{ color: '#e6edf3', fontSize: '1rem' }}>{title}</strong>
        <span style={{ background: 'var(--accent-dim)', color: 'var(--accent)', fontSize: '0.7rem', padding: '2px 8px', borderRadius: 10, border: '1px solid var(--accent)', fontWeight: 500, marginLeft: 'auto' }}>{badge}</span>
      </div>
      <p style={{ color: '#8b949e', marginBottom: 14, lineHeight: 1.6, fontSize: '0.9rem' }}>{description}</p>
      {children}
    </div>
  )
}
