import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'error-types', label: 'Error Types' },
  { id: 'retry-nodes', label: 'Retry Nodes' },
  { id: 'timeout-nodes', label: 'Timeout Nodes' },
  { id: 'fallback-nodes', label: 'Fallback Strategies' },
  { id: 'error-recovery', label: 'Error Recovery Patterns' },
  { id: 'monitoring', label: 'Error Monitoring' },
]

export default function ErrorHandlingGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Error Handling & Resilience
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Production agents must handle failures gracefully. Flowgentra provides comprehensive error handling with retries, timeouts, fallbacks, and recovery strategies.
      </p>

      <Section id="error-types" title="Error Types">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra categorizes errors to enable appropriate handling strategies.
        </p>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Error Type</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Examples</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Handling Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Transient</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Network timeouts, rate limits</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Retry with backoff</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Permanent</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Invalid API keys, bad requests</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Fail fast, don't retry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Recoverable</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Service temporarily down</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Retry with circuit breaker</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Logic Errors</td>
                <td style={{ padding: '8px' }}>Invalid state, assertion failures</td>
                <td style={{ padding: '8px' }}>Fallback to alternative path</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="retry-nodes" title="Retry Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Automatically retry failed operations with exponential backoff.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::{RetryNode, RetryConfig};
use std::time::Duration;

let retry_config = RetryConfig {
    max_attempts: 3,
    initial_delay: Duration::from_millis(100),
    max_delay: Duration::from_secs(10),
    backoff_multiplier: 2.0,
    retry_on: |error| {
        // Only retry transient errors
        matches!(error, FlowgentraError::NetworkError(_) |
                        FlowgentraError::TimeoutError(_))
    },
};

let retry_node = RetryNode::new(api_call_node, retry_config);

let graph = StateGraph::<MyState>::builder()
    .add_node("api_call", retry_node)
    .add_edge("api_call", "next_step")
    .build()?;`}
          python={`from flowgentra_ai.nodes import RetryNode
from flowgentra_ai.errors import NetworkError, TimeoutError
import time

def retry_config():
    return {
        "max_attempts": 3,
        "initial_delay": 0.1,  # seconds
        "max_delay": 10.0,
        "backoff_multiplier": 2.0,
        "retry_on": lambda error: isinstance(error, (NetworkError, TimeoutError))
    }

retry_node = RetryNode(api_call_node, retry_config())

