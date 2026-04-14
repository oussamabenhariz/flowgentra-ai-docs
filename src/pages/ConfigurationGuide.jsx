import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'config-files', label: 'Configuration Files' },
  { id: 'environment-variables', label: 'Environment Variables' },
  { id: 'yaml-schema', label: 'YAML Schema Reference' },
  { id: 'config-validation', label: 'Configuration Validation' },
  { id: 'runtime-config', label: 'Runtime Configuration' },
  { id: 'config-patterns', label: 'Configuration Patterns' },
]

export default function ConfigurationGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Configuration Management
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Configuration is how you customize Flowgentra agents for different environments and use cases. Learn how to configure LLMs, tools, memory, and behavior through YAML files and environment variables.
      </p>

      <Section id="config-files" title="Configuration Files">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra uses YAML for declarative configuration. This separates code from configuration, making it easy to deploy the same agent with different settings.
        </p>
        <CodeBlock
          yaml={`# agent.yaml
name: customer_support_agent
description: "Handles customer inquiries with tool access"

# LLM Configuration
llm:
  provider: anthropic
  model: claude-3-sonnet-20240229
  api_key: \${ANTHROPIC_API_KEY}
  temperature: 0.7
  max_tokens: 1000

# Memory settings
memory:
  type: conversation
  max_messages: 20

# Tool configuration
tools:
  - name: knowledge_base_search
    type: vector_search
    config:
      collection: customer_docs
      top_k: 5

  - name: ticket_system
    type: api_call
    config:
      base_url: https://api.ticketsystem.com
      auth_token: \${TICKET_API_TOKEN}

# Graph configuration
graph:
  entry: classify_intent
  nodes:
    - name: classify_intent
      handler: classify_intent
      config:
        categories: ["billing", "technical", "general"]

    - name: handle_billing
      handler: handle_billing_query

    - name: handle_technical
      handler: escalate_to_engineer

# Observability
observability:
  tracing: true
  metrics: true
  log_level: INFO`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>from_config_path("agent.yaml")</code> to load this configuration.
        </p>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Agent Configuration Methods</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>from_config_path(path)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>path: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Agent</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Loads and validates agent configuration from YAML file</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>from_config_dict(config)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Agent</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Creates agent from configuration dictionary</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>validate_config(config)</td>
                <td style={{ padding: '8px' }}>config: dict</td>
                <td style={{ padding: '8px' }}>bool</td>
                <td style={{ padding: '8px' }}>Validates configuration without creating agent instance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="environment-variables" title="Environment Variables">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Keep secrets and environment-specific values out of your config files using variable substitution.
        </p>
        <CodeBlock
          yaml={`# config.yaml
llm:
  api_key: \${OPENAI_API_KEY}
  model: \${MODEL_NAME:-gpt-4}  # Default value if not set

database:
  url: \${DATABASE_URL}
  password: \${DB_PASSWORD}

# Nested variable substitution
api:
  endpoint: \${API_BASE_URL}/v\${API_VERSION:-1}/endpoint`}
        />
        <CodeBlock
          bash={`# .env file or environment
export OPENAI_API_KEY="sk-..."
export MODEL_NAME="gpt-4-turbo"
export DATABASE_URL="postgresql://..."
export DB_PASSWORD="secret"
export API_BASE_URL="https://api.example.com"
export API_VERSION="2"`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Variable syntax: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>$VAR_NAME</code> or <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>$VAR_NAME:-default</code> for defaults.
        </p>
      </Section>

      <Section id="yaml-schema" title="YAML Schema Reference">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Complete reference for all configuration options.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>LLM Configuration</h3>
        <CodeBlock
          yaml={`llm:
  provider: openai | anthropic | groq | ollama | ...  # Required
  model: "gpt-4" | "claude-3-opus-20240229" | ...     # Required
  api_key: "sk-..." | \${API_KEY}                     # Required for cloud providers
  base_url: "https://api.openai.com"                  # Optional, defaults vary by provider
  temperature: 0.7                                    # Optional, 0.0-2.0
  max_tokens: 1000                                    # Optional
  top_p: 1.0                                          # Optional
  frequency_penalty: 0.0                              # Optional
  presence_penalty: 0.0                               # Optional
  timeout: 30                                          # Optional, seconds
  retries: 3                                          # Optional`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Memory Configuration</h3>
        <CodeBlock
          yaml={`memory:
  type: conversation | buffer | summary | none      # Default: conversation
  max_messages: 20                                   # For conversation type
  max_tokens: 2000                                   # For buffer/summary types
  strategy: recent | important | compressed         # Default: recent`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Tool Configuration</h3>
        <CodeBlock
          yaml={`tools:
  - name: my_tool                                    # Required, unique identifier
    type: function | api_call | vector_search | ...  # Required
    description: "What this tool does"               # Optional
    config:                                          # Tool-specific configuration
      param1: value1
      param2: value2`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Graph Configuration</h3>
        <CodeBlock
          yaml={`graph:
  entry: node_name                                   # Required, starting node
  max_steps: 50                                      # Optional, prevent infinite loops
  timeout: 300                                        # Optional, seconds

  nodes:                                             # Required, list of nodes
    - name: node_name                                # Required
      handler: function_name                         # Required, references @register_handler
      config:                                        # Optional, passed to handler
        key: value
      retry:                                         # Optional, retry configuration
        max_attempts: 3
        backoff: exponential
      timeout: 30                                    # Optional, seconds

  edges:                                             # Optional, explicit edges
    - from: source_node
      to: target_node
      condition: "state.get('score', 0) > 0.8"      # Optional, conditional routing`}
        />
      </Section>

      <Section id="config-validation" title="Configuration Validation">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra validates your configuration at load time to catch errors early.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::agent::Agent;

// This will validate the entire config
match Agent::from_config_path("agent.yaml") {
    Ok(agent) => println!("Config is valid!"),
    Err(e) => {
        eprintln!("Configuration error: {}", e);
        // Detailed error messages help you fix issues
        std::process::exit(1);
    }
}`}
          python={`from flowgentra_ai.agent import Agent

try:
    agent = Agent.from_config_path("agent.yaml")
    print("Config is valid!")
except Exception as e:
    print(f"Configuration error: {e}")
    # Detailed error messages help you fix issues
    exit(1)`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Common validation checks include:
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li>LLM provider and model compatibility</li>
          <li>Handler function existence</li>
          <li>Graph connectivity (no orphaned nodes)</li>
          <li>Tool configuration validity</li>
          <li>Environment variable resolution</li>
        </ul>
      </Section>

      <Section id="runtime-config" title="Runtime Configuration">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Some settings can be changed at runtime without reloading the entire agent.
        </p>
        <CodeBlock
          python={`# Load agent
agent = Agent.from_config_path("agent.yaml")

# Change LLM settings at runtime
agent.update_llm_config({
    "temperature": 0.9,
    "model": "gpt-4-turbo"
})

# Add tools dynamically
agent.add_tool(new_tool)

# Update memory settings
agent.update_memory_config({
    "max_messages": 50
})

# The agent adapts to these changes immediately`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Runtime Configuration Methods</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>update_llm_config(config)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Updates LLM configuration (temperature, model, etc.)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>add_tool(tool_config)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>tool_config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Adds a new tool to the agent at runtime</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>update_memory_config(config)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Updates memory configuration settings</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>reload_config()</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Reloads configuration from original source file</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Runtime configuration is useful for A/B testing, gradual rollouts, and user-specific customization.
        </p>
      </Section>

      <Section id="config-patterns" title="Configuration Patterns">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Best practices for organizing and managing configurations.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Environment-specific Configs</h3>
        <CodeBlock
          yaml={`# config.base.yaml (shared settings)
name: my_agent
llm:
  provider: \${LLM_PROVIDER}
  model: \${MODEL_NAME}

# config.dev.yaml (development overrides)
_extends: config.base.yaml
llm:
  temperature: 0.9  # More creative in dev
memory:
  max_messages: 100  # More memory for debugging

# config.prod.yaml (production overrides)
_extends: config.base.yaml
llm:
  temperature: 0.1  # More conservative in prod
observability:
  tracing: true
  metrics: true`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Modular Configurations</h3>
        <CodeBlock
          yaml={`# Split large configs into logical modules
# agent.yaml
name: complex_agent
includes:
  - llm.yaml
  - tools.yaml
  - graph.yaml

# llm.yaml
llm:
  provider: anthropic
  model: claude-3-opus-20240229

# tools.yaml
tools:
  - name: search
    type: vector_search
    config: {collection: docs}

# graph.yaml
graph:
  entry: process_input
  nodes:
    - name: process_input
      handler: process_input`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Configuration as Code</h3>
        <CodeBlock
          python={`# For complex configurations, generate YAML programmatically
import yaml
from flowgentra_ai.config import ConfigBuilder

config = ConfigBuilder() \\
    .name("dynamic_agent") \\
    .llm(provider="openai", model="gpt-4", temperature=0.7) \\
    .tool("calculator", type="function") \\
    .tool("web_search", type="api_call", base_url="https://api.search.com") \\
    .node("start", handler="process_input") \\
    .node("calculate", handler="run_calculation") \\
    .edge("start", "calculate") \\
    .build()

# Save to file
with open("generated_config.yaml", "w") as f:
    yaml.dump(config.to_dict(), f)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>ConfigBuilder Methods</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>name(name)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>name: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ConfigBuilder</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Sets the agent name</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>llm(**kwargs)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>provider, model, temperature, etc.</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ConfigBuilder</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Configures the LLM settings</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>tool(name, **kwargs)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>name: str, type: str, config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ConfigBuilder</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Adds a tool configuration</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>node(name, **kwargs)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>name: str, handler: str, config: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ConfigBuilder</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Adds a graph node configuration</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>edge(from_node, to_node, **kwargs)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>from_node: str, to_node: str, condition: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ConfigBuilder</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Adds an edge between nodes</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>build()</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Config</td>
                <td style={{ padding: '8px' }}>Builds the final configuration object</td>
              </tr>
            </tbody>
          </table>
        </div>
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