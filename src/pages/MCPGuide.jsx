import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what-is-mcp', label: 'What is MCP?' },
  { id: 'when-to-use-mcp', label: 'When to Use MCP' },
  { id: 'connection-types', label: 'Connection Types' },
  { id: 'creating-a-client', label: 'Creating a Client' },
  { id: 'discovering-tools', label: 'Discovering Tools' },
  { id: 'calling-tools', label: 'Calling Tools' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'connection-settings', label: 'Connection Settings' },
  { id: 'tool-filtering', label: 'Tool Filtering & Namespaces' },
  { id: 'resources', label: 'Resources' },
  { id: 'prompts', label: 'Prompts' },
  { id: 'multiple-clients', label: 'Multiple Clients' },
  { id: 'agent-integration', label: 'Agent Integration' },
  { id: 'yaml-config', label: 'YAML Configuration' },
  { id: 'api-reference', label: 'API Reference' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function MCPGuide() {
  useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Model Context Protocol (MCP)
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Connect your agents to external tools and services through the Model Context Protocol. MCP enables seamless integration with web APIs, local processes, and containerized services.
      </p>

      <Section id="what-is-mcp" title="What is MCP?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The Model Context Protocol (MCP) is a standard for connecting AI agents to external tools and data sources. It provides a unified interface for accessing web services, databases, local applications, and specialized tools.
        </p>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Unlike local tools (functions defined in your code), MCP tools are external services that run independently. This allows you to:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li>Access web APIs and cloud services</li>
          <li>Integrate with existing infrastructure</li>
          <li>Use specialized tools without rewriting them</li>
          <li>Scale tool execution across different environments</li>
          <li>Maintain tool isolation and security boundaries</li>
        </ul>
      </Section>

      <Section id="when-to-use-mcp" title="When to Use MCP">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Choose MCP when you need to connect to external systems or services:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: 20
        }}>
          <div style={{
            background: '#0d1117',
            border: '1px solid #21262d',
            borderRadius: 8,
            padding: '20px'
          }}>
            <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Use MCP for:</h4>
            <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
              <li>Web API integrations</li>
              <li>Database connections</li>
              <li>Cloud service APIs</li>
              <li>Specialized external tools</li>
              <li>Legacy system integration</li>
            </ul>
          </div>

          <div style={{
            background: '#0d1117',
            border: '1px solid #21262d',
            borderRadius: 8,
            padding: '20px'
          }}>
            <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Use Local Tools for:</h4>
            <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
              <li>Simple calculations</li>
              <li>Data transformations</li>
              <li>Business logic</li>
              <li>Code-defined functions</li>
              <li>Fast, lightweight operations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="connection-types" title="Connection Types">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          MCP supports three connection types for different deployment scenarios:
        </p>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>SSE (Server-Sent Events)</h4>
          <p style={{ color: '#8b949e', marginBottom: 12 }}>
            Connect to HTTP-based MCP servers. Ideal for web services and cloud APIs.
          </p>
          <CodeBlock
            rust={`use flowgentra_ai::core::mcp::MCPConfig;

let config = MCPConfig::builder()
    .name("web_search")
    .sse("http://api.example.com/mcp")
    .timeout_secs(30)
    .build()?;`}
            python={`from flowgentra_ai.mcp import MCPConfig

config = MCPConfig.sse(
    url="http://api.example.com/mcp",
    name="web_search"
)`}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Stdio (Standard I/O)</h4>
          <p style={{ color: '#8b949e', marginBottom: 12 }}>
            Launch a local process and communicate via stdin/stdout. Perfect for CLI tools and local services.
          </p>
          <CodeBlock
            rust={`let config = MCPConfig::builder()
    .name("filesystem")
    .stdio("npx")
    .args(vec![
        "-y".into(),
        "@modelcontextprotocol/server-filesystem".into(),
        "/tmp".into(),
    ])
    .timeout_secs(10)
    .build()?;`}
            python={`config = MCPConfig.stdio(
    command="npx",
    args=["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
    name="filesystem"
)`}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Docker</h4>
          <p style={{ color: '#8b949e', marginBottom: 12 }}>
            Run a tool in an isolated Docker container. Great for security, reproducibility, and complex dependencies.
          </p>
          <CodeBlock
            rust={`let config = MCPConfig::builder()
    .name("container_tool")
    .docker("my-org/tool-image:latest")
    .timeout_secs(60)
    .build()?;`}
            python={`config = MCPConfig.docker(
    image="my-org/tool-image:latest",
    name="container_tool"
)`}
          />
        </div>
      </Section>

      <Section id="creating-a-client" title="Creating a Client">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use <code style={{ color: '#58a6ff' }}>MCPClientFactory::create</code> (Rust) or <code style={{ color: '#58a6ff' }}>create_client()</code> (Python) to instantiate a client. The client is automatically wrapped with retry logic and tool-list caching.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::mcp::{MCPClientFactory, MCPConfig};

