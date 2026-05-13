import React from 'react';
import DocLayout from '../components/DocLayout';

const AgentBuilderGuide = () => {
  const content = `# Agent Builder API

## Overview

The \`Agent\` and \`AgentBuilder\` provide high-level abstractions for common agent patterns. They bundle state, graph, LLM, and memory into a single interface.

## Creating Agents

### From YAML Configuration

The primary way to create agents in production:

**Python:**
\`\`\`python
from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = await agent.run({"input": "What is AI?"})
print(result["response"])
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::prelude::*;

let mut agent = from_config_path("agent.yaml")?;
agent.state.set("input", json!("What is AI?"));
let result = agent.run().await?;
println!("{}", result.get("response").unwrap());
\`\`\`

### From Code (Builder Pattern)

Programmatic construction:

**Python:**
\`\`\`python
from flowgentra_ai.agent import AgentBuilder
from flowgentra_ai.llm import LLM
from typing import TypedDict

class AgentState(TypedDict):
    input: str
    response: str

builder = AgentBuilder(AgentState)

# Add nodes
builder.add_node("respond", respond_node)

# Configure graph
builder.set_entry_point("respond")

# Configure LLM
builder.with_llm(LLM(provider="openai", model="gpt-4o", temperature=0.7))

# Build
agent = builder.build()
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct AgentState {
    input: String,
    response: String,
}

let agent = Agent::builder()
    .with_state_type::<AgentState>()
    .add_node("respond", Box::new(respond_node))
    .set_entry_point("respond")
    .with_llm(LLMConfig {
        provider: LLMProvider::OpenAI,
        model: "gpt-4".to_string(),
        temperature: 0.7,
        ..Default::default()
    })
    .build()?;
\`\`\`

## Agent Properties

### State Management

\`\`\`python
# Get/set state
agent.state["input"] = "question"
print(agent.state["response"])

# Full state access
print(agent.get_state())
\`\`\`

### Memory & Checkpointing

\`\`\`python
from flowgentra_ai.memory import FileCheckpointer

checkpointer = FileCheckpointer("./checkpoints")
agent = agent.with_checkpointer(checkpointer)

# Save to checkpoint
await agent.run_with_thread("user-42", {"input": "Hello"})

# Resume from checkpoint
result = await agent.run_with_thread("user-42", {"input": "Remember me?"})
\`\`\`

### LLM Access

\`\`\`python
# Access the LLM directly
llm = agent.llm
response = await llm.invoke([
    {"role": "user", "content": "Hello"}
])
print(response.content)
\`\`\`

## Running Agents

### Simple Execution

\`\`\`python
result = await agent.run({"input": "What is AI?"})
print(result)
\`\`\`

### With Thread (Multi-turn)

\`\`\`python
# First turn - saves checkpoint
result1 = await agent.run_with_thread("thread-1", {"input": "My name is Alice"})

# Second turn - loads checkpoint, has memory
result2 = await agent.run_with_thread("thread-1", {"input": "Who am I?"})
print(result2["response"])  # "You are Alice"
\`\`\`

### Streaming Results

\`\`\`python
# Stream node outputs as they complete
async for partial_result in agent.run_stream({"input": "Explain quantum computing"}):
    print(f"Node: {partial_result['node']}, State update: {partial_result['update']}")
\`\`\`

## Error Handling

\`\`\`python
from flowgentra_ai.error import FlowgentraError, NodeExecutionError

try:
    result = await agent.run(state)
except NodeExecutionError as e:
    print(f"Node '{e.node_name}' failed: {e.message}")
    # Handle node-specific errors
except FlowgentraError as e:
    print(f"Agent error: {e}")
\`\`\`

## Advanced Configurations

### Custom Handlers

\`\`\`python
async def custom_handler(state):
    # Custom logic here
    return state

builder.add_node("custom", custom_handler)
\`\`\`

### Middleware

\`\`\`python
from flowgentra_ai.middleware import Middleware

middleware = CustomMiddleware()
agent = agent.with_middleware(middleware)
\`\`\`

### Observability

\`\`\`python
from flowgentra_ai.observability import ExecutionTracer

tracer = ExecutionTracer()
agent = agent.with_observability(tracer)

result = await agent.run(state)
tracer.visualize_graph("graph.html")
\`\`\`

## Agent Subclasses

### Memory-Aware Agent

Automatically manages conversation memory:

\`\`\`python
from flowgentra_ai.agent import MemoryAwareAgent

agent = MemoryAwareAgent.from_config("agent.yaml")
# Automatically appends messages to state["messages"]
\`\`\`

## Best Practices

1. **Use YAML for configuration** - Separates config from code
2. **Set reasonable timeouts** - Prevent hanging nodes
3. **Implement error recovery** - Use RetryNode or conditional routing
4. **Monitor token usage** - Track costs
5. **Test with different LLM models** - Ensure portability
6. **Version control configs** - Track changes over time
`;

  return (
    <DocLayout 
      title="Agent Builder API"
      description="Create and configure agents using builders and YAML configuration."
      content={content}
    />
  );
};

export default AgentBuilderGuide;
