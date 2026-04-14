# Documentation Structure Guide

## Overview

The Flowgentra documentation is organized to help developers find information quickly, whether they're:
- **Getting started** - Onboarding new users
- **Building features** - Understanding specific modules
- **Going deep** - API reference and advanced topics

## Directory Organization

### `/pages/` - React Components

Each page is a self-contained React component using the `DocLayout` wrapper for consistent styling.

**Core Concepts Pages:**
- `Graphs.jsx` - Graph structure and execution
- `Nodes.jsx` - Node types and patterns
- `StateConcepts.jsx` - State management and reducers
- `Runtime.jsx` - Execution model and async handling

**Guide Pages (Domain-Specific):**
- `AgentsGuide.jsx` - Agent patterns and predefined agents
- `LLMClientGuide.jsx` - LLM integration and providers
- `ToolsGuide.jsx` - Tool registry and function calling
- `MemoryGuide.jsx` - Conversation memory and checkpointing
- `RAGGuide.jsx` - Retrieval-augmented generation
- `DatabaseGuide.jsx` - Database backends and persistence
- `MCPGuide.jsx` - Model Context Protocol integration
- `EvaluationGuide.jsx` - Evaluation and metrics
- `ObservabilityGuide.jsx` - Tracing and monitoring
- `SupervisorGuide.jsx` - Multi-agent orchestration
- `MiddlewareGuide.jsx` - Middleware system
- `PluginsGuide.jsx` - Plugin architecture
- `ValidationGuide.jsx` - Input validation
- `ConfigurationGuide.jsx` - YAML configuration
- `ErrorHandlingGuide.jsx` - Error strategies and recovery

**API Reference Pages:**
- `AgentBuilderGuide.jsx` - Agent builder API
- `TopicPage.jsx` - Dynamic API reference topic pages

**Learning Pages:**
- `Examples.jsx` - Code examples and tutorials
- `BestPractices.jsx` - Production patterns
- `FAQ.jsx` - Frequently asked questions
- `Changelog.jsx` - Release notes

### `/data/` - Navigation & Metadata

**`navigation.js`** - Main navigation structure
- Organized into 7 major sections
- Each section has items with routes and descriptions
- Includes search categories for discovery
- Feature highlights for marketing

**`guides.js`** - Guide organization
- Organized by topic (agents, memory, RAG, etc.)
- Includes difficulty levels and read times
- Links related guides
- Learning paths for guided onboarding

**`api.js`** - API reference entries
- Complete API documentation for core types
- Rust and Python examples for each
- Function signatures and parameters
- Code examples for each API

**`concepts.js`** - Core concepts
- Fundamental ideas underlying Flowgentra
- Organized hierarchically
- Links between related concepts

### `/components/` - Reusable Components

- `DocLayout.jsx` - Consistent markdown rendering
- `CodeBlock.jsx` - Syntax-highlighted code
- `Navbar.jsx` - Navigation and search
- `LanguageSwitcher.jsx` - Rust/Python toggle
- `ApiEntry.jsx` - API reference display

## Navigation Structure

### Hierarchical Organization

```
🚀 Get Started
├─ Installation
├─ Quick Start (Python/Rust)
└─ First Agent

🧠 Core Concepts
├─ State & Reducers
├─ Graphs & Execution
├─ Nodes
└─ Runtime

🛠️ Building Blocks
├─ LLM Integration
├─ Tools & MCP
├─ Memory Systems
├─ RAG Pipeline
└─ Evaluation

🤖 Agent Patterns
├─ Predefined Agents
├─ Multi-Agent Systems
├─ Supervision
└─ Custom Agents

🔧 Advanced Features
├─ Plugins
├─ Middleware
├─ Human-in-the-Loop
├─ Advanced Nodes
├─ Observability
├─ Validation
└─ Performance

📚 API Reference
├─ Core APIs
├─ LLM Module
├─ Tools Module
├─ Node Types
├─ Memory Module
├─ Checkpointing
├─ RAG Module
├─ Evaluation Module
├─ Configuration
├─ Multi-Agent
├─ MCP Integration
├─ Database Module
├─ Observability
├─ Middleware System
├─ Plugin System
├─ Error Handling
└─ Utilities

📖 Guides & Tutorials
├─ Code Examples
├─ End-to-End Tutorials
└─ Production Patterns

🆘 Help & Resources
├─ Best Practices
├─ FAQ
├─ Troubleshooting
└─ Changelog
```

## Module-to-Documentation Mapping

### Rust Modules (src/core/)

