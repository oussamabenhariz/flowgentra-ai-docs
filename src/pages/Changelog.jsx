import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'

const releases = [
  {
    version: '0.3.2',
    date: '2026-07-19',
    tag: 'latest',
    changes: [
      { type: 'fix', text: 'Conversational (skills-aware wrapper) gains the canonical run() method — it was the one agent type still limited to the deprecated execute_input()' },
      { type: 'fix', text: 'flowgentra_ai.document_loaders was unimportable (loader classes moved to _native.loaders; the wrapper still read _native.rag)' },
      { type: 'feat', text: 'Regression tests import every public wrapper module and assert the unified run() vocabulary across all seven agent types' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.3.2"`,
    python: `pip install "flowgentra-ai==0.3.2"`,
  },
  {
    version: '0.3.1',
    date: '2026-07-17',
    tag: null,
    changes: [
      { type: 'feat', text: 'Engine merge: config-driven agents now run on the state_graph executor for every valid config — all node types (retry, timeout, evaluation, loop, planner, memory, human-in-the-loop, subgraph, supervisor), per-node MCPs, and RAG configs are compiled by the bridge' },
      { type: 'breaking', text: 'Agent.runtime_mut() returns Option<&mut AgentRuntime>; the legacy runtime is built only as a fallback' },
      { type: 'feat', text: 'Cost budget: set_max_cost(usd) with per-model pricing (built-in table + set_model_price override + model_pricing config map); config gains a budget: section (max_tokens / max_cost_usd / max_duration_secs)' },
      { type: 'feat', text: 'Native async in Python: ainvoke() is a native awaitable and astream() a native async iterator (pyo3-async-runtimes) — no per-call thread bounce' },
      { type: 'feat', text: 'MockLLM: scripted offline LLM for deterministic tests (always / sequence / when_contains / usage / streaming)' },
      { type: 'feat', text: 'Panic-site CI gate; reachable panics removed from library code paths; FilesTool::try_default()' },
      { type: 'fix', text: 'CachedNode: canonical (sorted-key) state hashing — equivalent states no longer miss the cache' },
      { type: 'fix', text: 'Dependency advisories cleared: quick-xml 0.41, pdf-extract 0.12 / lopdf 0.42, scraper 0.27, dotenv → dotenvy (cargo-deny green)' },
      { type: 'docs', text: 'Graph and AgentRuntime deprecated (removed at 1.0) — use StateGraph' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.3.1"`,
    python: `pip install "flowgentra-ai==0.3.1"`,
  },
  {
    version: '0.3.0',
    date: '2026-07-16',
    tag: null,
    changes: [
      { type: 'breaking', text: 'Security: from_config_path() now rejects configs naming Python modules to import unless allow_python_handlers=True is passed explicitly' },
      { type: 'feat', text: 'Secret API keys: LLMConfig.api_key redacted in Debug/serialization and zeroized; checkpoints no longer contain raw keys (re-resolved from env)' },
      { type: 'feat', text: 'SqliteCheckpointer (sqlite feature) — durable transactional checkpointing' },
      { type: 'feat', text: 'Parallel supersteps: multiple fixed edges run concurrently, merged by per-field reducer' },
      { type: 'feat', text: 'In-node interrupt() / NodeInterrupt for human-in-the-loop; resume_with_state(thread_id, updates) re-runs the interrupted node with injected answers' },
      { type: 'feat', text: 'CachedNode / add_cached_node — input-state-keyed memoization with TTL and size bound' },
      { type: 'feat', text: 'Budgets & cancellation: set_max_duration (wall-clock), set_max_tokens (token budget), set_cancel_flag; Ctrl+C cancels Python runs cleanly' },
      { type: 'feat', text: 'graph.stream() sync event iterator; ainvoke()/astream() async API; State gains full dict parity (items/values/get/…)' },
      { type: 'feat', text: 'Unified vocabulary: agents use run() (execute_input() deprecated); graphs use invoke()' },
      { type: 'feat', text: 'py.typed + complete type stubs for the whole native surface' },
      { type: 'fix', text: 'resume() continues past its breakpoint instead of re-triggering it forever' },
      { type: 'fix', text: 'Checkpoints: atomic writes, corruption detection, thread_id path-traversal validation' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.3.0"`,
    python: `pip install "flowgentra-ai==0.3.0"`,
  },
  {
    version: '0.1.x – 0.2.x',
    date: 'earlier',
    tag: null,
    changes: [
      { type: 'docs', text: 'Early releases predate this changelog. 0.2.x introduced the typed-state system (#[derive(State)] + reducers), config-driven agents, the tool registry, RAG integrations, and the predefined agent types.' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.2"`,
    python: `pip install "flowgentra-ai==0.2.0"`,
  },
]

const typeStyles = {
  feat:     { bg: 'rgba(35,134,54,0.15)',   color: '#3fb950', label: 'feat' },
  fix:      { bg: 'rgba(248,81,73,0.15)',    color: '#f85149', label: 'fix' },
  perf:     { bg: 'rgba(53,114,165,0.15)',   color: '#79c0ff', label: 'perf' },
  docs:     { bg: 'rgba(139,148,158,0.15)',  color: '#8b949e', label: 'docs' },
  breaking: { bg: 'rgba(210,153,34,0.15)',   color: '#e3b341', label: 'breaking' },
}

export default function Changelog() {
  return (
    <DocLayout>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Changelog
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 48, lineHeight: 1.7 }}>
        All notable changes to Flowgentra. The language switcher shows the install snippet for each version.
      </p>

      {releases.map((release, i) => (
        <article key={release.version} style={{ marginBottom: 52, paddingBottom: 52, borderBottom: i < releases.length - 1 ? '1px solid #21262d' : 'none' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.25rem', color: '#e6edf3', margin: 0 }}>
              v{release.version}
            </h2>
            {release.tag && (
              <span style={{ background: 'rgba(35,134,54,0.15)', color: '#3fb950', border: '1px solid rgba(35,134,54,0.4)', borderRadius: 10, fontSize: '0.75rem', padding: '2px 10px', fontWeight: 500 }}>
                {release.tag}
              </span>
            )}
            <span style={{ color: '#484f58', fontSize: '0.875rem', marginLeft: 'auto' }}>{release.date}</span>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 20px' }}>
            {release.changes.map((c, j) => {
              const s = typeStyles[c.type] || typeStyles.docs
              return (
                <li key={j} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '6px 0', borderBottom: j < release.changes.length - 1 ? '1px solid #161b22' : 'none' }}>
                  <span style={{ background: s.bg, color: s.color, fontSize: '0.7rem', fontWeight: 600, padding: '2px 7px', borderRadius: 4, flexShrink: 0, fontFamily: 'JetBrains Mono, monospace' }}>
                    {s.label}
                  </span>
                  <span style={{ color: '#c9d1d9', lineHeight: 1.6, fontSize: '0.9375rem' }}>{c.text}</span>
                </li>
              )
            })}
          </ul>

          <div>
            <p style={{ fontSize: '0.8125rem', color: '#8b949e', marginBottom: 8 }}>Install this version:</p>
            <CodeBlock rust={release.rust} python={release.python} />
          </div>
        </article>
      ))}
    </DocLayout>
  )
}
