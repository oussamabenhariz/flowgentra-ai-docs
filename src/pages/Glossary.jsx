import DocLayout from '../components/DocLayout'
import Alert from '../components/Alert'

const glossaryTerms = [
  {
    term: 'Agent',
    definition: 'A compiled, ready-to-run workflow. An agent is a StateGraph that has been compiled and can process input through its defined workflow.',
    example: 'compiled_agent = graph.compile()',
  },
  {
    term: 'Checkpointing',
    definition: 'Persisting the state of a workflow to durable storage between node executions. Enables resumability after failures or human review.',
    example: 'Checkpoint after node execution for recovery',
  },
  {
    term: 'Conditional Edge',
    definition: 'A dynamic edge in a graph that is determined at runtime by a router function based on current state.',
    example: 'builder.add_conditional_edges("node", router_func)',
  },
  {
    term: 'Edge',
    definition: 'A directed connection between two nodes in a graph. Edges define the execution order and flow of control.',
    example: 'graph.add_edge("node_a", "node_b")',
  },
  {
    term: 'Graph',
    definition: 'A directed acyclic graph (DAG) of nodes and edges. The core abstraction in Flowgentra for modeling agent workflows.',
    example: 'StateGraph(AgentState)',
  },
  {
    term: 'Node',
    definition: 'A single step or function in a graph. Nodes receive state as input and return modified state as output.',
    example: 'async def my_node(state: AgentState) -> AgentState: ...',
  },
  {
    term: 'Reducer',
    definition: 'A function that controls how concurrent state updates are merged. Ensures consistent state merging strategy.',
    example: 'def merge_messages(left, right) -> list: return left + right',
  },
  {
    term: 'Routing',
    definition: 'The process of determining which node executes next based on current state. Can be fixed or conditional.',
    example: 'Conditional routing based on state.action value',
  },
  {
    term: 'State',
    definition: 'Strongly-typed data that flows through a graph. Every node reads from and writes to the graph state.',
    example: 'class AgentState(TypedDict): query: str; response: str',
  },
  {
    term: 'StateGraph',
    definition: 'The core API for building workflows. A builder pattern for constructing graphs with nodes and edges.',
    example: 'builder = StateGraph(YourStateType)',
  },
  {
    term: 'Workflow',
    definition: 'A complete AI agent application combining graph, LLM, tools, memory, and evaluation into a functional system.',
    example: 'Customer support agent with RAG + tools',
  },
  {
    term: 'Stream / Streaming',
    definition: 'Incrementally receiving output from a running workflow instead of waiting for complete execution.',
    example: 'for chunk in agent.stream(input): print(chunk)',
  },
  {
    term: 'Tool',
    definition: 'An external function or API that an agent can invoke. Tools extend agent capabilities beyond pure LLM reasoning.',
    example: 'Web search tool, database query tool, API calls',
  },
  {
    term: 'Tool Registry',
    definition: 'A typed collection of tools that an agent can invoke. Manages tool registration, discovery, and invocation.',
    example: 'registry.add_function(name, func, description)',
  },
  {
    term: 'Memory',
    definition: 'Persistent storage of conversation history and agent state across multiple invocations.',
    example: 'ConversationMemory stores message history',
  },
  {
    term: 'Conversation History',
    definition: 'The sequence of messages in a conversation, typically stored in memory for context in multi-turn interactions.',
    example: 'Messages with roles: user, assistant, system',
  },
  {
    term: 'Parallel Nodes',
    definition: 'Multiple nodes that execute concurrently in a graph. Results are merged using reducers.',
    example: 'Multiple branches that merge into next node',
  },
  {
    term: 'Subgraph',
    definition: 'A graph nested within another graph, allowing composition and reuse of workflow patterns.',
    example: 'Include a RAG graph as a subgraph in main agent',
  },
  {
    term: 'LLM Provider',
    definition: 'An external service providing language model capabilities. Flowgentra supports 7+ providers.',
    example: 'OpenAI, Anthropic, Mistral, Groq, etc.',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition: 'A pattern combining document retrieval with LLM generation to ground responses in provided documents.',
    example: 'Retrieve relevant docs, then generate answer',
  },
  {
    term: 'Evaluation',
    definition: 'Measuring the quality of agent outputs using metrics, scoring functions, or LLM-based grading.',
    example: 'Accuracy score, semantic similarity, LLM grader',
  },
  {
    term: 'Middleware',
    definition: 'Request/response interceptors that run before/after node execution for cross-cutting concerns.',
    example: 'Logging, auth, rate-limiting, instrumentation',
  },
  {
    term: 'Plugin',
    definition: 'An extension mechanism for adding custom behavior to the Flowgentra framework.',
    example: 'Custom node types, metrics collection, event hooks',
  },
  {
    term: 'Human-in-the-Loop',
    definition: 'A pattern where workflows pause for human review/approval before continuing execution.',
    example: 'Approve sensitive actions, review summaries',
  },
  {
    term: 'Observability',
    definition: 'Ability to see and understand what is happening in a running workflow through logs, traces, and metrics.',
    example: 'OpenTelemetry tracing, structured logging',
  },
  {
    term: 'Retry Logic',
    definition: 'Automatically retrying failed node executions with configurable backoff strategies.',
    example: 'Exponential backoff for transient failures',
  },
  {
    term: 'Timeout',
    definition: 'Maximum duration a node can execute before it is terminated.',
    example: 'Prevent infinite loops, set timeout limit',
  },
  {
    term: 'Validation',
    definition: 'Ensuring input state conforms to expected types and constraints before processing.',
    example: 'Schema validation, type checking, constraints',
  },
  {
    term: 'Configuration',
    definition: 'Settings for customizing graph execution, typically using YAML or environment variables.',
    example: 'YAML config for LLM, tools, memory backends',
  },
  {
    term: 'Stream Token Count',
    definition: 'Tracking the number of tokens produced during streaming to monitor API costs.',
    example: 'Count tokens per chunk for cost estimation',
  },
  {
    term: 'Compiled Graph',
    definition: 'Result of calling compile() on a StateGraph builder. A ready-to-run agent.',
    example: 'agent = graph.compile()',
  },
]

