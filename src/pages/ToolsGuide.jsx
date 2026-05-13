import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'tool-basics', label: 'Tool Basics' },
  { id: 'creating-tools', label: 'Creating Tools' },
  { id: 'tool-registry', label: 'Tool Registry' },
  { id: 'tool-nodes', label: 'Tool Nodes' },
  { id: 'tool-calling', label: 'Tool Calling with LLMs' },
  { id: 'builtin-tools', label: 'Built-in Tools' },
  { id: 'search-tools', label: 'Search Tools' },
  { id: 'knowledge-tools', label: 'Knowledge Tools' },
  { id: 'code-exec-tools', label: 'Code Execution Tools' },
  { id: 'file-tools', label: 'Extended File Tools' },
  { id: 'data-tools', label: 'Data Tools' },
  { id: 'communication-tools', label: 'Communication Tools' },
  { id: 'external-api-tools', label: 'External API Tools' },
  { id: 'human-tools', label: 'Human-in-the-Loop' },
]

const tableStyle = {
  background: '#0d1117',
  border: '1px solid #21262d',
  borderRadius: 8,
  padding: '20px',
  marginBottom: 20,
}

const thStyle = { textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }
const tdStyle = { padding: '8px', borderBottom: '1px solid #21262d', color: '#8b949e' }
const tdCode = { ...tdStyle, fontFamily: 'monospace', fontSize: '0.9em' }
const tdLast = { padding: '8px', color: '#8b949e' }
const tdCodeLast = { ...tdLast, fontFamily: 'monospace', fontSize: '0.9em' }

export default function ToolsGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Tool Integration
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Tools extend your agents with the ability to perform actions: call APIs, run calculations, search the web, execute code, or interact with external services. Flowgentra ships with 27 production-ready predefined tools plus a complete framework for building custom ones.
      </p>

      <Section id="tool-basics" title="Tool Basics">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A tool is a function that an agent can call. Every tool has a name, a description the LLM reads, and a JSON schema describing its parameters.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::tools::{Tool, ToolDefinition, JsonSchema};
use flowgentra_ai::prelude::*;
use serde_json::{json, Value};
use async_trait::async_trait;

struct MyTool;

#[async_trait]
impl Tool for MyTool {
    fn definition(&self) -> ToolDefinition {
        ToolDefinition {
            name: "my_tool".to_string(),
            description: "Does something useful.".to_string(),
            parameters: JsonSchema::object(),
        }
    }

    async fn call(&self, input: Value) -> Result<Value> {
        let arg = input["arg"].as_str().unwrap_or("");
        Ok(json!({ "result": arg }))
    }
}`}
          python={`from flowgentra_ai.tools import ToolRegistry, CalculatorTool

# Use a predefined tool directly
calc = CalculatorTool()
result = calc.call({"expression": "2 ** 10"})
print(result)  # {"result": 1024.0}

# Or build a registry and call by name
registry = ToolRegistry.with_builtins()
result = registry.call_tool("calculator", {"expression": "sqrt(144)"})`}
        />
      </Section>

      <Section id="creating-tools" title="Creating Custom Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Implement the <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>Tool</code> trait in Rust. Python agents use Flowgentra's predefined tools or extend via PyO3 bindings.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Rust Custom Tool</h3>
        <CodeBlock
          rust={`use flowgentra_ai::core::tools::{Tool, ToolDefinition, JsonSchema};
use flowgentra_ai::prelude::*;
use serde_json::{json, Value};
use async_trait::async_trait;

pub struct WeatherTool {
    api_key: String,
    client: reqwest::Client,
}

impl WeatherTool {
    pub fn new(api_key: impl Into<String>) -> Self {
        Self { api_key: api_key.into(), client: reqwest::Client::new() }
    }
    pub fn from_env() -> Result<Self> {
        let key = std::env::var("WEATHER_API_KEY")
            .map_err(|_| FlowgentraError::ToolError("WEATHER_API_KEY not set".into()))?;
        Ok(Self::new(key))
    }
}

#[async_trait]
impl Tool for WeatherTool {
    fn definition(&self) -> ToolDefinition {
        ToolDefinition {
            name: "weather".to_string(),
            description: "Get current weather for a city.".to_string(),
            parameters: JsonSchema::object(),
        }
    }

