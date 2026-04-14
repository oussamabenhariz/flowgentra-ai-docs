/**
 * Guides & How-To's
 * Organized by topic and difficulty level
 */

export const guidesData = {
  'core-concepts': {
    category: 'Core Concepts',
    icon: '🧠',
    description: 'Understand the foundation of Flowgentra',
    guides: [
      {
        id: 'what-is-flowgentra',
        title: 'What is Flowgentra?',
        difficulty: 'beginner',
        readTime: '5 min',
        description: 'Introduction to Flowgentra AI and its core philosophy',
        file: 'what-is-flowgentra.md',
      },
      {
        id: 'state-concepts',
        title: 'State Management & Reducers',
        difficulty: 'beginner',
        readTime: '10 min',
        description: 'Learn about typed state, reducers, and concurrent updates',
        file: 'state.md',
        related: ['graphs', 'nodes'],
      },
      {
        id: 'graphs',
        title: 'Graphs & Node Execution',
        difficulty: 'beginner',
        readTime: '8 min',
        description: 'How graphs connect nodes and execute workflows',
        file: 'graphs.md',
        related: ['nodes', 'state-concepts'],
      },
      {
        id: 'nodes',
        title: 'What are Nodes?',
        difficulty: 'beginner',
        readTime: '7 min',
        description: 'Understanding node types and execution models',
        file: 'nodes.md',
        related: ['graphs', 'advanced-nodes'],
      },
    ]
  },

  'getting-started': {
    category: 'Getting Started',
    icon: '🚀',
    description: 'Quick setup and first steps',
    guides: [
      {
        id: 'installation',
        title: 'Installation',
        difficulty: 'beginner',
        readTime: '5 min',
        description: 'Install Flowgentra for Rust and Python',
        file: 'getting-started/installation.md',
      },
      {
        id: 'quickstart-python',
        title: 'Quick Start - Python',
        difficulty: 'beginner',
        readTime: '10 min',
        description: 'Build your first agent in Python in 10 minutes',
        file: 'getting-started/quickstart.md',
      },
      {
        id: 'quickstart-rust',
        title: 'Quick Start - Rust',
        difficulty: 'beginner',
        readTime: '10 min',
        description: 'Build your first agent in Rust in 10 minutes',
        file: 'getting-started/quickstart-rust.md',
      },
      {
        id: 'first-agent',
        title: 'Build Your First Agent',
        difficulty: 'beginner',
        readTime: '15 min',
        description: 'Step-by-step guide to creating a functional agent',
        file: 'first-agent.md',
        related: ['quickstart-python', 'agents'],
      },
    ]
  },

  'llm-integration': {
    category: 'LLM Integration',
    icon: '🧠',
    description: 'Connect and work with language models',
    guides: [
      {
        id: 'llm-client',
        title: 'LLM Client Guide',
        difficulty: 'intermediate',
        readTime: '15 min',
        description: 'Configure and use LLM clients for 7 different providers',
        file: 'llm-client.md',
        related: ['configuration'],
      },
      {
        id: 'llm-providers',
        title: 'Supported LLM Providers',
        difficulty: 'beginner',
        readTime: '8 min',
        description: 'Complete list of supported providers with config examples',
        file: 'llm-providers.md',
        related: ['llm-client'],
      },
      {
        id: 'prompting',
        title: 'Effective Prompting',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Best practices for prompt engineering with Flowgentra',
        file: 'prompting.md',
        related: ['best-practices'],
      },
      {
        id: 'token-counting',
        title: 'Token Counting & Cost Tracking',
        difficulty: 'intermediate',
        readTime: '8 min',
        description: 'Monitor token usage and estimate costs',
        file: 'token-counting.md',
        related: ['observability'],
      },
    ]
  },

  'agents': {
    category: 'Agents',
    icon: '🤖',
    description: 'Build and orchestrate agents',
    guides: [
      {
        id: 'agents',
        title: 'Agent Patterns',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Different agent architectures and patterns (ReAct, etc.)',
        file: 'agents.md',
        related: ['supervisor', 'tools'],
      },
      {
        id: 'custom-agents',
        title: 'Building Custom Agents',
        difficulty: 'advanced',
        readTime: '20 min',
        description: 'Create agents with custom logic and workflows',
        file: 'custom-agents.md',
        related: ['advanced-nodes', 'graphs'],
      },
      {
        id: 'supervisor',
        title: 'Multi-Agent Orchestration (Supervisor)',
        difficulty: 'advanced',
        readTime: '18 min',
        description: 'Coordinate multiple agents with different strategies',
        file: 'supervisor.md',
        related: ['agents'],
      },
      {
        id: 'multi-agent',
        title: 'Multi-Agent Patterns',
        difficulty: 'advanced',
        readTime: '15 min',
        description: 'Advanced patterns for multi-agent systems',
        file: 'multi-agent.md',
        related: ['supervisor', 'advanced-nodes'],
      },
    ]
  },

  'tools-capabilities': {
    category: 'Tools & Capabilities',
    icon: '🛠️',
    description: 'Give agents tools and abilities',
    guides: [
      {
        id: 'tools',
        title: 'Tools & Function Calling',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Register and use tools with agents',
        file: 'tools.md',
        related: ['mcp', 'tool-registry'],
      },
      {
        id: 'mcp',
        title: 'Model Context Protocol (MCP)',
        difficulty: 'intermediate',
        readTime: '15 min',
        description: 'Integrate external services via MCP',
        file: 'mcp.md',
        related: ['tools', 'configuration'],
      },
      {
        id: 'builtin-tools',
        title: 'Built-in Tools',
        difficulty: 'beginner',
        readTime: '8 min',
        description: 'Calculator, file operations, web requests, and more',
        file: 'builtin-tools.md',
        related: ['tools'],
      },
    ]
  },

  'memory-state': {
    category: 'Memory & State',
    icon: '💾',
    description: 'Manage conversation history and state persistence',
    guides: [
      {
        id: 'memory',
        title: 'Memory Systems',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Conversation memory, checkpointing, and state persistence',
        file: 'memory.md',
        related: ['conversation-memory', 'state-concepts'],
      },
      {
        id: 'conversation-memory',
        title: 'Conversation Memory',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Store and manage conversation history',
        file: 'conversation-memory.md',
        related: ['memory'],
      },
      {
        id: 'checkpointing',
        title: 'Checkpointing & Resumption',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Save and resume workflow execution',
        file: 'checkpointing.md',
        related: ['memory', 'human-in-the-loop'],
      },
    ]
  },

  'rag-data': {
    category: 'RAG & Data',
    icon: '📚',
    description: 'Build retrieval-augmented generation systems',
    guides: [
      {
        id: 'rag',
        title: 'RAG Pipeline',
        difficulty: 'intermediate',
        readTime: '18 min',
        description: 'Complete guide to retrieval-augmented generation',
        file: 'rag.md',
        related: ['document-loaders', 'embedding', 'reranking'],
      },
      {
        id: 'document-loaders',
        title: 'Document Loaders',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Load and process documents from various formats',
        file: 'document-loaders.md',
        related: ['rag', 'text-splitters'],
      },
      {
        id: 'text-splitters',
        title: 'Text Splitting & Chunking',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Smart techniques for splitting documents into chunks',
        file: 'text-splitters.md',
        related: ['rag', 'document-loaders'],
      },
      {
        id: 'embedding',
        title: 'Embedding & Vector Stores',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Create and store embeddings for semantic search',
        file: 'embedding.md',
        related: ['rag'],
      },
      {
        id: 'reranking',
        title: 'Reranking & Search Quality',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Improve search results with reranking techniques',
        file: 'reranking.md',
        related: ['rag', 'evaluation'],
      },
    ]
  },

  'advanced-features': {
    category: 'Advanced Features',
    icon: '🔧',
    description: 'Production and customization features',
    guides: [
      {
        id: 'plugins',
        title: 'Plugins System',
        difficulty: 'advanced',
        readTime: '15 min',
        description: 'Extend Flowgentra with custom plugins',
        file: 'plugins.md',
        related: ['middleware'],
      },
      {
        id: 'middleware',
        title: 'Middleware',
        difficulty: 'advanced',
        readTime: '12 min',
        description: 'Request/response interceptors and cross-cutting concerns',
        file: 'middleware.md',
        related: ['plugins'],
      },
      {
        id: 'advanced-nodes',
        title: 'Advanced Nodes',
        difficulty: 'advanced',
        readTime: '15 min',
        description: 'Retry, timeout, parallelization, and conditional logic',
        file: 'advanced-nodes.md',
        related: ['graphs', 'nodes'],
      },
      {
        id: 'human-in-the-loop',
        title: 'Human-in-the-Loop',
        difficulty: 'advanced',
        readTime: '12 min',
        description: 'Approval workflows and human feedback integration',
        file: 'human-in-the-loop.md',
        related: ['checkpointing'],
      },
    ]
  },

  'evaluation': {
    category: 'Evaluation & Quality',
    icon: '📊',
    description: 'Measure and improve output quality',
    guides: [
      {
        id: 'evaluation',
        title: 'Evaluation Framework',
        difficulty: 'intermediate',
        readTime: '18 min',
        description: 'Scoring, grading, and quality assessment',
        file: 'evaluation.md',
        related: ['best-practices'],
      },
      {
        id: 'metrics',
        title: 'Evaluation Metrics',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Hit rate, MRR, NDCG, and custom metrics',
        file: 'metrics.md',
        related: ['evaluation'],
      },
    ]
  },

  'observability-monitoring': {
    category: 'Observability & Monitoring',
    icon: '📈',
    description: 'Monitor, trace, and debug agents',
    guides: [
      {
        id: 'observability',
        title: 'Observability & Tracing',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Structured logging, tracing, and visualization',
        file: 'observability.md',
        related: ['debugging'],
      },
      {
        id: 'debugging',
        title: 'Debugging & Troubleshooting',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Common issues and debugging techniques',
        file: 'debugging.md',
        related: ['observability'],
      },
    ]
  },

  'configuration': {
    category: 'Configuration',
    icon: '⚙️',
    description: 'Configure agents and workflows',
    guides: [
      {
        id: 'configuration',
        title: 'YAML Configuration Guide',
        difficulty: 'intermediate',
        readTime: '15 min',
        description: 'Complete guide to configuring agents in YAML',
        file: 'configuration.md',
        related: ['handlers-registration'],
      },
      {
        id: 'handlers-registration',
        title: 'Handler Registration',
        difficulty: 'intermediate',
        readTime: '10 min',
        description: 'Register and wire handlers with auto-discovery',
        file: 'handlers-registration.md',
        related: ['configuration'],
      },
      {
        id: 'environment-variables',
        title: 'Environment Variables',
        difficulty: 'beginner',
        readTime: '5 min',
        description: 'Using environment variables in config',
        file: 'environment-variables.md',
        related: ['configuration'],
      },
    ]
  },

  'examples': {
    category: 'Examples & Tutorials',
    icon: '📖',
    description: 'Learning by example',
    guides: [
      {
        id: 'chatbot-example',
        title: 'Build a Chatbot',
        difficulty: 'beginner',
        readTime: '15 min',
        description: 'Complete example of a conversational chatbot',
        file: 'examples/chatbot.md',
        related: ['agents', 'memory'],
      },
      {
        id: 'multi-agent-example',
        title: 'Multi-Agent Research System',
        difficulty: 'intermediate',
        readTime: '20 min',
        description: 'Build a research agent with web search and analysis',
        file: 'examples/multi-agent.md',
        related: ['supervisor', 'tools', 'rag'],
      },
      {
        id: 'rag-agent-example',
        title: 'RAG-Based Q&A Bot',
        difficulty: 'intermediate',
        readTime: '18 min',
        description: 'Document-based question answering system',
        file: 'examples/rag-agent.md',
        related: ['rag', 'document-loaders', 'evaluation'],
      },
    ]
  },

  'best-practices': {
    category: 'Best Practices',
    icon: '✨',
    description: 'Production-ready patterns',
    guides: [
      {
        id: 'best-practices',
        title: 'Best Practices',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Guidelines for production-ready agents',
        file: 'best-practices.md',
        related: ['observability', 'evaluation'],
      },
      {
        id: 'performance',
        title: 'Performance Optimization',
        difficulty: 'advanced',
        readTime: '15 min',
        description: 'Tips for optimizing agent performance',
        file: 'performance.md',
        related: ['observability'],
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        difficulty: 'intermediate',
        readTime: '12 min',
        description: 'Robust error handling strategies',
        file: 'error-handling.md',
        related: ['debugging'],
      },
    ]
  },

  'help': {
    category: 'Help & Support',
    icon: '🆘',
    description: 'FAQ and troubleshooting',
    guides: [
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        difficulty: 'beginner',
        readTime: '8 min',
        description: 'Answers to common questions',
        file: 'faq.md',
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting Guide',
        difficulty: 'beginner',
        readTime: '10 min',
        description: 'Common issues and solutions',
        file: 'troubleshooting.md',
        related: ['debugging', 'faq'],
      },
      {
        id: 'migration',
        title: 'Migration from LangChain',
        difficulty: 'intermediate',
        readTime: '15 min',
        description: 'Guide for migrating from LangChain to Flowgentra',
        file: 'migration.md',
        related: ['best-practices'],
      },
    ]
  },
}

