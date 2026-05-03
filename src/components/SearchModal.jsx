import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// All searchable pages — title, route, description, tags
const SEARCH_INDEX = [
  // Get Started
  { title: 'Introduction',                route: '/docs/getting-started',    desc: 'What is Flowgentra? Overview and core concepts.',                    tags: ['overview', 'intro', 'start'] },
  { title: 'Quick Start — Python',        route: '/docs/quickstart-python',  desc: 'Build your first agent in Python in under 10 minutes.',             tags: ['python', 'install', 'start', 'beginner'] },
  { title: 'Quick Start — Rust',          route: '/docs/quickstart-rust',    desc: 'Build your first agent in Rust using StateGraph.',                  tags: ['rust', 'install', 'start', 'beginner'] },
  { title: 'Installation',               route: '/docs/installation',       desc: 'pip install, Cargo.toml, feature flags, building from source.',     tags: ['install', 'pip', 'cargo', 'setup'] },

  // Core Concepts
  { title: 'What is Flowgentra?',        route: '/docs/what-is-flowgentra', desc: 'Philosophy, key abstractions, comparison to LangGraph.',            tags: ['overview', 'langgraph', 'compare'] },
  { title: 'State & Reducers',           route: '/docs/state-concepts',     desc: 'TypedDict, DynState, reducers, Append, Sum, Overwrite.',            tags: ['state', 'reducer', 'typeddict', 'dynstate'] },
  { title: 'Graphs & Execution',         route: '/docs/graphs',             desc: 'Building graphs, conditional edges, loops, stream, batch.',         tags: ['graph', 'edge', 'node', 'conditional', 'routing'] },
  { title: 'Nodes',                      route: '/docs/nodes',              desc: 'Node types, FunctionNode, RetryNode, TimeoutNode, parallel.',       tags: ['node', 'function', 'retry', 'timeout', 'parallel'] },
  { title: 'Runtime & Execution',        route: '/docs/runtime',            desc: 'How Flowgentra executes graphs, async runtime, concurrency.',       tags: ['runtime', 'async', 'execution', 'tokio'] },

  // Building Blocks
  { title: 'LLM Integration',            route: '/docs/llm-client',         desc: 'LLM class, all providers, chat(), tool calling, streaming.',        tags: ['llm', 'openai', 'anthropic', 'ollama', 'groq', 'chat'] },
  { title: 'LLM Providers',             route: '/docs/llm-providers',      desc: 'OpenAI, Anthropic, Ollama, Groq, Mistral, Azure, HuggingFace.',    tags: ['provider', 'openai', 'anthropic', 'azure', 'ollama'] },
  { title: 'Tools & MCP',               route: '/docs/tools',              desc: 'ToolDefinition, ToolRegistry, built-in tools, function calling.',   tags: ['tool', 'function', 'calling', 'registry', 'mcp'] },
  { title: 'Memory Management',         route: '/docs/memory',             desc: 'ConversationMemory, FileCheckpointer, multi-turn sessions.',        tags: ['memory', 'checkpointer', 'conversation', 'thread', 'session'] },
  { title: 'RAG Pipeline',              route: '/docs/rag',                desc: 'Document loading, embeddings, vector stores, retrieval.',           tags: ['rag', 'vector', 'embeddings', 'retrieval', 'search'] },
  { title: 'Evaluation & Scoring',      route: '/docs/evaluation',         desc: 'hit_rate, mrr, ndcg, output scoring, grading.',                    tags: ['eval', 'metric', 'score', 'hit_rate', 'mrr'] },
  { title: 'Document Loaders',          route: '/docs/document-loaders',   desc: 'PDF, CSV, HTML, Markdown, JSON, S3, web loaders.',                 tags: ['loader', 'pdf', 'csv', 'html', 'markdown', 'document'] },
  { title: 'Reranking',                 route: '/docs/reranking',          desc: 'CrossEncoder, RRF reranker, improving retrieval quality.',          tags: ['rerank', 'cross-encoder', 'rrf', 'retrieval'] },

  // Agent Patterns
  { title: 'Building Agents',           route: '/docs/agents',             desc: 'Predefined agents, config-driven agents, MemoryAwareAgent.',        tags: ['agent', 'react', 'conversational', 'tool'] },
  { title: 'Predefined Agents',         route: '/docs/predefined-agents',  desc: 'ZeroShotReAct, FewShotReAct, ToolCalling, Conversational.',        tags: ['react', 'zeroshotreact', 'fewshot', 'conversational'] },
  { title: 'Multi-Agent Supervisor',    route: '/docs/supervisor',         desc: 'Supervisor, Sequential, Parallel, LLM-routed orchestration.',      tags: ['supervisor', 'multi-agent', 'orchestration', 'parallel'] },
  { title: 'Human-in-the-Loop',        route: '/docs/human-in-the-loop',  desc: 'Interrupt graph execution, await approval, resume.',               tags: ['human', 'approval', 'interrupt', 'hitl'] },

  // Advanced
  { title: 'Advanced Nodes',            route: '/docs/advanced-nodes',     desc: 'ParallelNode, JoinNode, SubgraphNode, LoopNode patterns.',          tags: ['parallel', 'join', 'subgraph', 'loop', 'advanced'] },
  { title: 'Observability & Tracing',   route: '/docs/observability',      desc: 'ExecutionTracer, Mermaid export, token usage, quality scoring.',   tags: ['trace', 'mermaid', 'token', 'cost', 'debug', 'visualization'] },
  { title: 'Configuration & YAML',      route: '/docs/configuration',      desc: 'YAML-driven agents, register_handler, from_config_path.',          tags: ['yaml', 'config', 'register', 'handler', 'production'] },
  { title: 'Error Handling',            route: '/docs/error-handling',     desc: 'RetryNode, TimeoutNode, fallback chains, circuit breaker.',        tags: ['error', 'retry', 'timeout', 'fallback', 'resilience'] },
  { title: 'MCP Integration',           route: '/docs/mcp',                desc: 'Model Context Protocol client, HTTP and stdio connections.',       tags: ['mcp', 'model-context-protocol', 'tool', 'integration'] },
  { title: 'Plugins System',            route: '/docs/plugins',            desc: 'Extend Flowgentra, custom node types, plugin registry.',           tags: ['plugin', 'extend', 'custom', 'registry'] },
  { title: 'Middleware',                route: '/docs/middleware',         desc: 'Request/response interceptors, logging, auth, transformation.',    tags: ['middleware', 'interceptor', 'logging', 'auth'] },
  { title: 'Input Validation',          route: '/docs/validation',         desc: 'Validate state fields, schema enforcement, sanitize inputs.',      tags: ['validation', 'schema', 'input', 'sanitize'] },
  { title: 'Performance Optimization',  route: '/docs/performance',        desc: 'Batching, caching, parallel nodes, cost reduction strategies.',   tags: ['performance', 'cache', 'batch', 'speed', 'cost'] },
  { title: 'Database Integration',      route: '/docs/database',           desc: 'SQLite, Postgres, MongoDB, document stores.',                      tags: ['database', 'sqlite', 'postgres', 'mongo', 'sql'] },

  // API Reference
  { title: 'StateGraph API',            route: '/docs/api/state-graph',    desc: 'StateGraph, builder, add_node, add_edge, compile, invoke.',        tags: ['api', 'stategraph', 'graph', 'builder'] },
  { title: 'LLM API',                   route: '/docs/api/llm-clients',    desc: 'LLM class, LLMConfig, Message, ToolDefinition, TokenUsage.',       tags: ['api', 'llm', 'llmconfig', 'message'] },
  { title: 'Agents API',                route: '/docs/api/agents',         desc: 'Agent, AgentBuilder, AgentType, from_config_path.',                tags: ['api', 'agent', 'agentbuilder'] },
  { title: 'Memory API',                route: '/docs/api/memory-types',   desc: 'ConversationMemory, FileCheckpointer, AsyncSqliteCheckpointer.',   tags: ['api', 'memory', 'checkpointer'] },
  { title: 'RAG API',                   route: '/docs/api/rag-config',     desc: 'InMemoryVectorStore, Embeddings, RecursiveCharacterTextSplitter.',  tags: ['api', 'rag', 'vector', 'embeddings'] },
  { title: 'Supervisor API',            route: '/docs/api/supervisor',     desc: 'Supervisor, OrchestrationStrategy, agent routing.',                tags: ['api', 'supervisor', 'multi-agent'] },
  { title: 'Observability API',         route: '/docs/api/observability',  desc: 'ExecutionTracer, graph_to_mermaid, evaluate_output_score.',       tags: ['api', 'tracer', 'mermaid', 'score'] },

  // Tutorials
  { title: 'Tutorial: Research Assistant', route: '/docs/tutorials/research-assistant', desc: 'Full end-to-end guide: classification, tools, memory, traces.', tags: ['tutorial', 'guide', 'e2e', 'end-to-end', 'research'] },

  // Resources
  { title: 'Code Examples',             route: '/docs/examples',           desc: 'Copy-paste examples: agents, RAG, streaming, multi-agent.',        tags: ['example', 'code', 'snippet'] },
  { title: 'Best Practices',            route: '/docs/best-practices',     desc: 'Production tips: state design, error handling, cost control.',     tags: ['best-practice', 'production', 'tip'] },
  { title: 'Glossary',                  route: '/docs/glossary',           desc: 'Definitions: StateGraph, Node, Reducer, Checkpointer, etc.',      tags: ['glossary', 'definition', 'term'] },
  { title: 'FAQ',                       route: '/docs/faq',                desc: 'Common questions about Flowgentra setup and usage.',               tags: ['faq', 'help', 'question'] },
  { title: 'Changelog',                 route: '/docs/changelog',          desc: 'Version history and release notes.',                               tags: ['changelog', 'release', 'version', 'update'] },
]

