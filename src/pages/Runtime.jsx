import React from 'react';
import DocLayout from '../components/DocLayout';

const Runtime = () => {
  const content = `# Runtime & Execution Model

## Overview

Flowgentra uses an async-first execution model powered by Tokio (Rust) with Python bindings via PyO3. Understanding the runtime is essential for building performant agents.

## Execution Model

### Graph Execution

 **Synchronous Compilation, Asynchronous Execution**

- Graph structure (nodes, edges) is compiled into a DAG at startup
- Graph execution is fully async using Tokio in Rust
- Python uses asyncio compatibility layer via PyO3

### Node Execution

Nodes execute in topological order:
1. Entry point node runs first
2. Output determines next node(s) via edges/conditional routing
3. Each node is awaited before proceeding
- Parallel branches spawn separate tasks
- State merges across branches using reducer functions

## State Management During Execution

### Reducer Pattern

When multiple branches complete, their state updates merge via reducers:

\`\`\`rust
#[derive(State, Clone)]
struct AgentState {
    #[reducer(Append)]
    messages: Vec<String>,
    #[reducer(Sum)]
    token_count: u64,
    current_step: String,  // last-write-wins (default)
}
\`\`\`

### Concurrent Safety

- State is wrapped in Arc<RwLock<T>> for thread-safe access
- Reducers ensure deterministic merge semantics
- No data races possible

## Async Runtime

### Tokio Integration (Rust)

- Uses Tokio's multi-threaded runtime by default
- Supports custom runtime configuration
- Graceful shutdown with cancellation tokens

### Python Asyncio

- PyO3 bindings integrate with Python's asyncio
- Use \`asyncio.run()\` or \`await\` in async Python code
- Compatible with Jupyter notebooks

## Performance Considerations

### Branching & Parallelization

Multiple nodes can execute in parallel when:
- Edges diverge from a single parent
- State merging is configured via reducers
- No circular dependencies

### Checkpoint Costs

Checkpointing has I/O overhead:
- File checkpointing: ~10-50ms per save
- In-memory: <1ms
- Use FileCheckpointer only for long-lived conversations

### Token Counting

Token-counting middleware adds negligible overhead on modern hardware:
- Happens in parallel during LLM requests
- HuggingFace tokenizer cache speeds up repeated calls

## Timeouts & Deadlines

### TimeoutNode

Enforce maximum duration on wrapped nodes:

\`\`\`rust
let timeout_node = TimeoutNode::new("api_call", 5000)  // 5 seconds
    .with_inner_node(Box::new(api_handler))
    .on_timeout(TimeoutAction::Error);

graph.add_node("timed", Box::new(timeout_node));
\`\`\`

### Deadline Propagation

Timeouts propagate through nested node calls.

## Error Handling During Execution

### Error Strategies

1. **Fail Fast** (default): Any node error halts execution
2. **Retry** (with RetryNode): Exponential backoff, configurable max retries
3. **Skip** (with TimeoutNode): Timeout -> skip to next node
4. **Fallback**: Conditional routing to alternate path

### Error Recovery

\`\`\`rust
let retry_node = RetryNode::new("flaky_api")
    .with_max_retries(3)
    .with_backoff(Duration::from_secs(1))
    .with_inner_node(Box::new(api_handler));
\`\`\`

## Memory & Resource Cleanup

### Automatic Cleanup

- Tasks are cancelled on graph completion or error
- File handles close automatically
- Memory is freed after execution

### Long-Running Agents

For agents that run indefinitely (like web servers):
- Use \`run_with_thread()\` for persistence
- Checkpointer manages memory automatically
- Monitor via observability tools

## Debugging Runtime Behavior

### Observability

Enable execution tracing to see:
- Node start/end times
- State transitions
- Error propagation
- Reducer merges

\`\`\`python
from flowgentra_ai.observability import ExecutionTracer

tracer = ExecutionTracer()
agent = agent.with_observability(tracer)
result = await agent.run(state)
tracer.export_to_file("execution.json")
\`\`\`

### Logging

Both Rust and Python emit structured logs:
\`\`\`
[INFO] Graph execution started
[DEBUG] Node 'greet' starting
[DEBUG] Node 'greet' completed with state: {...}
[DEBUG] Reducer Append merging messages
[INFO] Graph execution completed
\`\`\`

## Best Practices

1. **Minimize node blocking** - Use async I/O, not std::fs or requests
2. **Balance parallelism** - More branches = more memory usage
3. **Set reasonable timeouts** - Prevent hanging nodes
4. **Monitor token usage** - Token counts affect cost
5. **Use checkpointing for long-running** - Resume interrupted workflows gracefully
`;

  return (
    <DocLayout 
      title="Runtime & Execution Model"
      description="Understand how Flowgentra executes graphs, manages state, and handles async operations."
      content={content}
    />
  );
};

export default Runtime;
