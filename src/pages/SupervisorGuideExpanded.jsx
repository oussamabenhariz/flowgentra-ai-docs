import React from 'react';
import DocLayout from '../components/DocLayout';

const SupervisorGuide = () => {
  const content = `# Supervisor & Multi-Agent Routing

## Overview

The Supervisor pattern orchestrates teams of specialized agents. Route requests to the best agent for each task, with optional fallbacks and load balancing.

## Architecture

\`\`\`
Request
  ↓
  Supervisor (LLM-powered routing)
  ├─→ Research Agent
  ├─→ Coding Agent  
  ├─→ Writing Agent
  ├─→ ... (N agents)
  ↓
Result Aggregation
\`\`\`

## Creating a Supervisor

### Python

\`\`\`python
from flowgentra_ai.supervision import Supervisor, RoutingStrategy
from flowgentra_ai.agent import Agent

# Create specialized agents
research_agent = Agent.from_config("research.yaml")
coding_agent = Agent.from_config("coding.yaml")
writing_agent = Agent.from_config("writing.yaml")

agent_map = {
    "research": research_agent,
    "coding": coding_agent,
    "writing": writing_agent,
}

routing_prompt = """You are a task router. Given a request, return ONE of:
research, coding, writing

Examples:
- "Find info on quantum computing" → research
- "Fix this Python code" → coding  
- "Write an article" → writing
"""

supervisor = Supervisor(
    agents=agent_map,
    router_prompt=routing_prompt,
    strategy=RoutingStrategy.LLMBased,  # Uses LLM to route
)

result = await supervisor.run({"task": "Find quantum computing papers"})
print(result["response"])  # Research agent's response
\`\`\`

### Rust

\`\`\`rust
use flowgentra_ai::prelude::*;
use flowgentra_ai::core::supervisor::{Supervisor, RoutingStrategy};
use std::collections::HashMap;

let mut agents = HashMap::new();
agents.insert("research", research_agent);
agents.insert("coding", coding_agent);
agents.insert("writing", writing_agent);

let supervisor = Supervisor::builder()
    .with_agents(agents)
    .with_router_prompt(router_prompt)
    .with_strategy(RoutingStrategy::LLMBased)
    .build()?;

let result = supervisor.run(json!({
    "task": "Find quantum computing papers"
})).await?;
\`\`\`

## Routing Strategies

### 1. LLM-Based Routing (Default)

LLM decides which agent handles the task:

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    strategy=RoutingStrategy.LLMBased,
    router_prompt="You are a task router..."
)
\`\`\`

**Pros:** Intelligent, handles novel tasks
**Cons:** Slower (LLM inference), higher cost

### 2. Rule-Based Routing

Deterministic rules for routing:

\`\`\`python
rules = {
    "py" in task.lower(): "coding",
    "article" in task.lower(): "writing",
    "find" in task.lower() or "search" in task.lower(): "research",
}

supervisor = Supervisor(
    agents=agent_map,
    strategy=RoutingStrategy.RuleBased,
    rules=rules,
)
\`\`\`

**Pros:** Fast, predictable
**Cons:** Rigid, needs manual rules

### 3. Semantic Routing

Use embeddings to find similar tasks:

\`\`\`python
from flowgentra_ai.rag import Embeddings

supervisor = Supervisor(
    agents=agent_map,
    strategy=RoutingStrategy.Semantic,
    embeddings=Embeddings.huggingface(...),
    # Routes to agent with most-similar description
)
\`\`\`

**Pros:** Flexible, learns from examples
**Cons:** Requires training data

## Handling Multiple Agents

### Sequential Routing

Use output of one agent as input to next:

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    strategy=RoutingStrategy.Chain,  # Chain agents
    chain_order=["research", "writing", "coding"],
)

result = await supervisor.run(state)
# Research → findings → Writing → draft → Coding → code
\`\`\`

### Parallel Processing

Run multiple agents and aggregate results:

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    strategy=RoutingStrategy.Parallel,
    aggregator="consensus",  # majority vote
)

result = await supervisor.run(state)
# All agents run simultaneously → aggregate responses
\`\`\`

## Error Handling & Fallbacks

### Fallback Agents

If primary agent fails, try fallback:

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    fallback_agents={
        "research": "writing",  # If research fails, use writing
        "coding": "research",
    },
)
\`\`\`

### Per-Agent Timeouts

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    agent_timeouts={
        "research": 30,  # 30 seconds
        "coding": 60,    # 60 seconds
        "writing": 45,   # 45 seconds
    },
)
\`\`\`

### Retry Logic

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    retry_on_error=True,
    max_retries=2,
    backoff_factor=2.0,  # exponential backoff
)
\`\`\`

## Load Balancing

Distribute requests across multiple instances of the same agent:

\`\`\`python
agent_instances = []
for i in range(3):
    agent_instances.append(Agent.from_config(f"research_agent_{i}.yaml"))

supervisor = Supervisor(
    agents={"research": agent_instances},
    strategy=RoutingStrategy.LoadBalanced,
    load_balancer="round_robin",  # or "least_busy"
)
\`\`\`

## Monitoring & Observability

### Track Routing Decisions

\`\`\`python
supervisor = Supervisor(
    agents=agent_map,
    track_routing=True,
)

result = await supervisor.run(state)
print(result.metadata["routing_path"])
# ↓ Output:  
# {
#   "initial_task": "...",
#   "router_decision": "research",
#   "confidence": 0.92,
#   "latency_ms": 250,
# }
\`\`\`

### Visualize Routing Decisions

\`\`\`python
from flowgentra_ai.observability import visualize_routing

visualize_routing(supervisor, sample_tasks=[...], output="routing_graph.html")
\`\`\`

## Advanced Patterns

### Dynamic Agent Pool

Add/remove agents at runtime:

\`\`\`python
# Start with base agents
supervisor = Supervisor(agents=base_agents)

# Later, add new agent
new_agent = Agent.from_config("specialized_agent.yaml")
await supervisor.add_agent("specialized", new_agent)

# Remove if not needed
await supervisor.remove_agent("specialized")
\`\`\`

### Custom Routing Logic

Implement custom router:

\`\`\`python
class CustomRouter:
    async def route(self, task: str, agents: dict) -> str:
        # Your custom routing logic
        return "agent_name"

supervisor = Supervisor(
    agents=agent_map,
    router=CustomRouter(),
)
\`\`\`

### Agent Composition

Agents can themselves be supervisors (nested):

\`\`\`python
# Inner supervisor for research
research_supervisor = Supervisor({
    "academic": academic_agent,
    "news": news_agent,
})

# Outer supervisor
outer = Supervisor({
    "research": research_supervisor,
    "coding": coding_agent,
})
\`\`\`

## Best Practices

1. **Keep agent count low** - 3-5 for best performance
2. **Clear agent specialization** - Each agent has distinct role
3. **Test routing rules** - Ensure correct agent is chosen
4. **Monitor costs** - Multiple LLM calls add up
5. **Regular rebalancing** - Update routing if workload changes
6. **Cache routing decisions** - For similar queries, reuse decision

## Example: Research Team

\`\`\`python
# Specialized research agents
academic_agent = Agent.from_config("academic_search.yaml")
news_agent = Agent.from_config("news_search.yaml")
twitter_agent = Agent.from_config("twitter_search.yaml")

research_supervisor = Supervisor(
    agents={
        "academic": academic_agent,
        "news": news_agent,
        "twitter": twitter_agent,
    },
    router_prompt="""Route to:
- academic: scholarly papers, peer-reviewed research
- news: breaking news, current events
- twitter: trending topics, social sentiment
""",
)

# Usage
result = await research_supervisor.run({
    "task": "What's trending in AI today?"
})
\`\`\`
`;

  return (
    <DocLayout 
      title="Supervisor & Multi-Agent Routing"
      description="Orchestrate teams of specialized agents with intelligent routing."
      content={content}
    />
  );
};

export default SupervisorGuide;