let config = MCPConfig::builder()
    .name("my-server")
    .sse("http://localhost:8080/sse")
    .build()?;

let client = MCPClientFactory::create(config)?;

// Gracefully shut down when done
client.shutdown().await?;`}
          python={`from flowgentra_ai.mcp import MCPConfig, create_client

config = MCPConfig.sse("http://localhost:8080/sse", name="my-server")
client = create_client(config)

# Always shut down when done (stops processes/containers for stdio/docker)
client.shutdown()`}
        />
      </Section>

      <Section id="discovering-tools" title="Discovering Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          List available tools and inspect their schemas before calling them:
        </p>
        <CodeBlock
          rust={`// Initialize MCP handshake (optional — called automatically on first use)
let version = client.initialize().await?;

// List all tools
let tools = client.list_tools().await?;
for tool in &tools {
    println!("{}: {:?}", tool.name, tool.description);
    println!("  Schema: {}", tool.input_schema);
}

// Health check
if client.health_check().await? {
    println!("Server is up");
}`}
          python={`# Initialize MCP handshake (optional)
version = client.initialize()
print(f"Protocol: {version}")

# List all tools
tools = client.list_tools()
for tool in tools:
    print(f"{tool.name}: {tool.description}")
    print(f"  Input schema: {tool.input_schema}")

# Health check
if client.health_check():
    print("Server is up")`}
        />
      </Section>

      <Section id="calling-tools" title="Calling Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Call tools individually or in parallel for independent operations:
        </p>
        <CodeBlock
          rust={`use serde_json::json;

// Call a single tool
let result = client.call_tool(
    "search",
    json!({ "query": "python asyncio", "max_results": 5 })
).await?;
println!("{}", result);

// Call multiple tools in parallel
let results = client.call_tools_parallel(vec![
    ("search".into(), json!({ "query": "MCP protocol" })),
    ("fetch".into(),  json!({ "url": "https://example.com" })),
]).await?;
for r in results {
    println!("{}", r);
}`}
          python={`# Call a single tool
result = client.call_tool("search", {"query": "python asyncio", "max_results": 5})
print(result)  # Python dict/list/str depending on the tool

# Call multiple tools in parallel
results = client.call_tools_parallel([
    ("search", {"query": "MCP protocol"}),
    ("fetch",  {"url": "https://example.com"}),
])
for r in results:
    print(r)`}
        />
      </Section>

      <Section id="authentication" title="Authentication">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Attach authentication credentials to any connection:
        </p>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Bearer Token</h4>
          <CodeBlock
            rust={`let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .auth(MCPAuth {
        auth_type: "bearer".into(),
        credentials: [("token".into(), "my-api-token".into())].into(),
    })
    .build()?;`}
            python={`from flowgentra_ai.mcp import MCPAuth

