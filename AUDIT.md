# FlowGentra Documentation Audit — 2026-07-19

Ground truth: `flowgentra-ai-rs` (core, v0.3.1) and `flowgentra-ai-py`
(bindings, v0.3.1). The Python surface was extracted by **introspecting the
built 0.3.1 wheel** (333 native symbols across 22 submodules); the Rust surface
from `src/lib.rs` + `src/core/mod.rs` re-exports and `Cargo.toml` features.
Where docs and source disagree, source wins.

Legend: 🔴 fabricated/wrong · 🟠 outdated · 🟡 missing · 🟢 fixed in this pass

---

## 1. Fabricated content (docs describe things that do not exist)

| Where | Claim | Reality (source) | Status |
|---|---|---|---|
| `Installation.jsx`, `QuickStartPython.jsx`, `Changelog.jsx` | `pip install "flowgentra-ai[all]"`, `[openai]`, `[anthropic]`, `[tracing]` extras | `flowgentra-ai-py/pyproject.toml` defines **no** `optional-dependencies`. One fat wheel; providers are selected by `LLMConfig`, not extras. | 🟢 removed |
| `Changelog.jsx` | Versions `0.4.0`, `0.3.2`, and duplicate/reordered `0.1.5`/`0.1.6` entries; `pip install "flowgentra==0.3.2"` (wrong package name) | Real releases: `0.1.x` → `0.3.0` → `0.3.1` (`CHANGELOG.md` in both repos). Package name is `flowgentra-ai`. | 🟢 rewritten from the real CHANGELOGs |
| `Installation.jsx` | `flowgentra-ai = "0.2"` | Current crate version 0.3.1 (`flowgentra-ai-rs/Cargo.toml`). | 🟢 |

## 2. Missing — shipped in 0.3.0/0.3.1, absent from docs

### Security / breaking (highest priority)
- 🟡 **`allow_python_handlers` flip** — `from_config_path(...)` **rejects by
  default** configs that import Python modules
  (`flowgentra-ai-py/src/agent.rs`; changelog 0.3.0 *Security (breaking)*).
  Zero mentions in docs; the handler-registration guide still implies configs
  can auto-import.
- 🟡 **Legacy engine deprecation** — `core::graph::Graph` and
  `core::runtime::AgentRuntime` carry `#[deprecated(since = "0.3.1")]`; the
  config Agent runs on `state_graph`
  (`core/agent/state_graph_bridge.rs::build_state_graph`). `runtime_mut()`
  now returns `Option` (**breaking**). Undocumented.
- 🟡 **Secret redaction** — `LLMConfig.api_key` is a redacting `Secret`
  (`core/llm/secret.rs`); checkpoints re-resolve keys from env
  (`DynState::get_llm`). Undocumented.

### Budgets & cancellation (state_graph executor, `core/state_graph/executor.rs`)
- 🟡 `set_max_duration(Duration)` → `WallClockExceeded` / py `set_max_duration(seconds)`
- 🟡 `set_max_tokens(u64)` → `TokenBudgetExceeded` (reads `_token_usage`)
- 🟡 `set_max_cost(f64)` → `CostBudgetExceeded` (reads `_cost_usd`; per-model
  pricing via `llm::model_pricing` + `llm::set_model_price` override;
  `record_usage_with_cost` in `core/observability/mod.rs`)
- 🟡 `set_cancel_flag(Arc<AtomicBool>)`; Python Ctrl+C via signal-polling runner
- 🟡 Config `budget:` section (`max_tokens` / `max_cost_usd` /
  `max_duration_secs`) + `model_pricing:` map (`core/config/mod.rs::BudgetConfig`,
  `ModelPrice`) — applied by the bridge
- 🟡 `graph.recursion_limit` vs `set_max_steps` relationship

### Human-in-the-loop & persistence
- 🟡 In-node `interrupt(payload)` / py `NodeInterrupt` exception +
  `resume_with_state(thread_id, updates)` (`core/state_graph/error.rs`,
  py `src/error.rs`, `src/graph.rs`) — the modern HITL path
- 🟡 `SqliteCheckpointer` (feature `sqlite`) — mentioned in 2 guide files but
  absent from the API reference
- 🟡 Async checkpointers exposed to Python: `AsyncSqliteCheckpointer`,
  `AsyncPostgresCheckpointer`, `AsyncRedisCheckpointer`
  (`flowgentra-ai-py/src/async_checkpointers.rs`)

