/**
 * Navigation Structure
 * Organized by major feature areas with comprehensive coverage of all modules
 * Matches Rust src/core/ and Python modules structure
 */

export const navigationStructure = [
  {
    id: 'getting-started',
    title: '🚀 Get Started',
    icon: 'rocket',
    description: 'Start building in 5 minutes',
    items: [
      { id: 'overview', label: 'What is Flowgentra?', route: '/docs/what-is-flowgentra', section: 'core-concepts' },
      { id: 'installation', label: 'Installation', route: '/docs/installation', section: 'getting-started' },
      { id: 'quickstart', label: 'Quick Start', description: 'Choose your language', submenu: [
        { label: 'Python', route: '/docs/quickstart-python' },
        { label: 'Rust', route: '/docs/quickstart-rust' },
      ]},
      { id: 'first-agent', label: 'Build Your First Agent', route: '/docs/first-agent', section: 'tutorials' },
    ]
  },

  {
    id: 'core-concepts',
    title: '🧠 Core Concepts',
    icon: 'lightbulb',
    description: 'Understand the foundations',
    items: [
      { id: 'state-management', label: 'State & Reducers', route: '/docs/state-concepts', section: 'core-concepts' },
      { id: 'graphs-execution', label: 'Graphs & Node Execution', route: '/docs/graphs', section: 'core-concepts' },
      { id: 'nodes', label: 'What are Nodes?', route: '/docs/nodes', section: 'core-concepts' },
      { id: 'runtime', label: 'Runtime & Execution', route: '/docs/runtime', section: 'core-concepts' },
      { id: 'configuration', label: 'Configuration & YAML', route: '/docs/configuration', section: 'guides' },
    ]
  },

  {
    id: 'building-blocks',
    title: '🛠️ Building Blocks',
    icon: 'tool',
    description: 'Essential components',
    items: [
      { id: 'llm-integration', label: 'LLM Integration', route: '/docs/llm-client', description: 'OpenAI, Anthropic, Mistral & more' },
      { id: 'llm-providers', label: 'LLM Providers', route: '/docs/llm-providers', description: '7 providers with examples' },
      { id: 'tools-mcp', label: 'Tools & MCP', route: '/docs/tools', description: 'Give agents capabilities' },
      { id: 'memory', label: 'Memory Systems', route: '/docs/memory', description: 'Conversation history & state' },
      { id: 'rag', label: 'RAG Pipeline', route: '/docs/rag', description: 'Retrieval-Augmented Generation' },
      { id: 'evaluation', label: 'Evaluation & Scoring', route: '/docs/evaluation', description: 'Measure output quality' },
    ]
  },

  {
    id: 'agent-patterns',
    title: '🤖 Agent Patterns',
    icon: 'robot',
    description: 'Ready-to-use agent templates',
    items: [
      { id: 'basic-agents', label: 'Predefined Agents', route: '/docs/predefined-agents', description: 'ZeroShotReAct, FewShotReAct, Conversational, ToolCalling, StructuredChat, SelfAskWithSearch, ReactDocstore' },
      { id: 'multi-agent', label: 'Multi-Agent Systems', route: '/docs/supervisor', description: 'Orchestrate teams of agents' },
      { id: 'supervision', label: 'Supervision & Planning', route: '/docs/multi-agent', description: 'Coordination strategies' },
      { id: 'custom-agents', label: 'Custom Agent Types', route: '/docs/custom-agents', section: 'guides' },
    ]
  },

  {
    id: 'advanced-features',
    title: '🔧 Advanced Features',
    icon: 'settings',
    description: 'Production & customization',
    items: [
      { id: 'plugins', label: 'Plugins System', route: '/docs/plugins', description: 'Extend & customize' },
      { id: 'middleware', label: 'Middleware', route: '/docs/middleware', description: 'Request/response interceptors' },
      { id: 'human-loop', label: 'Human-in-the-Loop', route: '/docs/human-in-the-loop', description: 'Approval workflows' },
      { id: 'advanced-nodes', label: 'Advanced Nodes', route: '/docs/advanced-nodes', description: 'Retry, timeout, parallelization' },
      { id: 'observability', label: 'Observability', route: '/docs/observability', description: 'Tracing & metrics' },
      { id: 'validation', label: 'Input Validation', route: '/docs/validation', description: 'Ensure data quality' },
      { id: 'performance', label: 'Performance Optimization', route: '/docs/performance', section: 'guides' },
    ]
  },

  {
    id: 'api-reference',
    title: '📚 API Reference',
    icon: 'book',
    description: 'Complete API documentation for all modules',
    items: [
      { id: 'core-api', label: 'Core APIs', submenu: [
        { label: 'StateGraph', route: '/docs/api/state-graph', section: 'api' },
        { label: 'State & Reducers', route: '/docs/api/derive-state', section: 'api' },
        { label: 'Agent Builder', route: '/docs/api/agent-builder', section: 'api' },
        { label: 'Agents', route: '/docs/api/agents', section: 'api' },
      ]},
      { id: 'llm-api', label: 'LLM Module', submenu: [
        { label: 'LLMs', route: '/docs/api/llm-clients', section: 'api' },
        { label: 'Message Types', route: '/docs/api/messages', section: 'api' },
        { label: 'LLM Provider Config', route: '/docs/api/llm-config', section: 'api' },
      ]},
      { id: 'tools-api', label: 'Tools Module', submenu: [
        { label: 'Tool Registry', route: '/docs/api/tool-registry', section: 'api' },
        { label: 'Tool Node', route: '/docs/api/tool-node', section: 'api' },
        { label: 'Built-in Tools', route: '/docs/api/builtin-tools', section: 'api' },
      ]},
      { id: 'nodes-api', label: 'Node Types', submenu: [
        { label: 'Function Node', route: '/docs/api/function-node', section: 'api' },
        { label: 'Built-in Nodes', route: '/docs/api/builtin-nodes', section: 'api' },
        { label: 'Advanced Nodes', route: '/docs/api/advanced-nodes', section: 'api' },
        { label: 'Planner Node', route: '/docs/api/planner-node', section: 'api' },
        { label: 'Evaluation Node', route: '/docs/api/eval-node', section: 'api' },
      ]},
      { id: 'memory-api', label: 'Memory Module', submenu: [
        { label: 'Memory Interfaces', route: '/docs/api/memory-types', section: 'api' },
        { label: 'Conversation Memory', route: '/docs/api/conversation-memory', section: 'api' },
        { label: 'Token Buffer Memory', route: '/docs/api/token-buffer', section: 'api' },
        { label: 'Memory-Aware Agent', route: '/docs/api/memory-aware-agent', section: 'api' },
      ]},
      { id: 'checkpoint-api', label: 'Checkpointing', submenu: [
        { label: 'Checkpointer Interface', route: '/docs/api/checkpointer', section: 'api' },
        { label: 'File Checkpointer', route: '/docs/api/file-checkpointer', section: 'api' },
        { label: 'Async Checkpointers', route: '/docs/api/async-checkpointers', section: 'api' },
      ]},
      { id: 'rag-api', label: 'RAG Module', submenu: [
        { label: 'RAG Config', route: '/docs/api/rag-config', section: 'api' },
        { label: 'RAG Evaluator', route: '/docs/api/rag-eval', section: 'api' },
        { label: 'Vector Store', route: '/docs/api/vector-store', section: 'api' },
        { label: 'Document Loaders', route: '/docs/api/document-loaders', section: 'api' },
        { label: 'Text Splitters', route: '/docs/api/text-splitters', section: 'api' },
        { label: 'Rerankers', route: '/docs/api/rerankers', section: 'api' },
      ]},
      { id: 'evaluation-api', label: 'Evaluation Module', submenu: [
        { label: 'Evaluation Config', route: '/docs/api/eval-config', section: 'api' },
        { label: 'Evaluation Framework', route: '/docs/api/evaluation', section: 'api' },
        { label: 'Metrics', route: '/docs/api/metrics', section: 'api' },
      ]},
      { id: 'config-api', label: 'Configuration', submenu: [
        { label: 'YAML Config', route: '/docs/api/yaml-config', section: 'api' },
        { label: 'Config Structure', route: '/docs/api/config-structure', section: 'api' },
        { label: 'Handler Registration', route: '/docs/api/register-handler', section: 'api' },
      ]},
      { id: 'multi-agent-api', label: 'Multi-Agent', submenu: [
        { label: 'Supervisor', route: '/docs/api/supervisor', section: 'api' },
        { label: 'Agent Router', route: '/docs/api/agent-router', section: 'api' },
        { label: 'Routing Strategies', route: '/docs/api/routing', section: 'api' },
      ]},
      { id: 'mcp-api', label: 'MCP Integration', submenu: [
        { label: 'MCP Client Config', route: '/docs/api/mcp-config', section: 'api' },
        { label: 'MCP Connection Types', route: '/docs/api/mcp-connection', section: 'api' },
      ]},
      { id: 'database-api', label: 'Database Module', submenu: [
        { label: 'Database Backends', route: '/docs/api/databases', section: 'api' },
        { label: 'SQL Database', route: '/docs/api/sql-db', section: 'api' },
        { label: 'Document Store', route: '/docs/api/doc-store', section: 'api' },
      ]},
      { id: 'observability-api', label: 'Observability Module', submenu: [
        { label: 'Tracer & Visualization', route: '/docs/api/observability', section: 'api' },
        { label: 'Graph Visualization', route: '/docs/api/visualization', section: 'api' },
      ]},
      { id: 'middleware-api', label: 'Middleware System', submenu: [
        { label: 'Middleware Interface', route: '/docs/api/middleware', section: 'api' },
        { label: 'Built-in Middleware', route: '/docs/api/middleware-builtins', section: 'api' },
      ]},
      { id: 'plugins-api', label: 'Plugin System', submenu: [
        { label: 'Plugin Registry', route: '/docs/api/plugins', section: 'api' },
      ]},
      { id: 'error-api', label: 'Error Handling', submenu: [
        { label: 'Error Types', route: '/docs/api/errors', section: 'api' },
      ]},
      { id: 'utils-api', label: 'Utilities', submenu: [
        { label: 'Utility Functions', route: '/docs/api/utils', section: 'api' },
        { label: 'Channels', route: '/docs/api/channels', section: 'api' },
      ]},
    ]
  },

  {
    id: 'guides',
    title: '📖 Guides & Tutorials',
    icon: 'book-open',
    description: 'In-depth guides and patterns',
    items: [
      { id: 'examples', label: 'Code Examples', route: '/docs/examples', description: 'Copy-paste ready code' },
      { id: 'tutorials', label: 'End-to-End Tutorials', submenu: [
        { label: '🔬 Research Assistant', route: '/docs/tutorials/research-assistant' },
        { label: 'Build a Chatbot', route: '/docs/tutorials/chatbot', section: 'tutorials' },
        { label: 'Multi-Agent Research', route: '/docs/tutorials/multi-agent', section: 'tutorials' },
        { label: 'RAG Agent', route: '/docs/tutorials/rag-agent', section: 'tutorials' },
      ]},
      { id: 'patterns', label: 'Production Patterns', submenu: [
        { label: 'Graph Patterns', route: '/docs/guides/graph-patterns', section: 'guides' },
        { label: 'Scaling Agents', route: '/docs/guides/scaling', section: 'guides' },
        { label: 'Error Handling Patterns', route: '/docs/guides/error-patterns', section: 'guides' },
      ]},
    ]
  },

  {
    id: 'help',
    title: '🆘 Help & Resources',
    icon: 'question',
    description: 'Troubleshooting & community',
    items: [
      { id: 'best-practices', label: 'Best Practices', route: '/docs/best-practices' },
      { id: 'faq', label: 'FAQ', route: '/docs/faq' },
      { id: 'troubleshooting', label: 'Troubleshooting Guide', route: '/docs/troubleshooting', section: 'guides' },
      { id: 'changelog', label: 'Changelog', route: '/docs/changelog' },
      { id: 'contributing', label: 'Contributing Guide', route: '/docs/contributing', section: 'guides' },
    ]
  },
]

