import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what-are-plugins', label: 'What are Plugins?' },
  { id: 'plugin-architecture', label: 'Plugin Architecture' },
  { id: 'plugin-lifecycle', label: 'Plugin Lifecycle' },
  { id: 'registering-plugins', label: 'Registering Plugins' },
  { id: 'examples', label: 'Examples' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function PluginsGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Plugins System
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Extend Flowgentra with custom functionality through the plugin architecture. Plugins allow you to hook into the agent execution lifecycle, add custom tools, modify behavior, and integrate with external systems.
      </p>

      <Section id="what-are-plugins" title="What are Plugins?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Plugins are modular extensions that can:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li>Hook into agent lifecycle events (start, end, errors)</li>
          <li>Register custom tools and handlers</li>
          <li>Modify state during execution</li>
          <li>Add custom logging and monitoring</li>
          <li>Integrate with external services</li>
        </ul>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Unlike built-in features, plugins are loaded at runtime and don't require code changes to the core library.
        </p>
      </Section>

      <Section id="plugin-architecture" title="Plugin Architecture">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Plugin Trait</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          All plugins implement the Plugin trait:
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::plugins::Plugin;
use async_trait::async_trait;

struct MyPlugin;

#[async_trait]
impl Plugin for MyPlugin {
    fn name(&self) -> &str {
        "my-custom-plugin"
    }

    fn version(&self) -> &str {
        "1.0.0"
    }

    async fn initialize(&self, context: &mut PluginContext) -> Result<()> {
        println!("Plugin initialized!");
        Ok(())
    }

    async fn on_handler_start(
        &self,
        _context: &PluginContext,
        handler_name: &str,
    ) -> Result<()> {
        println!("Handler starting: {}", handler_name);
        Ok(())
    }
}`}
          python={`from flowgentra_ai.plugins import Plugin
from typing import Optional

class MyPlugin(Plugin):
    def name(self) -> str:
        return "my-custom-plugin"

    def version(self) -> str:
        return "1.0.0"

    async def initialize(self, context):
        print("Plugin initialized!")

    async def on_handler_start(self, context, handler_name: str):
        print(f"Handler starting: {handler_name}")
`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Plugin Context</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Plugins receive a PluginContext that provides access to:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li>Current agent state</li>
          <li>Execution context</li>
          <li>Configuration</li>
          <li>Tool registry</li>
        </ul>
      </Section>

      <Section id="plugin-lifecycle" title="Plugin Lifecycle">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Plugins can hook into these lifecycle events:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li><code>initialize()</code> - Called when plugin is loaded</li>
          <li><code>on_agent_start()</code> - Called before agent execution</li>
          <li><code>on_handler_start()</code> - Called before each node execution</li>
          <li><code>on_handler_end()</code> - Called after each node execution</li>
          <li><code>on_agent_end()</code> - Called after agent execution</li>
          <li><code>on_error()</code> - Called when errors occur</li>
        </ul>
      </Section>

      <Section id="registering-plugins" title="Registering Plugins">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>At Runtime</h4>
        <CodeBlock
          rust={`use flowgentra_ai::plugins::PluginRegistry;

let mut registry = PluginRegistry::new();
registry.register(Box::new(MyPlugin))?;`}
          python={`from flowgentra_ai.plugins import PluginRegistry

registry = PluginRegistry()
registry.register(MyPlugin())`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Configuration-Based</h4>
        <CodeBlock
          rust={`// config.yaml
plugins:
  - name: "logging-plugin"
    path: "./plugins/logging.so"
    config:
      log_level: "debug"`}
          python={`# config.yaml
plugins:
  - name: "logging-plugin"
    path: "./plugins/logging.py"
    config:
      log_level: "debug"`}
        />
      </Section>

      <Section id="examples" title="Examples">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Logging Plugin</h4>
        <CodeBlock
          rust={`use flowgentra_ai::plugins::{Plugin, PluginContext};
use async_trait::async_trait;
use std::time::Instant;

pub struct LoggingPlugin {
    start_time: Option<Instant>,
}

#[async_trait]
impl Plugin for LoggingPlugin {
    fn name(&self) -> &str { "logging" }
    fn version(&self) -> &str { "1.0.0" }

    async fn on_agent_start(&self, context: &PluginContext) -> Result<()> {
        println!("Agent execution started");
        Ok(())
    }

    async fn on_agent_end(&self, context: &PluginContext) -> Result<()> {
        println!("Agent execution completed");
        Ok(())
    }
}`}
          python={`from flowgentra_ai.plugins import Plugin
import time

class LoggingPlugin(Plugin):
    def __init__(self):
        self.start_time = None

    def name(self) -> str:
        return "logging"

    def version(self) -> str:
        return "1.0.0"

    async def on_agent_start(self, context):
        self.start_time = time.time()
        print("Agent execution started")

    async def on_agent_end(self, context):
        if self.start_time:
            duration = time.time() - self.start_time
            print(f"Agent execution completed in {duration:.2f}s")
`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Custom Tool Plugin</h4>
        <CodeBlock
          python={`from flowgentra_ai.plugins import Plugin
from flowgentra_ai.tools import Tool

class WeatherPlugin(Plugin):
    def name(self) -> str:
        return "weather-tools"

    def version(self) -> str:
        return "1.0.0"

    async def initialize(self, context):
        # Register custom weather tool
        context.tool_registry.register(
            "get_weather",
            WeatherTool(),
            "Get current weather for a location",
        )

class WeatherTool(Tool):
    def name(self) -> str:
        return "get_weather"

    def description(self) -> str:
        return "Get current weather information for a city"

    def schema(self):
        return {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "City name"}
            },
            "required": ["city"]
        }

    async def execute(self, input_data):
        city = input_data["city"]
        # Call weather API...
        return {"temperature": 72, "condition": "sunny"}
`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Error Handling</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Plugins should not crash the agent execution</li>
            <li>Use proper error types and logging</li>
            <li>Handle network timeouts gracefully</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Performance</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Keep plugin operations fast</li>
            <li>Avoid blocking operations in lifecycle hooks</li>
            <li>Use async operations for I/O</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Security</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Validate all inputs</li>
            <li>Don't store sensitive data in plugin state</li>
            <li>Use secure communication channels</li>
          </ul>
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