### Execution & streaming
- 🟡 `CachedNode` / `add_cached_node` — input-keyed memoization with TTL
  (`core/state_graph/cached_node.rs`)
- 🟡 Parallel supersteps — multiple fixed edges fan out concurrently, merged by
  per-field reducer (`execute_superstep`); wave semantics differ from the old
  BFS engine (release-noted in core CHANGELOG)
- 🟡 `graph.stream()` → `GraphStream` (sync events iterator) — 1 passing
  mention, no reference entry
- 🟡 **`astream()` → `AsyncGraphStream`** — native async iterator (0.3.1),
  `src/graph.rs::PyAsyncGraphStream`. Not documented at all.
- 🟠 `ainvoke()` — documented as `asyncio.to_thread` wrapper; since 0.3.1 it is
  a **native awaitable** (pyo3-async-runtimes). Semantics same, mechanism note stale.
- 🟡 `MockLLM` (`core/llm/mock.rs`) — scripted offline LLM for tests
  (`always` / `sequence` / `when_contains` / `when` / `otherwise`,
  `with_usage`, `call_count`)

### API vocabulary
- 🟠 `execute_input()` shown in 4 files — **deprecated** since 0.3.0; canonical
  is `run()` (`src/agents.rs`). Docs must lead with `run()`.
- 🟡 `TokenUsage(prompt, completion)` constructor; `estimated_cost(model)`;
  `llm.model_pricing(model)`; `llm.set_model_price(model, in, out)`
- 🟡 `State` MutableMapping parity (`items/values/__iter__/__eq__/get`)
- 🟡 `py.typed` + complete `_native.pyi` stubs (typed IDE experience worth advertising)
- 🟡 `FilesTool::try_default()` (0.3.1) and the sandbox fallback semantics

## 3. Outdated / incorrect

- 🟠 `Installation.jsx` — Rust `0.2` pin; extras (see §1); missing the real
  feature-flag list from `Cargo.toml` (sqlite/postgres/…/vector bundles).
- 🟠 `Changelog.jsx` — fully fabricated (see §1); replaced with real 0.3.1 /
  0.3.0 / 0.2.x history sourced from the two `CHANGELOG.md` files.
- 🟠 `api.js › agent-run` — lacks the engine note (state_graph default, budgets
  from config) and `runtime_mut()` breakage.
- 🟠 `api.js › memory` — no SQLite/async checkpointers, no `NodeInterrupt`,
  no `resume_with_state`.
- 🟠 Duplicated page pairs drifting apart: `AgentsGuide` vs `AgentsGuideNew`,
  `GettingStarted` vs `GettingStartedNew`, `MiddlewareGuide` vs
  `MiddlewareCompleteGuide`, `PluginsGuide` vs `PluginsCompleteGuide`,
  `ValidationGuide` vs `ValidationCompleteGuide`, `SupervisorGuide` vs
  `SupervisorGuideExpanded`. Only one of each is routed; the rest is dead code.

## 4. Orphaned
- None found referencing deleted symbols by name — but the removed
  `core::state` tombstone modules (`dynamic`, `scoped`, `shared`, `state_ext`,
  `typed`) and `core::examples` were never documented (nothing to remove).

## 5. Source → doc mapping (key entries)

