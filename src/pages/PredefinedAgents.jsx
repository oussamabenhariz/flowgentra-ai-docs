import React from 'react';
import DocLayout from '../components/DocLayout';

const PredefinedAgents = () => {
  const content = `# Predefined Agents

## Overview

Flowgentra provides ready-to-use agent templates for common patterns. Use these as starting points instead of building from scratch.

## Available Agents

### 1. ZeroShotReAct

General-purpose reasoning agent. Best for diverse tasks.

**Python:**
\`\`\`python
from flowgentra_ai.agent import ZeroShotReAct

agent = ZeroShotReAct.create(
    tools=tool_registry,
    llm_config=llm_config,
)

result = await agent.run({"input": "What is 5 + 3?"})
print(result["output"])  # Uses chain-of-thought reasoning
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::prelude::*;
use flowgentra_ai::core::agents::ZeroShotReAct;

let agent = ZeroShotReAct::builder()
    .with_tools(tools)
    .with_llm(llm_config)
    .build()?;

let result = agent.run().await?;
\`\`\`

**Characteristics:**
- Chain-of-thought reasoning
- Tool use for calculations/searches
- Flexible for any task type
- Good for complex multi-step problems

### 2. FewShotReAct

Learns from examples to improve performance.

**Python:**
\`\`\`python
from flowgentra_ai.agent import FewShotReAct

few_shot_examples = [
    {
        "question": "What is 2 + 2?",
        "thought": "I need to add 2 and 2",
        "action": "calculator(2, 2)",
        "observation": "4",
        "answer": "4"
    },
]

agent = FewShotReAct.create(
    tools=tool_registry,
    llm_config=llm_config,
    examples=few_shot_examples,
)

result = await agent.run({"input": "What is 5 + 3?"})
\`\`\`

**Characteristics:**
- Learn from provided examples
- Better performance on specific domains
- Example-based prompt engineering
- Good for specialized tasks

### 3. Conversational

Multi-turn agent with memory. Perfect for chatbots.

**Python:**
\`\`\`python
from flowgentra_ai.agent import Conversational
from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory()

agent = Conversational.create(
    llm_config=llm_config,
    memory=memory,
    system_prompt="You are a helpful assistant.",
)

# Turn 1
result1 = await agent.run({"input": "My name is Alice"})

# Turn 2 - agent remembers
result2 = await agent.run({"input": "What was my name?"})
print(result2["output"])  # "Your name was Alice."
\`\`\`

**Characteristics:**
- Maintains conversation history
- Personalized responses
- Stateful across turns
- Great for customer support

### 4. RetrievalQA

Question-answering over documents. Built on RAG.

**Python:**
\`\`\`python
from flowgentra_ai.agent import RetrievalQA
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings

embeddings = Embeddings.huggingface("sentence-transformers/all-MiniLM-L6-v2")
vector_store = InMemoryVectorStore(embeddings)

# Add documents
vector_store.add_documents([
    {"id": "1", "text": "Einstein discovered relativity"},
    {"id": "2", "text": "Newton developed gravity laws"},
])

agent = RetrievalQA.create(
    vector_store=vector_store,
    llm_config=llm_config,
)

result = await agent.run({"input": "What did Einstein discover?"})
print(result["output"])  # Grounded in documents
\`\`\`

**Characteristics:**
- Document-based Q&A
- Retrieval + generation
- Grounded responses
- Perfect for knowledge bases

### 5. Plan-and-Execute

Breaks down complex problems into steps.

**Python:**
\`\`\`python
from flowgentra_ai.agent import PlanAndExecute

agent = PlanAndExecute.create(
    tools=tool_registry,
    llm_config=llm_config,
)

result = await agent.run({
    "input": "Find a machine learning dataset, describe it, and create a visualization plan"
})
# Step 1: Make a plan
# Step 2: Execute each step
# Step 3: Aggregate results
\`\`\`

**Characteristics:**
- Multi-step planning
- Decomposition into subgoals
- Better for complex tasks
- Transparent reasoning

### 6. Supervisor

Orchestrates multiple specialized agents.

**Python:**
\`\`\`python
from flowgentra_ai.agents import Supervisor

research_agent = ...
coding_agent = ...
writing_agent = ...

supervisor = Supervisor({
    "research": research_agent,
    "coding": coding_agent,
    "writing": writing_agent,
})

result = await supervisor.run({"task": "Find a paper and write code"})
# Supervisor routes to appropriate agent(s)
\`\`\`

**See:** [Supervisor & Multi-Agent Routing](/docs/supervisor)

## Comparison

| Agent | Best For | Complexity | Cost |
|-------|----------|-----------|------|
| ZeroShotReAct | General tasks | Medium | Medium |
| FewShotReAct | Domain-specific | Medium | Medium |
| Conversational | Multi-turn chat | Low | Low |
| RetrievalQA | Document Q&A | High | High* |
| Plan-and-Execute | Complex reasoning | High | High |
| Supervisor | Multi-task | High | Variable |

*Higher due to embedding computations

## Customization

### Modifying System Prompt

\`\`\`python
agent = ZeroShotReAct.create(
    tools=tools,
    llm_config=llm_config,
    system_prompt="""You are an expert financial analyst.
Always consider market trends and risk factors.
Be conservative with recommendations."""
)
\`\`\`

### Adding Custom Tools

\`\`\`python
from flowgentra_ai.tools import ToolRegistry

tools = ToolRegistry()
tools.register("python_exec", python_repl)
tools.register("web_search", web_search_tool)
tools.register("calculator", calculator)

agent = ZeroShotReAct.create(
    tools=tools,
    llm_config=llm_config,
)
\`\`\`

### Changing the LLM Model

\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

# Switch to Anthropic Claude
llm_config = LLMConfig(
    provider=LLMProvider.Anthropic,
    model="claude-and-opus-4-1",
    temperature=0.7,
)

agent = agent.with_llm(llm_config)
\`\`\`

## Performance Tips

1. **Use faster models for simple tasks**
   - Use GPT-3.5-turbo for basic tasks
   - Reserve GPT-4 for complex reasoning

2. **Add examples for FewShotReAct**
   - 2-5 examples usually sufficient
   - Pick diverse, representative examples

3. **Limit tool count**
   - 5-10 tools max for best performance
   - More tools = slower agent, higher cost

4. **Cache embeddings**
   - Pre-compute embeddings for documents
   - Don't recompute on every query

5. **Use streaming**
   - Stream responses as they're generated
   - Better UX for long outputs

## When to Build Custom Agents

Custom agents are needed when:
- No predefined agent matches your use case
- You need specialized logic/behavior
- Performance requirements are strict
- You have domain-specific patterns

See: [Building Custom Agents](/docs/guides/custom-agents)
`;

  return (
    <DocLayout 
      title="Predefined Agents"
      description="Ready-to-use agent templates for common patterns."
      content={content}
    />
  );
};

export default PredefinedAgents;
