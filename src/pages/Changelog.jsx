import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'

const releases = [
  {
    version: '0.1.6',
    date: '2026-04-20',
    tag: 'latest',
    changes: [
      { type: 'fix',  text: 'Python: fix publishing issue — package metadata corrected for PyPI distribution' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = version = "0.2.3"
`,
    python: `pip install "flowgentra-ai==0.2.0"`,
  },
  {
    version: '0.1.7',
    date: '2026-04-18',
    tag: null,
    changes: [
      { type: 'feat',     text: 'Rust: add ReactDocstore and SelfAskWithSearch predefined agents (complete the 7-agent taxonomy)' },
      { type: 'feat',     text: 'Rust: typed agent constructors — ZeroShotReAct::new(), FewShotReAct::new(), etc. as ergonomic wrappers around AgentBuilder' },
      { type: 'breaking', text: 'Rust: AgentConfig renamed to PrebuiltAgentConfig for clarity (Python still exports it as AgentConfig)' },
      { type: 'fix',      text: 'Rust: improved formatting and display for agent config types' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.1.7"`,
    python: `pip install "flowgentra-ai==0.1.7"`,
  },
  {
    version: '0.1.6',
    date: '2026-04-15',
    tag: null,
    changes: [
      { type: 'feat',     text: 'Python: LLM class now has a direct constructor ��� LLM(provider, model, api_key=None, ...) — no need to wrap in LLMConfig first' },
      { type: 'feat',     text: 'Python: API key is auto-resolved from environment variables and .env files when api_key is omitted' },
      { type: 'feat',     text: 'Python: typed agent constructors accept LLM directly — ZeroShotReAct(name=..., llm=LLM(...), tools=[...])' },
      { type: 'fix',      text: 'Rust: fix graph compilation issue with certain node ordering configurations' },
      { type: 'fix',      text: 'Rust: fix MSSQL connection string handling in db adapters' },
      { type: 'breaking', text: 'Python: unified API key logic — provider-specific env vars (OPENAI_API_KEY, ANTHROPIC_API_KEY, etc.) are checked automatically; per-call api_key override still works' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.1.6"`,
    python: `pip install "flowgentra-ai==0.1.6"`,
  },
  {
    version: '0.1.5',
    date: '2026-04-14',
    tag: null,
    changes: [
      { type: 'feat',  text: 'Comprehensive documentation website with 46+ pages covering all modules' },
      { type: 'feat',  text: 'Enhanced API reference with 40+ module categories for both Rust and Python' },
      { type: 'feat',  text: 'New guides: Runtime & Execution, Database Integration, Agent Builder, Predefined Agents, LLM Providers' },
      { type: 'feat',  text: 'Added Runtime module documentation covering execution model and async patterns' },
      { type: 'docs',  text: 'Reorganized documentation with clear module-to-docs mapping for all Rust and Python APIs' },
      { type: 'docs',  text: 'Updated navigation structure with 14 search categories for better discovery' },
      { type: 'docs',  text: 'Added code examples for all major APIs in both Rust and Python' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.1.5"`,
    python: `pip install "flowgentra-ai==0.1.5"`,
  },
  {
    version: '0.1.5',
    date: '2025-04-05',
    tag: null,
    changes: [
      { type: 'fix',      text: 'Python: all submodule imports now work correctly (use `from flowgentra_ai.graph import StateGraph`, not `from flowgentra import …`)' },
      { type: 'fix',      text: 'Python: `Agent.create()` now takes `model` string instead of `llm` LLM object; use `run_with_input(str)` on the returned agent' },
      { type: 'fix',      text: 'Python: `StateGraph.invoke()` accepts a plain `dict` — do not wrap with `State()`' },
      { type: 'fix',      text: 'Python: fixed 9 compile errors in PyO3 bindings (rayon, schema_version, tool extraction, GIL cloning, type mismatches)' },
      { type: 'fix',      text: 'Python: `conversation_memory.rs` extra brace syntax error resolved' },
      { type: 'fix',      text: 'Python: `LLM` constructor no longer requires a pre-built config object' },
      { type: 'breaking', text: 'Python: `Agent.create(llm=…)` removed — pass `model="gpt-4o"` string instead' },
      { type: 'breaking', text: 'Python: top-level `from flowgentra import StateGraph` removed — use submodule imports' },
      { type: 'docs',     text: 'Updated all code examples to use correct `flowgentra_ai.*` submodule import paths' },
    ],
    rust: `# Cargo.toml
flowgentra-ai = "0.1.5"`,
    python: `pip install "flowgentra-ai==0.1.5"`,
  },
  {
    version: '0.4.0',
    date: '2024-12-01',
    tag: null,
    changes: [
      { type: 'feat', text: 'Add `add_conditional_edge` for dynamic routing based on state' },
      { type: 'feat', text: 'Python: `@register_handler` now auto-discovered with zero config' },
      { type: 'feat', text: 'New `Agent::from_config_path` API — define graphs in YAML' },
      { type: 'perf', text: 'State cloning reduced by 40% via arena allocator in hot paths' },
      { type: 'fix',  text: 'Fix race condition in async node execution with shared state' },
    ],
    rust: `# Cargo.toml
flowgentra = "0.4"`,
    python: `pip install "flowgentra==0.4.0"`,
  },
  {
    version: '0.3.2',
    date: '2024-10-15',
    tag: null,
    changes: [
      { type: 'fix',  text: 'Python: handle `None` return values from node functions' },
      { type: 'fix',  text: 'Rust: correct borrow checker error with recursive graphs' },
      { type: 'docs', text: 'Improve error messages for missing entry node' },
    ],
    rust: `flowgentra = "0.3.2"`,
    python: `pip install "flowgentra==0.3.2"`,
  },
  {
    version: '0.3.0',
    date: '2024-09-01',
    tag: null,
    changes: [
      { type: 'feat', text: 'Initial Python bindings via PyO3' },
      { type: 'feat', text: 'TypedDict state support in Python' },
      { type: 'feat', text: 'Async node support in both languages' },
      { type: 'breaking', text: 'Renamed `Graph::new` to `StateGraph::builder`' },
    ],
    rust: `flowgentra = "0.3"`,
    python: `pip install "flowgentra==0.3.0"`,
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
