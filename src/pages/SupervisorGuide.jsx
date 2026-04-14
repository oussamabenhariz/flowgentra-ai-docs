import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview',    label: 'Overview' },
  { id: 'strategies',  label: 'Orchestration Strategies' },
  { id: 'sequential',  label: 'Sequential' },
  { id: 'parallel',    label: 'Parallel' },
  { id: 'llm-routed',  label: 'LLM-Routed' },
  { id: 'autonomous',  label: 'Autonomous' },
  { id: 'dynamic',     label: 'Dynamic' },
  { id: 'round-robin', label: 'Round Robin' },
  { id: 'hierarchical',label: 'Hierarchical' },
  { id: 'broadcast',   label: 'Broadcast + Vote' },
  { id: 'map-reduce',  label: 'Map-Reduce' },
  { id: 'conditional', label: 'Conditional Routing' },
  { id: 'retry',       label: 'Retry Fallback' },
  { id: 'debate',      label: 'Debate' },
  { id: 'advanced',    label: 'Strategy Comparison' },
  { id: 'yaml',        label: 'Config-Driven Supervisor' },
]

export default function SupervisorGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={h1}>Multi-Agent Systems</h1>
      <p style={lead}>
        Build systems where multiple specialized agents collaborate to solve complex tasks.
        Flowgentra's Supervisor orchestrates agent execution with 11 built-in strategies.
      </p>

      <Section id="overview" title="Overview">
        <p style={muted}>
          A <strong style={{ color: '#e6edf3' }}>Supervisor</strong> is a controller that manages a set of child agents.
          It decides which agent runs next, when to stop, and how to merge results from multiple agents.
        </p>
        <p style={muted}>
          Each child agent is itself a graph — the Supervisor composes them into a higher-level workflow.
          You can nest Supervisors for hierarchical multi-agent architectures.
        </p>

        <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '20px 24px', marginTop: 16 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
            Architecture
          </div>
          <pre style={{ margin: 0, color: '#8b949e', fontSize: '0.875rem', lineHeight: 2, fontFamily: 'JetBrains Mono, monospace' }}>{`Supervisor
├── Strategy (Sequential | Parallel | LLMRouted | ...)
├── Child Agent A  ─── graph with nodes + state
├── Child Agent B  ─── graph with nodes + state
└── Child Agent C  ─── graph with nodes + state

State flows: Supervisor state → child state → merged back`}</pre>
        </div>
      </Section>

      <Section id="strategies" title="Orchestration Strategies">
        <p style={muted}>Flowgentra ships with 11 strategies. Choose based on your use case:</p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr>
                {['Strategy', 'Description', 'Best for'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#8b949e', fontWeight: 600, fontSize: '0.8rem' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['sequential()', 'Run children in order, one at a time', 'Pipelines, step-by-step research'],
                ['parallel()', 'Run all children simultaneously', 'Independent tasks, fan-out patterns'],
                ['autonomous()', 'Loop until required outputs are present', 'Self-directed research agents'],
                ['dynamic()', 'LLM decides which child runs next', 'Complex routing, unknown paths'],
                ['round_robin()', 'Distribute tasks in rotation', 'Load balancing, fair scheduling'],
                ['hierarchical()', 'Nested supervisors', 'Team-of-teams architectures'],
                ['broadcast()', 'Send to all, pick best response', 'Ensembling, quality voting'],
                ['map_reduce()', 'Split input, process chunks, merge', 'Document analysis, bulk tasks'],
                ['conditional_routing()', 'Route based on state conditions', 'Business rule-driven flows'],
                ['retry_fallback()', 'Try children in order until success', 'Fault-tolerant, degraded modes'],
                ['debate()', 'Agents argue, then reach consensus', 'Complex reasoning, fact-checking'],
              ].map(([strat, desc, use], ri) => (
                <tr key={strat} style={{ background: ri % 2 === 0 ? 'transparent' : '#0a0f14' }}>
                  <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{strat}</td>
                  <td style={{ padding: '10px 14px', color: '#e6edf3' }}>{desc}</td>
                  <td style={{ padding: '10px 14px', color: '#8b949e' }}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="sequential" title="Sequential — Pipeline of Agents">
        <p style={muted}>
          The simplest strategy: agents run one after the other. The output state of one becomes the input of the next.
          Great for research → summarize → format pipelines.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::prelude::*;
use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy};

// Two simple agents
fn research_agent() -> impl GraphAgent {
    StateGraph::<ResearchState>::builder()
        .add_node("search", search_node)
        .set_entry("search")
        .build()
        .unwrap()
}

fn summarize_agent() -> impl GraphAgent {
    StateGraph::<ResearchState>::builder()
        .add_node("summarize", summarize_node)
        .set_entry("summarize")
        .build()
        .unwrap()
}

#[tokio::main]
async fn main() -> Result<()> {
    let config = SupervisorNodeConfig::new("pipeline")
        .with_children(vec!["researcher", "summarizer"])
        .with_strategy(OrchestrationStrategy::sequential());

    let mut sup = Supervisor::from_config(config);
    sup.add_agent("researcher", research_agent());
    sup.add_agent("summarizer", summarize_agent());

    let state = ResearchState {
        query: "Latest advances in Rust async runtimes".into(),
        ..Default::default()
    };

    let result = sup.run(state).await?;
    println!("{}", result.summary);
    Ok(())
}`}
          python={`from flowgentra_ai.supervision import Supervisor, SupervisorNodeConfig, OrchestrationStrategy
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai import State

# Define two simple agents
def make_research_agent():
    def search(state: State) -> State:
        # ... call search API, LLM, etc.
        state["findings"] = f"Research results for: {state.get('query', '')}"
        return state

    builder = StateGraph()
    builder.add_node("search", search)
    builder.set_entry_point("search")
    builder.add_edge("search", END)
    return builder.compile()

def make_summarize_agent():
    def summarize(state: State) -> State:
        findings = state.get("findings", "")
        state["summary"] = f"Summary: {findings[:100]}..."
        return state

    builder = StateGraph()
    builder.add_node("summarize", summarize)
    builder.set_entry_point("summarize")
    builder.add_edge("summarize", END)
    return builder.compile()

# Create supervisor with sequential strategy
config = SupervisorNodeConfig(
    name="pipeline",
    children=["researcher", "summarizer"],
)
config.set_strategy(OrchestrationStrategy.sequential())

sup = Supervisor.from_config(config)
sup.add_agent("researcher", make_research_agent())
sup.add_agent("summarizer", make_summarize_agent())

initial = State({"query": "Latest advances in Rust async runtimes"})
result = sup.run(initial)
print(result.get("summary"))`}
        />
      </Section>

      <Section id="parallel" title="Parallel — Fan-Out / Fan-In">
        <p style={muted}>
          Run all child agents simultaneously and merge their results. The merge strategy controls how state is combined.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy};

let config = SupervisorNodeConfig::new("parallel-research")
    .with_children(vec!["web-agent", "db-agent", "kg-agent"])
    .with_strategy(OrchestrationStrategy::parallel())
    .with_merge_strategy(ParallelMergeStrategy::deep_merge())
    .with_max_concurrent(3)
    .with_child_timeout_ms(10_000);`}
          python={`from flowgentra_ai.supervision import (
    Supervisor, SupervisorNodeConfig,
    OrchestrationStrategy, ParallelMergeStrategy,
)

config = SupervisorNodeConfig(
    name="parallel-research",
    children=["web-agent", "db-agent", "kg-agent"],
)
config.set_strategy(OrchestrationStrategy.parallel())
config.set_merge_strategy(ParallelMergeStrategy.deep_merge())
config.set_max_concurrent(3)
config.set_child_timeout_ms(10_000)

sup = Supervisor.from_config(config)
sup.add_agent("web-agent", make_web_agent())
sup.add_agent("db-agent",  make_db_agent())
sup.add_agent("kg-agent",  make_kg_agent())

result = sup.run(initial_state)`}
        />

        <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '16px 20px', marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 10, fontSize: '0.875rem' }}>Merge Strategies</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['ParallelMergeStrategy.first_success()', 'Use result from whichever agent finishes first successfully'],
              ['ParallelMergeStrategy.latest()',        'Use result from the last agent to finish'],
              ['ParallelMergeStrategy.deep_merge()',    'Deep-merge all state dicts (new keys win, lists append)'],
            ].map(([name, desc]) => (
              <div key={name} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                <code style={inlineCode}>{name}</code>
                <span style={{ color: '#8b949e', fontSize: '0.875rem' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="llm-routed" title="LLM-Routed — Dynamic Dispatch">
        <p style={muted}>
          The supervisor calls an LLM to decide which agent runs next. The router can see the current state and choose dynamically.
          This is the most flexible strategy for complex, unknown workflows.
        </p>
        <CodeBlock
          rust={`// With router function
fn router(state: &AgentState) -> &'static str {
    // Return agent name or "FINISH"
    if state.needs_more_research { "researcher" }
    else if state.needs_formatting  { "formatter" }
    else                            { "FINISH" }
}

let sup = Supervisor::with_router(router)
    .add_agent("researcher", research_agent)
    .add_agent("formatter", format_agent)
    .max_rounds(10);

let result = sup.run(initial_state).await?;`}
          python={`from flowgentra_ai.supervision import Supervisor

def router(state: State) -> str:
    """Return agent name or 'FINISH' to stop the loop."""
    if not state.get("findings"):
        return "researcher"
    if not state.get("summary"):
        return "summarizer"
    if not state.get("formatted"):
        return "formatter"
    return "FINISH"

sup = Supervisor(router)
sup.add_agent("researcher", make_research_agent())
sup.add_agent("summarizer", make_summarize_agent())
sup.add_agent("formatter",  make_format_agent())
sup.max_rounds(10)          # safety limit
sup.finish_marker("FINISH") # what the router returns to stop

result = sup.run(initial_state)`}
        />
        <Callout type="warn" title="Set a max_rounds limit">
          LLM-routed supervisors can loop indefinitely if the router never returns "FINISH".
          Always set <code style={inlineCode}>max_rounds()</code> to prevent runaway execution.
        </Callout>
      </Section>

      <Section id="autonomous" title="Autonomous — Self-Directed Teams">
        <p style={muted}>
          Loop until all required outputs are present. Agents autonomously decide what to do next to produce the outputs.
          Perfect for self-supervising research teams that know their responsibilities.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="research_team",
    children=["researcher", "analyst", "writer"],
)
config.set_strategy(OrchestrationStrategy.autonomous())
config.set_goal("Produce comprehensive market analysis")
config.set_required_outputs(["data", "analysis", "report"])
config.add_output_owner("data", "researcher")
config.add_output_owner("analysis", "analyst")
config.add_output_owner("report", "writer")
config.set_max_iterations(20)

result = sup.run(initial_state)
# Returns when all required outputs present`}
          rust={`use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy};

let config = SupervisorNodeConfig::new("research-team")
    .with_children(vec!["researcher", "analyst", "writer"])
    .with_strategy(OrchestrationStrategy::autonomous())
    .with_goal("Produce comprehensive market analysis")
    .with_required_outputs(vec!["data", "analysis", "report"])
    .with_max_iterations(20);`}
        />
        <div style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '16px 20px', marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 10, fontSize: '0.875rem' }}>When to use:</div>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20, fontSize: '0.875rem' }}>
            <li>Goal-oriented workflows with multiple stages</li>
            <li>Agents know their responsibilities</li>
            <li>Need to ensure all outputs eventually produced</li>
            <li>Self-supervising teams</li>
          </ul>
        </div>
      </Section>

      <Section id="dynamic" title="Dynamic — LLM-Based Routing">
        <p style={muted}>
          The LLM analyzes current state and decides which agent to call next. Provides interpretable adaptive routing for complex workflows.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy
from flowgentra_ai.llm import LLMConfig

config = SupervisorNodeConfig(
    name="research_coordinator",
    children=["researcher", "analyst", "writer"],
)
config.set_strategy(OrchestrationStrategy.dynamic())
config.set_selector_prompt("""
    Analyze the current state and decide which agent should run next:
    - researcher: When we need more data or sources
    - analyst: When we have enough data but need analysis
    - writer: When analysis is complete
    Return: agent name or 'FINISH'
""")
config.set_llm_config(LLMConfig("openai", "gpt-4"))
config.set_max_iterations(15)`}
          rust={`let config = SupervisorNodeConfig::new("research-coordinator")
    .with_children(vec!["researcher", "analyst", "writer"])
    .with_strategy(OrchestrationStrategy::dynamic())
    .with_selector_prompt("Choose next agent: researcher|analyst|writer|FINISH")
    .with_max_iterations(15);`}
        />
      </Section>

      <Section id="round-robin" title="Round Robin — Fair Load Balancing">
        <p style={muted}>
          Distribute tasks across agents in sequence. Each agent gets a fair turn. Perfect for load balancing across identical workers.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="load_balancer",
    children=["worker_1", "worker_2", "worker_3"],
)
config.set_strategy(OrchestrationStrategy.round_robin())
config.set_tasks_key("task_queue")  # State key with list of tasks
config.set_skip_on_error(True)      # Skip agent if it fails
config.set_rotation_strategy("sequential")  # or "random"`}
          rust={`let config = SupervisorNodeConfig::new("load-balancer")
    .with_children(vec!["worker_1", "worker_2", "worker_3"])
    .with_strategy(OrchestrationStrategy::round_robin())
    .with_tasks_key("task_queue")
    .with_skip_on_error(true);`}
        />
      </Section>

      <Section id="hierarchical" title="Hierarchical — Multi-Level Teams">
        <p style={muted}>
          Nest supervisors for team-of-teams architectures. Top-level supervisor delegates to sub-supervisors,
          each coordinating their own agents.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import Supervisor, SupervisorNodeConfig

