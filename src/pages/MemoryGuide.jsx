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
          Checkpointers save your graph's state to disk after each node execution. This lets you resume interrupted workflows and provides audit trails.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::checkpointer::FileCheckpointer;

let checkpointer = FileCheckpointer::new("./checkpoints")?;
let graph = StateGraph::builder()
    .add_node("step1", step1_fn)
    .add_node("step2", step2_fn)
    .add_edge("step1", "step2")
    .set_entry("step1")
    .with_checkpointer(checkpointer)
    .build()?;

// Run with checkpointing
let result = graph.invoke(initial_state).await?;`}
          python={`from flowgentra_ai.checkpointer import FileCheckpointer

checkpointer = FileCheckpointer("./checkpoints")
graph = StateGraph(MyState)
graph.add_node("step1", step1_fn)
graph.add_node("step2", step2_fn)
graph.add_edge("step1", "step2")
graph.set_entry_point("step1")
graph.checkpointer = checkpointer

# Run with checkpointing
result = graph.invoke(initial_state)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Checkpointer Types</h4>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Checkpointer</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Storage</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>FileCheckpointer</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Local JSON files</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Development, single-machine deployments</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>ThreadedCheckpointer</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Per-thread JSON files</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Multi-user applications, chatbots</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>DatabaseCheckpointer</td>
                <td style={{ padding: '8px' }}>PostgreSQL/MySQL</td>
                <td style={{ padding: '8px' }}>Production, distributed systems</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Checkpoints are saved as JSON files. You can resume from any checkpoint by loading the saved state and continuing execution.
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

agent = MemoryAwareAgent(
    llm_config=llm_config,
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
          For applications with multiple users or conversations, use threads to keep conversations separate.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::checkpointer::ThreadedCheckpointer;

// Each thread has its own conversation history
let checkpointer = ThreadedCheckpointer::new("./threads")?;

// User A's conversation
let thread_a = checkpointer.create_thread("user_a")?;
let result_a = graph.invoke_with_thread(initial_state, thread_a).await?;

// User B's conversation (completely separate)
let thread_b = checkpointer.create_thread("user_b")?;
let result_b = graph.invoke_with_thread(initial_state, thread_b).await?;`}
          python={`from flowgentra_ai.checkpointer import ThreadedCheckpointer

# Each thread has its own conversation history
checkpointer = ThreadedCheckpointer("./threads")

# User A's conversation
result_a = graph.invoke(initial_state, thread_id="user_a")

# User B's conversation (completely separate)
result_b = graph.invoke(initial_state, thread_id="user_b")`}
        />
      </Section>

      <Section id="persistence" title="Persistence & Recovery">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Checkpoints let you recover from crashes and resume long-running workflows. You can also inspect execution history for debugging.
        </p>
        <CodeBlock
          rust={`// List all checkpoints for a thread
let checkpoints = checkpointer.list_checkpoints("user_a")?;

// Resume from a specific checkpoint
let snapshot = checkpointer.load_checkpoint("user_a", checkpoint_id)?;
let resumed_state = snapshot.state;

// Continue execution from where it left off
let final_result = graph.invoke_from_checkpoint(resumed_state, snapshot).await?;`}
          python={`# List all checkpoints for a thread
checkpoints = checkpointer.list_checkpoints("user_a")

# Resume from a specific checkpoint
snapshot = checkpointer.load_checkpoint("user_a", checkpoint_id)
resumed_state = snapshot.state

# Continue execution from where it left off
final_result = graph.invoke(resumed_state, thread_id="user_a")`}
        />
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