import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'overview',              label: 'Overview' },
  { id: 'how-agents-work',       label: 'How Predefined Agents Work' },
  { id: 'zero-shot-react',       label: 'ZeroShotReAct' },
  { id: 'few-shot-react',        label: 'FewShotReAct' },
  { id: 'conversational',        label: 'Conversational' },
  { id: 'tool-calling',          label: 'ToolCalling' },
  { id: 'structured-chat',       label: 'StructuredChatZeroShotReAct' },
  { id: 'self-ask-with-search',  label: 'SelfAskWithSearch' },
  { id: 'react-docstore',        label: 'ReactDocstore' },
  { id: 'comparison',            label: 'Comparison Table' },
  { id: 'builder-api',           label: 'AgentBuilder API' },
]

const BOX = {
  background: '#0d1117',
  border: '1px solid #21262d',
  borderRadius: 8,
  padding: '20px',
  marginBottom: 20,
}

const MONO = {
  ...BOX,
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  color: '#8b949e',
  lineHeight: 1.7,
  whiteSpace: 'pre',
  overflowX: 'auto',
}

const TAG = ({ color = '#58a6ff', children }) => (
  <span style={{
    display: 'inline-block',
    background: color + '22',
    color,
    borderRadius: 4,
    padding: '1px 8px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginRight: 6,
    marginBottom: 4,
  }}>{children}</span>
)

const InfoBox = ({ title, children }) => (
  <div style={{
    background: '#161b22',
    border: '1px solid #30363d',
    borderLeft: '3px solid #58a6ff',
    borderRadius: 6,
    padding: '14px 18px',
    marginBottom: 20,
  }}>
    {title && <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: 6, fontSize: '0.9rem' }}>{title}</div>}
    <div style={{ color: '#8b949e', lineHeight: 1.7, fontSize: '0.92rem' }}>{children}</div>
  </div>
)