    async fn call(&self, input: Value) -> Result<Value> {
        let city = input["city"].as_str()
            .ok_or_else(|| FlowgentraError::ToolError("city required".into()))?;
        // ... HTTP call to weather API
        Ok(json!({ "city": city, "temperature": 22 }))
    }
}`}
          python={`# Python: use the predefined OpenWeatherMapTool (key-based)
from flowgentra_ai.tools import OpenWeatherMapTool

weather = OpenWeatherMapTool(api_key="YOUR_KEY")
# or: OpenWeatherMapTool()  — reads OPENWEATHERMAP_API_KEY env var

result = weather.call({"city": "London"})
print(result)
# {"city": "London", "temperature": 15.2, "feels_like": 13.1,
#  "humidity": 72, "description": "overcast clouds", "wind_speed": 4.1}`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>Tool Definition Schema</h3>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Field</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>name</td>
                <td style={tdStyle}>String</td>
                <td style={tdStyle}>Unique identifier used to call the tool</td>
              </tr>
              <tr>
                <td style={tdCode}>description</td>
                <td style={tdStyle}>String</td>
                <td style={tdStyle}>Natural-language explanation the LLM reads to decide when to use the tool</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>parameters</td>
                <td style={tdLast}>JsonSchema</td>
                <td style={tdLast}>JSON Schema object describing the input shape</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="tool-registry" title="Tool Registry">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>ToolRegistry</code> holds a named collection of tools and dispatches calls. <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>with_builtins()</code> pre-registers every keyless, non-destructive tool.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::tools::ToolRegistry;
use std::sync::Arc;

// Start with all safe built-in tools registered
let mut registry = ToolRegistry::with_builtins();

// Add your own tool
registry.register("weather", Arc::new(WeatherTool::new("key")))?;

// Call a tool by name
let result = registry.call_tool("calculator", json!({"expression": "2^8"})).await?;

// Inspect the registry
println!("{} tools registered", registry.len());
for def in registry.list_definitions() {
    println!("  {} — {}", def.name, def.description);
}`}
          python={`from flowgentra_ai.tools import (
    ToolRegistry, ToolNode,
    CalculatorTool, FilesTool, WebRequestTool,
    DuckDuckGoSearchTool, WikipediaTool,
)

# Pre-seeded with all keyless built-ins
registry = ToolRegistry.with_builtins()

# Or start empty and add selectively
registry = ToolRegistry()

# Pass a list — tool name comes from definition
registry = ToolRegistry([CalculatorTool(), DuckDuckGoSearchTool()])

# Pass a dict to override names
registry = ToolRegistry({"calc": CalculatorTool(), "search": DuckDuckGoSearchTool()})

# Call directly
result = registry.call_tool("calculator", {"expression": "99 * 99"})

# Check what's registered
print(registry.list_names())   # ['calculator', 'duckduckgo_search', ...]
print(len(registry))           # number of tools`}
        />
      </Section>

      <Section id="tool-nodes" title="Tool Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>ToolNode</code> wraps a registry as a graph node, executing whatever tool calls are pending in the state.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::tools::{ToolRegistry, ToolNode};
use flowgentra_ai::core::graph::StateGraph;

let registry = ToolRegistry::with_builtins();
let tool_node = ToolNode::new(Arc::new(registry));

let graph = StateGraph::builder()
    .add_node("agent", agent_node)
    .add_node("tools", tool_node)
    .add_conditional_edge("agent", |state| {
        if state.has_pending_tool_calls() { "tools" } else { "__end__" }
    })
    .add_edge("tools", "agent")   // loop back
    .build()?;`}
          python={`from flowgentra_ai.tools import ToolRegistry, ToolNode, create_tool_node, check_tools_condition

registry = ToolRegistry.with_builtins()

# Functional API
tool_node = create_tool_node(registry)

