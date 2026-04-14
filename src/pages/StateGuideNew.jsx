import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview', label: 'What is State?' },
  { id: 'quick-example', label: 'Quick Example' },
  { id: 'how-it-works', label: 'How State Works' },
  { id: 'state-types', label: 'State Types' },
  { id: 'when-to-use', label: 'When to Use State' },
  { id: 'common-mistakes', label: 'Common Mistakes' },
  { id: 'next-steps', label: 'Next Steps' },
]

export default function StateGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Understanding State
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        State is how your agents remember information across steps and conversations.
        <strong style={{ color: '#e6edf3' }}> Think of it as shared memory between your workflow nodes.</strong>
      </p>

      <Section id="overview" title="What is State?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Without state, each step in your workflow starts fresh. With state, information flows between steps:
        </p>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🧠 Mental Model: State as a Shared Notebook
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            Imagine all your workflow nodes sharing one notebook:
          </p>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li><strong>Input Node:</strong> "User asked about Tokyo weather" → writes to notebook</li>
            <li><strong>Search Node:</strong> Reads notebook, searches web, adds results</li>
            <li><strong>Response Node:</strong> Reads notebook, crafts final answer</li>
          </ul>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Why this matters:</strong> Complex AI workflows need memory.
          State makes your agents conversational, reliable, and capable of multi-step reasoning.
        </p>
      </Section>

      <Section id="quick-example" title="Quick Example: Conversational Agent">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Here's a simple agent that remembers your name across messages:
        </p>

        <CodeBlock
          python={`from flowgentra_ai import StateGraph, START, END
from flowgentra_ai.state import State

# Define what information we track
class ConversationState(State):
    messages: list = []
    user_name: str = None
    conversation_stage: str = "greeting"

# Create a simple conversational flow
def greet_user(state):
    if not state.user_name:
        return {
            "messages": state.messages + ["Hello! What's your name?"],
            "conversation_stage": "waiting_name"
        }
    return state

def remember_name(state):
    # In a real app, you'd extract name from user input
    user_input = state.messages[-1] if state.messages else ""
    name = "Alice"  # Simplified extraction

    return {
        "user_name": name,
        "messages": state.messages + [f"Nice to meet you, {name}!"],
        "conversation_stage": "remembered"
    }

# Build the workflow
graph = StateGraph(ConversationState)
graph.add_node("greet", greet_user)
graph.add_node("remember", remember_name)

graph.add_edge(START, "greet")
graph.add_conditional_edges("greet", lambda s: "remember" if not s.user_name else END)
graph.add_edge("remember", END)

# Run it
result = graph.invoke({"messages": ["Hi there!"]})
print(result["messages"])
# Output: ["Hello! What's your name?", "Nice to meet you, Alice!"]`}
        />

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '16px',
          marginTop: 16
        }}>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            <strong style={{ color: '#e6edf3' }}>What happened:</strong> The workflow remembered that it greeted the user
            and needed their name, then used that information to provide a personalized response.
          </p>
        </div>
      </Section>

      <Section id="how-it-works" title="How State Works">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          State flows through your workflow like this:
        </p>

        <div style={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '0.9rem', background: '#161b22', padding: '16px', borderRadius: 6, marginBottom: 16 }}>
          Initial State → Node 1 Processes → Updated State → Node 2 Processes → Final State
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🔄 State Updates
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            Each node receives the current state and returns updates:
          </p>
          <CodeBlock
            python={`def my_node(state):
    # Read from state
    current_count = state.get("counter", 0)

    # Process
    new_count = current_count + 1

    # Return updates (only what changed)
    return {"counter": new_count}`}
          />
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🎯 State is Immutable
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            You don't modify state directly. You return changes, and Flowgentra merges them:
          </p>
          <CodeBlock
            python={`# ❌ Wrong: Direct modification
def bad_node(state):
    state["counter"] += 1  # Don't do this!
    return state

# ✅ Right: Return changes
def good_node(state):
    return {"counter": state.get("counter", 0) + 1}`}
          />
        </div>
      </Section>

      <Section id="state-types" title="State Types">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra supports different ways to structure your state:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {[
            {
              name: 'Typed State (Recommended)',
              description: 'Use Pydantic models for type safety and validation',
              when: 'Production apps, complex workflows',
              example: 'class MyState(State): user_id: int, messages: List[str]'
            },
            {
              name: 'Dictionary State',
              description: 'Simple Python dictionaries, flexible but error-prone',
              when: 'Prototyping, simple scripts',
              example: '{"user_id": 123, "messages": ["hello"]}'
            },
            {
              name: 'Agent State',
              description: 'Pre-built state for conversational agents',
              when: 'Chatbots, assistants',
              example: 'AgentState with messages, memory, tools'
            },
          ].map(stateType => (
            <div key={stateType.name} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '20px'
            }}>
              <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>
                {stateType.name}
              </h4>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
                {stateType.description}
              </p>
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: '#3572A5', fontSize: '0.8rem', fontWeight: 600 }}>Best for:</span>
                <span style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: 8 }}>{stateType.when}</span>
              </div>
              <div>
                <span style={{ color: '#3572A5', fontSize: '0.8rem', fontWeight: 600 }}>Example:</span>
                <code style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: 8, background: 'rgba(177,186,196,0.2)', padding: '2px 4px', borderRadius: 3 }}>
                  {stateType.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="when-to-use" title="When to Use State">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ✅ Use State When:
          </h4>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li>Building multi-step workflows</li>
            <li>Creating conversational agents</li>
            <li>Needing to remember user context</li>
            <li>Passing data between workflow steps</li>
            <li>Tracking progress or status</li>
          </ul>
        </div>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Don't Use State For:
          </h4>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li>Single-shot API calls</li>
            <li>Stateless transformations</li>
            <li>Data that doesn't change</li>
            <li>Temporary calculations</li>
          </ul>
        </div>
      </Section>

      <Section id="common-mistakes" title="Common Mistakes">
        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Modifying State Directly
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> State changes don't persist between nodes.
          </p>
          <CodeBlock
            python={`# ❌ Wrong
def bad_node(state):
    state["counter"] = state.get("counter", 0) + 1  # Modifies in place
    return state  # No changes returned

# ✅ Right
def good_node(state):
    return {"counter": state.get("counter", 0) + 1}  # Return changes`}
          />
        </div>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Over-sharing State
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> Every node sees everything, leading to tight coupling.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Solution:</strong> Keep state focused on what nodes actually need.
          </p>
          <CodeBlock
            python={`# ❌ Too much in state
class BloatedState(State):
    user_id: int
    user_name: str
    user_email: str
    user_preferences: dict
    internal_cache: dict
    temp_calculations: list
    # ... 20 more fields

# ✅ Focused state
class FocusedState(State):
    user_id: int
    conversation_context: str
    current_task: str`}
          />
        </div>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Ignoring State Size
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> Large state objects slow down serialization and checkpointing.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Solution:</strong> Store large data externally, keep references in state.
          </p>
          <CodeBlock
            python={`# ❌ Large objects in state
class BadState(State):
    large_file_content: str  # 10MB of text
    image_data: bytes       # 5MB of images

# ✅ References in state
class GoodState(State):
    file_id: str           # Reference to external storage
    image_url: str         # URL to image`}
          />
        </div>
      </Section>

      <Section id="next-steps" title="Next Steps">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Now that you understand state, let's build more sophisticated workflows:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            {
              title: 'Build Your First Graph',
              desc: 'Connect nodes with state flowing between them',
              link: '/docs/concepts/graphs',
              icon: '🔗'
            },
            {
              title: 'Add Memory to Agents',
              desc: 'Make agents remember conversations using state',
              link: '/docs/guides/memory',
              icon: '🧠'
            },
            {
              title: 'Handle Complex Workflows',
              desc: 'Branching, looping, and conditional state updates',
              link: '/docs/guides/advanced-nodes',
              icon: '🔀'
            },
            {
              title: 'Production State Management',
              desc: 'Checkpointing, recovery, and scaling state',
              link: '/docs/guides/state',
              icon: '🏭'
            },
          ].map(step => (
            <Link key={step.title} to={step.link} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '20px',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
              display: 'block'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                <span style={{ color: '#e6edf3', fontWeight: 600 }}>{step.title}</span>
              </div>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>{step.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 40 }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#e6edf3',
        marginBottom: 16,
        scrollMarginTop: '80px'
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}