export default function PredefinedAgents() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Predefined Agent Types
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra ships <strong style={{ color: '#e6edf3' }}>seven</strong> production-ready predefined agents that match LangChain's agent taxonomy — each implemented as a compiled <code style={{ color: '#79c0ff' }}>StateGraph</code> with dedicated prompt templates, routing logic, and parsing nodes. No graph wiring required.
      </p>

      {/* ─── Overview ─────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <div style={{ ...BOX, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#161b22' }}>
                <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Agent Type</th>
                <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>String key</th>
                <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Best for</th>
                <th style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Requires</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ZeroShotReAct', 'zero-shot-react', 'General Q&A with tools', 'Any text model'],
                ['FewShotReAct', 'few-shot-react', 'Specialized domain with examples', 'Any text model'],
                ['Conversational', 'conversational', 'Multi-turn chatbot', 'Any text model'],
                ['ToolCalling', 'tool-calling', 'Structured native function calling', 'Function-calling model'],
                ['StructuredChatZeroShotReAct', 'structured-chat-zero-shot-react', 'JSON-blob actions', 'JSON-capable model'],
                ['SelfAskWithSearch', 'self-ask-with-search', 'Multi-hop factual decomposition', '"search" tool'],
                ['ReactDocstore', 'react-docstore', 'Document store Search + Lookup', '"search" + "lookup" tools'],
              ].map(([name, key, use, req], i, arr) => (
                <tr key={name} style={{ background: i % 2 === 0 ? 'transparent' : '#0d1117' }}>
                  <td style={{ padding: '9px 14px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#79c0ff', fontFamily: 'monospace', fontSize: '0.85rem' }}>{name}</td>
                  <td style={{ padding: '9px 14px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', fontFamily: 'monospace', fontSize: '0.82rem' }}>{key}</td>
                  <td style={{ padding: '9px 14px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none' }}>{use}</td>
                  <td style={{ padding: '9px 14px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#3fb950' }}>{req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── How Agents Work ──────────────────────────────────────────── */}
      <Section id="how-agents-work" title="How Predefined Agents Work Internally">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Every predefined agent is a compiled <code style={{ color: '#79c0ff' }}>StateGraph&lt;DynState&gt;</code>. When you call <code style={{ color: '#79c0ff' }}>AgentBuilder.build_graph()</code>, Flowgentra wires the graph for that agent type — you never touch edges or routers yourself.
        </p>
        <div style={MONO}>{`                    ┌──────────────────────────────────────────────┐
                    │              StateGraph<DynState>            │
                    │                                              │
  Input string      │   ┌─────────────┐     conditional_router    │
──────────────────► │   │ Agent Node  │ ──────────────────────────┤
                    │   │ (LLM call)  │                           │
                    │   └─────────────┘     ┌────────────────┐    │
                    │         ▲             │  tool_executor │    │
                    │         │             │  (user fn)     │    │
                    │         └─────────────┤                │    │
                    │                       └────────────────┘    │
                    │                              │               │
                    │                              ▼               │
                    │                        END (extract answer)  │
                    └──────────────────────────────────────────────┘`}</div>
        <InfoBox title="Key internals shared by all ReAct-family agents">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li><strong style={{ color: '#e6edf3' }}>Agent Node</strong> — calls the LLM with system prompt + tool list + user input; writes <code>llm_response</code>, <code>needs_tool</code>, <code>pending_tool_name</code>, <code>pending_tool_args</code> to <code>DynState</code>.</li>
            <li><strong style={{ color: '#e6edf3' }}>Conditional router</strong> — reads <code>needs_tool</code>; routes to <code>tool_executor</code> or <code>END</code>.</li>
            <li><strong style={{ color: '#e6edf3' }}>ToolExecutorNode</strong> — calls the user-provided <code>with_tool_executor(fn)</code> closure with <code>(tool_name, args)</code>; writes <code>tool_result</code>.</li>
            <li><strong style={{ color: '#e6edf3' }}>Loop</strong> — after tool execution the graph loops back to the Agent Node so the LLM can see the result and decide whether to call more tools or finish.</li>
          </ul>
        </InfoBox>
        <p style={{ color: '#8b949e', lineHeight: 1.7 }}>
          Conversation agents (Conversational) use a single-node graph. Document-store agents (ReactDocstore) route to two different tool nodes. ToolCalling passes structured <code>ToolDefinition</code> schemas to <code>chat_with_tools()</code> and reads <code>response.tool_calls</code> instead of parsing text tags.
        </p>
      </Section>

      {/* ─── ZeroShotReAct ────────────────────────────────────────────── */}
      <Section id="zero-shot-react" title="ZeroShotReAct">
        <div style={{ marginBottom: 12 }}>
          <TAG>General purpose</TAG><TAG color="#3fb950">All models</TAG><TAG color="#f0883e">ReAct loop</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          The classic Reason+Act loop. The LLM reasons step by step, decides which tool to call via <code style={{ color: '#79c0ff' }}>&lt;action&gt;tool_name(args)&lt;/action&gt;</code> tags, observes the result, and loops until it emits <code style={{ color: '#79c0ff' }}>&lt;answer&gt;...&lt;/answer&gt;</code>.
        </p>
        <div style={MONO}>{`Input
  │
  ▼
[AgentReasoningNode]  ◄──────────────────────────────┐
  │ sets: llm_response, needs_tool,                   │
  │       pending_tool_name, pending_tool_args         │
  ▼                                                    │
reasoning_router                                       │
  ├─► needs_tool=true  ──► [ToolExecutorNode] ─────────┘
  │                          sets: tool_result
  └─► needs_tool=false ──► [END]
        extract: <answer>...</answer>`}</div>
        <CodeBlock
          rust={`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web for information")
    .with_parameter("query", "string")
    .required("query");

let calc = ToolSpec::new("calculator", "Evaluate a math expression")
    .with_parameter("expression", "string")
    .required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm_config("gpt-4o")
    .with_tool(search)
    .with_tool(calc)
    .with_temperature(0.2)
    .with_retries(2)
    .with_tool_executor(|name, args| match name {
        "web_search"  => format!("Results for: {}", args),
        "calculator"  => format!("= {}", eval_expr(args)),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What is 15% of the population of France?").await?;`}
          python={`from flowgentra_ai.agent import ZeroShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

search = ToolSpec("web_search", "Search the web for information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Evaluate a math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

agent = ZeroShotReAct(
    name="research-assistant",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search, calc],
    retries=2,
)

answer = agent.execute_input("What is 15% of the population of France?")`}
        />
        <InfoBox>
          <strong style={{ color: '#e6edf3' }}>Prompt format:</strong> the system prompt instructs the LLM to emit <code>&lt;action&gt;tool_name(args)&lt;/action&gt;</code> for tool calls and <code>&lt;answer&gt;...&lt;/answer&gt;</code> for final answers.  <code>parse_action_tags()</code> and <code>parse_answer_tags()</code> in <code>graph_nodes.rs</code> handle extraction.
        </InfoBox>
      </Section>

      {/* ─── FewShotReAct ─────────────────────────────────────────────── */}
      <Section id="few-shot-react" title="FewShotReAct">
        <div style={{ marginBottom: 12 }}>
          <TAG>Domain-specific</TAG><TAG color="#3fb950">All models</TAG><TAG color="#f0883e">ReAct + examples</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Same graph as ZeroShotReAct, but the system prompt includes worked demonstrations (2–5 recommended) so the LLM follows your domain's specific reasoning pattern.
        </p>
        <CodeBlock
          rust={`let agent = AgentBuilder::new(AgentType::FewShotReAct)
    .with_name("finance-analyst")
    .with_llm_config("gpt-4o")
    .with_tool(data_tool)
    .with_system_prompt(r#"You are a financial analyst.

EXAMPLES:
Example 1:
Input: What was Tesla's Q3 2023 revenue?
Thought: I need to find Tesla's Q3 2023 earnings.
Action: <action>search(Tesla Q3 2023 earnings)</action>
Observation: Tesla reported $23.85B in Q3 2023.
Thought: I have the answer.
Output: <answer>Tesla's Q3 2023 revenue was $23.85 billion.</answer>
---
"#)
    .build_graph()?;`}
          python={`from flowgentra_ai.agent import FewShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

agent = FewShotReAct(
    name="finance-analyst",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[data_tool],
    system_prompt="""You are a financial analyst.

EXAMPLES:
Example 1:
Input: What was Tesla's Q3 2023 revenue?
Thought: I need to find Tesla's Q3 2023 earnings.
Action: <action>search(Tesla Q3 2023 earnings)</action>
Observation: Tesla reported $23.85B in Q3 2023.
Thought: I have the answer.
Output: <answer>Tesla's Q3 2023 revenue was $23.85 billion.</answer>
---
""",
    memory_steps=12,
)`}
        />
      </Section>

      {/* ─── Conversational ───────────────────────────────────────────── */}
      <Section id="conversational" title="Conversational">
        <div style={{ marginBottom: 12 }}>
          <TAG>Chatbot</TAG><TAG color="#3fb950">All models</TAG><TAG color="#a5d6ff">Single node</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Single-node graph — no tool loop. The LLM receives the system prompt, full conversation history (injected from <code style={{ color: '#79c0ff' }}>conversation_history</code> state), and the current message; it responds directly. History is appended after each turn.
        </p>
        <div style={MONO}>{`Input + conversation_history
  │
  ▼
[ConversationalNode]
  │ calls: client.chat([system, ...history, user])
  │ sets: response
  ▼
[END]  →  response extracted`}</div>
        <CodeBlock
          rust={`let agent = AgentBuilder::new(AgentType::Conversational)
    .with_name("support-bot")
    .with_llm_config("gpt-4o")
    .with_system_prompt("You are a friendly customer support agent.")
    .with_memory_steps(20)    // keep last 20 turns in context
    .build_graph()?;

let r1 = agent.execute_input("Hi, I can't log in").await?;
let r2 = agent.execute_input("My email is alice@example.com").await?;
// r2: agent remembers r1 context`}
          python={`from flowgentra_ai.agent import Conversational
from flowgentra_ai.llm import LLM

agent = Conversational(
    name="support-bot",
    llm=LLM(provider="openai", model="gpt-4o"),
    system_prompt="You are a friendly customer support agent.",
    memory_steps=20,
)

r1 = agent.execute_input("Hi, I can't log in")
r2 = agent.execute_input("My email is alice@example.com")
# r2: agent remembers r1 context`}
        />
      </Section>

      {/* ─── ToolCalling ──────────────────────────────────────────────── */}
      <Section id="tool-calling" title="ToolCalling">
        <div style={{ marginBottom: 12 }}>
          <TAG>Native API</TAG><TAG color="#3fb950">Function-calling models</TAG><TAG color="#f0883e">ReAct loop</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Uses the provider's <strong style={{ color: '#e6edf3' }}>native function/tool-calling API</strong> instead of text tags. Tools are converted to JSON-schema <code style={{ color: '#79c0ff' }}>ToolDefinition</code>s and passed to <code style={{ color: '#79c0ff' }}>chat_with_tools()</code>. The LLM returns structured <code style={{ color: '#79c0ff' }}>tool_calls</code> in the response — no regex parsing needed.
        </p>
        <div style={MONO}>{`Input
  │
  ▼
[ToolCallingNode]  ◄──────────────────────────────────────┐
  │ calls: client.chat_with_tools(messages, tool_defs)     │
  │ reads: response.tool_calls                             │
  │ sets: needs_tool, pending_tool_name,                   │
  │       pending_tool_args (JSON string),                 │
  │       tc_call_id (for tool_result message)             │
  ▼                                                        │
tool_calling_router                                        │
  ├─► needs_tool=true  ──► [ToolExecutorNode] ─────────────┘
  │                          (result replayed as tool_result message)
  └─► needs_tool=false ──► [END]  →  llm_response`}</div>
        <InfoBox title="ToolSpec → ToolDefinition conversion">
          <code>ToolSpec</code> parameters (<code>string</code>, <code>integer</code>, <code>boolean</code>, <code>array</code>, <code>object</code>) are automatically converted to a JSON Schema <code>properties</code> object with <code>required</code> list and passed to the LLM. The <code>tool_call_id</code> from the response is stored in <code>tc_call_id</code> so the next iteration can attach the result as a proper <code>MessageRole::Tool</code> message.
        </InfoBox>
        <CodeBlock
          rust={`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let weather = ToolSpec::new("get_weather", "Get current weather")
    .with_parameter("location", "string")
    .with_parameter("unit", "string")      // "celsius" | "fahrenheit"
    .required("location");

// Works with any function-calling–capable model
let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("weather-agent")
    .with_llm_config("gpt-4o")             // or claude-3-5-sonnet, mistral-large
    .with_tool(weather)
    .with_tool_executor(|name, args| match name {
        "get_weather" => format!("72°F, sunny — args: {}", args),
        _             => format!("Unknown: {}", name),
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
    llm=LLM(provider="openai", model="gpt-4o"),   # or provider="anthropic", model="claude-3-5-sonnet-20241022"
    tools=[weather],
)

answer = agent.execute_input("What's the weather in Paris?")`}
        />
      </Section>

      {/* ─── StructuredChat ───────────────────────────────────────────── */}
      <Section id="structured-chat" title="StructuredChatZeroShotReAct">
        <div style={{ marginBottom: 12 }}>
          <TAG>JSON actions</TAG><TAG color="#3fb950">JSON-capable models</TAG><TAG color="#f0883e">ReAct loop</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          ReAct agent that communicates via <strong style={{ color: '#e6edf3' }}>JSON blobs</strong> instead of XML-style tags. Each LLM turn produces a fenced code block containing <code style={{ color: '#79c0ff' }}>{`{"action": "tool_name", "action_input": ...}`}</code>. The final answer uses <code style={{ color: '#79c0ff' }}>"action": "Final Answer"</code>.
        </p>
        <div style={MONO}>{`LLM turn output:
  Thought: I need to search for this.
  Action:
  \`\`\`
  {"action": "web_search", "action_input": "population of France"}
  \`\`\`

  ──► parse_structured_action() extracts action + action_input
  ──► if action == "Final Answer" → set structured_final_answer, END
  ──► otherwise → ToolExecutorNode → loop back with Observation`}</div>
        <CodeBlock
          rust={`let agent = AgentBuilder::new(AgentType::StructuredChatZeroShotReAct)
    .with_name("structured-agent")
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("calculator", "Evaluate math")
        .with_parameter("expression", "string")
        .required("expression"))
    .with_tool(ToolSpec::new("lookup", "Look up a value")
        .with_parameter("key", "string")
        .required("key"))
    .with_tool_executor(|name, args| match name {
        "calculator" => format!("= {}", eval_expr(args)),
        "lookup"     => format!("value: {}", db_lookup(args)),
        _            => "unknown tool".to_string(),
    })
    .with_temperature(0.0)
    .build_graph()?;`}
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

