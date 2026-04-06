import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'five-ways', label: 'The Five Ways to Create an Agent' },
  { id: 'zero-shot-react', label: 'ZeroShotReAct' },
  { id: 'few-shot-react', label: 'FewShotReAct' },
  { id: 'conversational', label: 'Conversational' },
  { id: 'config-driven', label: 'Config-Driven Agents' },
  { id: 'memory-aware', label: 'MemoryAwareAgent' },
]

export default function AgentsGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Building Agents
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        An <strong style={{ color: '#e6edf3' }}>agent</strong> is a graph that loops: it reasons, picks an action (usually a tool call or an LLM call), observes the result, and repeats — until it has a final answer.
      </p>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra gives you prebuilt agents for the most common patterns, so you don't have to build the loop from scratch.
      </p>

      <Section id="five-ways" title="The Five Ways to Create an Agent">
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>AgentBuilder + ZeroShotReAct</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>General-purpose tool-using agent</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>AgentBuilder + FewShotReAct</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Specialized domain with example shots</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>AgentBuilder + Conversational</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Multi-turn chat with memory</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Agent.from_config_path()</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Production, YAML-configured workflows</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>MemoryAwareAgent</td>
                <td style={{ padding: '8px' }}>Multi-user chatbots with per-user memory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="zero-shot-react" title="ZeroShotReAct">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The classic ReAct (Reason + Act) loop. The agent reasons step by step, decides which tool to call, observes the result, and loops until it has an answer — all without needing example demonstrations.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web")
    .param("query", "string", true);

let calc = ToolSpec::new("calculator", "Perform arithmetic")
    .param("expression", "string", true);

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm("gpt-4", "sk-...")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant.")
    .with_temperature(0.2)
    .with_retries(3)
    .build()
    .await?;

let answer = agent.execute("What is the population of France divided by 1000?").await?;
println!("{answer}");`}
          python={`from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

# Define the tools available to the agent
search = ToolSpec("web_search", "Search the web for up-to-date information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Perform arithmetic calculations")
calc.add_parameter("expression", "string")
calc.set_required("expression")

# Build the agent
agent = (
    AgentBuilder(AgentType.zero_shot_react())
    .with_name("research-assistant")
    .with_llm_config("gpt-4")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant. Think step by step.")
    .with_temperature(0.2)        # lower = more deterministic reasoning
    .with_max_tokens(2000)
    .with_retries(3)              # retry failed LLM calls
    .build_graph()
)

answer = agent.execute_input("What is the population of France divided by 1000?")
print(answer)`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>How ZeroShotReAct Works Internally</h3>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20,
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#8b949e',
          textAlign: 'center'
        }}>
          {`User query
    │
    ▼
[LLM: Reason]   ←──────────────────────────────┐
    │                                           │
    ▼                                           │
Has tool calls?                                 │
    │                                           │
    ├── Yes ──► [Execute tools] ──► [Observe] ──┘
    │
    └── No ───► [Final answer]`}
        </div>
        <p style={{ color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
          The agent loops until the LLM decides it has enough information and produces a final answer (no tool calls).
        </p>
      </Section>

      <Section id="few-shot-react" title="FewShotReAct">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Like ZeroShotReAct, but includes example interactions in the prompt to guide the agent's behavior in specialized domains.
        </p>
        <CodeBlock python={`# Add examples to the agent
agent = (
    AgentBuilder(AgentType.few_shot_react())
    .with_name("code-reviewer")
    .with_llm_config("gpt-4")
    .with_tool(git_diff_tool)
    .with_system_prompt("You are an expert code reviewer.")
    .with_examples([
        {
            "input": "Review this Python function",
            "output": "The function looks good. Consider adding type hints for better readability."
        },
        {
            "input": "Check for security issues in this code",
            "output": "Found potential SQL injection vulnerability. Use parameterized queries."
        }
    ])
    .build_graph()
)`} />
      </Section>

      <Section id="conversational" title="Conversational">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A conversational agent that maintains context across multiple turns. Perfect for chatbots and interactive assistants.
        </p>
        <CodeBlock python={`from flowgentra_ai.agent import AgentBuilder, AgentType
from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=50)

agent = (
    AgentBuilder(AgentType.conversational())
    .with_name("chatbot")
    .with_llm_config("gpt-4")
    .with_memory(memory)
    .with_system_prompt("You are a helpful assistant.")
    .build_graph()
)

# Multi-turn conversation
response1 = agent.execute_input("Hi, I'm Alice!")
response2 = agent.execute_input("What's my name?")  # Remembers "Alice"
response3 = agent.execute_input("Tell me a joke about programming")`} />
      </Section>

      <Section id="config-driven" title="Config-Driven Agents">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Define your agent in YAML for production deployments where non-engineers need to adjust the workflow.
        </p>
        <CodeBlock
          yaml={`# agent.yaml
name: research-assistant
type: zero_shot_react
llm:
  provider: openai
  model: gpt-4
  temperature: 0.2
tools:
  - name: web_search
    description: Search the web
    parameters:
      query: { type: string, required: true }
  - name: calculator
    description: Perform calculations
    parameters:
      expression: { type: string, required: true }`}
        />
        <CodeBlock python={`from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = agent.run({"input": "What is 2 + 2?"})`} />
      </Section>

      <Section id="memory-aware" title="MemoryAwareAgent">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A pre-built agent for multi-user chatbots with per-user conversation memory.
        </p>
        <CodeBlock python={`from flowgentra_ai.agent import MemoryAwareAgent
from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=50)

agent = MemoryAwareAgent(
    llm_config="gpt-4",
    memory=memory,
    system_prompt="You are a helpful assistant."
)

# Multi-user conversations are automatically isolated
alice_response = agent.chat("alice-123", "Hi, I'm Alice!")
bob_response = agent.chat("bob-456", "Hi, I'm Bob!")

# Each user has their own conversation history
alice_followup = agent.chat("alice-123", "What's my name?")  # Remembers Alice`} />
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