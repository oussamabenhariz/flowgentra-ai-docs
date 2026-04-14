/**
 * Core Concepts Reference
 * Organized learning materials with visual organization
 */

export const conceptsData = {
  fundamentals: {
    section: 'Fundamentals',
    icon: '🎯',
    description: 'Essential concepts everyone should know',
    concepts: [
      {
        id: 'what-is-flowgentra',
        title: 'What is Flowgentra?',
        shortDesc: 'Overview of Flowgentra AI framework',
        concepts: [
          'Agentic AI framework for Rust & Python',
          'Type-safe state management with reducers',
          'Graph-based workflow execution',
          'Multi-LLM provider support',
          'Production-ready with observability',
        ],
        keyTakeaways: [
          '✅ Type-safe agents from day one',
          '✅ YAML-first configuration',
          '✅ 7 LLM providers built-in',
          '✅ Production observability included',
        ],
        coreVideo: 'https://youtu.be/flowgentra-intro',
      },
      {
        id: 'state-management',
        title: 'State Management',
        shortDesc: 'Typed, concurrent state with automatic reducers',
        keyTakeaways: [
          'Compile-time checked state (Rust)',
          'Automatic partial updates via reducers',
          'Per-field merge strategies',
          'Optional, Append, Sum, Min/Max, Custom reducers',
        ],
        examples: [
          'State grows monotonically (messages: Append)',
          'Token counting accumulates (total_tokens: Sum)',
          'Metadata merges (metadata: MergeMap)',
          'Current step replaces (current_step: default)',
        ],
      },
      {
        id: 'agents',
        title: 'What Are Agents?',
        shortDesc: 'Autonomous systems that perceive, decide, and act',
        keyTakeaways: [
          'Perceive: Process inputs via LLM and tools',
          'Decide: Reason about strategy and next steps',
          'Act: Execute actions (tools, decisions)',
          'Reflect: Learn from outcomes (memory)',
        ],
        agentPatterns: [
          { name: 'ReAct', desc: 'Reason + Act, common baseline' },
          { name: 'Self-Ask', desc: 'Ask clarifying questions first' },
          { name: 'Conversational', desc: 'Multi-turn with memory' },
          { name: 'Supervisor', desc: 'Orchestrate sub-agents' },
        ],
      },
    ]
  },

  architecture: {
    section: 'Architecture & Design',
    icon: '🏗️',
    description: 'Core architectural patterns',
    concepts: [
      {
        id: 'graphs-execution',
        title: 'Graphs & Node Execution',
        shortDesc: 'How workflows are structured and executed',
        keyTakeaways: [
          'DAG (Directed Acyclic Graph) execution model',
          'Nodes are functions/handlers',
          'Edges define control flow',
          'Entry and exit points define start/end',
          'State flows through nodes',
        ],
        examples: [
          'Linear pipeline: A → B → C',
          'Branching: A → {B, C} → D',
          'Loops: A → B → A (if enabled)',
          'Conditional edges: A → (if X) B else C',
        ],
      },
      {
        id: 'nodes',
        title: 'Nodes Deep Dive',
        shortDesc: 'Understanding different node types',
        nodeTypes: [
          { name: 'Handler', desc: 'Custom async function' },
          { name: 'LLMNode', desc: 'LLM invocation' },
          { name: 'ToolNode', desc: 'Tool/function calling' },
          { name: 'BuildIn', desc: 'Retry, Timeout, etc.' },
          { name: 'Supervisor', desc: 'Multi-agent orchestration' },
          { name: 'Subgraph', desc: 'Compose graphs' },
        ],
        keyTakeaways: [
          'Each node receives state',
          'Returns modified state + optional edge name',
          'Can execute in parallel (if no input deps)',
          'Built-in retry, timeout, fallback nodes',
        ],
      },
      {
        id: 'routers-edges',
        title: 'Routing & Edges',
        shortDesc: 'Controlling workflow flow',
        edgeTypes: [
          { name: 'Direct', desc: 'Named edge: "node_a" → "node_b"' },
          { name: 'Conditional', desc: 'Runtime decision via edge condition' },
          { name: 'Dynamic', desc: 'Node returns next node name' },
          { name: 'Parallel', desc: 'Multiple edges from same node' },
        ],
        routing: [
          'Node returns string → route taken',
          'Node returns None → use default edge',
          'END constant → terminates workflow',
          'Conditional(lambda) → runtime branch decision',
        ],
      },
    ]
  },

  configuration: {
    section: 'Configuration & Setup',
    icon: '⚙️',
    description: 'How to configure agents',
    concepts: [
      {
        id: 'yaml-first',
        title: 'YAML-First Configuration',
        shortDesc: 'Define agents entirely in YAML',
        keyTakeaways: [
          'Zero-code agent definition in YAML',
          'Auto-handler discovery via decorators',
          'Environment variable substitution',
          'Composable YAML with imports',
          'Version control friendly',
        ],
        yamlSections: [
          'name, description',
          'llm (provider, model, auth)',
          'graph (nodes, edges, recursion limit)',
          'memory (checkpointer, conversation)',
          'rag (vector store, embeddings)',
          'evaluation (metrics, thresholds)',
          'observability (tracing, metrics)',
          'state_schema (type definitions)',
        ],
      },
      {
        id: 'handlers',
        title: 'Handler Registration',
        shortDesc: 'Auto-discoverable node handlers',
        keyTakeaways: [
          '#[register_handler] macro auto-discovers',
          '@register_handler decorator in Python',
          'No manual wiring needed',
          'Handler name must match YAML config',
          'Supports both DynState and typed state',
        ],
        handlerPattern: [
          'fn name matches handler: name in YAML',
          'Receives DynState (key-value store)',
          'Returns Result<DynState>',
          'Async-friendly',
          'One-liner registration via macro/decorator',
        ],
      },
      {
        id: 'credentials-env',
        title: 'Credentials & Environment',
        shortDesc: 'Managing secrets and configuration',
        keyTakeaways: [
          '${VAR_NAME} substitution in YAML',
          'Never commit secrets to version control',
          '.env file support',
          'Runtime environment variable override',
          'Credential rotation strategies',
        ],
      },
    ]
  },

  capabilities: {
    section: 'Agent Capabilities',
    icon: '💪',
    description: 'What agents can do',
    concepts: [
      {
        id: 'llm-integration',
        title: 'LLM Integration',
        shortDesc: '7 LLM providers with unified interface',
        providers: [
          { name: 'OpenAI', models: 'GPT-4o, GPT-4-turbo, GPT-3.5' },
          { name: 'Anthropic', models: 'Claude 3 family' },
          { name: 'Mistral', models: 'Mistral Large, Medium, Small' },
          { name: 'Groq', models: 'LLaMA 3, Mixtral' },
          { name: 'Ollama', models: 'Any local model' },
          { name: 'HuggingFace', models: 'Any HF model' },
          { name: 'Azure', models: 'Azure OpenAI deployment' },
        ],
        keyFeatures: [
          'Token usage tracking',
          'Cost estimation',
          'Fallback/retry logic',
          'Response caching',
          'Tool/function calling',
          'Structured output (JSON)',
          'Streaming support',
        ],
      },
      {
        id: 'tools-mcp',
        title: 'Tools & MCP',
        shortDesc: 'Give agents capabilities',
        toolTypes: [
          { name: 'Built-in', desc: 'Calculator, file ops, web requests' },
          { name: 'Custom', desc: 'Register any async function' },
          { name: 'MCP', desc: 'Model Context Protocol services' },
          { name: 'Delegated', desc: 'Call other agents' },
        ],
        mcpBenefits: [
          'Claude Desktop tools',
          'Browser functions',
          'Git operations',
          'File system access',
          'API integrations',
          'Database queries',
        ],
      },
      {
        id: 'memory-persistence',
        title: 'Memory & Conversation',
        shortDesc: 'Multi-turn stateful interactions',
        memoryTypes: [
          { name: 'Conversation Memory', desc: 'Message history with window' },
          { name: 'Token Buffer', desc: 'Bounded by token count' },
          { name: 'Summary Memory', desc: 'Compress via LLM summarization' },
          { name: 'Checkpoints', desc: 'Full state snapshots per-thread' },
        ],
        keyTakeaways: [
          'Per-thread state isolation',
          'Automatic checkpoint save/load',
          'Conversation context management',
          'Optional message summarization',
          'Thread-safe concurrent operations',
        ],
      },
      {
        id: 'rag',
        title: 'RAG (Retrieval-Augmented Generation)',
        shortDesc: 'Knowledge grounding with documents',
        components: [
          { name: 'Document Loaders', desc: 'Load PDF, Markdown, HTML, JSON' },
          { name: 'Text Splitters', desc: 'Chunk intelligently by content' },
          { name: 'Embeddings', desc: 'Convert to vectors (OpenAI, Mistral)' },
          { name: 'Vector Store', desc: 'Store & retrieve (Chroma, Pinecone, in-memory)' },
          { name: 'Reranker', desc: 'Improve ranking (RRF, cross-encoder)' },
          { name: 'Retrieval', desc: 'Semantic + hybrid search' },
        ],
        workflow: [
          '1. Load documents from files/APIs',
          '2. Split into chunks',
          '3. Generate embeddings',
          '4. Store in vector DB',
          '5. Query-time: retrieve relevant chunks',
          '6. Pass to LLM as context',
          '7. Optional reranking for precision',
        ],
      },
    ]
  },

  advanced: {
    section: 'Advanced Topics',
    icon: '🚀',
    description: 'Production & customization',
    concepts: [
      {
        id: 'multi-agent',
        title: 'Multi-Agent Systems',
        shortDesc: 'Orchestrating teams of agents',
        patterns: [
          { name: 'Sequential', desc: 'Agents run one after another' },
          { name: 'Parallel', desc: 'All agents run concurrently' },
          { name: 'Hierarchical', desc: 'Supervisor routes to specialists' },
          { name: 'Dynamic', desc: 'LLM decides which agent to call' },
        ],
        use_cases: [
          'Research: Search → Analyze → Summarize',
          'Code gen: Architect → Implement → Review',
          'Content: Write → Edit → Publish',
          'Support: Triage → Route → Escalate',
        ],
      },
      {
        id: 'observability',
        title: 'Observability & Monitoring',
        shortDesc: 'See what your agents are doing',
        aspects: [
          { name: 'Tracing', desc: 'Track execution flow per node' },
          { name: 'Metrics', desc: 'Performance & resource usage' },
          { name: 'Logging', desc: 'Structured logs for debugging' },
          { name: 'Visualization', desc: 'Graph diagrams and flows' },
          { name: 'Profiling', desc: 'Identify bottlenecks' },
        ],
        outputs: [
          'Mermaid diagrams',
          'JSON traces',
          'Performance reports',
          'Error analysis',
          'Token usage tracking',
        ],
      },
      {
        id: 'human-in-loop',
        title: 'Human-in-the-Loop',
        shortDesc: 'Break for human feedback',
        patterns: [
          'Approval nodes for sensitive operations',
          'Collect human feedback for refinement',
          'Resume from checkpoints',
          'Edit state before resuming',
          'Multi-turn user interaction',
        ],
        use_cases: [
          'Financial decisions requiring approval',
          'Content review before publishing',
          'Clarification when uncertain',
          'Feedback loops for learning',
          'Escalation for complex issues',
        ],
      },
      {
        id: 'plugins-middleware',
        title: 'Plugins & Middleware',
        shortDesc: 'Extend and customize',
        plugins: [
          'Custom node types',
          'New vector stores',
          'Custom embeddings',
          'New LLM providers',
          'Analytics integrations',
        ],
        middleware: [
          'Pre-execution hooks',
          'Post-execution hooks',
          'State validation',
          'Audit logging',
          'Rate limiting',
          'Error recovery',
        ],
      },
    ]
  },
}