builder = StateGraph(MyState)
builder.add_node("api_call", retry_node)
builder.add_edge("api_call", "next_step")
graph = builder.compile()`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>RetryConfig Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>max_attempts</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>3</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Maximum number of retry attempts</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>initial_delay</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>0.1</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Initial delay between retries (seconds)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>max_delay</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>10.0</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Maximum delay between retries (seconds)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>backoff_multiplier</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>2.0</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Multiplier for exponential backoff</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>retry_on</td>
                <td style={{ padding: '8px' }}>function</td>
                <td style={{ padding: '8px' }}>All errors</td>
                <td style={{ padding: '8px' }}>Function to determine which errors to retry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="timeout-nodes" title="Timeout Nodes">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Prevent slow operations from blocking your workflow indefinitely.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::{TimeoutNode, TimeoutConfig};
use std::time::Duration;

let timeout_config = TimeoutConfig {
    timeout: Duration::from_secs(30),
    on_timeout: |state| {
        // Log timeout and set error flag
        eprintln!("Operation timed out");
        state.set("timed_out", true);
        state
    },
};

let timeout_node = TimeoutNode::new(slow_operation_node, timeout_config);

let graph = StateGraph::<MyState>::builder()
    .add_node("operation", timeout_node)
    .add_conditional_edge("operation", |state| {
        if state.get("timed_out").unwrap_or(false) {
            "fallback"
        } else {
            "success"
        }
    })
    .build()?;`}
          python={`from flowgentra_ai.nodes import TimeoutNode
import asyncio

def timeout_config():
    return {
        "timeout": 30.0,  # seconds
        "on_timeout": lambda state: {
            **state,
            "timed_out": True,
            "error": "Operation timed out after 30 seconds"
        }
    }

timeout_node = TimeoutNode(slow_operation_node, timeout_config())

builder = StateGraph(MyState)
builder.add_node("operation", timeout_node)
builder.add_conditional_edge("operation",
    lambda state: "fallback" if state.get("timed_out") else "success")
graph = builder.compile()`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>TimeoutConfig Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>timeout</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>30.0</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Maximum time to wait before timing out (seconds)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>on_timeout</td>
                <td style={{ padding: '8px' }}>function</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Function called when timeout occurs, receives state and returns modified state</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="fallback-nodes" title="Fallback Strategies">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          When primary operations fail, try alternative approaches.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::nodes::FallbackNode;

let fallback_node = FallbackNode::new(vec![
    primary_api_call,     // Try this first
    backup_api_call,      // If primary fails, try this
    cached_response,      // If both fail, use cache
]);

let graph = StateGraph::<MyState>::builder()
    .add_node("api_call", fallback_node)
    .add_edge("api_call", "process_result")
    .build()?;`}
          python={`from flowgentra_ai.nodes import FallbackNode

fallback_node = FallbackNode([
    primary_api_call,     # Try this first
    backup_api_call,      # If primary fails, try this
    cached_response,      # If both fail, use cache
])

builder = StateGraph(MyState)
builder.add_node("api_call", fallback_node)
builder.add_edge("api_call", "process_result")
graph = builder.compile()`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Fallbacks are especially useful for external API calls where you have multiple providers or cached alternatives.
        </p>
      </Section>

      <Section id="error-recovery" title="Error Recovery Patterns">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Design your graphs to handle errors gracefully and recover when possible.
        </p>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Circuit Breaker Pattern</h3>
        <CodeBlock
          python={`class CircuitBreakerNode:
    def __init__(self, node, failure_threshold=5, recovery_timeout=60):
        self.node = node
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failures = 0
        self.last_failure_time = None
        self.state = "closed"  # closed, open, half-open

    def __call__(self, state):
        if self.state == "open":
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = "half-open"
            else:
                raise CircuitBreakerError("Circuit is open")

        try:
            result = self.node(state)
            if self.state == "half-open":
                self.state = "closed"
                self.failures = 0
            return result
        except Exception as e:
            self.failures += 1
            self.last_failure_time = time.time()
            if self.failures >= self.failure_threshold:
                self.state = "open"
            raise`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>CircuitBreakerNode Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>node</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Node</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>The node to wrap with circuit breaker protection</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>failure_threshold</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>5</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Number of failures before opening the circuit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>recovery_timeout</td>
                <td style={{ padding: '8px' }}>float</td>
                <td style={{ padding: '8px' }}>60.0</td>
                <td style={{ padding: '8px' }}>Time to wait before attempting recovery (seconds)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: '#e6edf3', fontSize: '1.25rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Graceful Degradation</h3>
        <CodeBlock
          python={`def robust_processing(state):
    try:
        # Try full processing
        return full_quality_processing(state)
    except Exception as e:
        try:
            # Fallback to basic processing
            return basic_processing(state)
        except Exception as e2:
            # Final fallback - return minimal result
            return {
                **state,
                "result": "Unable to process request",
                "error": str(e),
                "degraded": True
            }`}
        />
      </Section>

      <Section id="monitoring" title="Error Monitoring">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Track errors and performance to improve your system's reliability.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::observability::{ErrorTracker, MetricsCollector};

let error_tracker = ErrorTracker::new();
let metrics = MetricsCollector::new();

let graph = StateGraph::<MyState>::builder()
    .add_node("operation", operation_node)
    .with_error_tracking(error_tracker)
    .with_metrics(metrics)
    .build()?;

// Get error statistics
let stats = error_tracker.get_stats();
println!("Total errors: {}", stats.total_errors);
println!("Errors by type: {:?}", stats.errors_by_type);

// Get performance metrics
let perf = metrics.get_performance_stats();
println!("Average execution time: {}ms", perf.avg_execution_time_ms);`}
          python={`from flowgentra_ai.observability import ErrorTracker, MetricsCollector

error_tracker = ErrorTracker()
metrics = MetricsCollector()

builder = StateGraph(MyState)
builder.add_node("operation", operation_node)
builder.error_tracker = error_tracker
builder.metrics = metrics
graph = builder.compile()

# Get error statistics
stats = error_tracker.get_stats()
print(f"Total errors: {stats.total_errors}")
print(f"Errors by type: {stats.errors_by_type}")

# Get performance metrics
perf = metrics.get_performance_stats()
print(f"Average execution time: {perf.avg_execution_time_ms}ms")`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>ErrorTracker Methods</h4>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Method</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>get_stats()</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>ErrorStats</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Returns error statistics including total errors and errors by type</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>record_error(error)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>error: Exception</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Records an error for tracking and analysis</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>clear_stats()</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Clears all accumulated error statistics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>MetricsCollector Methods</h4>
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Method</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Parameters</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Returns</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>get_performance_stats()</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>PerformanceStats</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Returns performance metrics including execution times and throughput</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>record_execution_time(node_name, duration)</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>node_name: str, duration: float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Records execution time for a specific node</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>reset_metrics()</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Resets all performance metrics to initial state</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use error tracking and metrics to identify failure patterns and optimize your error handling strategies.
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