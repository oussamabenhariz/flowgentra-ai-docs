import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'five-ways',              label: 'Ways to Create an Agent' },
  { id: 'zero-shot-react',        label: 'ZeroShotReAct' },
  { id: 'few-shot-react',         label: 'FewShotReAct' },
  { id: 'conversational',         label: 'Conversational' },
  { id: 'tool-calling',           label: 'ToolCalling' },
  { id: 'structured-chat',        label: 'StructuredChatZeroShotReAct' },
  { id: 'self-ask-with-search',   label: 'SelfAskWithSearch' },
  { id: 'react-docstore',         label: 'ReactDocstore' },
  { id: 'config-driven',          label: 'Config-Driven Agents' },
  { id: 'memory-aware',           label: 'MemoryAwareAgent' },
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

      <Section id="five-ways" title="Ways to Create an Agent">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Method</th>
                <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ZeroShotReAct',               'General-purpose tool-using agent'],
                ['FewShotReAct',                'Specialized domain with example demonstrations'],
                ['Conversational',              'Multi-turn chatbot with memory'],
                ['ToolCalling',                 'Native function-calling (OpenAI / Anthropic / Mistral)'],
                ['StructuredChatZeroShotReAct', 'JSON-blob structured actions'],
                ['SelfAskWithSearch',           'Multi-hop factual question decomposition'],
                ['ReactDocstore',               'Search + Lookup loop over a document store'],
                ['Agent.from_config_path()',    'Production YAML-configured workflows'],
                ['MemoryAwareAgent',            'Multi-user chatbots with per-user memory isolation'],
              ].map(([method, desc], i, arr) => (
                <tr key={method}>
                  <td style={{ padding: '8px 10px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#79c0ff', fontFamily: 'monospace', fontSize: '0.85rem' }}>{method}</td>
                  <td style={{ padding: '8px 10px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ color: '#8b949e', lineHeight: 1.7, fontSize: '0.92rem' }}>
          In Python, use the typed constructors directly (<code style={{ color: '#79c0ff' }}>ZeroShotReAct</code>, <code style={{ color: '#79c0ff' }}>FewShotReAct</code>, etc.) and pass an <code style={{ color: '#79c0ff' }}>LLM</code> client. In Rust, use the typed constructors or <code style={{ color: '#79c0ff' }}>AgentBuilder</code>. See <a href="/docs/predefined-agents" style={{ color: '#58a6ff' }}>Predefined Agent Types</a> for detailed implementation diagrams, state-key reference, and comparison table.
        </p>
      </Section>

      <Section id="zero-shot-react" title="ZeroShotReAct">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The classic ReAct (Reason + Act) loop. The agent reasons step by step, decides which tool to call, observes the result, and loops until it has an answer — all without needing example demonstrations.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web")
    .with_parameter("query", "string")
    .required("query");

let calc = ToolSpec::new("calculator", "Perform arithmetic")
    .with_parameter("expression", "string")
    .required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm_config("gpt-4")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant.")
    .with_temperature(0.2)
    .with_retries(3)
    .with_tool_executor(|name, args| match name {
        "web_search"  => format!("Results for: {}", args),
        "calculator"  => format!("= {}", eval_expr(args)),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What is the population of France divided by 1000?").await?;
println!("{answer}");`}
          python={`from flowgentra_ai.agent import ZeroShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

# Define the tools available to the agent
search = ToolSpec("web_search", "Search the web for up-to-date information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Perform arithmetic calculations")
calc.add_parameter("expression", "string")
calc.set_required("expression")

# Build the agent
agent = ZeroShotReAct(
    name="research-assistant",
    llm=LLM(provider="openai", model="gpt-4"),
    tools=[search, calc],
    system_prompt="You are a helpful research assistant. Think step by step.",
    retries=3,
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
        <CodeBlock python={`from flowgentra_ai.agent import FewShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

# Inject examples directly into the system prompt
agent = FewShotReAct(
    name="code-reviewer",
    llm=LLM(provider="openai", model="gpt-4"),
    tools=[git_diff_tool],
    system_prompt="""You are an expert code reviewer.

EXAMPLES:
Input: Review this Python function
Thought: I need to examine the code diff.
Action: <action>git_diff(main..feature)</action>
Observation: + def process(data): return data
Thought: I can review this now.
Output: <answer>Looks good. Consider adding type hints for better readability.</answer>
---
Input: Check for security issues in this code
Thought: I'll look at the full diff for vulnerabilities.
Action: <action>git_diff(main..feature)</action>
Observation: + query = "SELECT * FROM users WHERE id=" + user_id
Thought: SQL injection risk found.
Output: <answer>Found potential SQL injection. Use parameterized queries.</answer>
---""",
)`} />
      </Section>

      <Section id="conversational" title="Conversational">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A conversational agent that maintains context across multiple turns. Perfect for chatbots and interactive assistants.
        </p>
        <CodeBlock python={`from flowgentra_ai.agent import Conversational
from flowgentra_ai.llm import LLM

agent = Conversational(
    name="chatbot",
    llm=LLM(provider="openai", model="gpt-4"),
    system_prompt="You are a helpful assistant.",
    memory_steps=50,   # keep last 50 turns in context
)

# Multi-turn conversation
response1 = agent.execute_input("Hi, I'm Alice!")
response2 = agent.execute_input("What's my name?")  # Remembers "Alice"
response3 = agent.execute_input("Tell me a joke about programming")`} />
      </Section>

      <Section id="tool-calling" title="ToolCalling">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Uses the provider's <strong style={{ color: '#e6edf3' }}>native function/tool-calling API</strong> — tools are passed as structured JSON schemas to <code style={{ color: '#79c0ff' }}>chat_with_tools()</code>; the LLM returns structured <code style={{ color: '#79c0ff' }}>tool_calls</code> in the response instead of text tags. Works with OpenAI, Anthropic, Mistral, Groq, and any OpenAI-compatible endpoint.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let weather = ToolSpec::new("get_weather", "Get current weather for a location")
    .with_parameter("location", "string")
    .with_parameter("unit", "string")
    .required("location");

let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("weather-agent")
    .with_llm_config("gpt-4o")        // or claude-3-5-sonnet, mistral-large
    .with_tool(weather)
    .with_tool_executor(|name, args| match name {
        "get_weather" => format!("72°F, sunny — args: {}", args),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What's the weather in Paris?").await?;`}
          python={`from flowgentra_ai.agent import ToolCalling, ToolSpec
from flowgentra_ai.llm import LLM

weather = ToolSpec("get_weather", "Get current weather for a location")
weather.add_parameter("location", "string")
weather.add_parameter("unit", "string")
weather.set_required("location")

agent = ToolCalling(
    name="weather-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[weather],
)

answer = agent.execute_input("What's the weather in Paris?")`}
        />
      </Section>

      <Section id="structured-chat" title="StructuredChatZeroShotReAct">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          ReAct agent that communicates via <strong style={{ color: '#e6edf3' }}>JSON blobs</strong>. Each LLM turn outputs a fenced code block with <code style={{ color: '#79c0ff' }}>{`{"action":"tool_name","action_input":"..."}`}</code>. The final answer uses <code style={{ color: '#79c0ff' }}>"action":"Final Answer"</code>.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.agent import StructuredChat, ToolSpec
from flowgentra_ai.llm import LLM

calc = ToolSpec("calculator", "Evaluate a math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

agent = StructuredChat(
    name="structured-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[calc],
)

result = agent.execute_input("What is 15% of 2847?")
# LLM outputs: {"action":"calculator","action_input":"0.15 * 2847"}
# Then:        {"action":"Final Answer","action_input":"427.05"}`}
        />
      </Section>

      <Section id="self-ask-with-search" title="SelfAskWithSearch">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Decomposes complex questions into a chain of simpler sub-questions answered by a single <strong style={{ color: '#e6edf3' }}>search</strong> tool. Iterates <em>Follow up → Intermediate answer</em> until the LLM emits <code style={{ color: '#79c0ff' }}>So the final answer is: ...</code>. The system prompt contains 4 built-in few-shot examples.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.agent import SelfAskWithSearch, ToolSpec
from flowgentra_ai.llm import LLM

search = ToolSpec("search", "Search for factual information")
search.add_parameter("query", "string")
search.set_required("query")

agent = SelfAskWithSearch(
    name="fact-checker",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search],
)

answer = agent.execute_input(
    "Who was the maternal grandfather of George Washington?"
)
print(answer)  # "Joseph Ball"

# Agent chain:
#   Follow up: Who was the mother of George Washington?
#   Intermediate answer: Mary Ball Washington
#   Follow up: Who was the father of Mary Ball Washington?
#   Intermediate answer: Joseph Ball
#   So the final answer is: Joseph Ball`}
        />
      </Section>

      <Section id="react-docstore" title="ReactDocstore">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          ReAct loop for document stores. The LLM navigates via three verbs: <code style={{ color: '#79c0ff' }}>Search[query]</code>, <code style={{ color: '#79c0ff' }}>Lookup[term]</code>, and <code style={{ color: '#79c0ff' }}>Finish[answer]</code>. Requires tools named <code style={{ color: '#79c0ff' }}>search</code> and <code style={{ color: '#79c0ff' }}>lookup</code> (or a single executor that dispatches by name).
        </p>
        <CodeBlock
          python={`from flowgentra_ai.agent import ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

docstore = WikipediaDocstore()

search_tool = ToolSpec("search", "Find a document in the store")
search_tool.add_parameter("query", "string")
search_tool.set_required("query")

lookup_tool = ToolSpec("lookup", "Look up a term in the last found document")
lookup_tool.add_parameter("term", "string")
lookup_tool.set_required("term")

agent = ReactDocstore(
    name="wiki-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search_tool, lookup_tool],
)

answer = agent.execute_input(
    "What is the elevation range of the High Plains?"
)
# Action: Search[High Plains (United States)]
# Action: Lookup[elevation]
# Action: Finish[1,800 to 7,000 ft]`}
        />
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
from flowgentra_ai.llm import LLM

memory = ConversationMemory(max_messages=50)

agent = MemoryAwareAgent(
    llm=LLM(provider="openai", model="gpt-4o"),
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