/**
 * Quick reference: Common patterns and recipes
 */
export const patterns = {
  basic: [
    {
      name: 'Simple Workflow',
      description: 'Linear sequence of steps',
      nodes: ['A', 'B', 'C'],
      edges: [['A', 'B'], ['B', 'C']],
      languages: ['python', 'rust'],
    },
    {
      name: 'Branching',
      description: 'Split into multiple paths',
      nodes: ['Decide', 'PathA', 'PathB', 'Merge'],
      edges: [['Decide', 'PathA'], ['Decide', 'PathB'], ['PathA', 'Merge'], ['PathB', 'Merge']],
    },
    {
      name: 'Tool Use',
      description: 'Agent with function calling',
      nodes: ['Decide', 'ExecuteTool', 'Process'],
      toolIntegration: true,
    },
  ],

  production: [
    {
      name: 'Retry Pattern',
      description: 'Auto-retry with backoff',
      retry: true,
      maxRetries: 3,
      backoff: 'exponential',
    },
    {
      name: 'Timeout Protection',
      description: 'Fail fast on slow operations',
      timeout: 30000,
      fallback: 'skip_or_error',
    },
    {
      name: 'Fallback Pattern',
      description: 'Try primary, fail to backup',
      primary: 'HighCostLLM',
      fallback: 'CheaperLLM',
    },
  ],

  advanced: [
    {
      name: 'RAG Agent',
      description: 'Retrieve docs, then generate',
      components: ['Retrieve', 'LLM', 'Memory'],
    },
    {
      name: 'Multi-Agent Research',
      description: 'Parallel specialists + synthesis',
      components: ['Search', 'Analyze', 'Synthesize'],
      parallel: ['Search', 'Analyze'],
    },
    {
      name: 'Self-Refining',
      description: 'Generate, evaluate, regenerate',
      components: ['Generate', 'Evaluate', 'Loop'],
      loop: true,
    },
  ],
}

/**
 * Feature matrix: What you can do with Flowgentra
 */
export const featureMatrix = [
  { feature: 'Type-safe state', rust: true, python: true, difficulty: 'medium' },
  { feature: 'Graphs & DAGs', rust: true, python: true, difficulty: 'easy' },
  { feature: 'LLM integration', rust: true, python: true, difficulty: 'easy' },
  { feature: 'Tool calling', rust: true, python: true, difficulty: 'easy' },
  { feature: 'RAG pipeline', rust: true, python: true, difficulty: 'medium' },
  { feature: 'Multi-agent', rust: true, python: true, difficulty: 'hard' },
  { feature: 'Memory/checkpointing', rust: true, python: true, difficulty: 'medium' },
  { feature: 'Human-in-loop', rust: true, python: true, difficulty: 'medium' },
  { feature: 'Observability', rust: true, python: true, difficulty: 'medium' },
  { feature: 'Plugins system', rust: true, python: false, difficulty: 'hard' },
  { feature: 'MCP integration', rust: true, python: true, difficulty: 'medium' },
  { feature: 'YAML config', rust: true, python: true, difficulty: 'easy' },
]