| Doc entry (api.js id) | Source of truth |
|---|---|
| `state-graph` | `core/state_graph/{mod,executor}.rs`; py `src/graph.rs::PyStateGraphBuilder/PyCompiledGraph` |
| `derive-state` | `flowgentra-ai-macros/src/lib.rs::derive_state`; py reducers `src/py_reducers.rs`, `src/channel.rs` |
| `register-handler` | macros `register_handler`; py `python/flowgentra_ai/agent/__init__.py` |
| `from-config-path` | `core/agent/mod.rs::from_config_path` + `from_config_inner`; py `src/agent.rs` (`allow_python_handlers` gate) |
| `agent-run` | `core/agent/mod.rs::{run, run_with_thread}`; bridge `core/agent/state_graph_bridge.rs` |
| `budgets-cancellation` (new) | `core/state_graph/executor.rs::{set_max_duration,set_max_tokens,set_max_cost,set_cancel_flag}`; `core/config/mod.rs::BudgetConfig/ModelPrice`; `core/observability/mod.rs::record_usage_with_cost`; py `src/graph.rs` |
| `interrupts-hitl` (new) | `core/state_graph/error.rs::{interrupt, StateGraphError::InterruptedByNode}`; py `src/error.rs::NodeInterrupt`, `src/graph.rs::resume_with_state` |
| `streaming-async` (new) | py `src/graph.rs::{stream, PyGraphStream, astream, PyAsyncGraphStream, _ainvoke_native}`; `python/flowgentra_ai/graph/__init__.py` |
| `caching` (new) | `core/state_graph/cached_node.rs`; py `add_cached_node` |
| `mock-llm` (new) | `core/llm/mock.rs::MockLLM` |
| `security` (new) | `core/llm/secret.rs`; py `src/agent.rs` (`allow_python_handlers`); `core/state/checkpointer.rs` (thread_id validation, atomic writes) |
| `memory` | `core/state_graph/{checkpointer,file_checkpointer,sqlite_checkpointer}.rs`; py `src/async_checkpointers.rs` |
| `llm-clients` | `core/llm/{mod,factory,adapter}.rs`; py `src/llm.rs` (incl. `py_set_model_price`) |
| tools entries | `core/tools/{mod,builtin,search,knowledge,files_extended,data,web*,human}.rs` |
| RAG entries | `core/rag/*`; py `src/rag*.rs` |
| `yaml-config` | `core/config/mod.rs::AgentConfig` (+ `BudgetConfig`, `ModelPrice`, `deny_unknown_fields`) |

Full machine inventories used for this audit:
- Python: introspection dump of the installed 0.3.1 wheel (333 symbols, 22
  modules) — regenerate with `inspect` over `flowgentra_ai._native`.
- Rust: `src/lib.rs` §60–150 re-exports, `src/core/mod.rs` re-exports,
  `[features]` table in `flowgentra-ai/Cargo.toml`.

## 6. Binding discrepancies worth documenting (Rust ≠ Python)

| Area | Rust | Python |
|---|---|---|
| Graph build | `StateGraph::builder()` + typed `S: State` | `StateGraph(TypedDict)` wrapper class; `compile()` → `CompiledGraph` |
| Invoke | `graph.invoke(state).await` (async fn) | `invoke(dict)` sync (GIL released) · `await ainvoke(dict)` native awaitable |
| Streaming | `subscribe()` broadcast receiver | `stream()` sync iterator · `astream()` native async iterator |
| Budget breach | typed `StateGraphError::{WallClock,TokenBudget,CostBudget}Exceeded` | all map to `WorkflowTimeoutError` |
| Cancellation | `set_cancel_flag(AtomicBool)` | Ctrl+C (SIGINT polling) → `PyInterruptedError` |
| HITL | `Err(interrupt(payload))` | raise/receive `NodeInterrupt`; `resume_with_state` |
| Max steps default | `recursion_limit` default from config (25) | wrapper validates 1–10 000 in `set_max_steps` |
| Deprecated engine | `Graph`/`AgentRuntime` warn on use | never exposed to Python (nothing to migrate) |

## 7. Bugs found in the *bindings* while verifying docs against the wheel

Verifying examples by executing them surfaced two shipped defects (fixed in
`flowgentra-ai-py`, commits `3bc5020` and `7e30f7d`):

1. **`Conversational` missed `run()`** — the skills-aware pure-Python wrapper
   shadowed the native class and only exposed the deprecated
   `execute_input()`, so it was the one agent type outside the 0.3.0 unified
   `run()` vocabulary.
2. **`flowgentra_ai.document_loaders` was unimportable** — the wrapper read
   `WebLoader`/`CsvLoader`/… from `_native.rag` after they had moved to
   `_native.loaders`; importing the subpackage raised `AttributeError`. Also
   revealed that the `*Config` classes (`WebLoaderConfig`,
   `DirectoryLoaderConfig`, …) exist in **no** native module — they now
   degrade to `None` and are dropped from doc examples.
   A regression test now imports every public wrapper module.

Ergonomics gap (documented, not yet fixed): `set_model_price` /
`model_pricing` are only reachable as `flowgentra_ai._native.llm.py_*` —
the `flowgentra_ai.llm` wrapper aliases only `create_llm`.

## 8. Structural fixes in this pass
- Deleted the six unrouted duplicate guide pages (kept the routed variant).
- Reference gains new entries: budgets & cancellation, interrupts/HITL,
  streaming & async, caching, MockLLM, security model.
- Installation/Quickstart/Changelog rebuilt from real versions and features.
- `execute_input` replaced by `run()` everywhere (with a deprecation callout).