result = agent.execute_input("What is 15% of 2847?")`}
        />
        <InfoBox>
          The system prompt is injected with the tool list via <code>{`{tools}`}</code> and <code>{`{tool_names}`}</code> placeholders at graph build time. <code>parse_structured_action()</code> in <code>graph_nodes.rs</code> extracts the JSON from the last fenced code block (or bare JSON).
        </InfoBox>
      </Section>

      {/* ─── SelfAskWithSearch ────────────────────────────────────────── */}
      <Section id="self-ask-with-search" title="SelfAskWithSearch">
        <div style={{ marginBottom: 12 }}>
          <TAG>Multi-hop Q&A</TAG><TAG color="#3fb950">Any model</TAG><TAG color="#a5d6ff">Requires: search tool</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          Decomposes a complex question into a chain of simpler sub-questions, answers each with a <strong style={{ color: '#e6edf3' }}>search</strong> tool, and accumulates <em>Intermediate answer</em>s in a growing scratchpad. Terminates when the LLM emits <code style={{ color: '#79c0ff' }}>So the final answer is: ...</code>.
        </p>
        <div style={MONO}>{`System prompt = 4 worked few-shot examples (built-in)
State: scratchpad (grows each iteration)

Turn 1:
  prompt = examples + "Question: X\nAre follow up questions needed here:"
  LLM → "Yes.\nFollow up: Who directed Jaws?"
  parse_self_ask_response() → FollowUp("Who directed Jaws?")
  → set pending_tool_name="search", pending_tool_args="Who directed Jaws?"

  [ToolExecutorNode] → "Steven Spielberg"
  → append "Follow up: ...\nIntermediate answer: Steven Spielberg\n" to scratchpad

