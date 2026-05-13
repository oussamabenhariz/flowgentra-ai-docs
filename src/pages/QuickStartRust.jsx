import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'install',       label: 'Installation' },
  { id: 'first-agent',   label: 'Your First Agent' },
  { id: 'add-llm',       label: 'Add an LLM Node' },
  { id: 'add-tools',     label: 'Add Tools' },
  { id: 'next',          label: 'Next Steps' },
]

export default function QuickStartRust() {
  return (
    <DocLayout anchors={anchors}>
      <div style={{ marginBottom: 8 }}>
        <span style={{ background: 'rgba(206,66,43,0.12)', border: '1px solid rgba(206,66,43,0.4)', borderRadius: 20, padding: '3px 12px', fontSize: '0.8rem', color: '#CE422B', fontWeight: 600 }}>
          🦀 Rust
        </span>
      </div>
      <h1 style={h1}>Quick Start — Rust</h1>
      <p style={lead}>
        Build a working AI agent in Rust in under 10 minutes. No prior Flowgentra experience needed.
      </p>

      <Section id="prerequisites" title="Prerequisites">
        <ul style={ul}>
          <li>Rust 1.75+ (<code style={inlineCode}>rustup update stable</code>)</li>
          <li>Tokio async runtime (added automatically via Cargo)</li>
          <li>An API key for your LLM provider (e.g., <code style={inlineCode}>OPENAI_API_KEY</code>)</li>
        </ul>
      </Section>

      <Section id="install" title="Installation">
        <p style={muted}>Add Flowgentra to your <code style={inlineCode}>Cargo.toml</code>:</p>
        <CodeBlock forceLang="toml" rust={`[dependencies]
flowgentra-ai = "0.2"
tokio = { version = "1", features = ["full"] }

# Optional feature flags:
# flowgentra-ai = { version = "0.2", features = ["openai", "tracing", "memory"] }`} />

        <Callout type="info" title="Feature flags">
          <p style={{ margin: 0 }}>Enable only what you need: <code style={inlineCode}>openai</code> for OpenAI provider, <code style={inlineCode}>tracing</code> for structured logs, <code style={inlineCode}>memory</code> for checkpointing, <code style={inlineCode}>rag</code> for vector stores.</p>
        </Callout>
      </Section>

      <Section id="first-agent" title="Your First Agent">
        <p style={muted}>
          A Flowgentra agent is a directed graph where each node is an async function that reads and writes shared state.
          Let's build a minimal one:
        </p>
        <CodeBlock rust={`use flowgentra_ai::prelude::*;

// 1. Define your state — the data that flows through the graph
#[derive(State, Default, Clone)]
struct GreetState {
    name:     String,
    greeting: String,
}

// 2. Write a node — receives state, returns Result
#[node]
async fn greet(state: &mut GreetState) -> Result<()> {
    state.greeting = format!("Hello, {}! Welcome to Flowgentra.", state.name);
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    // 3. Build the graph
    let graph = StateGraph::<GreetState>::builder()
        .add_node("greet", greet)
        .set_entry("greet")
        .build()?;

    // 4. Invoke with initial state
    let result = graph.invoke(GreetState {
        name: "Alice".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.greeting);
    // Hello, Alice! Welcome to Flowgentra.
    Ok(())
}`} />
        <p style={{ ...muted, marginTop: 16 }}>
          Run it with <code style={inlineCode}>cargo run</code>. That's a complete Flowgentra agent.
        </p>
      </Section>

      <Section id="add-llm" title="Add an LLM Node">
        <p style={muted}>
          Now let's wire in a real LLM. Flowgentra provides a unified <code style={inlineCode}>LLM</code> that works across all providers.
        </p>
        <CodeBlock rust={`use flowgentra_ai::prelude::*;
use flowgentra_ai::llm::{LLMConfig, LLM, Message};

#[derive(State, Default, Clone)]
struct ChatState {
    user_message: String,
    response:     String,
}

#[node]
async fn call_llm(state: &mut ChatState) -> Result<()> {
    let config = LLMConfig::openai("gpt-4o");
    let client = LLM::from_config(config)?;

    let messages = vec![
        Message::system("You are a helpful assistant."),
        Message::user(&state.user_message),
    ];

    let reply = client.chat(messages).await?;
    state.response = reply.content;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    // Set your API key via environment variable
    std::env::set_var("OPENAI_API_KEY", "sk-...");

    let graph = StateGraph::<ChatState>::builder()
        .add_node("llm", call_llm)
        .set_entry("llm")
        .build()?;

    let result = graph.invoke(ChatState {
        user_message: "What is a directed acyclic graph?".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.response);
    Ok(())
}`} />

        <Callout type="tip" title="Switching providers">
          Replace <code style={inlineCode}>LLMConfig::openai("gpt-4o")</code> with any of:
          <br />
          <code style={inlineCode}>LLMConfig::anthropic("claude-3-5-haiku-20241022")</code>
          <br />
          <code style={inlineCode}>LLMConfig::ollama("llama3.2")</code>
          <br />
          <code style={inlineCode}>LLMConfig::groq("llama-3.3-70b-versatile")</code>
        </Callout>
      </Section>

      <Section id="add-tools" title="Add Tools (Bonus)">
        <p style={muted}>
          Tools let your LLM call functions. Here's a two-node graph: the LLM reasons about which tool to call,
          the tool node executes it, and the loop continues until the LLM is done.
        </p>
        <CodeBlock rust={`use flowgentra_ai::prelude::*;
use flowgentra_ai::tools::{ToolRegistry, ToolDefinition};

#[derive(State, Default, Clone)]
struct ToolState {
    #[reducer(Append)]
    messages: Vec<Message>,
    done: bool,
}

#[node]
async fn llm_node(state: &mut ToolState) -> Result<()> {
    let client = LLM::openai("gpt-4o");

    let calculator = ToolDefinition::new(
        "calculator",
        "Perform arithmetic. Args: expression (string)",
        serde_json::json!({
            "type": "object",
            "properties": { "expression": { "type": "string" } },
            "required": ["expression"]
        }),
    );

    let response = client
        .chat_with_tools(state.messages.clone(), vec![calculator])
        .await?;

    state.messages.push(response.clone());
    state.done = !response.has_tool_calls();
    Ok(())
}

#[node]
async fn tool_node(state: &mut ToolState) -> Result<()> {
    for call in state.messages.last().unwrap().tool_calls() {
        if call.name == "calculator" {
            let expr = call.args["expression"].as_str().unwrap();
            // evaluate expr...
            let result_msg = Message::tool(&format!("Result: 42"), &call.id);
            state.messages.push(result_msg);
        }
    }
    Ok(())
}

fn router(state: &ToolState) -> &'static str {
    if state.done { "__end__" } else { "tools" }
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<ToolState>::builder()
        .add_node("llm",   llm_node)
        .add_node("tools", tool_node)
        .add_edge("tools", "llm")
        .conditional_edge("llm", router)
        .set_entry("llm")
        .build()?;

    let result = graph.invoke(ToolState {
        messages: vec![Message::user("What is 123 * 456?")],
        ..Default::default()
    }).await?;

    println!("{}", result.messages.last().unwrap().content);
    Ok(())
}`} />
      </Section>

      <Section id="next" title="Next Steps">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { to: '/docs/state-concepts',     label: '📦 State & Reducers',    desc: 'Typed state, parallel merges' },
            { to: '/docs/graphs',    label: '🗺️ Graphs & Routing',    desc: 'Conditional edges, subgraphs' },
            { to: '/docs/agents',      label: '🤖 Agent Patterns',      desc: 'ReAct, ZeroShot, Conversational' },
            { to: '/docs/memory',      label: '💾 Memory & Checkpoints', desc: 'Resume interrupted workflows' },
            { to: '/docs/api/state-graph',    label: '📖 API Reference',        desc: 'Full StateGraph API' },
            { to: '/docs/examples',           label: '💡 Examples',             desc: 'Real-world patterns' },
          ].map(item => (
            <Link key={item.to} to={item.to} style={nextCard}
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

function Callout({ type, title, children }) {
  const colors = {
    info: { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', text: '#58a6ff' },
    tip:  { bg: 'rgba(63,185,80,0.1)',  border: 'rgba(63,185,80,0.4)',  text: '#3fb950' },
    warn: { bg: 'rgba(210,153,34,0.1)', border: 'rgba(210,153,34,0.4)', text: '#d29922' },
  }
  const c = colors[type] || colors.info
  return (
    <div style={{
      background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8,
      padding: '14px 18px', marginTop: 16,
    }}>
      {title && <div style={{ fontWeight: 600, color: c.text, marginBottom: 6, fontSize: '0.9rem' }}>{title}</div>}
      <div style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 8 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.7, fontSize: '1.0625rem' }
const muted = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const ul = { color: '#8b949e', lineHeight: 2, paddingLeft: 20, margin: '0 0 16px' }
const inlineCode = { background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 6px', fontSize: '0.85em', fontFamily: 'JetBrains Mono, monospace' }
const nextCard = {
  background: '#161b22', border: '1px solid #21262d',
  borderRadius: 8, padding: '16px 18px', textDecoration: 'none',
  display: 'block', transition: 'border-color 0.2s',
}

