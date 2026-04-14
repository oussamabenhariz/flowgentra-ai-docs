import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'human-in-loop-node', label: 'HumanInTheLoop Node' },
  { id: 'approval-workflows', label: 'Approval Workflows' },
  { id: 'intervention-points', label: 'Intervention Points' },
  { id: 'feedback-loops', label: 'Feedback & Corrections' },
]

export default function HumanInLoopGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Human-in-the-Loop Workflows
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Human-in-the-loop (HITL) workflows let humans intervene in automated processes. Use this for quality control, safety checks, or when automation can't handle edge cases.
      </p>

      <Section id="human-in-loop-node" title="HumanInTheLoop Node">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          The <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }}>HumanInTheLoop</code> node pauses execution and waits for human approval before continuing.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::HumanInTheLoop;

#[derive(State)]
struct MyState {
    task: String,
    approved: Option<bool>,
    human_feedback: Option<String>,
}

let human_node = HumanInTheLoop::new(|state: &MyState| {
    format!("Task: {}\\nApprove this action?", state.task)
});

let graph = StateGraph::<MyState>::builder()
    .add_node("process", process_fn)
    .add_node("human_review", human_node)
    .add_node("execute", execute_fn)
    .add_edge("process", "human_review")
    .add_conditional_edge("human_review",
        |state| if state.approved.unwrap_or(false) { "execute" } else { "process" })
    .build()?;`}
          python={`from flowgentra_ai.nodes import HumanInTheLoop
from typing import TypedDict, Optional

class MyState(TypedDict):
    task: str
    approved: Optional[bool]
    human_feedback: Optional[str]

def review_prompt(state: MyState) -> str:
    return f"Task: {state['task']}\\nApprove this action?"

human_node = HumanInTheLoop(review_prompt)

builder = StateGraph(MyState)
builder.add_node("process", process_fn)
builder.add_node("human_review", human_node)
builder.add_node("execute", execute_fn)
builder.add_edge("process", "human_review")
builder.add_conditional_edge("human_review",
    lambda state: "execute" if state.get("approved") else "process")
graph = builder.compile()`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>HumanInTheLoop Parameters</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameter</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Default</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>prompt_function</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>function</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Function that generates the review prompt from the current state</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>timeout</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Maximum time to wait for human response (seconds)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>default_action</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>"reject"</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Action to take if timeout occurs ("approve", "reject", or "escalate")</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>notification_channel</td>
                <td style={{ padding: '8px' }}>str</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Channel for sending notifications (email, slack, etc.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="approval-workflows" title="Approval Workflows">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Common patterns for human approval in automated workflows.
        </p>
        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Content Moderation</h3>
        <CodeBlock
          python={`def moderate_content(state):
    content = state["generated_content"]
    # Check for sensitive topics
    if contains_sensitive_topics(content):
        return {**state, "needs_review": True}
    return {**state, "needs_review": False}

def human_review(state):
    if state["needs_review"]:
        # Pause for human review
        return HumanInTheLoop.review(
            f"Review content: {state['generated_content'][:200]}..."
        )
    return state

# Graph: generate -> moderate -> human_review -> publish`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Content Moderation Functions</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Function</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>contains_sensitive_topics(content)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>content: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>bool</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Checks if content contains sensitive or inappropriate topics</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>HumanInTheLoop.review(prompt)</td>
                <td style={{ padding: '8px' }}>prompt: str</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>Initiates human review with the given prompt and returns approval decision</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Code Deployment</h3>
        <CodeBlock
          python={`def deploy_check(state):
    changes = state["code_changes"]
    risk_level = assess_risk(changes)

    if risk_level == "high":
        return {**state, "needs_approval": True}
    elif risk_level == "medium":
        return {**state, "needs_approval": True, "auto_approve": True}
    else:
        return {**state, "needs_approval": False}

# High-risk changes require explicit approval
# Medium-risk can auto-approve after 24h timeout
# Low-risk deploys automatically`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Code Deployment Functions</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Function</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>assess_risk(changes)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>changes: List[str]</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Assesses risk level of code changes ("low", "medium", "high")</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>deploy_check(state)</td>
                <td style={{ padding: '8px' }}>state: dict</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>Evaluates deployment state and sets approval requirements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="intervention-points" title="Intervention Points">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Strategic places to insert human intervention in your workflows.
        </p>
        <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: '#e6edf3' }}>Before external actions:</strong> API calls, database writes, file operations</li>
          <li><strong style={{ color: '#e6edf3' }}>Quality gates:</strong> After content generation, before publishing</li>
          <li><strong style={{ color: '#e6edf3' }}>Error recovery:</strong> When automated retries fail</li>
          <li><strong style={{ color: '#e6edf3' }}>Edge cases:</strong> When confidence scores are low</li>
          <li><strong style={{ color: '#e6edf3' }}>Cost controls:</strong> Before expensive operations</li>
        </ul>
        <CodeBlock
          python={`def confidence_check(state):
    score = state.get("confidence", 0)
    if score < 0.8:
        return {**state, "needs_human": True,
                "reason": f"Low confidence: {score:.2f}"}
    return {**state, "needs_human": False}

def human_intervention(state):
    if state.get("needs_human"):
        reason = state.get("reason", "Manual review required")
        return HumanInTheLoop.review(f"Review needed: {reason}")
    return state`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Intervention Functions</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Function</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>confidence_check(state)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>state: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Checks confidence score and flags for human intervention if below threshold</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>human_intervention(state)</td>
                <td style={{ padding: '8px' }}>state: dict</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>Handles human intervention workflow based on state flags</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="feedback-loops" title="Feedback & Corrections">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use human feedback to improve future automation.
        </p>
        <CodeBlock
          python={`def collect_feedback(state):
    if state.get("human_feedback"):
        feedback = state["human_feedback"]
        # Store feedback for model training
        save_feedback(feedback, state["original_input"])

        # Update the response based on feedback
        corrected_response = apply_feedback_corrections(
            state["generated_response"], feedback
        )
        return {**state, "final_response": corrected_response}

    return {**state, "final_response": state["generated_response"]}

def apply_feedback_corrections(response, feedback):
    # Use feedback to improve response
    # Could involve another LLM call or rule-based corrections
    return improved_response`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Feedback Functions</h4>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Function</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>collect_feedback(state)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>state: dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>dict</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Processes human feedback and applies corrections to improve responses</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>save_feedback(feedback, input)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>feedback: str, input: str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Stores feedback data for future model training and improvement</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>apply_feedback_corrections(response, feedback)</td>
                <td style={{ padding: '8px' }}>response: str, feedback: str</td>
                <td style={{ padding: '8px' }}>str</td>
                <td style={{ padding: '8px' }}>Applies human feedback corrections to improve the response</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Human feedback creates a virtuous cycle: each intervention improves the system's ability to handle similar cases automatically in the future.
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