import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import Alert from '../components/Alert'
import Tabs from '../components/Tabs'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'vs-plugins', label: 'Middleware vs Plugins' },
  { id: 'api-structure', label: 'Structure & API' },
  { id: 'logging', label: 'Example: Logging' },
  { id: 'rate-limit', label: 'Example: Rate Limiting' },
  { id: 'error-handling', label: 'Example: Error Handling' },
  { id: 'auth', label: 'Example: Authentication' },
  { id: 'composition', label: 'Composing Middleware' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'next', label: 'Next Steps' },
]

export default function MiddlewareGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>
        Middleware System
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 32, lineHeight: 1.7, fontSize: '1.0625rem' }}>
        Request/response interceptors for cross-cutting concerns. Process node inputs and outputs uniformly.
      </p>

      <section id="overview" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Overview</h2>
        <p style={prose}>
          Middleware intercepts node execution to apply transformations or validations to the state. Each middleware is a chain link that can:
        </p>
        <ul style={ul}>
          <li><strong>Before</strong> node runs: Validate, transform, or reject input</li>
          <li><strong>After</strong> node completes: Transform, validate, or cache output</li>
          <li><strong>On error</strong>: Handle or re-throw exceptions</li>
        </ul>
        <p style={prose}>
          Middleware runs <strong>on every node</strong>, creating a uniform processing pipeline.
        </p>
      </section>

      <section id="vs-plugins" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Middleware vs Plugins: When to Use Each</h2>
        
        <div style={{ overflowX: 'auto', marginTop: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#8b949e', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #21262d' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3' }}>Aspect</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3' }}>Middleware</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#e6edf3' }}>Plugins</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Purpose', 'Transform/validate input/output', 'Observe execution events'],
                ['Runs on', 'Every node (in chain)', 'Specific lifecycle events'],
                ['Can modify state', '✓ Yes', '✗ No (read-only)'],
                ['Order matters', '✓ Yes (left-to-right)', '✗ No order dependency'],
                ['Examples', 'Logging, auth, rate-limit', 'Metrics, tracing, alerts'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                  <td style={{ padding: '12px', fontWeight: 500 }}>{row[0]}</td>
                  <td style={{ padding: '12px' }}>{row[1]}</td>
                  <td style={{ padding: '12px' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Alert type="tip" title="Quick Decision">
          <strong>Use Middleware if:</strong> You need to intercept/transform state before/after nodes
          <br/><br/>
          <strong>Use Plugins if:</strong> You need to observe what's happening without changing state
        </Alert>
      </section>

      <section id="api-structure" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Middleware Structure</h2>
        
        <CodeBlock python={`from flowgentra_ai.middleware import Middleware

class MyMiddleware(Middleware):
    """Base middleware class."""
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        """
        Called before node execution.
        
        Args:
            node_name: Name of node about to run
            state: Current state dict
            
        Returns:
            Modified state (can be transformed)
            
        Raises:
            StopExecution: To halt execution
        """
        return state  # Return modified or original state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        """
        Called after node executes successfully.
        
        Args:
            node_name: Node that just ran
            state: State before node
            output: State after node
            
        Returns:
            Modified output state
        """
        return output
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        """
        Called if node raises exception.
        
        Args:
            node_name: Node that errored
            error: The exception raised
            state: State at error time
            
        Raises:
            exception: Re-raise to continue error
        """
        raise  # Re-raise to propagate error

# Register middleware:
graph = builder.compile(middleware=[MyMiddleware()])`} />
      </section>

      <section id="logging" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Structured Logging Middleware</h2>
        
        <CodeBlock python={`import logging
import json
from datetime import datetime
from flowgentra_ai.middleware import Middleware

class LoggingMiddleware(Middleware):
    """Logs all state transitions with structured format."""
    
    def __init__(self, logger_name='flowgentra'):
        self.logger = logging.getLogger(logger_name)
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        # Log what keys are available
        log_entry = {
            'event': 'node_start',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'state_keys': list(state.keys()),
            'state_size': len(json.dumps(state)),
        }
        self.logger.info(json.dumps(log_entry))
        return state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        # Log what changed
        changed_keys = {
            k: output.get(k) for k in output.keys()
            if output.get(k) != state.get(k)
        }
        log_entry = {
            'event': 'node_end',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'changed_keys': list(changed_keys.keys()),
        }
        self.logger.info(json.dumps(log_entry))
        return output
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        log_entry = {
            'event': 'node_error',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'error_type': type(error).__name__,
            'error_message': str(error),
        }
        self.logger.error(json.dumps(log_entry))
        raise

# Usage:
graph = builder.compile(middleware=[LoggingMiddleware()])`} />
      </section>

      <section id="rate-limit" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Rate Limiting Middleware</h2>
        
        <CodeBlock python={`from flowgentra_ai.middleware import Middleware
from collections import defaultdict
from datetime import datetime, timedelta
import time

class RateLimitMiddleware(Middleware):
    """Enforces rate limits per node."""
    
    def __init__(self, calls_per_minute: int = 60):
        self.limit = calls_per_minute
        self.calls = defaultdict(list)  # node_name -> list of timestamps
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        now = datetime.now()
        minute_ago = now - timedelta(minutes=1)
        
        # Remove old calls outside the window
        self.calls[node_name] = [
            ts for ts in self.calls[node_name]
            if ts > minute_ago
        ]
        
        # Check rate limit
        if len(self.calls[node_name]) >= self.limit:
            raise RateLimitError(
                f"Rate limit exceeded for {node_name}: "
                f"{self.limit} calls per minute"
            )
        
        # Record this call
        self.calls[node_name].append(now)
        return state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        return output

class RateLimitError(Exception):
    pass

# Usage:
graph = builder.compile(middleware=[
    RateLimitMiddleware(calls_per_minute=100)
])`} />
      </section>

      <section id="error-handling" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Error Handling Middleware</h2>
        
        <CodeBlock python={`from flowgentra_ai.middleware import Middleware
import asyncio

class ErrorHandlingMiddleware(Middleware):
    """Catches errors, retries, then falls back if needed."""
    
    def __init__(self, max_retries: int = 3, backoff_seconds: float = 1.0):
        self.max_retries = max_retries
        self.backoff = backoff_seconds
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        # Don't retry validation errors
        if isinstance(error, ValueError):
            raise
        
        # For transient errors, could implement retry logic
        # For now just log and re-raise
        print(f"Caught error in {node_name}: {error}")
        
        # Add error to state for downstream handling
        if isinstance(state, dict):
            state['_last_error'] = {
                'node': node_name,
                'error': str(error),
                'error_type': type(error).__name__,
            }
        
        # Re-raise to propagate
        raise

# Usage:
graph = builder.compile(middleware=[
    ErrorHandlingMiddleware(max_retries=3)
])`} />
      </section>

      <section id="auth" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Example: Authentication Middleware</h2>
        
        <CodeBlock python={`from flowgentra_ai.middleware import Middleware

class AuthMiddleware(Middleware):
    """Validates auth token before sensitive nodes."""
    
    def __init__(self, sensitive_nodes: list = None):
        self.sensitive_nodes = sensitive_nodes or [
            'delete_data', 'access_private_info', 'submit_payment'
        ]
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        # Check if this is a sensitive node
        if node_name not in self.sensitive_nodes:
            return state
        
        # Verify there's an auth token
        auth_token = state.get('_auth_token')
        if not auth_token:
            raise AuthError(f"No auth token for sensitive node: {node_name}")
        
        # Verify token is valid (simplified - use real auth in production)
        if not self._verify_token(auth_token):
            raise AuthError(f"Invalid auth token")
        
        # Add verified user info to state
        state['_user'] = self._get_user_from_token(auth_token)
        return state
    
    def _verify_token(self, token: str) -> bool:
        # TODO: Implement real token verification
        return len(token) > 10
    
    def _get_user_from_token(self, token: str) -> dict:
        # TODO: Implement real token decoding
        return {'id': 'user123', 'role': 'admin'}

class AuthError(Exception):
    pass

# Usage:
graph = builder.compile(middleware=[
    AuthMiddleware(sensitive_nodes=['pay', 'delete'])
])`} />
      </section>

      <section id="composition" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Composing Middleware Chains</h2>
        
        <Alert type="info" title="Middleware Execution Order">
          Middleware runs left-to-right on <code style={inlineCode}>before_node</code>, and right-to-left on <code style={inlineCode}>after_node</code> (like onion layers).
        </Alert>

        <CodeBlock python={`# Middleware runs in this order:
# 1. AuthMiddleware.before_node
# 2. RateLimitMiddleware.before_node
# 3. ValidationMiddleware.before_node
# ... NODE EXECUTES ...
# 4. ValidationMiddleware.after_node
# 5. RateLimitMiddleware.after_node
# 6. AuthMiddleware.after_node

graph = builder.compile(middleware=[
    AuthMiddleware(sensitive_nodes=['pay', 'delete']),
    RateLimitMiddleware(calls_per_minute=100),
    ValidationMiddleware(),
    LoggingMiddleware(),
])

# Common pattern: Auth → Rate Limit → Validate → Log
graph = builder.compile(middleware=[
    AuthMiddleware(),
    RateLimitMiddleware(),
    ValidationMiddleware(),
    LoggingMiddleware(),
])`} />
      </section>

      <section id="best-practices" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Best Practices</h2>
        
        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 12 }}>
          <div style={{ fontWeight: 600, color: '#52b788', marginBottom: 8 }}>✓ DO</div>
          <ul style={ul}>
            <li>Keep middleware fast - they run on every node</li>
            <li>Use async for I/O operations</li>
            <li>Document what state keys you expect/modify</li>
            <li>Handle missing keys gracefully</li>
            <li>Order middleware thoughtfully (auth before rate-limit)</li>
            <li>Use exceptions for control flow (auth failure, rate limit exceeded)</li>
          </ul>
        </div>

        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
          <div style={{ fontWeight: 600, color: '#e63946', marginBottom: 8 }}>✗ DON'T</div>
          <ul style={ul}>
            <li>Block on I/O (use async instead)</li>
            <li>Store unlimited data in middleware instance</li>
            <li>Assume state keys exist without checking</li>
            <li>Catch all exceptions and hide them</li>
            <li>Modify state in deeply nested ways</li>
            <li>Use middleware for business logic (use nodes instead)</li>
          </ul>
        </div>
      </section>

      <section id="next" style={{ borderTop: '1px solid #21262d', paddingTop: 40, marginTop: 60 }}>
        <h2 style={h2}>Next Steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { href: '/docs/plugins', label: '🔌 Plugins System', desc: 'Observable hooks' },
            { href: '/docs/error-handling', label: '⚠️ Error Handling', desc: 'Retry & recovery' },
            { href: '/docs/validation', label: '✓ Validation', desc: 'Input validation' },
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