auth = MCPAuth("bearer", {"token": "my-api-token"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api") \
                  .with_auth(auth)`}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>API Key</h4>
          <CodeBlock
            rust={`// In config.yaml
auth:
  type: api_key
  header: "X-API-Key"
  key: "\${API_KEY}"`}
            python={`auth = MCPAuth("api_key", {"header": "X-API-Key", "key": "abc123"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api") \
                  .with_auth(auth)`}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Basic Auth</h4>
          <CodeBlock
            rust={`// In config.yaml
auth:
  type: basic
  username: "\${USER}"
  password: "\${PASS}"`}
            python={`auth = MCPAuth("basic", {"username": "user", "password": "pass"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api") \
                  .with_auth(auth)`}
          />
        </div>
      </Section>

      <Section id="connection-settings" title="Connection Settings">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Fine-tune timeouts, retries, and environment variables:
        </p>
        <CodeBlock
          rust={`let config = MCPConfig::builder()
    .name("tool")
    .stdio("python")
    .args(vec!["-m".into(), "my_tool".into()])
    .timeout_secs(30)        // general fallback
    .container_name("my-tool")
    .build()?;

// More settings are available via MCPConnectionSettings directly
// in advanced configurations or config.yaml`}
          python={`from flowgentra_ai.mcp import MCPConnectionSettings

settings = MCPConnectionSettings(
    timeout=30,           # general fallback timeout (seconds)
    connect_timeout=5,    # timeout for establishing connection
    call_timeout=60,      # timeout per tool call
    max_retries=3,        # retry failed calls up to N times
    working_dir="/app",   # stdio: working directory
    env_vars={"API_KEY": "secret"},  # stdio/docker: env vars
    container_name="my-tool",        # docker: container name
    port=8080,                       # docker: port inside container
    host_port=9090,                  # docker: port on host
)

config = MCPConfig.stdio("python", ["-m", "my_tool"], name="tool") \
                  .with_connection_settings(settings)`}
        />
      </Section>

      <Section id="tool-filtering" title="Tool Filtering & Namespaces">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          When using multiple MCP servers, use namespaces and filters to avoid name collisions and limit exposure:
        </p>
        <CodeBlock
          rust={`// Add namespace prefix: tools become "search.query", "search.fetch", etc.
let config = MCPConfig::builder()
    .name("search")
    .sse("http://search.example.com/mcp")
    .namespace("search")
    .build()?;

// Only expose specific tools
let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .tool_include(vec!["search".into(), "fetch".into()])
    .build()?;

// Hide specific tools
let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .tool_exclude(vec!["dangerous_tool".into()])
    .build()?;`}
          python={`# Add namespace prefix: tools become "search.query", "search.fetch", etc.
config = MCPConfig.sse("http://search.example.com/mcp", name="search") \
                  .with_namespace("search")

# Only expose specific tools
config = MCPConfig.sse("http://api.example.com/mcp", name="api") \
                  .with_tool_include(["search", "fetch"])

# Hide specific tools
config = MCPConfig.sse("http://api.example.com/mcp", name="api") \
                  .with_tool_exclude(["dangerous_tool"])`}
        />
      </Section>

      <Section id="resources" title="Resources">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Some MCP servers expose resources — files, database records, or other data sources — that can be read directly:
        </p>
        <CodeBlock
          rust={`// List available resources
let resources = client.list_resources().await?;
for r in &resources {
    println!("{} ({:?}): {:?}", r.uri, r.mime_type, r.description);
}

// Read a resource by URI
let content = client.read_resource("file:///path/to/document.txt").await?;
println!("{}", content.text.unwrap_or_default());`}
          python={`# List available resources
resources = client.list_resources()
for r in resources:
    print(f"{r.uri} ({r.mime_type}): {r.description}")

# Read a resource by URI
content = client.read_resource("file:///path/to/document.txt")
print(content.text)       # text content
print(content.blob)       # base64 blob (for binary files)
print(content.mime_type)  # e.g. "text/plain"`}
        />
      </Section>

      <Section id="prompts" title="Prompts">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Some MCP servers expose reusable prompt templates that can be rendered with arguments:
        </p>
        <CodeBlock
          rust={`// List prompt templates
let prompts = client.list_prompts().await?;
for p in &prompts {
    println!("{}: {:?}", p.name, p.description);
    for arg in &p.arguments {
        println!("  {} (required={})", arg.name, arg.required);
    }
}

// Render a prompt with arguments
let result = client.get_prompt(
    "summarize",
    json!({ "text": "Long document content here..." })
).await?;
for msg in &result.messages {
    println!("{}: {}", msg.role, msg.content);
}`}
          python={`# List prompt templates
prompts = client.list_prompts()
for p in prompts:
    print(f"{p.name}: {p.description}")
    for arg in p.arguments:
        print(f"  {arg.name} (required={arg.required}): {arg.description}")

# Render a prompt with arguments
result = client.get_prompt("summarize", {"text": "Long document content here..."})
for message in result.messages:
    print(f"{message.role}: {message.content}")`}
        />
      </Section>

      <Section id="multiple-clients" title="Multiple Clients">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Combine tools from multiple MCP servers into a single unified list:
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::mcp::{merge_tool_lists, MCPClientFactory};

let client1 = MCPClientFactory::create(
    MCPConfig::builder().name("s1").sse("http://server1/sse").build()?
)?;
let client2 = MCPClientFactory::create(
    MCPConfig::builder().name("s2").stdio("python").args(vec!["-m".into(), "tool".into()]).build()?
)?;

let all_tools = merge_tool_lists(&[client1, client2]).await?;
println!("Total tools: {}", all_tools.len());`}
          python={`from flowgentra_ai.mcp import MCPConfig, create_client, merge_tool_lists

client1 = create_client(MCPConfig.sse("http://server1/sse", name="s1"))
client2 = create_client(MCPConfig.stdio("python", ["-m", "tool"], name="s2"))

all_tools = merge_tool_lists([client1, client2])
print(f"Total tools: {len(all_tools)}")`}
        />
      </Section>

      <Section id="agent-integration" title="Agent Integration">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use MCP clients directly inside StateGraph nodes:
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::mcp::{MCPClientFactory, MCPConfig};
use serde_json::json;
use std::sync::Arc;

#[derive(State, Default, Clone)]
struct AgentState {
    query: String,
    result: Option<serde_json::Value>,
}

// Create client once at startup
let mcp = MCPClientFactory::create(
    MCPConfig::builder()
        .name("tools")
        .sse("http://localhost:8080/sse")
        .build()?
)?;

// Clone the Arc for the closure
let mcp_search = Arc::clone(&mcp);
let graph = StateGraph::<AgentState>::builder()
    .add_node("search", move |mut state: AgentState| {
        let mcp = Arc::clone(&mcp_search);
        async move {
            let result = mcp.call_tool("search", json!({ "query": state.query })).await?;
            state.result = Some(result);
            Ok(state)
        }
    })
    .set_entry("search")
    .set_finish("search")
    .build()?;`}
          python={`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.mcp import MCPConfig, create_client
from typing import TypedDict, Any

class AgentState(TypedDict):
    query: str
    result: Any

# Create client once at startup — tool list is cached automatically
mcp_client = create_client(MCPConfig.sse("http://localhost:8080/sse", name="tools"))

def search_node(state: AgentState) -> AgentState:
    result = mcp_client.call_tool("search", {"query": state["query"]})
    return {"result": result}

builder = StateGraph(AgentState)
builder.add_node("search", search_node)
builder.set_entry_point("search")
builder.add_edge("search", END)

graph = builder.compile()
output = graph.invoke({"query": "hello world", "result": None})`}
        />

        <p style={{ color: '#8b949e', marginTop: 16, marginBottom: 12 }}>
          Multi-tool agent using parallel calls:
        </p>
        <CodeBlock
          rust={`pub async fn research_node(mut state: ResearchState) -> Result<ResearchState> {
    let results = mcp.call_tools_parallel(vec![
        ("web_search".into(), json!({ "query": state.query })),
        ("news_search".into(), json!({ "query": state.query, "days": 7 })),
    ]).await?;

    state.web_results  = results[0].clone();
    state.news_results = results[1].clone();
    Ok(state)
}`}
          python={`def research_node(state: ResearchState) -> ResearchState:
    results = mcp_client.call_tools_parallel([
        ("web_search",  {"query": state["query"]}),
        ("news_search", {"query": state["query"], "days": 7}),
    ])
    return {
        "web_results":  results[0],
        "news_results": results[1],
    }`}
        />
      </Section>

      <Section id="yaml-config" title="YAML Configuration">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Configure MCP connections in your agent configuration file for config-driven agents:
        </p>
        <CodeBlock
          rust={`# config.yaml
graph:
  mcps:
    web_search:
      type: sse
      url: "http://api.example.com/search"
      timeout: 30
      auth:
        type: bearer
        token: "\${API_TOKEN}"

    calculator:
      type: stdio
      command: "python"
      args: ["-c", "import sys; exec(sys.stdin.read())"]
      timeout: 5

    data_processor:
      type: docker
      image: "myregistry.com/data-tools:latest"
      timeout: 120`}
          python={`# config.yaml
graph:
  mcps:
    web_search:
      type: sse
      url: "http://api.example.com/search"
      timeout: 30
      auth:
        type: bearer
        token: "\${API_TOKEN}"

    calculator:
      type: stdio
      command: "python"
      args: ["-c", "import sys; exec(sys.stdin.read())"]
      timeout: 5

    data_processor:
      type: docker
      image: "myregistry.com/data-tools:latest"
      timeout: 120`}
        />
      </Section>

      <Section id="api-reference" title="API Reference">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>MCPConfig</h4>
        <ApiTable rows={[
          ['MCPConfig.sse(url, name=None)', 'Create SSE connection config'],
          ['MCPConfig.stdio(command, args=None, name=None)', 'Create Stdio connection config'],
          ['MCPConfig.docker(image, name=None)', 'Create Docker connection config'],
          ['.with_auth(auth)', 'Return copy with MCPAuth credentials attached'],
          ['.with_namespace(ns)', 'Return copy with tool namespace prefix (e.g. "search.query")'],
          ['.with_tool_include(tools)', 'Return copy that only exposes listed tool names'],
          ['.with_tool_exclude(tools)', 'Return copy that hides listed tool names'],
          ['.with_connection_settings(settings)', 'Return copy with custom MCPConnectionSettings'],
          ['.is_remote()', 'True for SSE connections'],
          ['.is_local()', 'True for Stdio/Docker connections'],
        ]} />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>MCPClient</h4>
        <ApiTable rows={[
          ['initialize()', 'MCP protocol handshake — returns protocol version string'],
          ['list_tools() → list[MCPTool]', 'List all tools on the server (result is cached)'],
          ['call_tool(name, args) → Any', 'Call a tool with a dict of arguments'],
          ['call_tools_parallel(calls) → list[Any]', 'Call multiple tools in parallel, returns results in order'],
          ['health_check() → bool', 'Check if the server is reachable'],
          ['shutdown()', 'Gracefully stop the connection (subprocess / container)'],
          ['list_resources() → list[MCPResource]', 'List available resources from the server'],
          ['read_resource(uri) → MCPResourceContent', 'Read a resource by URI'],
          ['list_prompts() → list[MCPPrompt]', 'List prompt templates from the server'],
          ['get_prompt(name, args) → MCPPromptResult', 'Render a prompt template with arguments'],
        ]} />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>Functions</h4>
        <ApiTable rows={[
          ['create_client(config) → MCPClient', 'Factory — creates the right client type, wrapped with retry + caching'],
          ['merge_tool_lists(clients) → list[MCPTool]', 'Merge tool lists from multiple MCPClient instances'],
        ]} />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>Data Types</h4>
        <ApiTable rows={[
          ['MCPTool', 'name, description, input_schema'],
          ['MCPResource', 'uri, name, description, mime_type'],
          ['MCPResourceContent', 'uri, mime_type, text, blob'],
          ['MCPPrompt', 'name, description, arguments: list[MCPPromptArgument]'],
          ['MCPPromptArgument', 'name, description, required'],
          ['MCPPromptResult', 'description, messages: list[MCPPromptMessage]'],
          ['MCPPromptMessage', 'role, content'],
          ['MCPAuth', 'auth_type, credentials: dict[str, str]'],
          ['MCPConnectionSettings', 'timeout, connect_timeout, call_timeout, max_retries, env_vars, working_dir, port, host_port, container_name'],
          ['MCPConnectionType', 'Sse | Stdio | Docker — with .is_remote() / .is_local()'],
        ]} />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>🔧 Configuration</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Use environment variables for credentials — never hard-code tokens</li>
            <li>Set <code style={{ color: '#58a6ff' }}>call_timeout</code> separately from <code style={{ color: '#58a6ff' }}>connect_timeout</code> for better failure detection</li>
            <li>Use namespaces when combining tools from multiple servers</li>
            <li>Use <code style={{ color: '#58a6ff' }}>with_tool_include()</code> to whitelist only what your agent needs</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>⚡ Performance</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Create clients once at startup and reuse them — <code style={{ color: '#58a6ff' }}>list_tools()</code> results are cached automatically</li>
            <li>Use <code style={{ color: '#58a6ff' }}>call_tools_parallel()</code> for independent tool calls instead of sequential calls</li>
            <li>Set <code style={{ color: '#58a6ff' }}>max_retries</code> to handle transient network failures without extra code</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>🔒 Security</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Use Docker connections for untrusted or third-party tools</li>
            <li>Validate tool results before passing them to an LLM</li>
            <li>Use <code style={{ color: '#58a6ff' }}>with_tool_include()</code> to whitelist only tools your agent actually needs</li>
            <li>Log MCP tool usage for audit trails</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>🧹 Resource Management</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Always call <code style={{ color: '#58a6ff' }}>client.shutdown()</code> when done, especially for Stdio and Docker clients</li>
            <li>Use try/finally to guarantee cleanup even on errors</li>
          </ul>
          <CodeBlock
            rust={`// Rust: Drop/shutdown handled automatically in most cases
// For explicit cleanup:
client.shutdown().await?;`}
            python={`client = create_client(config)
try:
    result = client.call_tool("my_tool", {"arg": "value"})
finally:
    client.shutdown()`}
          />
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

function ApiTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 20 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <tbody>
          {rows.map(([name, desc], i) => (
            <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
              <td style={{ padding: '8px 12px', color: '#58a6ff', fontFamily: 'monospace', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                {name}
              </td>
              <td style={{ padding: '8px 12px', color: '#8b949e' }}>
                {desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