builder = StateGraph(AgentState)
builder.add_node("agent", agent_node)
builder.add_node("tools", tool_node)
builder.add_conditional_edges("agent", check_tools_condition, {
    "tools": "tools",
    "__end__": END,
})
builder.add_edge("tools", "agent")
graph = builder.compile()`}
        />
      </Section>

      <Section id="tool-calling" title="Tool Calling with LLMs">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Attach tools to an LLM so the model can decide when and how to call them.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.llm import LLM
from flowgentra_ai.tools import CalculatorTool, DuckDuckGoSearchTool

llm = LLM(
    provider="anthropic",
    model="claude-opus-4-7",
    api_key="YOUR_KEY",
)

tools = [CalculatorTool(), DuckDuckGoSearchTool()]

response = llm.complete(
    "What is 15 * 23, and who won the 2024 World Series?",
    tools=tools,
)

print(response.tool_calls)   # tool invocations the model made
print(response.content)      # final answer after tool results`}
        />
      </Section>

      {/* ─── BUILT-IN TOOLS ─────────────────────────────────────────────────── */}
      <Section id="builtin-tools" title="Built-in Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          These tools are registered automatically by <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>ToolRegistry::with_builtins()</code> — no API key or configuration required.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>Registry name</th>
                <th style={thStyle}>Input</th>
                <th style={thStyle}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>CalculatorTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>calculator</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>expression: str</code></td>
                <td style={tdStyle}>Evaluate mathematical expressions safely</td>
              </tr>
              <tr>
                <td style={tdCode}>FilesTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>file</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>operation, path, content?</code></td>
                <td style={tdStyle}>Read, write, append, list files within sandbox</td>
              </tr>
              <tr>
                <td style={tdCode}>WebRequestTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>web_request</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>url, method?, headers?, body?</code></td>
                <td style={tdStyle}>HTTP requests (GET/POST/PUT/PATCH/DELETE/HEAD) with SSRF protection</td>
              </tr>
              <tr>
                <td style={tdCode}>DuckDuckGoSearchTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>duckduckgo_search</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>query: str, max_results?: int</code></td>
                <td style={tdStyle}>Web search via DuckDuckGo (no API key)</td>
              </tr>
              <tr>
                <td style={tdCode}>WikipediaTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>wikipedia</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>title: str</code></td>
                <td style={tdStyle}>Fetch Wikipedia article summary</td>
              </tr>
              <tr>
                <td style={tdCode}>JsonGetValueTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>json_get</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>json: str, path: str</code></td>
                <td style={tdStyle}>Extract value from JSON by dot-notation path</td>
              </tr>
              <tr>
                <td style={tdCode}>JsonListKeysTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>json_keys</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>json: str, depth?: int</code></td>
                <td style={tdStyle}>List all keys in a JSON object recursively</td>
              </tr>
              <tr>
                <td style={tdCode}>CsvQueryTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>csv_query</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>csv: str, filter?: str</code></td>
                <td style={tdStyle}>Parse and filter CSV data in memory</td>
              </tr>
              <tr>
                <td style={tdCode}>CopyFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>copy_file</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>src: str, dst: str</code></td>
                <td style={tdStyle}>Copy a file within sandbox</td>
              </tr>
              <tr>
                <td style={tdCode}>DeleteFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>delete_file</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>path: str, recursive?: bool</code></td>
                <td style={tdStyle}>Delete a file or directory</td>
              </tr>
              <tr>
                <td style={tdCode}>MoveFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>move_file</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>src: str, dst: str</code></td>
                <td style={tdStyle}>Move or rename a file</td>
              </tr>
              <tr>
                <td style={tdCode}>FileSearchTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>file_search</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>directory, pattern, max_results?</code></td>
                <td style={tdStyle}>Recursive file search with regex matching</td>
              </tr>
              <tr>
                <td style={tdCode}>HumanInputTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>human_input</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>prompt: str</code></td>
                <td style={tdStyle}>Pause execution and prompt the user for input</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          rust={`use flowgentra_ai::core::tools::ToolRegistry;

// All 13 keyless tools registered automatically
let registry = ToolRegistry::with_builtins();

let result = registry.call_tool("calculator", json!({"expression": "2^10"})).await?;
let result = registry.call_tool("wikipedia", json!({"title": "Rust programming language"})).await?;
let result = registry.call_tool("csv_query", json!({
    "csv": "name,age\nAlice,30\nBob,25",
    "filter": "age=30"
})).await?;`}
          python={`from flowgentra_ai.tools import ToolRegistry

registry = ToolRegistry.with_builtins()

# Calculator
print(registry.call_tool("calculator", {"expression": "2 ** 10"}))
# {"result": 1024.0}

# Wikipedia
print(registry.call_tool("wikipedia", {"title": "Rust programming language"}))
# {"title": "Rust (programming language)", "extract": "...", "url": "..."}

# CSV query
print(registry.call_tool("csv_query", {
    "csv": "name,score\\nAlice,95\\nBob,82\\nCarol,95",
    "filter": "score=95"
}))
# {"rows": [{"name": "Alice", "score": "95"}, {"name": "Carol", "score": "95"}], "count": 2}`}
        />
      </Section>

      {/* ─── PREDEFINED TOOLS ─────────────────────────────────────────────────── */}

      <Section id="search-tools" title="Search Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Five search providers — one free, four requiring API keys. All return a uniform <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>{"{ query, results: [{title, url, snippet}], count }"}</code> shape.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>API Key Env Var</th>
                <th style={thStyle}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>DuckDuckGoSearchTool</td>
                <td style={tdStyle}>—</td>
                <td style={tdStyle}>Free. Uses Instant Answer API, falls back to DDG Lite HTML scraping.</td>
              </tr>
              <tr>
                <td style={tdCode}>TavilySearchTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>TAVILY_API_KEY</code></td>
                <td style={tdStyle}>AI-optimised search with <code style={{ fontFamily: 'monospace' }}>max_results</code> and <code style={{ fontFamily: 'monospace' }}>search_depth</code>.</td>
              </tr>
              <tr>
                <td style={tdCode}>SerpApiSearchTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>SERPAPI_API_KEY</code></td>
                <td style={tdStyle}>Google SERP via SerpApi. Supports <code style={{ fontFamily: 'monospace' }}>engine</code> param.</td>
              </tr>
              <tr>
                <td style={tdCode}>GoogleSerperTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>SERPER_API_KEY</code></td>
                <td style={tdStyle}>Google via Serper.dev. Fastest Google option.</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>BraveSearchTool</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>BRAVE_API_KEY</code></td>
                <td style={tdLast}>Privacy-first independent index.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import (
    DuckDuckGoSearchTool,
    TavilySearchTool,
    SerpApiSearchTool,
    GoogleSerperTool,
    BraveSearchTool,
)

