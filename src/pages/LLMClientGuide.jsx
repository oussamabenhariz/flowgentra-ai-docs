import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'creating-client', label: 'Creating a Client' },
  { id: 'sending-messages', label: 'Sending Messages' },
  { id: 'tool-calling', label: 'Tool Calling' },
  { id: 'streaming', label: 'Streaming' },
]

export default function LLMGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        LLM Integration
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra provides a unified LLM that works with 7 providers. You configure it once and use the same API regardless of whether you're using OpenAI, Anthropic, or a local Ollama model.
      </p>

      <Section id="creating-client" title="Creating a Client">
        <CodeBlock
          rust={`use flowgentra_ai::llm::{LLMConfig, LLM};

// OpenAI
let client = LLM::from_config(LLMConfig::openai("gpt-4", "sk-..."));

// Anthropic
let client = LLM::from_config(LLMConfig::anthropic("claude-3-opus-20240229", "sk-ant-..."));

// Ollama (local)
let client = LLM::from_config(LLMConfig::ollama("llama3"));

// Groq (fast inference)
let client = LLM::from_config(LLMConfig::groq("llama3-70b-8192", "gsk_..."));`}
          python={`from flowgentra_ai.llm import LLM

# OpenAI — key auto-resolved from OPENAI_API_KEY env var or .env
client = LLM(provider="openai", model="gpt-4")

# Anthropic — explicit key
client = LLM(provider="anthropic", model="claude-3-opus-20240229", api_key="sk-ant-...")

# Ollama (local — no API key needed)
client = LLM(provider="ollama", model="llama3")

# Groq (fast inference)
client = LLM(provider="groq", model="llama3-70b-8192", api_key="gsk_...")

# With extra options
client = LLM(provider="openai", model="gpt-4o", temperature=0.2, max_tokens=4096)

# Alternative: LLM.from_config(LLMConfig(...)) still works if you need to reuse a config object
# from flowgentra_ai.llm import LLMConfig
# client = LLM.from_config(LLMConfig("openai", "gpt-4", api_key="sk-..."))`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Supported Providers</h3>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Provider</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Config Key</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>OpenAI</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>"openai"</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>GPT-3.5, GPT-4, GPT-4 Turbo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Anthropic</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>"anthropic"</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Claude 3 models</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Ollama</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>"ollama"</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Local models, no API key</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Groq</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}><code>"groq"</code></td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Fast Llama models</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Mistral</td>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}><code>"mistral"</code></td>
                <td style={{ padding: '8px' }}>Mistral AI models</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="sending-messages" title="Sending Messages">
        <CodeBlock
          rust={`use flowgentra_ai::llm::Message;

let response = client.chat(vec![
    Message::system("You are a helpful assistant."),
    Message::user("What is the capital of France?"),
]).await?;

println!("{}", response.content); // "The capital of France is Paris."
println!("{}", response.role);    // "assistant"`}
          python={`from flowgentra_ai.llm import Message

response = client.chat([
    Message.system("You are a helpful assistant."),
    Message.user("What is the capital of France?"),
])

print(response.content)   # "The capital of France is Paris."
print(response.role)      # "assistant"`}
        />
      </Section>

      <Section id="tool-calling" title="Tool Calling">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra supports function calling with all major providers. Define your tools and the LLM will call them automatically.
        </p>
        <CodeBlock python={`from flowgentra_ai.llm import ToolDefinition

# Define a tool
calculator = ToolDefinition(
    name="calculator",
    description="Perform arithmetic calculations",
    parameters={
        "type": "object",
        "properties": {
            "expression": {
                "type": "string",
                "description": "Mathematical expression to evaluate"
            }
        },
        "required": ["expression"]
    }
)

# Use with tools
response = client.chat_with_tools(
    messages=[Message.user("What is 2 + 2?")],
    tools=[calculator]
)

if response.has_tool_calls():
    for call in response.tool_calls:
        if call.name == "calculator":
            result = eval(call.arguments["expression"])
            print(f"Result: {result}")  # Result: 4`} />
      </Section>

      <Section id="streaming" title="Streaming">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          For real-time responses, use streaming. The client yields chunks as they're generated.
        </p>
        <CodeBlock python={`# Streaming responses
for chunk in client.chat_stream([
    Message.user("Write a short story")
]):
    print(chunk.content, end="", flush=True)
print()  # New line at end`} />
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