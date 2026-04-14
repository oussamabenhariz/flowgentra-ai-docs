import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'retry-nodes', label: 'Retry Nodes' },
  { id: 'timeout-nodes', label: 'Timeout Nodes' },
  { id: 'branching', label: 'Branching & Conditional Logic' },
  { id: 'parallel-execution', label: 'Parallel Execution' },
  { id: 'loop-nodes', label: 'Loop Nodes' },
  { id: 'subgraph-nodes', label: 'Subgraph Nodes' },
  { id: 'join-nodes', label: 'Join Nodes' },
  { id: 'error-handling', label: 'Error Handling Patterns' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function AdvancedNodesGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Advanced Node Types
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra provides sophisticated node types for complex workflow patterns including retry logic, timeouts, branching, parallel execution, and subgraph composition.
      </p>

      <Section id="overview" title="Overview">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          While basic nodes handle simple operations, advanced nodes enable complex workflow patterns:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Retry Nodes</strong> - Automatic retry with backoff strategies</li>
          <li><strong style={{ color: '#e6edf3' }}>Timeout Nodes</strong> - Protect against hanging operations</li>
          <li><strong style={{ color: '#e6edf3' }}>Branching</strong> - Conditional execution paths</li>
          <li><strong style={{ color: '#e6edf3' }}>Parallel Execution</strong> - Run multiple operations concurrently</li>
          <li><strong style={{ color: '#e6edf3' }}>Loop Nodes</strong> - Repeat operations until conditions met</li>
          <li><strong style={{ color: '#e6edf3' }}>Subgraphs</strong> - Compose complex workflows from smaller graphs</li>
          <li><strong style={{ color: '#e6edf3' }}>Join Nodes</strong> - Synchronize parallel branches</li>
        </ul>
      </Section>

      <Section id="retry-nodes" title="Retry Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Automatically retry failed operations with configurable backoff strategies.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::RetryNode;

let retry_node = RetryNode::new(3, BackoffStrategy::Exponential);
graph.add_node("unreliable_task", retry_node.wrap(my_fallible_node))?;`}
          python={`from flowgentra_ai.nodes import RetryNode
from flowgentra_ai.graph import StateGraph

def unreliable_api_call(state):
    # Simulate occasional failures
    if random.random() < 0.3:
        raise Exception("API temporarily unavailable")
    state["result"] = "Success!"
    return state

# Wrap with retry logic
retry_node = RetryNode(
    max_retries=3,
    backoff_strategy="exponential",  # or "linear", "fixed"
    base_delay=1.0  # seconds
)

builder = StateGraph(MyState)
builder.add_node("api_call", retry_node.wrap(unreliable_api_call))`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Configuration Options:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><code>max_retries</code>: Maximum retry attempts (default: 3)</li>
          <li><code>backoff_strategy</code>: "exponential", "linear", or "fixed"</li>
          <li><code>base_delay</code>: Initial delay between retries (default: 1.0 seconds)</li>
          <li><code>max_delay</code>: Maximum delay cap (default: 60.0 seconds)</li>
        </ul>
      </Section>

      <Section id="timeout-nodes" title="Timeout Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Protect against hanging operations with configurable timeouts.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import TimeoutNode

def slow_operation(state):
    time.sleep(30)  # This might hang
    state["result"] = "Completed"
    return state

# Add timeout protection
timeout_node = TimeoutNode(timeout_seconds=10.0)

builder.add_node("slow_task", timeout_node.wrap(slow_operation))`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>When to use timeouts:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>External API calls</li>
          <li>File I/O operations</li>
          <li>Long-running computations</li>
          <li>Network requests</li>
        </ul>
      </Section>

      <Section id="branching" title="Branching & Conditional Logic">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Execute different paths based on state conditions.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import BranchConfig
from flowgentra_ai.types import Condition

def classify_query(state):
    query = state["query"].lower()
    if "calculate" in query:
        state["category"] = "math"
    elif "search" in query:
        state["category"] = "search"
    else:
        state["category"] = "general"
    return state

def math_handler(state):
    # Handle math queries
    return state

def search_handler(state):
    # Handle search queries
    return state

# Configure branching
branch_config = BranchConfig(
    branches=[
        (Condition.field_equals("category", "math"), "math_handler"),
        (Condition.field_equals("category", "search"), "search_handler")
    ],
    default_branch="general_handler"
)

builder.add_node("classify", classify_query)
builder.add_node("math", math_handler)
builder.add_node("search", search_handler)
builder.add_node("general", general_handler)
builder.add_node("branch", branch_config)

builder.add_edge("classify", "branch")
# Branch node automatically routes to appropriate handler`}
        />
      </Section>

      <Section id="parallel-execution" title="Parallel Execution">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Run multiple nodes concurrently and merge results.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import ParallelNodeConfig, MergeStrategy

# Define parallel tasks
def analyze_sentiment(state):
    state["sentiment"] = analyze_text_sentiment(state["text"])
    return state

def extract_keywords(state):
    state["keywords"] = extract_text_keywords(state["text"])
    return state

def summarize_text(state):
    state["summary"] = summarize_text_content(state["text"])
    return state

# Configure parallel execution
parallel_config = ParallelNodeConfig(
    nodes=["sentiment_analysis", "keyword_extraction", "summarization"],
    merge_strategy=MergeStrategy.CONCATENATE  # or OVERWRITE, MERGE_MAP
)

builder.add_node("sentiment_analysis", analyze_sentiment)
builder.add_node("keyword_extraction", extract_keywords)
builder.add_node("summarization", summarize_text)
builder.add_node("parallel_processor", parallel_config)

# All three nodes run in parallel
builder.add_edge("input_processor", "parallel_processor")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Merge Strategies:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><code>CONCATENATE</code>: Combine list fields</li>
          <li><code>OVERWRITE</code>: Last writer wins</li>
          <li><code>MERGE_MAP</code>: Deep merge dictionaries</li>
          <li><code>CUSTOM</code>: Provide custom merge function</li>
        </ul>
      </Section>

      <Section id="loop-nodes" title="Loop Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Repeat operations until a condition is met.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import LoopNodeConfig
from flowgentra_ai.types import Condition

def iterative_refinement(state):
    # Improve result iteratively
    current_score = evaluate_quality(state["result"])
    state["iterations"] = state.get("iterations", 0) + 1

    if current_score > 0.8 or state["iterations"] > 5:
        state["complete"] = True
    else:
        # Refine the result
        state["result"] = improve_result(state["result"])

    return state

# Configure loop
loop_config = LoopNodeConfig(
    body_node="refinement_step",
    exit_condition=Condition.field_equals("complete", True),
    max_iterations=10
)

builder.add_node("refinement_step", iterative_refinement)
builder.add_node("quality_loop", loop_config)`}
        />
      </Section>

      <Section id="subgraph-nodes" title="Subgraph Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Compose complex workflows from smaller graphs.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import SubgraphNodeConfig

# Define a subgraph for document processing
doc_builder = StateGraph(DocumentState)
doc_builder.add_node("load", load_document_node)
doc_builder.add_node("chunk", chunk_document_node)
doc_builder.add_node("embed", embed_chunks_node)
doc_builder.set_entry_point("load")
doc_builder.add_edge("load", "chunk")
doc_builder.add_edge("chunk", "embed")

document_processor = doc_builder.compile()

# Use as a node in larger workflow
subgraph_config = SubgraphNodeConfig(
    subgraph=document_processor,
    input_mapping={"document_path": "path"},  # Map outer state to inner
    output_mapping={"processed_chunks": "chunks"}  # Map inner results to outer
)

main_builder.add_node("process_documents", subgraph_config)`}
        />
      </Section>

      <Section id="join-nodes" title="Join Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Synchronize multiple parallel branches.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import JoinNodeConfig, JoinType