# Free — no key needed
ddg = DuckDuckGoSearchTool()
result = ddg.call({"query": "Rust programming language", "max_results": 5})
# {"query": "Rust programming language", "results": [...], "count": 5}

# API-key tools — key passed directly or read from env
tavily = TavilySearchTool(api_key="tvly-...")
# tavily = TavilySearchTool()  # reads TAVILY_API_KEY

result = tavily.call({
    "query": "latest AI research 2024",
    "max_results": 10,
    "search_depth": "advanced",  # "basic" or "advanced"
})

# All providers return the same shape
for r in result["results"]:
    print(r["title"], r["url"])`}
        />
      </Section>

      <Section id="knowledge-tools" title="Knowledge Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Tools for accessing encyclopedic and scientific knowledge bases.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>Source</th>
                <th style={thStyle}>API Key Env Var</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>WikipediaTool</td>
                <td style={tdStyle}>Wikipedia REST API</td>
                <td style={tdStyle}>—</td>
              </tr>
              <tr>
                <td style={tdCode}>ArxivTool</td>
                <td style={tdStyle}>arXiv.org Atom feed</td>
                <td style={tdStyle}>—</td>
              </tr>
              <tr>
                <td style={tdCode}>PubMedTool</td>
                <td style={tdStyle}>NCBI E-utilities</td>
                <td style={tdStyle}>—</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>WolframAlphaTool</td>
                <td style={tdLast}>Wolfram Alpha API</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>WOLFRAM_ALPHA_APPID</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool

# Wikipedia — article summary
wiki = WikipediaTool()
result = wiki.call({"title": "Large language model"})
# {"title": "Large language model", "extract": "A large language model ...", "url": "..."}

# ArXiv — recent papers
arxiv = ArxivTool()
result = arxiv.call({"query": "transformer attention mechanism", "max_results": 3})
# {"results": [{"id": "2017.12345", "title": "...", "summary": "...", "published": "..."}, ...]}

# PubMed — biomedical literature
pubmed = PubMedTool()
result = pubmed.call({"query": "mRNA vaccine efficacy", "max_results": 5})
# {"results": [{"uid": "...", "title": "...", "source": "Nature", "pubdate": "2023"}, ...]}

# Wolfram Alpha — computational answers
wolfram = WolframAlphaTool(api_key="YOUR_APPID")
result = wolfram.call({"query": "integrate x^2 from 0 to 3"})
# {"query": "...", "pods": [{"title": "Definite integral", "result": "9"}]}`}
        />
      </Section>

      <Section id="code-exec-tools" title="Code Execution Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Execute code in a subprocess. All tools return <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>{"{ output, error, exit_code }"}</code>. Timeouts kill the child process automatically.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>Runtime</th>
                <th style={thStyle}>Default Timeout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>PythonReplTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>python3</code></td>
                <td style={tdStyle}>30 s</td>
              </tr>
              <tr>
                <td style={tdCode}>NodeJsReplTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>node</code></td>
                <td style={tdStyle}>30 s</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>ShellTool</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>sh -c</code></td>
                <td style={tdLast}>30 s — allowlist required by default</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import PythonReplTool, NodeJsReplTool, ShellTool