# Build sub-teams
research_team = Supervisor(
    SupervisorNodeConfig(
        name="research_team",
        children=["web_researcher", "db_researcher"],
        strategy="sequential"
    )
)

analysis_team = Supervisor(
    SupervisorNodeConfig(
        name="analysis_team",
        children=["data_analyst", "trend_analyst"],
        strategy="parallel"
    )
)

# Hierarchical supervisor
config = SupervisorNodeConfig(
    name="executive_team",
    children=["research_team", "analysis_team"],
    strategy="sequential"
)

executive = Supervisor(config)
executive.add_agent("research_team", research_team)
executive.add_agent("analysis_team", analysis_team)`}
          rust={`// Team 1: research_team (sequential)
// Team 2: analysis_team (parallel)
// Executive: orchestrates teams
let exec = Supervisor::hierarchical()
    .add_subagent("research_team", research_supervisor)
    .add_subagent("analysis_team", analysis_supervisor)
    .with_coordination("executive");`}
        />
      </Section>

      <Section id="broadcast" title="Broadcast + Vote — Ensemble">
        <p style={muted}>
          Send the same task to all agents, then use voting or quality scoring to pick the best answer.
          Great for consensus and fact-checking.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy

config = SupervisorNodeConfig(
    name="fact_checker",
    children=["agent_1", "agent_2", "agent_3"],
)
config.set_strategy(OrchestrationStrategy.broadcast())
config.set_merge_strategy(ParallelMergeStrategy.majority_vote())
config.set_max_concurrent(3)
config.set_collect_stats(True)  # Track which agent won`}
          rust={`let config = SupervisorNodeConfig::new("fact-checker")
    .with_children(vec!["agent_1", "agent_2", "agent_3"])
    .with_strategy(OrchestrationStrategy::broadcast())
    .with_merge_strategy(MergeStrategy::majority_vote())
    .with_max_concurrent(3);`}
        />
      </Section>

      <Section id="map-reduce" title="Map-Reduce — Chunk Processing">
        <p style={muted}>
          Split large input into chunks, send each to a worker agent, then merge all results.
          Perfect for document analysis and bulk data processing.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="document_analyzer",
    children=["chunk_analyzer", "chunk_analyzer", "chunk_analyzer"],
)
config.set_strategy(OrchestrationStrategy.map_reduce())
config.set_chunk_size(1000)          # Characters or tokens per chunk
config.set_chunk_key("document")     # Input field to split
config.set_merge_strategy("concatenate")  # Combine all results`}
          rust={`let config = SupervisorNodeConfig::new("document-analyzer")
    .with_children(vec!["worker"; 3])
    .with_strategy(OrchestrationStrategy::map_reduce())
    .with_chunk_size(1000)
    .with_output_key("analysis");`}
        />
      </Section>

      <Section id="conditional" title="Conditional Routing — Business Rules">
        <p style={muted}>
          Route to agents based on state conditions. Define rules for which agent should handle each scenario.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