# After parallel processing, join results
join_config = JoinNodeConfig(
    join_type=JoinType.ALL,  # Wait for all branches
    merge_strategy=MergeStrategy.MERGE_MAP
)

builder.add_node("join_results", join_config)

# Connect parallel branches to join
builder.add_edge("branch_a", "join_results")
builder.add_edge("branch_b", "join_results")
builder.add_edge("branch_c", "join_results")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Join Types:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><code>ALL</code>: Wait for all incoming branches</li>
          <li><code>ANY</code>: Continue when any branch completes</li>
          <li><code>RACE</code>: Use result from first completed branch</li>
        </ul>
      </Section>

      <Section id="error-handling" title="Error Handling Patterns">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Combine nodes for robust error handling:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.nodes import RetryNode, TimeoutNode

# Chain error handling strategies
robust_node = RetryNode(
    max_retries=3,
    backoff_strategy="exponential"
).wrap(
    TimeoutNode(timeout_seconds=30.0).wrap(
        my_unreliable_operation
    )
)

builder.add_node("robust_operation", robust_node)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Circuit Breaker</h4>
        <CodeBlock
          python={`def circuit_breaker_wrapper(node_func, failure_threshold=5):
    failures = 0

    def wrapped(state):
        nonlocal failures
        if failures >= failure_threshold:
            raise Exception("Circuit breaker open")

        try:
            result = node_func(state)
            failures = 0  # Reset on success
            return result
        except Exception as e:
            failures += 1
            raise e

    return wrapped`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Progressive Retry</h4>
        <CodeBlock
          python={`# Start fast, then slow down
progressive_retry = RetryNode(
    max_retries=5,
    backoff_strategy="exponential",
    base_delay=0.1,  # Quick first retry
    max_delay=10.0   # Cap at 10 seconds
)`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Start simple</strong> - Begin with basic nodes and add complexity gradually</li>
          <li><strong style={{ color: '#e6edf3' }}>Test error cases</strong> - Thoroughly test retry logic, timeouts, and error conditions</li>
          <li><strong style={{ color: '#e6edf3' }}>Monitor performance</strong> - Parallel execution and retries can impact performance</li>
          <li><strong style={{ color: '#e6edf3' }}>Clear state management</strong> - Ensure state updates are predictable when using parallel execution and merging</li>
          <li><strong style={{ color: '#e6edf3' }}>Use appropriate timeouts</strong> - Set realistic timeouts based on expected operation duration</li>
          <li><strong style={{ color: '#e6edf3' }}>Handle partial failures</strong> - Design workflows to handle partial failures in parallel execution</li>
          <li><strong style={{ color: '#e6edf3' }}>Document complex logic</strong> - Use comments and clear naming for complex node configurations</li>
        </ul>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Common Patterns</h4>

        <h5 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 8, marginTop: 16 }}>Conditional Parallelism</h5>
        <CodeBlock
          python={`# Only run expensive operations if needed
def should_parallelize(state):
    return len(state["documents"]) > 10

parallel_config = ParallelNodeConfig(
    nodes=["expensive_analysis", "basic_processing"],
    condition=should_parallelize  # Only run in parallel when worthwhile
)`}
        />
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