# Python REPL
py = PythonReplTool()
result = py.call({"code": "import math; print(math.pi ** 2)"})
# {"output": "9.869604401...", "error": "", "exit_code": 0}

# Node.js REPL
node = NodeJsReplTool()
result = node.call({"code": "console.log([1,2,3].reduce((a,b)=>a+b,0))"})
# {"output": "6", "error": "", "exit_code": 0}

# Shell — allowlist restricts which commands are permitted
shell = ShellTool(allowed_commands=["ls", "cat", "echo", "wc"])
result = shell.call({"command": "wc -l /etc/hosts"})
# {"output": "30 /etc/hosts", "error": "", "exit_code": 0}

# Unrestricted shell — use with caution
shell_unrestricted = ShellTool.unrestricted()
result = shell_unrestricted.call({"command": "git log --oneline -5"})`}
        />
      </Section>

      <Section id="file-tools" title="Extended File Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          File operations beyond the core <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>FilesTool</code>. All paths are validated against a sandbox root (defaults to <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>cwd</code>). Path traversal attacks are blocked.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>Input Parameters</th>
                <th style={thStyle}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>CopyFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>src, dst</code></td>
                <td style={tdStyle}>Copies file; both paths must stay within sandbox</td>
              </tr>
              <tr>
                <td style={tdCode}>DeleteFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>path, recursive?</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>recursive: true</code> removes directories</td>
              </tr>
              <tr>
                <td style={tdCode}>MoveFileTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>src, dst</code></td>
                <td style={tdStyle}>Atomic rename; works across the sandbox</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>FileSearchTool</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>directory, pattern, max_results?</code></td>
                <td style={tdLast}>Recursive regex search; returns <code style={{ fontFamily: 'monospace' }}>{"[{file, line_number, line_content}]"}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool

# Copy
copy = CopyFileTool()
copy.call({"src": "report.md", "dst": "backup/report.md"})

# Delete
delete = DeleteFileTool()
delete.call({"path": "tmp/old_data.csv"})
delete.call({"path": "tmp/", "recursive": True})

# Move / rename
move = MoveFileTool()
move.call({"src": "draft.txt", "dst": "final/document.txt"})

# Search — regex pattern across file contents
search = FileSearchTool()
result = search.call({
    "directory": "src/",
    "pattern": "TODO|FIXME",
    "max_results": 50,
})
for hit in result["matches"]:
    print(f"{hit['file']}:{hit['line_number']}  {hit['line_content']}")`}
        />
      </Section>

      <Section id="data-tools" title="Data Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Pure in-memory tools for JSON and CSV data — no I/O, no API keys.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.tools import JsonGetValueTool, JsonListKeysTool, CsvQueryTool

# Extract a value by dot-notation path
json_get = JsonGetValueTool()
result = json_get.call({
    "json": '{"user": {"name": "Alice", "age": 30}}',
    "path": "user.name"
})
# {"value": "Alice", "found": true}

# List all keys recursively
json_keys = JsonListKeysTool()
result = json_keys.call({
    "json": '{"a": 1, "b": {"c": 2, "d": 3}}',
    "depth": 2
})
# {"keys": ["a", "b", "b.c", "b.d"]}