/**
 * Search/Filter categories for discovery
 * Matches all modules and features in the codebase
 */
export const searchCategories = [
  { id: 'core', label: 'Core Concepts', items: ['state-graph', 'graphs', 'nodes', 'state', 'runtime', 'derive-state', 'agent-builder'] },
  { id: 'agents', label: 'Agents', items: ['agents', 'supervisor', 'predefined-agents', 'multi-agent', 'agent-router', 'routing'] },
  { id: 'llm', label: 'LLM & AI', items: ['llm-clients', 'llm-config', 'llm-providers', 'messages', 'prompting'] },
  { id: 'tools', label: 'Tools & MCP', items: ['tool-registry', 'tool-node', 'builtin-tools', 'mcp-config', 'mcp-connection'] },
  { id: 'nodes', label: 'Node Types', items: ['function-node', 'builtin-nodes', 'advanced-nodes', 'planner-node', 'eval-node'] },
  { id: 'memory', label: 'Memory & Persistence', items: ['memory-types', 'conversation-memory', 'token-buffer', 'memory-aware-agent', 'checkpointer', 'file-checkpointer', 'async-checkpointers'] },
  { id: 'data', label: 'Data & RAG', items: ['rag-config', 'rag-eval', 'vector-store', 'document-loaders', 'text-splitters', 'rerankers'] },
  { id: 'evaluation', label: 'Evaluation & Metrics', items: ['eval-config', 'evaluation', 'metrics', 'rag-eval'] },
  { id: 'database', label: 'Database', items: ['databases', 'sql-db', 'doc-store'] },
  { id: 'observability', label: 'Observability', items: ['observability', 'visualization', 'tracing', 'metrics'] },
  { id: 'advanced', label: 'Advanced Features', items: ['plugins', 'middleware', 'middleware-builtins', 'advanced-nodes', 'human-in-the-loop', 'validation'] },
  { id: 'config', label: 'Configuration', items: ['yaml-config', 'config-structure', 'register-handler'] },
  { id: 'errors', label: 'Error Handling', items: ['errors', 'error-patterns'] },
  { id: 'utils', label: 'Utilities', items: ['utils', 'channels'] },
]

