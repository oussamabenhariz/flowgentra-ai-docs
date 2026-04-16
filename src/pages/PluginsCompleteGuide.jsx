import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import Alert from '../components/Alert'
import Tabs from '../components/Tabs'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'why-plugins', label: 'Why Use Plugins?' },
  { id: 'plugin-types', label: 'Plugin Types' },
  { id: 'basic-plugin', label: 'Creating a Basic Plugin' },
  { id: 'hooks', label: 'Available Hooks' },
  { id: 'example-metrics', label: 'Example: Metrics Plugin' },
  { id: 'example-debug', label: 'Example: Debug Plugin' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'testing', label: 'Testing Plugins' },
  { id: 'api-reference', label: 'API Reference' },
  { id: 'next', label: 'Next Steps' },
]

export default function PluginsGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>
        Plugins System
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 32, lineHeight: 1.7, fontSize: '1.0625rem' }}>
        Extend Flowgentra's functionality without modifying core code. Plugins provide hooks into the execution lifecycle.
      </p>

      <section id="overview" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Overview</h2>
        <p style={prose}>
          The plugin system allows you to inject custom logic at key points in graph execution:
        </p>
        <ul style={ul}>
          <li>Before/after node execution</li>
          <li>On state updates</li>
          <li>On errors and exceptions</li>
          <li>During channel transitions</li>
          <li>Custom metrics collection</li>
        </ul>
        <p style={prose}>
          Plugins are loaded at graph initialization and participate in every execution. They're ideal for cross-cutting concerns like observability, validation, and instrumentation.
        </p>
      </section>

      <section id="why-plugins" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Why Use Plugins?</h2>
        
        <Alert type="tip" title="When to Use Plugins">
          <strong>✓ Use plugins for:</strong> Monitoring, logging, metrics, custom validation, authentication checks, state transformation
          <br/><br/>
          <strong>✗ Don't use for:</strong> Core business logic (use nodes), route decisions (use edges), state schema definition
        </Alert>

        <p style={prose}>
          Without plugins, you'd add instrumentation code to every node. With plugins, you write it once and reuse across all graphs.
        </p>

        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 20, marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>Example: Metrics Without Plugins (❌ Repetitive)</div>
          <CodeBlock python={`def node_a(state):
    start = time.time()
    try:
        result = expensive_operation(state)
        metrics.record('node_a_success', 1)
        return result
    except Exception as e:
        metrics.record('node_a_error', 1)
        raise
    finally:
        metrics.record('node_a_duration', time.time() - start)

def node_b(state):
    start = time.time()
    try:
        result = another_operation(state)
        metrics.record('node_b_success', 1)
        return result
    except Exception as e:
        metrics.record('node_b_error', 1)
        raise
    finally:
        metrics.record('node_b_duration', time.time() - start)
# Repeat for every node... very repetitive!`} />
        </div>

        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 20, marginTop: 16 }}>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>Example: Same With Plugin (✓ Clean)</div>
          <CodeBlock python={`class MetricsPlugin:
    def on_node_start(self, node_name, state):
        self.start_time = time.time()
    
    def on_node_end(self, node_name, state, result):
        duration = time.time() - self.start_time
        metrics.record(f'{node_name}_duration', duration)
        metrics.record(f'{node_name}_success', 1)
    
    def on_node_error(self, node_name, error):
        metrics.record(f'{node_name}_error', 1)

# Register once:
graph = builder.compile(plugins=[MetricsPlugin()])
# Now ALL nodes automatically tracked!`} />
        </div>
      </section>

      <section id="plugin-types" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Plugin Types</h2>
        <p style={prose}>Flowgentra plugins extend the <code style={inlineCode}>Plugin</code> base class:</p>
        
        <CodeBlock python={`from flowgentra_ai.plugins import Plugin

class MyPlugin(Plugin):
    """Base hooks available to override."""
    
    async def on_graph_start(self, graph_id, initial_state):
        """Called when graph execution begins."""
        pass
    
    async def on_node_start(self, node_name, state):
        """Called before a node executes."""
        pass
    
    async def on_node_end(self, node_name, state, output):
        """Called after node completes successfully."""
        pass
    
    async def on_node_error(self, node_name, error, state):
        """Called if node raises an exception."""
        pass
    
    async def on_channel_update(self, channel_name, value):
        """Called when a channel receives new data."""
        pass
    
    async def on_graph_end(self, graph_id, final_state, status):
        """Called when graph execution finishes."""
        pass`} />
      </section>

      <section id="basic-plugin" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Creating Your First Plugin</h2>
        
        <CodeBlock python={`import logging
from flowgentra_ai.plugins import Plugin
from datetime import datetime

class LoggingPlugin(Plugin):
    """Logs all node transitions."""
    
    def __init__(self, logger=None):
        self.logger = logger or logging.getLogger('flowgentra')
    
    async def on_node_start(self, node_name, state):
        self.logger.info(f"[{datetime.now()}] Starting node: {node_name}")
        self.logger.debug(f"State keys: {list(state.keys())}")
    
    async def on_node_end(self, node_name, state, output):
        self.logger.info(f"[{datetime.now()}] Finished node: {node_name}")
    
    async def on_node_error(self, node_name, error, state):
        self.logger.error(f"[{datetime.now()}] Error in {node_name}: {error}")

# Register the plugin:
graph = builder.compile(plugins=[LoggingPlugin()])

# Run the graph - all transitions will be logged
result = graph.invoke(initial_state)`} />

        <Alert type="info" title="Async Plugins">
          Plugin hooks are async. Use <code style={inlineCode}>await</code> if you call async functions inside hooks.
        </Alert>
      </section>

      <section id="hooks" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Available Hooks Reference</h2>
        
        <div style={{ overflowX: 'auto', marginTop: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #21262d' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3', fontWeight: 600 }}>Hook</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3', fontWeight: 600 }}>When Called</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3', fontWeight: 600 }}>Arguments</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['on_graph_start', 'Before graph execution begins', 'graph_id, initial_state'],
                ['on_node_start', 'Before a node runs', 'node_name, state'],
                ['on_node_end', 'After node succeeds', 'node_name, state, output'],
                ['on_node_error', 'If node raises exception', 'node_name, error, state'],
                ['on_channel_update', 'When channel receives data', 'channel_name, value'],
                ['on_graph_end', 'After graph execution finishes', 'graph_id, final_state, status'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                  <td style={{ padding: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#58a6ff', fontWeight: 500 }}>{row[0]}</td>
                  <td style={{ padding: '12px' }}>{row[1]}</td>
                  <td style={{ padding: '12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="example-metrics" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Metrics Collection Plugin</h2>
        
        <p style={prose}>
          Collect detailed metrics about graph execution without touching node code:
        </p>

        <CodeBlock python={`import time
from flowgentra_ai.plugins import Plugin
from collections import defaultdict

class MetricsPlugin(Plugin):
    """Collects execution metrics for all nodes."""
    
    def __init__(self):
        self.metrics = defaultdict(list)
        self.node_start_times = {}
    
    async def on_node_start(self, node_name, state):
        self.node_start_times[node_name] = time.time()
    
    async def on_node_end(self, node_name, state, output):
        duration = time.time() - self.node_start_times.pop(node_name, time.time())
        self.metrics[f'{node_name}_duration'].append(duration)
        self.metrics[f'{node_name}_success'] = self.metrics.get(f'{node_name}_success', 0) + 1
    
    async def on_node_error(self, node_name, error, state):
        self.node_start_times.pop(node_name, None)
        self.metrics[f'{node_name}_error'] = self.metrics.get(f'{node_name}_error', 0) + 1
    
    async def on_graph_end(self, graph_id, final_state, status):
        # Print summary
        print(f"\\n=== Metrics for {graph_id} ===")
        for metric_name, values in self.metrics.items():
            if isinstance(values, list):
                avg = sum(values) / len(values)
                print(f"{metric_name}: avg={avg:.3f}s, count={len(values)}")
            else:
                print(f"{metric_name}: {values}")
    
    def get_report(self):
        """Return metrics as dict for external storage."""
        return dict(self.metrics)

# Usage:
metrics_plugin = MetricsPlugin()
graph = builder.compile(plugins=[metrics_plugin])

# Run multiple times
for i in range(5):
    graph.invoke(initial_state)

# Retrieve report
report = metrics_plugin.get_report()
print(f"Total executions: {report.get('node_a_success', 0)}")`} />
      </section>

      <section id="example-debug" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Debug Plugin</h2>
        
        <CodeBlock python={`from flowgentra_ai.plugins import Plugin

class DebugPlugin(Plugin):
    """Prints detailed debug info during execution."""
    
    def __init__(self, verbose=False):
        self.verbose = verbose
    
    async def on_node_start(self, node_name, state):
        print(f"\\n>>> Entering node: {node_name}")
        if self.verbose and isinstance(state, dict):
            for key in list(state.keys())[:5]:  # Show first 5 keys
                val = state[key]
                if isinstance(val, str):
                    preview = val[:50] + ('...' if len(val) > 50 else '')
                    print(f"    {key}: {preview!r}")
    
    async def on_node_end(self, node_name, state, output):
        print(f"<<< Exiting node: {node_name}")
        if self.verbose and isinstance(output, dict):
            changed_keys = [k for k in output.keys() if output.get(k) != state.get(k)]
            if changed_keys:
                print(f"    Changed: {changed_keys}")
    
    async def on_node_error(self, node_name, error, state):
        print(f"!!! Error in node {node_name}: {type(error).__name__}: {error}")
    
    async def on_graph_end(self, graph_id, final_state, status):
        print(f"\\n=== Graph {graph_id} completed with status: {status} ===")

# Usage:
debug = DebugPlugin(verbose=True)
graph = builder.compile(plugins=[debug])
graph.invoke(initial_state)`} />
      </section>

      <section id="best-practices" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Best Practices</h2>
        
        <Alert type="warning" title="Performance Considerations">
          Plugins run on the execution path. Keep hooks fast to avoid slowing down graph execution. For expensive operations, consider async processing or event queuing.
        </Alert>

        <div style={{ marginTop: 20 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ fontWeight: 600, color: '#52b788', marginBottom: 8 }}>✓ DO</div>
            <ul style={ul}>
              <li>Keep plugin methods lightweight</li>
              <li>Use async for I/O operations</li>
              <li>Store state in instance variables</li>
              <li>Handle exceptions gracefully</li>
              <li>Use context managers for setup/teardown</li>
            </ul>
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 600, color: '#e63946', marginBottom: 8 }}>✗ DON'T</div>
            <ul style={ul}>
              <li>Block in plugin hooks (use async)</li>
              <li>Modify state directly (only observe)</li>
              <li>Throw exceptions from hooks</li>
              <li>Access private graph internals</li>
              <li>Store unlimited data (memory leak)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testing" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Testing Plugins</h2>
        
        <CodeBlock python={`import unittest
from unittest.mock import AsyncMock
from flowgentra_ai.plugins import Plugin

class TestMetricsPlugin(unittest.TestCase):
    async def test_on_node_success(self):
        """Test metrics recorded on success."""
        plugin = MetricsPlugin()
        
        # Simulate node execution
        await plugin.on_node_start('my_node', {'x': 1})
        await plugin.on_node_end('my_node', {'x': 1}, {'x': 2})
        
        # Verify metrics recorded
        self.assertIn('my_node_success', plugin.metrics)
        self.assertEqual(plugin.metrics['my_node_success'], 1)
    
    async def test_on_node_error(self):
        """Test error counting."""
        plugin = MetricsPlugin()
        
        error = ValueError("test error")
        await plugin.on_node_start('bad_node', {})
        await plugin.on_node_error('bad_node', error, {})
        
        self.assertEqual(plugin.metrics.get('bad_node_error', 0), 1)

if __name__ == '__main__':
    unittest.main()`} />
      </section>

      <section id="api-reference" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Plugin API Reference</h2>
        
        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 20 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#e6edf3', lineHeight: 1.8 }}>
            <div style={{ color: '#58a6ff', fontWeight: 600 }}>class Plugin:</div>
            <div style={{ marginLeft: 20 }}>
              <div>async def on_graph_start(graph_id: str, initial_state: dict)</div>
              <div>async def on_node_start(node_name: str, state: dict)</div>
              <div>async def on_node_end(node_name: str, state: dict, output: dict)</div>
              <div>async def on_node_error(node_name: str, error: Exception, state: dict)</div>
              <div>async def on_channel_update(channel_name: str, value: Any)</div>
              <div>async def on_graph_end(graph_id: str, final_state: dict, status: str)</div>
            </div>
          </div>
        </div>

        <Alert type="tip" title="Composing Multiple Plugins">
          You can register multiple plugins - they all run in order:
          <CodeBlock python={`graph = builder.compile(plugins=[
    MetricsPlugin(),
    LoggingPlugin(),
    DebugPlugin(),
    MyCustomPlugin(),
])`} />
        </Alert>
      </section>

      <section id="next" style={{ borderTop: '1px solid #21262d', paddingTop: 40, marginTop: 60 }}>
        <h2 style={h2}>Next Steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { href: '/docs/middleware', label: '🔌 Middleware System', desc: 'Request/response interceptors' },
            { href: '/docs/observability', label: '📊 Observability', desc: 'Tracing & structured logging' },
            { href: '/docs/validation', label: '✓ Input Validation', desc: 'Schema & type checking' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: 'block',
                background: '#0d1117',
                border: '1px solid #21262d',
                borderRadius: 8,
                padding: 16,
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#3a86ff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}
            >
              <div style={{ fontWeight: 600, color: '#3a86ff', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: '0.875rem', color: '#8b949e' }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </section>
    </DocLayout>
  )
}

const h2 = { fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 16, marginTop: 0 }
const prose = { color: '#8b949e', lineHeight: 1.75, marginBottom: 16 }
const ul = { color: '#8b949e', lineHeight: 1.8, paddingLeft: 20, margin: 0 }
const inlineCode = { background: '#0d1117', border: '1px solid #21262d', borderRadius: 4, padding: '2px 6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85em' }