# Query CSV data with optional column filter
csv_query = CsvQueryTool()
result = csv_query.call({
    "csv": "name,dept,salary\\nAlice,eng,120000\\nBob,hr,80000\\nCarol,eng,115000",
    "filter": "dept=eng"
})
# {"rows": [{"name":"Alice","dept":"eng","salary":"120000"},
#           {"name":"Carol","dept":"eng","salary":"115000"}], "count": 2}`}
        />
      </Section>

      <Section id="communication-tools" title="Communication Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Send messages and read inboxes via Gmail and Slack. Both tools require access tokens.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>API Key Env Var</th>
                <th style={thStyle}>Supported Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>GmailTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>GMAIL_ACCESS_TOKEN</code></td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>send</code>, <code style={{ fontFamily: 'monospace' }}>list</code>, <code style={{ fontFamily: 'monospace' }}>read</code></td>
              </tr>
              <tr>
                <td style={tdCodeLast}>SlackTool</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>SLACK_BOT_TOKEN</code></td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>post_message</code>, <code style={{ fontFamily: 'monospace' }}>list_channels</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import GmailTool, SlackTool

# Gmail
gmail = GmailTool()  # reads GMAIL_ACCESS_TOKEN

# Send an email
gmail.call({
    "operation": "send",
    "to": "colleague@example.com",
    "subject": "Weekly Report",
    "body": "Hi, please find the report attached.",
})

# List recent messages
result = gmail.call({"operation": "list", "max_results": 5})

# Read a specific message
result = gmail.call({"operation": "read", "message_id": result["messages"][0]["id"]})

# Slack
slack = SlackTool()  # reads SLACK_BOT_TOKEN

slack.call({
    "operation": "post_message",
    "channel": "#general",
    "text": "Deployment complete! :white_check_mark:",
})

channels = slack.call({"operation": "list_channels"})`}
        />
      </Section>

      <Section id="external-api-tools" title="External API Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Production-ready connectors for weather, news, and financial data APIs.
        </p>
        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>API Key Env Var</th>
                <th style={thStyle}>Data Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdCode}>OpenWeatherMapTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>OPENWEATHERMAP_API_KEY</code></td>
                <td style={tdStyle}>OpenWeatherMap — current conditions by city</td>
              </tr>
              <tr>
                <td style={tdCode}>NewsApiTool</td>
                <td style={tdStyle}><code style={{ fontFamily: 'monospace' }}>NEWS_API_KEY</code></td>
                <td style={tdStyle}>NewsAPI.org — headlines and article search</td>
              </tr>
              <tr>
                <td style={tdCodeLast}>AlphaVantageTool</td>
                <td style={tdLast}><code style={{ fontFamily: 'monospace' }}>ALPHA_VANTAGE_API_KEY</code></td>
                <td style={tdLast}>Alpha Vantage — stocks, forex, crypto</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import OpenWeatherMapTool, NewsApiTool, AlphaVantageTool

# Weather
weather = OpenWeatherMapTool()  # reads OPENWEATHERMAP_API_KEY
result = weather.call({"city": "Tokyo"})
# {"city": "Tokyo", "temperature": 18.5, "feels_like": 17.2,
#  "humidity": 65, "description": "clear sky", "wind_speed": 3.1}

# News
news = NewsApiTool()  # reads NEWS_API_KEY
result = news.call({"query": "artificial intelligence", "page_size": 5})
# {"total_results": 1234,
#  "articles": [{"title": "...", "source": "BBC", "url": "...", "publishedAt": "..."}, ...]}

# Finance — stock quote
alpha = AlphaVantageTool()  # reads ALPHA_VANTAGE_API_KEY
result = alpha.call({
    "function": "GLOBAL_QUOTE",
    "symbol": "NVDA",
})

# Crypto exchange rate
result = alpha.call({
    "function": "CURRENCY_EXCHANGE_RATE",
    "params": {"from_currency": "BTC", "to_currency": "USD"},
})`}
        />
      </Section>

      <Section id="human-tools" title="Human-in-the-Loop">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <code style={{ fontFamily: 'monospace', color: '#79c0ff' }}>HumanInputTool</code> pauses agent execution and reads a line from stdin. Use it when an agent needs human approval or clarification before continuing.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.tools import HumanInputTool, ToolRegistry

human = HumanInputTool()

# Standalone call
result = human.call({"prompt": "Approve deployment to production? (yes/no): "})
print(result)  # {"input": "yes"}

# Inside an agent graph — the tool blocks until the user types a response
registry = ToolRegistry([HumanInputTool(), CalculatorTool()])
tool_node = create_tool_node(registry)`}
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
