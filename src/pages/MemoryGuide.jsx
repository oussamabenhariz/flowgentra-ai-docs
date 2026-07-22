import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'checkpointers', label: 'Checkpointers' },
  { id: 'conversation-memory', label: 'Conversation Memory' },
  { id: 'memory-aware-agents', label: 'Memory-Aware Agents' },
  { id: 'threading', label: 'Threading & Sessions' },
  { id: 'persistence', label: 'Persistence' },
]

export default function MemoryGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Memory Management
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Memory in Flowgentra refers to both <strong style={{ color: '#e6edf3' }}>conversation history</strong> (what the agent remembers from previous interactions) and <strong style={{ color: '#e6edf3' }}>checkpointing</strong> (persisting graph state to disk for resumability).
      </p>

      <Section id="checkpointers" title="Checkpointers">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Checkpointers save your graph's state after every step, keyed by thread ID. This lets you
          resume interrupted or paused workflows (see the <a href="/docs/human-in-loop" style={{ color: '#58a6ff' }}>Human-in-the-Loop guide</a>) and
          survive process restarts. Set exactly one backend on the builder before <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>compile()</code>.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::state_graph::{StateGraph, END};
use std::sync::Arc;

let graph = StateGraph::<MyState>::builder()
    .add_node("step1", step1_fn)
    .add_node("step2", step2_fn)
    .add_edge("step1", "step2")
    .add_edge("step2", END)
    .set_entry_point("step1")
    .set_checkpointer(Arc::new(flowgentra_ai::core::state_graph::FileCheckpointer::new("./checkpoints")?))
    .compile()?;

// Each thread_id gets its own checkpoint history.
let result = graph.invoke_with_id("user-42".into(), initial_state).await?;`}
          python={`from flowgentra_ai.graph import StateGraph, END

builder = StateGraph(MyState)
builder.add_node("step1", step1_fn)
builder.add_node("step2", step2_fn)
builder.add_edge("step1", "step2")
builder.add_edge("step2", END)
builder.set_entry_point("step1")
builder.set_checkpointer("./checkpoints")  # FileCheckpointer under the hood
graph = builder.compile()

# Each thread_id gets its own checkpoint history.
result = graph.invoke_with_thread("user-42", initial_state)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Checkpointer Backends</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Builder call</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Storage</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>set_checkpointer(path)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Local JSON files (one per thread/step)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Development, single-machine deployments</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>set_sqlite_checkpointer(url)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Single SQLite file, transactional writes</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Single-process durable execution (CLI tools, single-instance services)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>set_postgres_checkpointer(url)</td>
                <td style={{ padding: '8px' }}>Postgres table, created automatically</td>
                <td style={{ padding: '8px' }}>Horizontally-scaled services — multiple processes/replicas can resume the same thread</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Calling more than one of these is resolved by fixed precedence, not call order: Postgres wins over
          SQLite, which wins over the file path. In-memory (no persistence beyond the current process) is the
          default when none are called.
        </p>
      </Section>

      <Section id="conversation-memory" title="Conversation Memory">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          For chatbots and multi-turn conversations, you need to maintain context across interactions. Flowgentra provides several memory strategies.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::memory::ConversationMemory;

let memory = ConversationMemory::new(10); // Keep last 10 messages
let mut state = MyState::default();

// Add user message
memory.add_user_message("Hello, can you help me?")?;

// Add assistant response
memory.add_assistant_message("Of course! What do you need help with?")?;

// Get recent messages for LLM context
let recent = memory.get_recent(5)?;
let context = recent.iter()
    .map(|msg| format!("{}: {}", msg.role, msg.content))
    .collect::<Vec<_>>()
    .join("\\n");`}
          python={`from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=10)

# Add messages
memory.add_user_message("Hello, can you help me?")
memory.add_assistant_message("Of course! What do you need help with?")

# Get recent messages for LLM context
recent = memory.get_recent(5)
context = "\\n".join(f"{msg.role}: {msg.content}" for msg in recent)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>ConversationMemory Methods</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Method</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>add_user_message(content)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>content: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Add a user message to memory</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>add_assistant_message(content)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>content: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Add an assistant response to memory</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>get_recent(n)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>n: int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>List[Message]</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Get last n messages</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>clear()</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Clear all messages from memory</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>get_all()</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>List[Message]</td>
                <td style={{ padding: '8px' }}>Get all messages in memory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="memory-aware-agents" title="Memory-Aware Agents">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Memory-aware agents automatically manage conversation history and can handle multi-turn conversations without manual state management.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::agent::MemoryAwareAgent;

let agent = MemoryAwareAgent::builder()
    .llm_config(llm_config)
    .memory_steps(20) // Keep 20 recent messages
    .tools(vec![calculator_tool])
    .build()?;

// First interaction
let response1 = agent.run("What's 15 + 27?").await?;
// Agent remembers the calculation

// Follow-up conversation
let response2 = agent.run("Now multiply that by 3").await?;
// Agent recalls the previous result (42) and computes 42 * 3 = 126`}
          python={`from flowgentra_ai.agent import MemoryAwareAgent
from flowgentra_ai.llm import LLM

agent = MemoryAwareAgent(
    llm=LLM(provider="openai", model="gpt-4o"),
    memory_steps=20,  # Keep 20 recent messages
    tools=[calculator_tool]
)

# First interaction
response1 = agent.run("What's 15 + 27?")
# Agent remembers the calculation

# Follow-up conversation
response2 = agent.run("Now multiply that by 3")
# Agent recalls the previous result (42) and computes 42 * 3 = 126`}
        />
      </Section>

      <Section id="threading" title="Threading & Sessions">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          There's no separate "threaded checkpointer" type — any checkpointer backend already
          scopes checkpoints by thread ID. Pass a distinct <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>thread_id</code> per
          user/conversation to <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>invoke_with_thread</code> (Python)
          or <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>invoke_with_id</code> (Rust) to keep them separate.
        </p>
        <CodeBlock
          rust={`// User A's conversation
let result_a = graph.invoke_with_id("user_a".into(), initial_state.clone()).await?;

// User B's conversation (completely separate checkpoint history)
let result_b = graph.invoke_with_id("user_b".into(), initial_state).await?;`}
          python={`# User A's conversation
result_a = graph.invoke_with_thread("user_a", initial_state)

# User B's conversation (completely separate checkpoint history)
result_b = graph.invoke_with_thread("user_b", initial_state)`}
        />
      </Section>

      <Section id="persistence" title="Persistence & Recovery">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Checkpoints let you recover from crashes and resume long-running or paused workflows — see
          the <a href="/docs/human-in-loop" style={{ color: '#58a6ff' }}>Human-in-the-Loop guide</a> for
          {' '}<code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume()</code>, <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume_with_state()</code>,
          and <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume_command()</code>. To inspect what's been checkpointed for a
          thread (e.g. for debugging), use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>get_state_history</code>:
        </p>
        <CodeBlock
          rust={`// (step, node_name) pairs, oldest first — Rust exposes the same via
// StateGraph::history(thread_id).
let history = graph.history("user_a").await?;
for (step, node) in &history {
    println!("step {step}: {node}");
}`}
          python={`# [{"step_id": ..., "node": ...}, ...]
history = graph.get_state_history("user_a")
for entry in history:
    print(entry["step_id"], entry["node"])`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A crashed or restarted process resumes exactly like a paused one — compile a graph
          pointing at the same checkpointer backend and thread ID, then call <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume()</code>.
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