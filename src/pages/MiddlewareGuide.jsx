import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'what-is-middleware', label: 'What is Middleware?' },
  { id: 'middleware-types', label: 'Middleware Types' },
  { id: 'middleware-chain', label: 'Middleware Chain' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'built-in-middleware', label: 'Built-in Middleware' },
  { id: 'custom-examples', label: 'Custom Examples' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function MiddlewareGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Middleware System
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Add cross-cutting concerns to your agents with middleware. Middleware provides hooks into the request/response lifecycle for logging, metrics, validation, caching, and more.
      </p>

      <Section id="what-is-middleware" title="What is Middleware?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Middleware intercepts agent execution at key points:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li>Before/after agent execution</li>
          <li>Before/after node execution</li>
          <li>On errors and retries</li>
          <li>State transitions</li>
        </ul>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Unlike plugins (which extend functionality), middleware modifies existing behavior.
        </p>
      </Section>

      <Section id="middleware-types" title="Middleware Types">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Request Interceptors</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Intercept and modify requests before processing:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.middleware import RequestInterceptor

class LoggingMiddleware(RequestInterceptor):
    async def intercept_request(self, request, context):
        print(f"Processing request: {request}")
        # Modify request if needed
        request.metadata["start_time"] = time.time()
        return request`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Response Interceptors</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Modify responses after processing:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.middleware import ResponseInterceptor

class CachingMiddleware(ResponseInterceptor):
    def __init__(self):
        self.cache = {}

    async def intercept_response(self, response, context):
        # Cache successful responses
        if response.success:
            key = self._get_cache_key(context.request)
            self.cache[key] = response

        return response`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Error Interceptors</h4>
        <p style={{ color: '#8b949e', marginBottom: 12 }}>
          Handle and potentially recover from errors:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.middleware import ErrorInterceptor

class RetryMiddleware(ErrorInterceptor):
    async def intercept_error(self, error, context):
        if isinstance(error, TemporaryError) and context.retry_count < 3:
            # Retry with exponential backoff
            await asyncio.sleep(2 ** context.retry_count)
            return RetryAction.RETRY

        return RetryAction.FAIL`}
        />
      </Section>

      <Section id="middleware-chain" title="Middleware Chain">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Middleware executes in order:
        </p>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16,
          fontFamily: 'monospace',
          color: '#8b949e',
          textAlign: 'center'
        }}>
          Request → [Middleware 1] → [Middleware 2] → [Handler] → [Middleware 2] → [Middleware 1] → Response
        </div>
      </Section>

      <Section id="configuration" title="Configuration">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>In Python</h4>
        <CodeBlock
          python={`from flowgentra_ai.agent import AgentBuilder
from flowgentra_ai.middleware import MiddlewareChain

# Create middleware chain
middleware = MiddlewareChain()
middleware.add(LoggingMiddleware())
middleware.add(CachingMiddleware())
middleware.add(RetryMiddleware())

# Apply to agent
agent = AgentBuilder() \\
    .with_middleware(middleware) \\
    .build()`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>In Configuration</h4>
        <CodeBlock
          python={`# config.yaml
middleware:
  - name: logging
    type: request_interceptor
    config:
      level: info
      format: json

  - name: rate_limiting
    type: request_interceptor
    config:
      requests_per_minute: 60

  - name: caching
    type: response_interceptor
    config:
      ttl_seconds: 300`}
        />
      </Section>

      <Section id="built-in-middleware" title="Built-in Middleware">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Logging Middleware</h4>
        <CodeBlock
          python={`from flowgentra_ai.middleware import LoggingMiddleware

middleware = LoggingMiddleware(
    level="INFO",
    include_state=True,  # Log state contents
    include_timing=True  # Log execution times
)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Metrics Middleware</h4>
        <CodeBlock
          python={`from flowgentra_ai.middleware import MetricsMiddleware

middleware = MetricsMiddleware(
    collector="prometheus",  # or "statsd", "datadog"
    endpoint="http://localhost:9090",
    include_node_metrics=True,
    include_error_metrics=True
)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Validation Middleware</h4>
        <CodeBlock
          python={`from flowgentra_ai.middleware import ValidationMiddleware

middleware = ValidationMiddleware(
    schemas={
        "user_query": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
        }
    }
)`}
        />
      </Section>

      <Section id="custom-examples" title="Custom Examples">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Authentication Middleware</h4>
        <CodeBlock
          python={`class AuthMiddleware(RequestInterceptor):
    def __init__(self, api_key):
        self.api_key = api_key

    async def intercept_request(self, request, context):
        auth_header = request.headers.get("Authorization")
        if not auth_header or not self._validate_token(auth_header):
            raise AuthenticationError("Invalid API key")

        # Add user info to context
        request.user = self._get_user_from_token(auth_header)
        return request`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Rate Limiting Middleware</h4>
        <CodeBlock
          python={`from collections import defaultdict
import time

class RateLimitMiddleware(RequestInterceptor):
    def __init__(self, requests_per_minute=60):
        self.requests_per_minute = requests_per_minute
        self.requests = defaultdict(list)

    async def intercept_request(self, request, context):
        user_id = request.user.id
        now = time.time()

        # Clean old requests
        self.requests[user_id] = [
            req_time for req_time in self.requests[user_id]
            if now - req_time < 60
        ]

        if len(self.requests[user_id]) >= self.requests_per_minute:
            raise RateLimitError("Too many requests")

        self.requests[user_id].append(now)
        return request`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Design Principles</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Single Responsibility: One middleware, one concern</li>
            <li>Composability: Middleware should work together</li>
            <li>Testability: Easy to unit test in isolation</li>
            <li>Configurability: External configuration over hardcoding</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Performance</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Keep middleware fast: Avoid expensive operations</li>
            <li>Use async operations: Don't block the event loop</li>
            <li>Cache expensive lookups: Database queries, API calls</li>
            <li>Profile regularly: Monitor middleware performance impact</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12 }}>Production Considerations</h4>
          <ul style={{ color: '#8b949e', margin: 0, paddingLeft: 20 }}>
            <li>Observability: Monitor middleware performance</li>
            <li>Graceful Degradation: Continue working if middleware fails</li>
            <li>Security: Validate all inputs and outputs</li>
            <li>Documentation: Document middleware behavior and configuration</li>
          </ul>
        </div>
      </Section>
    </DocLayout>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: 40 }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#e6edf3',
        marginBottom: 16,
        scrollMarginTop: '80px'
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}