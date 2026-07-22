import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'breakpoints', label: 'Breakpoints (interrupt_before/after)' },
  { id: 'in-node-interrupt', label: 'In-Node Interrupt' },
  { id: 'command', label: 'Command (unified resume)' },
  { id: 'python-node-limits', label: 'Python Node Limitations' },
]

export default function HumanInLoopGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Human-in-the-Loop Workflows
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Human-in-the-loop (HITL) pauses a graph run so a human can inspect or supply a value, then
        resumes execution — used for approvals, corrections, or anything automation can't safely
        decide alone. Flowgentra has two pause mechanisms and three ways to resume; this page
        covers both, and is accurate to the real API (verified against the test suite, not aspirational).
      </p>

      <Section id="breakpoints" title="Breakpoints: interrupt_before / interrupt_after">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Mark a node on the builder and the run pauses right before (or after) it executes —
          no code inside the node needs to know about the pause. Use this when the decision to
          pause doesn't depend on the node's own logic (e.g. "always review before publish").
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::state_graph::{StateGraph, END};

let graph = StateGraph::<PubState>::builder()
    .add_node("draft", draft_fn)
    .add_node("publish", publish_fn)
    .set_entry_point("draft")
    .add_edge("draft", "publish")
    .add_edge("publish", END)
    .interrupt_before("publish")
    .set_checkpointer(Arc::new(checkpointer))
    .compile()?;

// First call pauses before "publish" runs.
let err = graph.invoke_with_id("t1".into(), initial_state).await.unwrap_err();
// StateGraphError::InterruptedAtBreakpoint { node: "publish" }

// Resume — continues past the breakpoint instead of re-triggering it.
let final_state = graph.resume("t1").await?;`}
          python={`from flowgentra_ai.graph import StateGraph, END

builder = StateGraph(PubState)
builder.add_node("draft", draft_fn)
builder.add_node("publish", publish_fn)
builder.set_entry_point("draft")
builder.add_edge("draft", "publish")
builder.add_edge("publish", END)
builder.interrupt_before("publish")
builder.set_checkpointer("./checkpoints")  # or set_sqlite_checkpointer / set_postgres_checkpointer
graph = builder.compile()

try:
    graph.invoke_with_thread("t1", initial_state)
except Exception:
    pass  # paused before "publish"

# Resume — continues past the breakpoint instead of re-triggering it.
final_state = graph.resume("t1")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>interrupt_after</code> works
          the same way but pauses once the named node has finished, before its successors run.
        </p>
      </Section>

      <Section id="in-node-interrupt" title="In-Node Interrupt">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          When the decision to pause depends on the node's own logic — e.g. "only ask for
          approval if the draft mentions a competitor" — raise an interrupt from inside the node
          instead of using a static breakpoint. The state at node entry is checkpointed; resuming
          re-runs that same node so it can read whatever was injected.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::core::state_graph::error::interrupt;

async fn gate(state: &ApprovalState, _ctx: &Context) -> Result<ApprovalStateUpdate> {
    match &state.approval {
        Some(answer) => Ok(update! { approved: answer == "yes" }),
        None => Err(interrupt(serde_json::json!({
            "question": "Approve this draft?",
            "doc": state.doc,
        }))),
    }
}
// Run pauses with StateGraphError::InterruptedByNode { node, payload }.
// Resume with resume_with_update(thread_id, update) to inject the answer —
// the "gate" node re-runs and reads state.approval.`}
          python={`from flowgentra_ai import NodeInterrupt

def gate(state):
    if not state["approval"]:
        raise NodeInterrupt({"question": "Approve this draft?", "doc": state["doc"]})
    return {**state, "approved": state["approval"] == "yes"}

builder.add_node("gate", gate)
builder.set_checkpointer("./checkpoints")
graph = builder.compile()

try:
    graph.invoke_with_thread("t1", {"doc": "draft-1", "approval": "", "approved": False})
except NodeInterrupt as e:
    payload = e.args[0]
    print(payload["question"], payload["doc"])

# Inject the human's answer — "gate" re-runs and reads state["approval"].
result = graph.resume_with_state("t1", {"approval": "yes"})`}
        />
      </Section>

      <Section id="command" title="Command: unified resume">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>Command</code> unifies
          the three things you may want to do when resuming — mirrors LangGraph's
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>Command(resume=, update=, goto=)</code>:
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>update</code> — merge a partial state update before resuming (same as <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume_with_state</code>), validated against the schema.</li>
          <li><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>goto</code> — resume at an arbitrary node instead of the checkpoint's natural successor.</li>
          <li><code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume</code> — hand a value to the paused node via its context (Rust-authored nodes only — see below).</li>
        </ul>
        <CodeBlock
          rust={`use flowgentra_ai::core::state_graph::Command;

// Skip straight to "cleanup", ignoring what the checkpoint says comes next.
let state = graph.resume_with_command("t1", Command::default().with_goto("cleanup")).await?;

// Hand a value to the paused node; it reads ctx.resume_value().
let state = graph.resume_with_command("t1", Command::resume(serde_json::json!("yes"))).await?;`}
          python={`from flowgentra_ai.graph import Command

# Skip straight to "cleanup", ignoring what the checkpoint says comes next.
result = graph.resume_command("t1", Command(goto="cleanup"))

# Give a Python node its answer — via update (see limitation below).
result = graph.resume_command("t1", Command(update={"approval": "yes"}))

# An unknown update key or goto target raises immediately, before touching state.
try:
    graph.resume_command("t1", Command(update={"nope": 1}))
except KeyError as e:
    print(e)  # "key 'nope' is not declared in the state schema"`}
        />
      </Section>

      <Section id="python-node-limits" title="Python node limitation: resume= vs update=">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Rust nodes receive a <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>Context</code> alongside
          state, so <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>Command.resume(value)</code> can
          reach them via <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>ctx.resume_value()</code>.
          Python node functions receive only <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>state: dict</code> —
          there's no context object today — so a <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume=</code> value
          never reaches a pure-Python node. For Python nodes, always hand the human's answer through{' '}
          <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>Command(update={'{'}"field": value{'}'})</code>{' '}
          (or the older <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3 }}>resume_with_state</code>) instead — both are
          fully supported and is what every example above uses.
        </p>
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}