/**
 * Feature highlights for homepage and marketing
 */
export const featureHighlights = [
  {
    title: 'Type-Safe State Management',
    description: 'Compile-time checked state types with automatic reducer generation',
    icon: '🛡️',
    docs: '/docs/state-concepts',
    tags: ['rust', 'python', 'safety']
  },
  {
    title: '7 LLM Providers',
    description: 'OpenAI, Anthropic, Mistral, Groq, Ollama, HuggingFace, Azure',
    icon: '🧠',
    docs: '/docs/llm-client',
    tags: ['integration', 'flexible']
  },
  {
    title: 'Built-in RAG Pipeline',
    description: 'Embed, retrieve, and rerank without external dependencies',
    icon: '📚',
    docs: '/docs/rag',
    tags: ['rag', 'production-ready']
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Supervise teams of agents with flexible coordination strategies',
    icon: '🤖',
    docs: '/docs/supervisor',
    tags: ['multi-agent', 'orchestration']
  },
  {
    title: 'Human-in-the-Loop',
    description: 'Pause for approval, collect feedback, and resume workflows',
    icon: '👥',
    docs: '/docs/human-in-the-loop',
    tags: ['interaction', 'safety']
  },
  {
    title: 'YAML-First Configuration',
    description: 'Define entire agents in YAML with auto-handler discovery',
    icon: '⚙️',
    docs: '/docs/configuration',
    tags: ['config', 'zero-code']
  },
  {
    title: 'Persistent Memory',
    description: 'Multi-turn conversations with checkpointing and conversation history',
    icon: '💾',
    docs: '/docs/memory',
    tags: ['memory', 'persistence']
  },
  {
    title: 'Production Observability',
    description: 'Tracing, metrics, visualization, and execution profiling',
    icon: '📊',
    docs: '/docs/observability',
    tags: ['monitoring', 'debugging']
  },
]

/**
 * Quick navigation by use case
 */
export const useCaseNavigation = [
  {
    title: 'Building a Chatbot',
    description: 'Multi-turn conversation with memory',
    guides: ['/docs/quickstart-python', '/docs/agents', '/docs/memory'],
    icon: '💬'
  },
  {
    title: 'Research Agent',
    description: 'Multi-agent research with web search',
    guides: ['/docs/supervisor', '/docs/tools', '/docs/rag'],
    icon: '🔬'
  },
  {
    title: 'RAG System',
    description: 'Document retrieval & augmented generation',
    guides: ['/docs/rag', '/docs/document-loaders', '/docs/rerankers'],
    icon: '📚'
  },
  {
    title: 'Workflow Automation',
    description: 'Complex business logic with approval steps',
    guides: ['/docs/graphs', '/docs/human-in-the-loop', '/docs/observability'],
    icon: '⚙️'
  },
  {
    title: 'Production Deployment',
    description: 'Scale with monitoring and error handling',
    guides: ['/docs/best-practices', '/docs/observability', '/docs/advanced-nodes'],
    icon: '🚀'
  },
]
