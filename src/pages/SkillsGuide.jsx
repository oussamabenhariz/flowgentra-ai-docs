import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'

const anchors = [
  { id: 'overview',        label: 'Overview' },
  { id: 'skill-layout',    label: 'Skill Directory Layout' },
  { id: 'skill-md',        label: 'SKILL.md Format' },
  { id: 'loading',         label: 'Loading Skills' },
  { id: 'custom-tools',    label: 'Skill-Specific Tools' },
  { id: 'skill-agent',     label: 'SkillAgent' },
  { id: 'conversational',  label: 'Conversational with Skills' },
  { id: 'api-reference',   label: 'API Reference' },
  { id: 'errors',          label: 'Common Errors' },
]

const h2 = { fontSize: '1.4rem', fontWeight: 700, color: '#e6edf3', marginTop: 48, marginBottom: 16 }
const p  = { color: '#8b949e', marginBottom: 16, lineHeight: 1.7 }
const callout = (color) => ({
  background: color === 'warn' ? 'rgba(210,153,34,0.08)' : 'rgba(56,139,253,0.08)',
  border: `1px solid ${color === 'warn' ? 'rgba(210,153,34,0.3)' : 'rgba(56,139,253,0.3)'}`,
  borderRadius: 8, padding: '14px 18px', marginBottom: 20,
  color: '#e6edf3', lineHeight: 1.65, fontSize: '0.9rem',
})

const tableWrap = {
  background: '#0d1117', border: '1px solid #21262d',
  borderRadius: 8, padding: '0 4px', marginBottom: 24, overflowX: 'auto',
}
const th = { textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid #21262d', color: '#e6edf3', fontSize: '0.875rem', fontWeight: 600 }
const td = { padding: '9px 12px', borderBottom: '1px solid #21262d', color: '#8b949e', fontSize: '0.875rem' }
const tdCode = { ...td, fontFamily: 'monospace', fontSize: '0.82rem' }
const tdLast = { padding: '9px 12px', color: '#8b949e', fontSize: '0.875rem' }
const tdCodeLast = { ...tdLast, fontFamily: 'monospace', fontSize: '0.82rem' }

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: 80 }}>
      <h2 style={h2}>{title}</h2>
      {children}
    </section>
  )
}