| Module | Primary Page | API Pages | Guide |
|--------|-------------|-----------|-------|
| `state/` | StateConcepts | derive-state | state-concepts |
| `graph/` | Graphs | state-graph | graphs |
| `node/` | Nodes | function-node, builtin-nodes, advanced-nodes | nodes |
| `runtime/` | Runtime | runtime | runtime |
| `agent/` | AgentsGuide | agents | agents |
| `llm/` | LLMClientGuide | llm-clients, llm-config, messages | llm-client |
| `tools/` | ToolsGuide | tool-registry, tool-node, builtin-tools | tools |
| `mcp/` | MCPGuide | mcp-config, mcp-connection | mcp |
| `memory/` | MemoryGuide | memory-types, conversation-memory, token-buffer | memory |
| `checkpointer/` | MemoryGuide | checkpointer, file-checkpointer, async-checkpointers | checkpointing |
| `rag/` | RAGGuide | rag-config, rag-eval, vector-store | rag |
| `evaluation/` | EvaluationGuide | eval-config, evaluation, metrics | evaluation |
| `db/` | DatabaseGuide | databases, sql-db, doc-store | database |
| `middleware/` | MiddlewareGuide | middleware, middleware-builtins | middleware |
| `plugins/` | PluginsGuide | plugins | plugins |
| `observability/` | ObservabilityGuide | observability, visualization | observability |
| `validation/` | ValidationGuide | validation | validation |
| `supervisor/` | SupervisorGuide | supervisor, routing | supervisor |
| `error/` | ErrorHandlingGuide | errors | error-handling |
| `utils/` | None | utils, channels | None |

### Python Modules (flowgentra_ai/)

| Module | Primary Page | API Pages | Guide |
|--------|-------------|-----------|-------|
| `graph/` | Graphs | state-graph | graphs |
| `agent/` | AgentsGuide | agent-builder, agents | agents |
| `llm/` | LLMClientGuide | llm-clients, llm-config, messages | llm-client |
| `tools/` | ToolsGuide | tool-registry, tool-node | tools |
| `mcp/` | MCPGuide | mcp-config | mcp |
| `memory/` | MemoryGuide | memory-types, conversation-memory, token-buffer | memory |
| `db/` | DatabaseGuide | databases, sql-db, doc-store | database |
| `evaluation/` | EvaluationGuide | evaluation, metrics | evaluation |
| `observability/` | ObservabilityGuide | observability | observability |
| `rag/` | RAGGuide | rag-config, vector-store | rag |
| `document_loaders/` | DocumentLoadersGuide | document-loaders | document-loaders |
| `rerankers/` | RerankingGuide | rerankers | reranking |
| `supervision/` | SupervisorGuide | supervisor, routing | supervisor |

## Adding New Documentation

### Step 1: Create Page Component

```jsx
// pages/MyNewGuide.jsx
import React from 'react';
import DocLayout from '../components/DocLayout';

const MyNewGuide = () => {
  const content = `# My Topic

## Content here...
`;

  return (
    <DocLayout 
      title="My Topic"
      description="Description..."
      content={content}
    />
  );
};

export default MyNewGuide;
```

### Step 2: Add Route

In `App.jsx`:
```jsx
import MyNewGuide from './pages/MyNewGuide'

// Inside Routes:
<Route path="/docs/my-new-guide" element={<MyNewGuide />} />
```

### Step 3: Update Navigation

In `data/navigation.js`:
```jsx
{
  id: 'my-section',
  title: '📚 My Section',
  items: [
    { label: 'My Guide', route: '/docs/my-new-guide', description: 'Description' },
  ]
}
```

### Step 4: Add to Guides Data (Optional)

In `data/guides.js` for indexed access:
```jsx
'my-category': {
  category: 'My Category',
  guides: [
    {
      id: 'my-guide',
      title: 'My Guide',
      difficulty: 'beginner',
      readTime: '10 min',
      description: 'Description',
      file: 'my-guide.md',
    }
  ]
}
```

## Search & Discovery

### Search Categories

Organized by feature area in `navigation.js`:
- Core Concepts
- Agents
- LLM & AI
- Tools & MCP
- Node Types
- Memory & Persistence
- Data & RAG
- Evaluation & Metrics
- Database
- Observability
- Advanced Features
- Configuration
- Error Handling
- Utilities

### Learning Paths

Guided sequences for different user types:
- **Beginner - Get Started with Python** (2-3 hours)
- **Intermediate - Build a Production Agent** (4-6 hours)
- **Advanced - Multi-Agent Systems** (6-8 hours)

## Best Practices for Docs

1. **Keep pages focused** - One topic per page
2. **Show examples** - Both Rust and Python
3. **Link related content** - Help readers discover connections
4. **Use consistent formatting** - Follow DocLayout structure
5. **Include code snippets** - Real, runnable examples
6. **Document edge cases** - Common pitfalls and solutions
7. **Update with code** - Docs and code change together
8. **Test examples** - Verify code actually works

## Next Steps for Docs

- [ ] Create all ~40 API reference pages
- [ ] Add comprehensive code examples
- [ ] Create video tutorials
- [ ] Add interactive demo editor
- [ ] Implement full-text search
- [ ] Add feedback/rating system
- [ ] Create dark mode support
- [ ] Generate Rust docs from rustdoc comments
- [ ] Generate Python docs from docstrings