export default function Glossary() {
  const anchors = [
    { id: 'overview', label: 'Overview' },
    { id: 'all-terms', label: 'All Terms' },
  ]

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>
        Glossary
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 32, lineHeight: 1.7, fontSize: '1.0625rem' }}>
        Key terminology used throughout Flowgentra documentation. Use this as a reference when you encounter unfamiliar terms.
      </p>

      <section id="overview">
        <Alert type="tip" title="How to Use This Glossary">
          <ul style={{ margin: '0 0 0 20px', paddingLeft: 0 }}>
            <li>Terms are organized alphabetically</li>
            <li>Each term includes a clear definition</li>
            <li>Most definitions include practical examples</li>
            <li>Highlighted terms link to relevant documentation</li>
          </ul>
        </Alert>
      </section>

      <section id="all-terms" style={{ marginTop: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {glossaryTerms.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0d1117',
                border: '1px solid #21262d',
                borderRadius: 8,
                padding: '20px',
              }}
            >
              <div style={{ 
                fontSize: '1.1rem', 
                fontWeight: 600, 
                color: '#3a86ff',
                marginBottom: 8,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {item.term}
              </div>
              <p style={{ color: '#e6edf3', margin: '0 0 12px 0', lineHeight: 1.6 }}>
                {item.definition}
              </p>
              {item.example && (
                <div style={{
                  background: '#161b22',
                  border: '1px solid #21262d',
                  borderRadius: 4,
                  padding: '8px 12px',
                  fontSize: '0.875rem',
                  color: '#8b949e',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginTop: 8,
                }}>
                  <span style={{ color: '#52b788', fontWeight: 500 }}>Example:</span> {item.example}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid #21262d' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16 }}>
          Not seeing a term?
        </h2>
        <p style={{ color: '#8b949e', lineHeight: 1.7 }}>
          If you encounter a term not in this glossary, please{' '}
          <a 
            href="https://github.com/oussamabenhariz/flowgentra-ai/" 
            style={{ color: '#3a86ff', textDecoration: 'none' }}
          >
            open an issue
          </a>
          {' '}on GitHub to request we add it.
        </p>
      </section>
    </DocLayout>
  )
}