def router(state):
    urgency = state.get("urgency", "normal")
    if urgency == "critical":
        return "priority_handler"
    elif urgency == "high":
        return "fast_handler"
    else:
        return "standard_handler"

config = SupervisorNodeConfig(
    name="ticket_router",
    children=["priority_handler", "fast_handler", "standard_handler"],
)
config.set_strategy(OrchestrationStrategy.conditional_routing(router))`}
          rust={`fn router(state: &State) -> &'static str {
    match state.get_string("urgency").as_deref() {
        Some("critical") => "priority_handler",
        Some("high") => "fast_handler",
        _ => "standard_handler"
    }
}

let config = SupervisorNodeConfig::new("ticket-router")
    .with_strategy(OrchestrationStrategy::conditional_routing(router));`}
        />
      </Section>

      <Section id="retry" title="Retry Fallback — Resilient Pipelines">
        <p style={muted}>
          Try agents in sequence. If one fails, automatically move to the next. Excellent for fault-tolerant systems.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="api_call_fallback",
    children=["primary_api", "secondary_api", "fallback_service"],
    strategy="sequential"  # Try in order
)
config.set_strategy(OrchestrationStrategy.retry_fallback())
config.set_max_retries(2)           # Retries per agent
config.set_backoff_ms(1000)         # Wait between retries
config.set_skip_on_error(False)     # Progress to next on error`}
          rust={`let config = SupervisorNodeConfig::new("api-fallback")
    .with_children(vec!["primary", "secondary", "fallback"])
    .with_strategy(OrchestrationStrategy::retry_fallback())
    .with_max_retries(2)
    .with_backoff_ms(1000);`}
        />
      </Section>

      <Section id="debate" title="Debate — Consensus Building">
        <p style={muted}>
          Multiple agents generate different answers. Then a moderator agent synthesizes a final consensus.
          Great for complex reasoning and fact-checking.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="debate_moderator",
    children=["perspective_a", "perspective_b", "perspective_c", "moderator"],
)
config.set_strategy(OrchestrationStrategy.debate())
config.set_debaters(["perspective_a", "perspective_b", "perspective_c"])
config.set_moderator("moderator")
config.set_num_rounds(2)            # Debate rounds
config.set_synthesis_prompt("Synthesize the best answer from all perspectives")`}
          rust={`let config = SupervisorNodeConfig::new("debate")
    .with_strategy(OrchestrationStrategy::debate())
    .with_debaters(vec!["perspective_a", "perspective_b", "perspective_c"])
    .with_moderator("moderator")
    .with_num_rounds(2);`}
        />
      </Section>

      <Section id="advanced" title="Strategy Comparison Matrix">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
            <thead>
              <tr>
                {['Strategy', 'Execution', 'Merge', 'Best For', 'Complexity'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#8b949e', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Sequential', 'One-by-one', 'Latest', 'Pipelines', 'Low'],
                ['Parallel', 'Simultaneous', 'Configurable', 'Independent tasks', 'Medium'],
                ['Autonomous', 'Self-directed', 'Until complete', 'Self-supervising', 'High'],
                ['Dynamic', 'LLM-routed', 'Dynamic', 'Complex logic', 'High'],
                ['Round Robin', 'Fair distribution', 'Per-agent', 'Load balancing', 'Low'],
                ['Hierarchical', 'Nested', 'Per-level', 'Team-of-teams', 'Very High'],
                ['Broadcast', 'All same', 'Vote/score', 'Consensus', 'Medium'],
                ['Map-Reduce', 'Parallel chunks', 'Merged', 'Bulk data', 'High'],
                ['Conditional', 'Rule-based', 'Latest', 'Business rules', 'Medium'],
                ['Retry', 'Sequential + fallback', 'Latest', 'Fault-tolerant', 'Medium'],
                ['Debate', 'Multi-perspective', 'Synthesis', 'Complex reasoning', 'Very High'],
              ].map(([strat, exec, merge, best, complexity], ri) => (
                <tr key={strat} style={{ background: ri % 2 === 0 ? 'transparent' : '#0a0f14' }}>
                  <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{strat}</td>
                  <td style={{ padding: '10px 14px', color: '#e6edf3' }}>{exec}</td>
                  <td style={{ padding: '10px 14px', color: '#8b949e' }}>{merge}</td>
                  <td style={{ padding: '10px 14px', color: '#8b949e' }}>{best}</td>
                  <td style={{ padding: '10px 14px', color: '#8b949e' }}>{complexity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="yaml" title="Config-Driven Supervisor (YAML)">
        <p style={muted}>
          For production deployments, define your multi-agent topology in YAML.
          This lets you iterate on agent composition without code changes.
        </p>
        <CodeBlock forceLang="yaml" rust={`name: research-pipeline
