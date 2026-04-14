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
]

export default function ToolsGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Tool Integration
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Tools extend your agents with the ability to perform actions: call APIs, run calculations, search databases, or interact with external systems. Flowgentra provides a complete toolkit for building and using tools.
      </p>

      <Section id="tool-basics" title="Tool Basics">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          A tool is a function that an agent can call. Tools have names, descriptions, and schemas that tell the LLM how to use them.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::tools::{Tool, ToolSpec};

struct CalculatorTool;

impl Tool for CalculatorTool {
    fn name(&self) -> &str { "calculator" }

    fn description(&self) -> &str {
        "Calculate mathematical expressions. Use for arithmetic operations."
    }

    fn schema(&self) -> ToolSpec {
        ToolSpec {
            parameters: json!({
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Mathematical expression to evaluate"
                    }
                },
                "required": ["expression"]
            })
        }
    }

    async fn call(&self, args: serde_json::Value) -> Result<String> {
        let expr = args["expression"].as_str().unwrap();
        let result = eval_expression(expr)?;
        Ok(result.to_string())
    }
}`}
          python={`from flowgentra_ai.tools import Tool, ToolSpec
from typing import Any, Dict

class CalculatorTool(Tool):
    def name(self) -> str:
        return "calculator"

    def description(self) -> str:
        return "Calculate mathematical expressions. Use for arithmetic operations."

    def schema(self) -> Dict[str, Any]:
        return {
            "type": "object",
            "properties": {
                "expression": {
                    "type": "string",
                    "description": "Mathematical expression to evaluate"
                }
            },
            "required": ["expression"]
        }

    def call(self, args: Dict[str, Any]) -> str:
        expr = args["expression"]
        result = eval(expr)  # In practice, use a safe evaluator
        return str(result)`}
        />
      </Section>

      <Section id="creating-tools" title="Creating Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Tools can be created from functions, classes, or even external APIs.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Function-based Tools</h3>
        <CodeBlock
          python={`from flowgentra_ai.tools import tool

@tool
def search_web(query: str) -> str:
    """Search the web for information."""
    # Implementation here
    return f"Search results for: {query}"

@tool
def get_weather(city: str) -> dict:
    """Get current weather for a city."""
    # Call weather API
    return {"temperature": 72, "condition": "sunny"}`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>@tool Decorator Parameters</h4>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameter</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Required</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>name</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Auto</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Function name (auto-detected)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>description</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Auto</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Function docstring (auto-detected)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>schema</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>Auto</td>
                <td style={{ padding: '8px' }}>JSON schema from type hints (auto-generated)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>API Tools</h3>
        <CodeBlock
          python={`import requests
from flowgentra_ai.tools import tool

@tool
def github_api(endpoint: str, method: str = "GET", **kwargs) -> dict:
    """Call GitHub API endpoints."""
    base_url = "https://api.github.com"
    response = requests.request(method, f"{base_url}{endpoint}", **kwargs)
    return response.json()

# Usage in agent
agent = Agent.create(
    agent_type="tool_calling",
    tools=[github_api],
    model="gpt-4"
)`}
        />
      </Section>

      <Section id="tool-registry" title="Tool Registry">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The tool registry manages all available tools and makes them discoverable by agents.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::tools::ToolRegistry;

let mut registry = ToolRegistry::new();

// Register tools
registry.register(Box::new(CalculatorTool))?;
registry.register(Box::new(WebSearchTool))?;

// Get all tools for an agent
let tools = registry.get_tools_by_names(&["calculator", "web_search"])?;

// Or get all tools
let all_tools = registry.all_tools()?;`}
          python={`from flowgentra_ai.tools import ToolRegistry

registry = ToolRegistry()

# Register tools
registry.register(CalculatorTool())
registry.register(WebSearchTool())

# Get tools for an agent
tools = registry.get_tools_by_names(["calculator", "web_search"])

# Or get all tools
all_tools = registry.all_tools()`}
        />
      </Section>

      <Section id="tool-nodes" title="Tool Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Tool nodes execute tools within your graph workflow.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::ToolNode;

#[derive(State)]
struct AgentState {
    messages: Vec<Message>,
    tool_calls: Vec<ToolCall>,
}

let tool_node = ToolNode::new(registry);

let graph = StateGraph::<AgentState>::builder()
    .add_node("agent", agent_node)
    .add_node("tools", tool_node)
    .add_conditional_edge("agent", |state| {
        if !state.tool_calls.is_empty() {
            "tools"
        } else {
            "__end__"
        }
    })
    .add_edge("tools", "agent")  // Loop back to agent
    .build()?;`}
          python={`from flowgentra_ai.nodes import ToolNode

class AgentState(TypedDict):
    messages: List[Message]
    tool_calls: List[ToolCall]

tool_node = ToolNode(registry)

builder = StateGraph(AgentState)
builder.add_node("agent", agent_node)
builder.add_node("tools", tool_node)
builder.add_conditional_edge("agent",
    lambda state: "tools" if state.get("tool_calls") else END)
builder.add_edge("tools", "agent")  # Loop back to agent
graph = builder.compile()`}
        />
      </Section>

      <Section id="tool-calling" title="Tool Calling with LLMs">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Modern LLMs can call tools directly. Flowgentra handles the tool calling protocol.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.llm import LLMClient

llm = LLMClient.from_config({
    "provider": "openai",
    "model": "gpt-4",
    "tools": [calculator_tool, search_tool]
})

# The LLM will automatically call tools when needed
response = llm.complete(
    "What is 15 * 23, and what's the weather in Tokyo?",
    tools=[calculator_tool, search_tool]
)

# Response includes tool calls and final answer
print(response.tool_calls)  # [{"name": "calculator", "args": {"expression": "15*23"}}]
print(response.final_answer)  # "15 * 23 = 345, and Tokyo is sunny with 72°F"`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Tool calling is supported for OpenAI, Anthropic, and other providers that implement the tool calling protocol.
        </p>
      </Section>

      <Section id="builtin-tools" title="Built-in Tools">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra includes many useful tools out of the box.
        </p>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Tool</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>Calculator</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>expression: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Mathematical calculations and arithmetic</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>WebSearch</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>query: str, limit: int = 10</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>List[dict]</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Search the web for up-to-date information</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>FileSystem</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>path: str, operation: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str | dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Read and write files, list directories</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>HTTPClient</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>url: str, method: str = "GET"</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Make HTTP requests to APIs</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>DateTime</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>operation: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str | dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Date and time operations, formatting</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>JSONParser</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>json_string: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>dict | list</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Parse and validate JSON strings</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>TextSplitter</td>
                <td style={{ padding: '8px' }}>text: str, chunk_size: int = 1000</td>
                <td style={{ padding: '8px' }}>List[str]</td>
                <td style={{ padding: '8px' }}>Split text into manageable chunks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock
          python={`from flowgentra_ai.tools import builtin_tools

# Get all built-in tools
tools = builtin_tools()

# Or get specific tools
calculator = builtin_tools()["calculator"]
web_search = builtin_tools()["web_search"]

agent = Agent.create(
    agent_type="tool_calling",
    tools=[calculator, web_search],
    model="gpt-4"
)`}
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