/**
 * Get all guides flattened for search
 */
export function getAllGuides() {
  const allGuides = [];
  Object.values(guidesData).forEach(category => {
    category.guides.forEach(guide => {
      allGuides.push({
        ...guide,
        category: category.category,
        categoryId: category.category.toLowerCase().replace(/\s+/g, '-'),
      });
    });
  });
  return allGuides;
}

/**
 * Get guides by difficulty level
 */
export function getGuidesByDifficulty(difficulty) {
  return getAllGuides().filter(g => g.difficulty === difficulty);
}

/**
 * Get related guides
 */
export function getRelatedGuides(guideId) {
  const allGuides = getAllGuides();
  const guide = allGuides.find(g => g.id === guideId);
  if (!guide || !guide.related) return [];
  return allGuides.filter(g => guide.related.includes(g.id));
}

/**
 * Learning paths - guided journeys through documentation
 */
export const learningPaths = [
  {
    title: 'Beginner - Get Started with Python',
    icon: '🐍',
    duration: '2-3 hours',
    description: 'Perfect for new users starting with Python',
    steps: [
      { title: 'What is Flowgentra?', id: 'what-is-flowgentra' },
      { title: 'Installation', id: 'installation' },
      { title: 'Quick Start - Python', id: 'quickstart-python' },
      { title: 'Build Your First Agent', id: 'first-agent' },
      { title: 'State Management', id: 'state-concepts' },
      { title: 'Agent Patterns', id: 'agents' },
      { title: 'Tools & Function Calling', id: 'tools' },
      { title: 'Memory Systems', id: 'memory' },
    ]
  },
  {
    title: 'Intermediate - Build a Production Agent',
    icon: '🏗️',
    duration: '4-6 hours',
    description: 'Build a scalable agent with memory and tools',
    steps: [
      { title: 'Graphs & Execution', id: 'graphs' },
      { title: 'Advanced Nodes', id: 'advanced-nodes' },
      { title: 'LLM Integration', id: 'llm-client' },
      { title: 'Memory & Checkpointing', id: 'memory' },
      { title: 'Configuration Guide', id: 'configuration' },
      { title: 'Evaluation Framework', id: 'evaluation' },
      { title: 'Observability', id: 'observability' },
      { title: 'Best Practices', id: 'best-practices' },
    ]
  },
  {
    title: 'Advanced - RAG & Multi-Agent',
    icon: '🚀',
    duration: '6-8 hours',
    description: 'Master RAG systems and multi-agent coordination',
    steps: [
      { title: 'RAG Pipeline', id: 'rag' },
      { title: 'Document Loaders', id: 'document-loaders' },
      { title: 'Text Splitting', id: 'text-splitters' },
      { title: 'Reranking', id: 'reranking' },
      { title: 'Multi-Agent Orchestration', id: 'supervisor' },
      { title: 'Human-in-the-Loop', id: 'human-in-the-loop' },
      { title: 'Plugins System', id: 'plugins' },
      { title: 'Performance Optimization', id: 'performance' },
    ]
  },
  {
    title: 'Master - Full Stack',
    icon: '👑',
    duration: '10+ hours',
    description: 'Complete mastery of Flowgentra',
    progressive: true,
    steps: [
      { title: 'Core Concepts', id: 'what-is-flowgentra' },
      { title: 'Fundamentals', id: 'installation' },
      { title: 'Build & Deploy', id: 'agents' },
      { title: 'Scale & Optimize', id: 'supervisor' },
      { title: 'Monitor & Improve', id: 'observability' },
    ]
  },
]