export default function SkillsGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Skills
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Skills are self-contained agent personas loaded from directories. Each skill bundles its own
        instructions, a curated tool list, and optional reference documents. A <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>SkillAgent</code> uses
        a two-phase model: the LLM first picks the right skill, then executes with that skill's scoped
        prompt and tools — keeping unrelated tools hidden from the model.
      </p>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p style={p}>
          The two-phase model keeps context lean and routing explicit:
        </p>
        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: '20px 24px', marginBottom: 24, fontFamily: 'monospace', fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.9 }}>
          <div><span style={{ color: '#56d364' }}>Phase 1 — Discovery</span></div>
          <div>&nbsp;&nbsp;LLM sees: skill names + descriptions only</div>
          <div>&nbsp;&nbsp;LLM calls: <code style={{ color: '#79c0ff' }}>activate_skill(skill="math-solver")</code></div>
          <div>&nbsp;&nbsp;Skipped automatically when registry has exactly 1 skill</div>
          <br />
          <div><span style={{ color: '#56d364' }}>Phase 2 — Execution</span></div>
          <div>&nbsp;&nbsp;LLM sees: selected skill's full instructions + <em>only</em> its allowed-tools</div>
          <div>&nbsp;&nbsp;All other tools (other skills, global registry) are hidden</div>
        </div>
      </Section>

      {/* ── Layout ─────────────────────────────────────────────────── */}
      <Section id="skill-layout" title="Skill Directory Layout">
        <p style={p}>
          Each skill lives in its own subdirectory under a shared <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>skills/</code> folder:
        </p>
        <CodeBlock
          python={`skills/
└── math-solver/
    ├── SKILL.md          # required — frontmatter + instructions
    ├── scripts/          # optional — @tool decorated skill-specific tools
    │   └── tools.py
    └── references/       # optional — extra context appended to instructions
        └── formulas.md`}
          rust={`skills/
└── math-solver/
    ├── SKILL.md          # required — frontmatter + instructions
    └── references/       # optional — extra context
        └── formulas.md`}
        />
      </Section>

      {/* ── SKILL.md ───────────────────────────────────────────────── */}
      <Section id="skill-md" title="SKILL.md Format">
        <p style={p}>
          A <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>SKILL.md</code> file has a YAML frontmatter block followed by the skill's instruction body:
        </p>
        <CodeBlock
          python={`---
name: math-solver
description: "Solve mathematical problems step-by-step, from arithmetic to calculus."
version: "1.0.0"
allowed-tools:
  - calculator          # built-in (from ToolRegistry.with_builtins())
  - expression_eval     # skill-specific (defined in scripts/tools.py)
  - unit_converter      # skill-specific
---

# Math Solver Skill

You are a precise math solver who shows full working for every problem.

## Guidelines
1. Always show step-by-step working — never jump to the final answer
2. State the formula or rule used at each step
3. Verify your answer by substituting back into the original problem`}
          rust={`---
name: math-solver
description: "Solve mathematical problems step-by-step."
version: "1.0.0"
allowed-tools:
  - calculator
---

# Math Solver Skill

You are a precise math solver who shows full working.`}
        />
        <div style={callout('info')}>
          <strong style={{ color: '#79c0ff' }}>allowed-tools scoping</strong><br />
          Only tools listed in <code>allowed-tools</code> are visible to the LLM during Phase 2.
          Tools from other skills or the global registry are hidden. This prevents cross-skill
          contamination and keeps the model focused.
        </div>
      </Section>

      {/* ── Loading ────────────────────────────────────────────────── */}
      <Section id="loading" title="Loading Skills">
        <p style={p}>
          Built-in tools (like <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>calculator</code>) must be provided via a{' '}
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>ToolRegistry</code> — without it, any built-in listed in{' '}
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>allowed-tools</code> raises a <code style={{ color: '#f85149', fontFamily: 'monospace' }}>ValueError</code>.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 12 }}>Multiple skills from a directory</h3>
        <CodeBlock
          python={`from flowgentra_ai.skills import SkillRegistry
from flowgentra_ai.tools import ToolRegistry

# Pass tool_registry so built-ins (calculator, http_get, file, …) can be resolved
tool_registry = ToolRegistry.with_builtins()

registry = SkillRegistry.from_directory("skills/", tool_registry=tool_registry)
print(registry.list())  # ['math-solver', 'tech-writer']`}
          rust={`// Rust: skills are loaded directly via config or the Rust SkillRegistry
use flowgentra_ai::core::skills::SkillRegistry;

let mut registry = SkillRegistry::new();
registry.load_directory("skills/")?;`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>Single skill</h3>
        <CodeBlock
          python={`# from_directory() scans for subdirectories containing SKILL.md.
# Pointing it at the skill folder itself finds nothing — use .load() instead.

single = SkillRegistry(tool_registry=tool_registry)
single.load("skills/math-solver")
print(single.list())  # ['math-solver']`}
          rust={`let mut registry = SkillRegistry::new();
registry.load_skill("skills/math-solver")?;`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>With shared custom tools</h3>
        <CodeBlock
          python={`from flowgentra_ai.tools import ToolRegistry, tool

@tool(name="my_formatter", description="Format output as a structured report.")
def my_formatter(data: dict) -> str:
    return str(data)

tool_registry = ToolRegistry.with_builtins()
tool_registry.register(my_formatter)  # now usable in any skill's allowed-tools

registry = SkillRegistry.from_directory("skills/", tool_registry=tool_registry)`}
          rust={`// Register custom tools before building the registry`}
        />
      </Section>

      {/* ── Custom tools ───────────────────────────────────────────── */}
      <Section id="custom-tools" title="Skill-Specific Tools">
        <p style={p}>
          Place <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>@tool</code>-decorated functions in{' '}
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>skills/&lt;name&gt;/scripts/tools.py</code>. They are auto-discovered when the skill loads — no manual registration needed.
        </p>
        <CodeBlock
          python={`# skills/math-solver/scripts/tools.py
from flowgentra_ai.tools import tool

@tool(
    name="expression_eval",
    description=(
        "Evaluate a math expression string. Supports arithmetic, exponentiation (**), "
        "trig (sin/cos/tan), log, sqrt, and Python math constants (pi, e). "
        "Example: '2**10 + sqrt(144)' → 1036.0"
    ),
    parameters={"expression": "string"},
    required=["expression"],
)
def expression_eval(expression: str) -> dict:
    import math
    safe = {k: v for k, v in math.__dict__.items() if not k.startswith("_")}
    safe["abs"] = abs
    try:
        return {"result": float(eval(expression, {"__builtins__": {}}, safe))}
    except ZeroDivisionError:
        return {"error": "division by zero", "expression": expression}
    except Exception as e:
        return {"error": str(e), "expression": expression}`}
          rust={`// Rust skills use Rust Tool trait implementations — no scripts/ directory`}
        />
        <p style={{ ...p, marginTop: 20 }}>
          Tools are auto-discovered at load time. Retrieve a callable directly from the registry using{' '}
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>get_callable()</code> — useful in tests or pipelines that call tools outside an agent loop:
        </p>
        <CodeBlock
          python={`# No need to import the tools.py file manually
expression_eval = registry.get_callable("expression_eval")
result = expression_eval("2**10 + sqrt(144)")
print(result)  # {'result': 1036.0, 'expression': '2**10 + sqrt(144)'}

# Returns None for built-ins (calculator, http_get, etc.)
print(registry.get_callable("calculator"))  # None`}
        />
        <div style={callout('info')}>
          Skill-specific tools are scoped to their skill. They are <em>not</em> visible to other skills
          or to agents that don't activate that skill.
        </div>
      </Section>

      {/* ── SkillAgent ─────────────────────────────────────────────── */}
      <Section id="skill-agent" title="SkillAgent: Two-Phase Routing">
        <p style={p}>
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>SkillAgent</code> handles both phases automatically.
          With a single-skill registry, Phase 1 is skipped entirely.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.skills import SkillRegistry, SkillAgent
from flowgentra_ai.tools import ToolRegistry
from flowgentra_ai.llm import LLMClient

tool_registry = ToolRegistry.with_builtins()
registry = SkillRegistry.from_directory("skills/", tool_registry=tool_registry)

agent = SkillAgent(
    name="assistant",
    llm=LLMClient(provider="mistral", model="mistral-small-latest", temperature=0.2),
    skills=registry,
)

# Multi-skill: Phase 1 runs, LLM picks math-solver
response = agent.execute_input("Solve: if 3x + 7 = 22, what is x?")
print(agent.active_skills())  # ['math-solver']

# Single-skill: Phase 1 skipped
single = SkillRegistry(tool_registry=tool_registry)
single.load("skills/math-solver")
fast_agent = SkillAgent(name="math-only", llm=agent._llm, skills=single)
result = fast_agent.execute_input("What is 15% of 240?")`}
          rust={`// Rust: wire SkillRegistry into a StateGraph node for two-phase routing`}
        />
      </Section>

      {/* ── Conversational ─────────────────────────────────────────── */}
      <Section id="conversational" title="Conversational Agent with Skills">
        <p style={p}>
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>Conversational</code> and other predefined agents accept a{' '}
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>skills=</code> parameter directly:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.agent import Conversational
from flowgentra_ai.llm import LLMClient

conv = Conversational(
    name="conv-assistant",
    llm=LLMClient(provider="mistral", model="mistral-small-latest"),
    skills=registry,
)
result = conv.execute_input("What is the derivative of x^3 + 2x?")`}
          rust={`// Conversational with skills — Rust implementation via StateGraph`}
        />
      </Section>

      {/* ── API Reference ──────────────────────────────────────────── */}
      <Section id="api-reference" title="API Reference">
        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 12 }}>SkillRegistry</h3>
        <div style={tableWrap}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Method / Constructor</th>
                <th style={th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdCode}>SkillRegistry(tool_registry=None)</td><td style={td}>Create empty registry. Pass <code>ToolRegistry.with_builtins()</code> to resolve built-in tools.</td></tr>
              <tr><td style={tdCode}>from_directory(path, tool_registry=None, allow_override=False)</td><td style={td}>Load all subdirs that contain a SKILL.md. Do NOT pass the skill dir itself.</td></tr>
              <tr><td style={tdCode}>load(path, allow_override=False)</td><td style={td}>Load one skill from its directory.</td></tr>
              <tr><td style={tdCode}>list()</td><td style={td}>Return list of skill names.</td></tr>
              <tr><td style={tdCode}>get(name)</td><td style={td}>Return a <code>Skill</code> object.</td></tr>
              <tr><td style={tdCode}>build_menu()</td><td style={td}>Phase 1 system prompt — names + descriptions only.</td></tr>
              <tr><td style={tdCode}>build_system_prompt(skill_name)</td><td style={td}>Phase 2 system prompt with full instructions.</td></tr>
              <tr><td style={tdCode}>resolve_tools(skill_name)</td><td style={td}>Phase 2 scoped tool list — only that skill's allowed-tools.</td></tr>
              <tr><td style={tdCodeLast}>get_callable(tool_name) → Callable | None</td><td style={tdLast}>Return the Python callable for a skill-specific tool (auto-discovered from <code>scripts/tools.py</code>). Returns <code>None</code> for built-ins.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 12, marginTop: 24 }}>SkillAgent</h3>
        <div style={tableWrap}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Method / Constructor</th>
                <th style={th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdCode}>SkillAgent(name, llm, skills, retries=3)</td><td style={td}>Create a two-phase skill agent.</td></tr>
              <tr><td style={tdCode}>execute_input(user_input) → str</td><td style={td}>Run Phase 1 (or skip) then Phase 2. Returns final response.</td></tr>
              <tr><td style={tdCodeLast}>active_skills() → list[str]</td><td style={tdLast}>Names of skills activated in this session.</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Common Errors ──────────────────────────────────────────── */}
      <Section id="errors" title="Common Errors">
        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 8 }}>
          ValueError: Skill 'X' lists tool 'Y' in allowed-tools but it could not be resolved
        </h3>
        <p style={p}>
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>Y</code> is a built-in tool but no <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>ToolRegistry</code> was provided. Fix:
        </p>
        <CodeBlock
          python={`# Wrong — no tool_registry, built-ins invisible
registry = SkillRegistry.from_directory("skills/")

# Correct
registry = SkillRegistry.from_directory(
    "skills/",
    tool_registry=ToolRegistry.with_builtins(),
)

# Also correct for single skill
registry = SkillRegistry(tool_registry=ToolRegistry.with_builtins())
registry.load("skills/math-solver")`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 8, marginTop: 28 }}>
          ValueError: No skills found in '...'
        </h3>
        <p style={p}>
          <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>from_directory()</code> was pointed at the skill folder instead of its parent. It scans for <em>subdirectories</em> that contain a <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>SKILL.md</code>:
        </p>
        <CodeBlock
          python={`# Wrong — math-solver/ has no subdirs with SKILL.md
registry = SkillRegistry.from_directory("skills/math-solver")

# Correct — use parent for from_directory, or .load() for a single skill
registry = SkillRegistry(tool_registry=ToolRegistry.with_builtins())
registry.load("skills/math-solver")`}
        />

        <h3 style={{ color: '#e6edf3', fontSize: '1.05rem', fontWeight: 600, marginBottom: 8, marginTop: 28 }}>
          ValueError: SkillRegistry is empty
        </h3>
        <p style={p}>
          This error comes from <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>SkillAgent</code> when the registry loaded zero skills.
          Same root cause as above — check the path passed to <code style={{ color: '#79c0ff', fontFamily: 'monospace' }}>from_directory()</code>.
        </p>
      </Section>
    </DocLayout>
  )
}
