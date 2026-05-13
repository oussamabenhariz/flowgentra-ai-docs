import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { Link } from 'react-router-dom'
// Note: next-card links below use <Link> for internal routing

const anchors = [
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'install',       label: 'Installation' },
  { id: 'first-agent',   label: 'Your First Agent' },
  { id: 'add-llm',       label: 'Add an LLM Node' },
  { id: 'multi-node',    label: 'Multi-Node Graph' },
  { id: 'config-driven', label: 'Config-Driven (Production)' },
  { id: 'next',          label: 'Next Steps' },
]

export default function QuickStartPython() {
  return (
    <DocLayout anchors={anchors}>
      <div style={{ marginBottom: 8 }}>
        <span style={{ background: 'rgba(53,114,165,0.12)', border: '1px solid rgba(53,114,165,0.4)', borderRadius: 20, padding: '3px 12px', fontSize: '0.8rem', color: '#3572A5', fontWeight: 600 }}>
          🐍 Python
        </span>
      </div>
      <h1 style={h1}>Quick Start — Python</h1>
      <p style={lead}>
        Build a working AI agent in Python in under 10 minutes. The Python library wraps the high-performance Rust engine via PyO3.
      </p>

      <Section id="prerequisites" title="Prerequisites">
        <ul style={ul}>
          <li>Python 3.10+</li>
          <li>An API key for your LLM provider (e.g., <code style={inlineCode}>OPENAI_API_KEY</code>)</li>
          <li>pip or a virtual environment manager</li>
        </ul>
      </Section>

      <Section id="install" title="Installation">
        <p style={muted}>Install from PyPI:</p>
        <CodeBlock forceLang="bash" rust={`pip install flowgentra-ai

# With optional extras:
pip install "flowgentra-ai[openai]"       # OpenAI provider
pip install "flowgentra-ai[anthropic]"    # Anthropic / Claude
pip install "flowgentra-ai[tracing]"      # Structured logging
pip install "flowgentra-ai[openai,anthropic,tracing]"  # Multiple`} />

        <Callout type="info" title="Building from source">
          If you need the latest changes or want to customize the Rust engine:
          <br />
          <code style={inlineCode}>pip install maturin && cd flowgentra-ai-py && maturin develop</code>
        </Callout>

        <p style={{ ...muted, marginTop: 16 }}>Verify installation:</p>
        <CodeBlock forceLang="bash" rust={`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"
# 0.2.6`} />
      </Section>

      <Section id="first-agent" title="Your First Agent">
        <p style={muted}>
          A Flowgentra graph has three components: <strong style={{ color: '#e6edf3' }}>State</strong> (shared data), <strong style={{ color: '#e6edf3' }}>Nodes</strong> (functions), and <strong style={{ color: '#e6edf3' }}>Edges</strong> (connections).
        </p>
        <CodeBlock python={`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

# 1. Define state — TypedDict gives you type hints and IDE autocomplete
class GreetState(TypedDict):
    name:     str
    greeting: str

# 2. Write a node — receives state dict, returns updated state dict
def greet(state: GreetState) -> GreetState:
    return {**state, "greeting": f"Hello, {state['name']}! Welcome to Flowgentra."}

# 3. Build and compile the graph
builder = StateGraph(GreetState)
builder.add_node("greet", greet)
builder.set_entry_point("greet")
builder.add_edge("greet", END)
graph = builder.compile()

# 4. Run it
result = graph.invoke({"name": "Alice", "greeting": ""})
print(result["greeting"])
# Hello, Alice! Welcome to Flowgentra.`} />

        <Callout type="tip" title="Using State instead of TypedDict">
          For a more dynamic approach, use the built-in <code style={inlineCode}>State</code> class which supports any key-value pairs and provides helper methods:
          <pre style={codeStyle}>{`from flowgentra_ai import State
state = State({"name": "Alice"})
state.get("name")        # "Alice"
state["score"] = 42
"score" in state         # True`}</pre>
        </Callout>
      </Section>

      <Section id="add-llm" title="Add an LLM Node">
        <p style={muted}>Connect a real LLM. Flowgentra's <code style={inlineCode}>LLM</code> works with all major providers via a unified API.</p>
        <CodeBlock python={`import os
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLM, Message
from typing import TypedDict

os.environ["OPENAI_API_KEY"] = "sk-..."

class ChatState(TypedDict):
    user_message: str
    response:     str

# Create a reusable LLM client
client = LLM(provider="openai", model="gpt-4o")

def call_llm(state: ChatState) -> ChatState:
    messages = [
        Message.system("You are a helpful assistant."),
        Message.user(state["user_message"]),
    ]
    reply = client.chat(messages)
    return {**state, "response": reply.content}

builder = StateGraph(ChatState)
builder.add_node("llm", call_llm)
builder.set_entry_point("llm")
builder.add_edge("llm", END)
graph = builder.compile()

result = graph.invoke({
    "user_message": "What is a directed acyclic graph?",
    "response": "",
})
print(result["response"])`} />

        <p style={{ ...muted, marginTop: 12 }}>
          To use a different provider, change one line:
        </p>
        <CodeBlock python={`# Anthropic Claude
client = LLM(provider="anthropic", model="claude-3-5-haiku-20241022", api_key="...")

# Ollama (local — no API key needed)
client = LLM(provider="ollama", model="llama3.2")

# Groq (fast inference)
client = LLM(provider="groq", model="llama-3.3-70b-versatile", api_key="...")`} />
      </Section>

      <Section id="multi-node" title="Multi-Node Graph with Routing">
        <p style={muted}>
          Real agents have multiple nodes with branching logic. Here's a graph that classifies a question and routes it differently:
        </p>
        <CodeBlock python={`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLM, Message
from typing import TypedDict

class RouterState(TypedDict):
    question:  str
    category:  str   # "technical" | "general"
    answer:    str

client = LLM(provider="openai", model="gpt-4o-mini")

def classify(state: RouterState) -> RouterState:
    """Classify the question type."""
    reply = client.chat([
        Message.system("Classify the question as 'technical' or 'general'. Reply with one word only."),
        Message.user(state["question"]),
    ])
    return {**state, "category": reply.content.strip().lower()}

def technical_answer(state: RouterState) -> RouterState:
    reply = client.chat([
        Message.system("You are a technical expert. Give a precise, detailed answer."),
        Message.user(state["question"]),
    ])
    return {**state, "answer": reply.content}

def general_answer(state: RouterState) -> RouterState:
    reply = client.chat([
        Message.system("Give a friendly, easy-to-understand answer."),
        Message.user(state["question"]),
    ])
    return {**state, "answer": reply.content}

# Router function — returns the next node name
def route(state: RouterState) -> str:
    return "technical" if state["category"] == "technical" else "general"

builder = StateGraph(RouterState)
builder.add_node("classify",  classify)
builder.add_node("technical", technical_answer)
builder.add_node("general",   general_answer)

builder.set_entry_point("classify")
builder.add_conditional_edge("classify", route)   # branches based on router output
builder.add_edge("technical", END)
builder.add_edge("general",   END)

graph = builder.compile()

result = graph.invoke({"question": "How does TCP flow control work?", "category": "", "answer": ""})
print(f"[{result['category']}] {result['answer'][:80]}...")`} />
      </Section>

      <Section id="config-driven" title="Config-Driven Approach (Production)">
        <p style={muted}>
          For production agents, define the graph topology in YAML and auto-discover handler functions with <code style={inlineCode}>@register_handler</code>.
          This lets you swap configurations without touching Python code.
        </p>

        <p style={{ ...muted, marginBottom: 8 }}><strong style={{ color: '#e6edf3' }}>handlers.py</strong></p>
        <CodeBlock python={`from flowgentra_ai.agent import register_handler
from flowgentra_ai.llm import LLM, Message

client = LLM(provider="openai", model="gpt-4o-mini")

@register_handler
def answer_question(state):
    reply = client.chat([Message.user(state.get("query", ""))])
    return {**state, "response": reply.content}`} />

        <p style={{ ...muted, marginTop: 16, marginBottom: 8 }}><strong style={{ color: '#e6edf3' }}>agent.yaml</strong></p>
        <CodeBlock forceLang="yaml" rust={`name: my-agent
type: graph
python_handler_module: handlers

llm:
  provider: openai
  model: gpt-4o-mini

graph:
  entry: answer_question
  nodes:
    - name: answer_question
      handler: answer_question
  edges:
    - from: answer_question
      to: __end__`} />

        <p style={{ ...muted, marginTop: 16, marginBottom: 8 }}><strong style={{ color: '#e6edf3' }}>main.py</strong></p>
        <CodeBlock python={`from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = agent.run()

# Or with thread ID for checkpointing:
result = agent.run_with_thread("session-001")`} />
      </Section>

      <Section id="next" title="Next Steps">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { to: '/docs/state-concepts',     label: '📦 State Management',    desc: 'State class, TypedDict, reducers' },
            { to: '/docs/graphs',    label: '🗺️ Graphs & Routing',    desc: 'Conditional edges, loops' },
            { to: '/docs/agents',      label: '🤖 Agent Patterns',      desc: 'ReAct, conversational, config-driven' },
            { to: '/docs/llm-client',  label: '🔌 LLM Integration',     desc: '7 providers, tool calling, streaming' },
            { to: '/docs/memory',      label: '💾 Memory',              desc: 'Conversation history, checkpointing' },
            { to: '/docs/examples',           label: '💡 Examples',            desc: 'Chatbot, RAG, multi-agent' },
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
  }
  const c = colors[type] || colors.info
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8, padding: '14px 18px', marginTop: 16 }}>
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
const codeStyle = {
  background: '#161b22', border: '1px solid #30363d', borderRadius: 6,
  padding: '10px 14px', fontSize: '0.8rem', lineHeight: 1.6,
  color: '#e6edf3', margin: '10px 0 0', overflowX: 'auto', whiteSpace: 'pre',
}