Turn 2:
  prompt = examples + "Question: X\nAre follow up questions needed here: [scratchpad]"
  LLM → "So the final answer is: Steven Spielberg"
  parse_self_ask_response() → FinalAnswer("Steven Spielberg")
  → set sa_final_answer, END`}</div>
        <CodeBlock
          rust={`// Requires: a tool named "search"
let agent = AgentBuilder::new(AgentType::SelfAskWithSearch)
    .with_name("fact-checker")
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Search Wikipedia or the web")
        .with_parameter("query", "string")
        .required("query"))
    .with_tool_executor(|_name, query| wikipedia_search(query))
    .with_temperature(0.0)
    .build_graph()?;

let answer = agent.execute_input(
    "Who was the maternal grandfather of George Washington?"
).await?;
// answer: "Joseph Ball"`}
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
print(answer)  # "Joseph Ball"`}
        />
        <InfoBox title="Built-in few-shot examples">
          The default system prompt contains 4 complete examples (Muhammad Ali/Alan Turing, craigslist founder, George Washington, Jaws/Casino Royale directors) that teach the LLM the <em>Follow up / Intermediate answer / So the final answer is</em> format. You can override the system prompt if your domain needs different examples.
        </InfoBox>
      </Section>

      {/* ─── ReactDocstore ────────────────────────────────────────────── */}
      <Section id="react-docstore" title="ReactDocstore">
        <div style={{ marginBottom: 12 }}>
          <TAG>Document store</TAG><TAG color="#3fb950">Any model</TAG><TAG color="#a5d6ff">Requires: search + lookup</TAG>
        </div>
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          ReAct loop for document stores. The LLM navigates via three verbs: <code style={{ color: '#79c0ff' }}>Search[query]</code> to find a document, <code style={{ color: '#79c0ff' }}>Lookup[term]</code> to drill into the last found document, and <code style={{ color: '#79c0ff' }}>Finish[answer]</code> to terminate.
        </p>
        <div style={MONO}>{`State: scratchpad (Thought + Action + Observation blocks)

LLM output:
  "Thought: I need to search for Colorado orogeny.
   Action: Search[Colorado orogeny]"

parse_docstore_action() →
  ├─ Search[q]  → pending_tool_name="search",  pending_tool_args=q
  ├─ Lookup[t]  → pending_tool_name="lookup",  pending_tool_args=t
  └─ Finish[a]  → ds_final_answer=a, END

[ToolExecutorNode] dispatches by tool name to user fn:
  fn(tool_name="search", args="Colorado orogeny") → observation text

observation appended to scratchpad → next LLM turn sees full context`}</div>
        <CodeBlock
          rust={`// Requires: tools named "search" and "lookup"
let mut last_doc = String::new();

let agent = AgentBuilder::new(AgentType::ReactDocstore)
    .with_name("wiki-agent")
    .with_llm_config("gpt-4o")
    // pre-registered stubs; override descriptions if desired
    .with_tool(ToolSpec::new("search", "Find a document in the store")
        .with_parameter("query", "string").required("query"))
    .with_tool(ToolSpec::new("lookup", "Look up a term in the last found doc")
        .with_parameter("term", "string").required("term"))
    .with_tool_executor(move |name, args| match name {
        "search" => {
            let result = docstore.search(args);
            last_doc = result.clone();
            result
        }
        "lookup" => docstore.lookup(args, &last_doc),
        _        => "Unknown tool".to_string(),
    })
    .with_temperature(0.0)
    .build_graph()?;

let answer = agent.execute_input(
    "What is the elevation range of the High Plains?"
).await?;`}
          python={`from flowgentra_ai.agent import ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

docstore = WikipediaDocstore()    # your docstore implementation

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
print(answer)  # "1,800 to 7,000 ft (550 to 2,130 m)."`}
        />
        <InfoBox title="Built-in few-shot examples">
          The system prompt contains 2 complete Colorado orogeny and Allie Brosh examples that demonstrate the Thought/Search/Lookup/Finish cycle. The <code>scratchpad</code> state key accumulates the full reasoning trace across iterations.
        </InfoBox>
      </Section>

      {/* ─── Comparison ───────────────────────────────────────────────── */}
      <Section id="comparison" title="Comparison Table">
        <div style={{ ...BOX, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#161b22' }}>
                {['Agent', 'Graph nodes', 'Tool signal', 'State keys written', 'Terminates when'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid #21262d', color: '#e6edf3', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['ZeroShotReAct',               'agent → tool_executor → agent',     '<action>…</action>',       'llm_response, needs_tool, pending_tool_*',             '<answer>…</answer>'],
                ['FewShotReAct',                'agent → tool_executor → agent',     '<action>…</action>',       'same as ZeroShot',                                     '<answer>…</answer>'],
                ['Conversational',              'conversation → END',                'n/a',                      'response, conversation_history',                       'always after 1 turn'],
                ['ToolCalling',                 'agent → tool_executor → agent',     'response.tool_calls',      'llm_response, tc_call_id, tc_tool_calls_json',          'no tool_calls in response'],
                ['StructuredChatZeroShotReAct', 'agent → tool_executor → agent',     '```{"action":…}```',       'llm_response, structured_final_answer',                '"action":"Final Answer"'],
                ['SelfAskWithSearch',           'agent → tool_executor → agent',     '"Follow up: …"',           'scratchpad, sa_follow_up, sa_final_answer',            '"So the final answer is:"'],
                ['ReactDocstore',               'agent → tool_executor → agent',     'Action: Search/Lookup/Finish', 'scratchpad, ds_action_type, ds_final_answer',      'Action: Finish[…]'],
              ].map(([name, nodes, signal, keys, term], i, arr) => (
                <tr key={name} style={{ background: i % 2 === 0 ? 'transparent' : '#0d1117' }}>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#79c0ff', fontFamily: 'monospace', fontSize: '0.82rem' }}>{name}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', fontFamily: 'monospace', fontSize: '0.8rem' }}>{nodes}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', fontFamily: 'monospace', fontSize: '0.8rem' }}>{signal}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', fontFamily: 'monospace', fontSize: '0.78rem', color: '#8b949e' }}>{keys}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', fontFamily: 'monospace', fontSize: '0.8rem' }}>{term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── Builder API ──────────────────────────────────────────────── */}
      <Section id="builder-api" title="Agent Constructor API Reference">
        <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }}>
          In <strong style={{ color: '#e6edf3' }}>Python</strong>, use the typed constructors (<code style={{ color: '#79c0ff' }}>ZeroShotReAct(name=..., llm=LLM(...), tools=[...])</code>) directly — there is no <code style={{ color: '#79c0ff' }}>AgentBuilder</code> in Python. In <strong style={{ color: '#e6edf3' }}>Rust</strong>, use <code style={{ color: '#79c0ff' }}>AgentBuilder::new(AgentType::ZeroShotReAct)</code> or the typed constructors. The parameters below apply to both.
        </p>
        <div style={{ ...BOX, padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#161b22' }}>
                {['Method', 'Type', 'Description'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['name / .with_name(str)', 'param / builder', 'Agent name used in logs and state'],
                ['llm=LLM(...) / .with_llm_config(model)', 'Python / Rust', 'Python: pass LLM(provider, model) directly. Rust: model string shorthand (provider auto-detected)'],
                ['.with_llm(LLMConfig)', 'Rust builder', 'Full LLMConfig object — takes precedence over with_llm_config'],
                ['(no Python param) / .with_temperature(f32)', 'Rust builder', 'LLM temperature 0.0–1.0 (clamped). In Python set on LLM(... temperature=0.2)'],
                ['tools=[...] / .with_tool(ToolSpec)', 'param / builder', 'Register tools. ToolSpec: name + description + parameters + required list'],
                ['system_prompt / .with_system_prompt(str)', 'param / builder', 'Override the default system prompt. Default prompts are type-specific.'],
                ['memory_steps / .with_memory_steps(usize)', 'param / builder', 'Enable conversation memory; keep last N turns. Used by Conversational.'],
                ['retries / .with_retries(usize)', 'param / builder', 'Retry failed LLM calls N times'],
                ['.with_tool_executor(fn)', 'Rust builder only', 'Closure called with (tool_name: &str, args: &str) → String. Required for agents that call tools.'],
                ['.with_param(key, value)', 'Rust builder only', 'Add arbitrary custom parameters to config'],
                ['.build_graph()', 'Rust → GraphBasedAgent', 'Compile the agent graph. Call execute_input(str) on the result.'],
                ['.build()', 'Rust → Box<dyn Agent>', 'Compile to a trait object (sync process() only; use build_graph() for async)'],
                ['agent.execute_input(str)', '→ String', 'Run the compiled graph with a text input, return the final answer string'],
              ].map(([method, type_, desc], i, arr) => (
                <tr key={method} style={{ background: i % 2 === 0 ? 'transparent' : '#0d1117' }}>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#79c0ff', fontFamily: 'monospace', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>{method}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none', color: '#f0883e', fontFamily: 'monospace', fontSize: '0.82rem' }}>{type_}</td>
                  <td style={{ padding: '8px 12px', borderBottom: i < arr.length - 1 ? '1px solid #21262d' : 'none' }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          rust={`// Minimal — model required, everything else optional
let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool_executor(|name, args| my_executor(name, args))
    .build_graph()?;

// Full options
let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("production-agent")
    .with_llm_config("claude-3-5-sonnet-20241022")
    .with_temperature(0.1)
    .with_max_tokens(4096)
    .with_tool(search_tool)
    .with_tool(calc_tool)
    .with_system_prompt("Custom instructions…")
    .with_memory_steps(10)
    .with_retries(3)
    .with_tool_executor(|name, args| dispatcher(name, args))
    .build_graph()?;`}
          python={`from flowgentra_ai.agent import ToolCalling, ZeroShotReAct
from flowgentra_ai.llm import LLM

# Minimal
agent = ToolCalling(
    name="agent",
    llm=LLM(provider="openai", model="gpt-4o"),
)

# Full options
agent = ToolCalling(
    name="production-agent",
    llm=LLM(provider="anthropic", model="claude-3-5-sonnet-20241022"),
    tools=[search_tool, calc_tool],
    system_prompt="Custom instructions…",
    memory_steps=10,
    retries=3,
)

answer = agent.execute_input("Your question here")`}
        />
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 56, scrollMarginTop: 80 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}