type: supervisor

supervisor:
  strategy: sequential
  children:
    - researcher
    - summarizer
    - formatter

  # Optional: timeout per child (ms)
  child_timeout_ms: 15000
  # Optional: collect per-agent stats
  collect_stats: true

agents:
  researcher:
    type: graph
    python_handler_module: agents.researcher
    graph:
      entry: search
      nodes:
        - name: search
          handler: search_handler
      edges:
        - from: search
          to: __end__

  summarizer:
    type: graph
    python_handler_module: agents.summarizer
    graph:
      entry: summarize
      nodes:
        - name: summarize
          handler: summarize_handler
      edges:
        - from: summarize
          to: __end__`} />

        <CodeBlock python={`from flowgentra_ai.agent import Agent

# Load the entire multi-agent pipeline from YAML
pipeline = Agent.from_config_path("research-pipeline.yaml")
pipeline.set_state("query", "Advances in multi-agent AI systems")

result = pipeline.run()
print(result.get("formatted_report"))`} />

        <Callout type="tip" title="Nested supervisors">
          You can nest supervisors by making one child agent itself a supervisor config.
          This enables hierarchical team-of-teams architectures.
        </Callout>
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 52 }}>
      <h2 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  )
}

function Callout({ type, title, children }) {
  const colors = {
    info: { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', text: '#58a6ff' },
    tip:  { bg: 'rgba(63,185,80,0.1)',  border: 'rgba(63,185,80,0.4)',  text: '#3fb950' },
    warn: { bg: 'rgba(210,153,34,0.1)', border: 'rgba(210,153,34,0.4)', text: '#d29922' },
  }
  const c = colors[type] || colors.info
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8, padding: '14px 18px', marginTop: 16 }}>
      {title && <div style={{ fontWeight: 600, color: c.text, marginBottom: 6, fontSize: '0.9rem' }}>{title}</div>}
      <div style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65 }}>{children}</div>
    </div>
  )
}

const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.7, fontSize: '1.0625rem' }
const muted = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const inlineCode = { background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 6px', fontSize: '0.85em', fontFamily: 'JetBrains Mono, monospace' }