function score(item, query) {
  const q = query.toLowerCase()
  const title = item.title.toLowerCase()
  const desc  = item.desc.toLowerCase()
  const tags  = item.tags.join(' ')

  if (title === q) return 100
  if (title.startsWith(q)) return 80
  if (title.includes(q)) return 60
  if (desc.includes(q)) return 40
  if (tags.includes(q)) return 30
  // partial word match
  const words = q.split(' ').filter(Boolean)
  const matches = words.filter(w => title.includes(w) || desc.includes(w) || tags.includes(w))
  if (matches.length === words.length) return 20
  if (matches.length > 0) return 10
  return 0
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery]   = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = query.trim().length >= 1
    ? SEARCH_INDEX
        .map(item => ({ ...item, score: score(item, query.trim()) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
    : SEARCH_INDEX.slice(0, 6)   // show recent / popular when empty

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => { setActive(0) }, [query])

  const go = useCallback((route) => {
    navigate(route)
    onClose()
  }, [navigate, onClose])

  useEffect(() => {
    if (!isOpen) return
    const handle = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)); return }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); return }
      if (e.key === 'Enter' && results[active]) { go(results[active].route); return }
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [isOpen, active, results, go, onClose])

  if (!isOpen) return null

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      {/* Backdrop */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 600,
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: 12,
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        margin: '0 16px',
      }}>
        {/* Search input */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: '1px solid #21262d', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search documentation…"
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: '#e6edf3', fontSize: '1rem', fontFamily: 'inherit',
            }}
          />
          <kbd style={{ background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '2px 6px', fontSize: '0.7rem', color: '#8b949e' }}>ESC</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 400, overflowY: 'auto' }}>
          {results.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#8b949e', fontSize: '0.9rem' }}>
              No results for <strong style={{ color: '#e6edf3' }}>"{query}"</strong>
            </div>
          ) : (
            <div>
              {!query.trim() && (
                <div style={{ padding: '8px 16px 4px', fontSize: '0.7rem', fontWeight: 600, color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Popular Pages
                </div>
              )}
              {results.map((item, i) => (
                <button
                  key={item.route}
                  onClick={() => go(item.route)}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    display: 'block', width: '100%', padding: '10px 16px',
                    background: i === active ? 'rgba(206,66,43,0.1)' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    textAlign: 'left', transition: 'background 0.1s',
                    borderLeft: i === active ? '2px solid var(--accent)' : '2px solid transparent',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={i === active ? 'var(--accent)' : '#484f58'} strokeWidth="2" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 500, color: i === active ? 'var(--accent)' : '#e6edf3', fontSize: '0.9rem', marginBottom: 2 }}>
                        {highlightMatch(item.title, query)}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#8b949e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.desc}
                      </div>
                    </div>
                    {i === active && (
                      <kbd style={{ marginLeft: 'auto', flexShrink: 0, background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '2px 6px', fontSize: '0.7rem', color: '#8b949e' }}>
                        ↵
                      </kbd>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 16px', borderTop: '1px solid #21262d', display: 'flex', gap: 16, fontSize: '0.75rem', color: '#484f58' }}>
          <span><kbd style={kbdStyle}>↑↓</kbd> navigate</span>
          <span><kbd style={kbdStyle}>↵</kbd> open</span>
          <span><kbd style={kbdStyle}>esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}

function highlightMatch(text, query) {
  if (!query.trim()) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: 'rgba(206,66,43,0.25)', color: 'var(--accent)', borderRadius: 2 }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

const kbdStyle = { background: '#21262d', border: '1px solid #30363d', borderRadius: 3, padding: '1px 5px', fontFamily: 'inherit' }
