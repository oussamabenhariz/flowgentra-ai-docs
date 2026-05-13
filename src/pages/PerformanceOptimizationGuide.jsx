import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import Alert from '../components/Alert'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'profiling', label: 'Profiling & Measurement' },
  { id: 'caching', label: 'Caching Strategies' },
  { id: 'parallelization', label: 'Parallelization' },
  { id: 'streaming', label: 'Streaming Output' },
  { id: 'batch', label: 'Batch Processing' },
  { id: 'llm-optimization', label: 'LLM Optimization' },
  { id: 'benchmarks', label: 'Benchmarks & Metrics' },
  { id: 'next', label: 'Next Steps' },
]

export default function PerformanceOptimizationGuide() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>
        Performance Optimization
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 32, lineHeight: 1.7, fontSize: '1.0625rem' }}>
        Optimize Flowgentra workflows for speed, cost, and resource efficiency. Profile, measure, and optimize systematically.
      </p>

      <section id="overview" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Overview</h2>
        <p style={prose}>
          Performance optimization follows a systematic approach:
        </p>
        <ol style={ul}>
          <li><strong>Measure:</strong> Profile your workflow to find bottlenecks</li>
          <li><strong>Understand:</strong> Know where time/cost is spent</li>
          <li><strong>Optimize:</strong> Reduce bottleneck duration</li>
          <li><strong>Verify:</strong> Measure improvement, iterate</li>
        </ol>
      </section>

      <section id="profiling" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Profiling & Measurement</h2>
        
        <Alert type="tip" title="Golden Rule">
          <strong>Never optimize without measuring first.</strong> Profiling tells you where time/cost actually goes vs where you think it does.
        </Alert>

        <CodeBlock python={`import time
import json
from datetime import datetime

class PerformanceProfiler:
    def __init__(self):
        self.events = []
    
    def record(self, node_name, duration, status='success'):
        self.events.append({
            'node': node_name,
            'duration': duration,
            'status': status,
            'timestamp': datetime.now().isoformat(),
        })
    
    def summary(self):
        total = sum(e['duration'] for e in self.events)
        by_node = {}
        for e in self.events:
            node = e['node']
            by_node[node] = by_node.get(node, 0) + e['duration']
        
        print(f"\\nTotal time: {total:.3f}s")
        print(f"\\nTime by node:")
        for node, time in sorted(by_node.items(), key=lambda x: x[1], reverse=True):
            pct = (time / total) * 100 if total > 0 else 0
            print(f"  {node}: {time:.3f}s ({pct:.1f}%)")
    
    def to_json(self):
        return json.dumps(self.events, indent=2)

# Usage:
def timed_node(node_func, state, profiler, node_name):
    start = time.time()
    try:
        result = node_func(state)
        duration = time.time() - start
        profiler.record(node_name, duration, 'success')
        return result
    except Exception as e:
        duration = time.time() - start
        profiler.record(node_name, duration, 'error')
        raise

# Profile execution:
profiler = PerformanceProfiler()
for node_ref, node_name in workflow_nodes:
    state = timed_node(node_ref, state, profiler, node_name)

profiler.summary()
`} />
      </section>

      <section id="caching" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Caching Strategies</h2>
        
        <div style={{ marginTop: 20 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>1. Memoization (Function Caching)</div>
            <CodeBlock python={`from functools import lru_cache
import hashlib

@lru_cache(maxsize=1000)
def expensive_computation(query: str) -> str:
    """Expensive operation cached by query string."""
    # This result is cached - repeated queries instant
    return llm_call(query)

def search_node(state) -> dict:
    # First call: 3 seconds
    # Repeated calls: instant
    result = expensive_computation(state['query'])
    return {**state, 'result': result}

# Advanced: custom cache key
def cache_key(embeddings_model, text):
    # Hash model + text for cache key
    key = f"{embeddings_model}:{hashlib.md5(text.encode()).hexdigest()}"
    return key

cache = {}

def get_embeddings(text, model='openai'):
    key = cache_key(model, text)
    if key in cache:
        return cache[key]
    
    embeddings = llm_embeddings(text, model=model)
    cache[key] = embeddings
    return embeddings
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>2. State Checkpointing</div>
            <CodeBlock python={`# Checkpointing avoids re-running expensive nodes on failure
from flowgentra_ai.checkpoints import InMemoryCheckpointer, SqliteCheckpointer

# Use in-memory for dev (fast but not durable)
checkpointer = InMemoryCheckpointer()

# Use SQLite for production (durable)
checkpointer = SqliteCheckpointer(db_path="./checkpoints.db")

graph = builder.compile(checkpointer=checkpointer)

# Run with checkpointing - if it fails, resume from last checkpoint
try:
    result = graph.invoke(initial_state)
except Exception as e:
    print(f"Failed, but checkpoint saved")
    # Later: resume from checkpoint
    result = graph.invoke_with_thread("session-001")
`} />
          </div>
        </div>
      </section>

      <section id="parallelization" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Parallelization</h2>
        
        <CodeBlock python={`from flowgentra_ai.graph import StateGraph, END

class ParallelSearchState(dict):
    query: str
    web_results: list
    doc_results: list
    image_results: list

def web_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search web - 2 seconds"""
    results = search_web(state['query'])
    return {**state, 'web_results': results}

def doc_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search documents - 1.5 seconds"""
    results = search_documents(state['query'])
    return {**state, 'doc_results': results}

def image_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search images - 1 second"""
    results = search_images(state['query'])
    return {**state, 'image_results': results}

def merge_results(state: ParallelSearchState) -> str:
    """Route to aggregation"""
    return "aggregate"

# Setup parallel execution:
builder = StateGraph(ParallelSearchState)
builder.add_node("web", web_search)
builder.add_node("docs", doc_search)
builder.add_node("images", image_search)
builder.add_node("aggregate", merge_results)

# Entry branches to 3 parallel nodes
builder.set_entry_point("web")  # This is wrong - need better API

# Better: specify parallel start
for node in ["web", "docs", "images"]:
    builder.add_edge("START", node)

# All converge to aggregate
for node in ["web", "docs", "images"]:
    builder.add_edge(node, "aggregate")

builder.add_edge("aggregate", END)
graph = builder.compile()

# Sequential: 2 + 1.5 + 1 = 4.5 seconds
# Parallel: max(2, 1.5, 1) = 2 seconds  (55% faster!)
result = graph.invoke({"query": "python", "web_results": [], "doc_results": [], "image_results": []})
`} />
      </section>

      <section id="streaming" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Streaming for Responsiveness</h2>
        
        <Alert type="info" title="Streaming Pattern">
          Instead of waiting for final result, stream incremental outputs. Improves perceived performance and user experience.
        </Alert>

        <CodeBlock python={`# Non-streaming: Wait for full result (slow UX)
result = graph.invoke(state)  # Blocks for 30 seconds
print(result)

# Streaming: Get results as they arrive (fast UX)
for event in graph.stream(state):
    print(f"Result chunk: {event}")
    # User sees incremental progress
    
# Streaming in real-world agent:
def stream_response(agent, query):
    for chunk in agent.stream({"query": query}):
        if 'output' in chunk:
            yield chunk['output']  # Send to user incrementally

# Frontend receives streaming response
async def handle_request():
    async for chunk in stream_response(agent, user_query):
        await websocket.send(chunk)
`} />
      </section>

      <section id="batch" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Batch Processing</h2>
        
        <CodeBlock python={`import asyncio
from concurrent.futures import ThreadPoolExecutor

# Batch multiple queries together
queries = [
    "What is Python?",
    "What is Rust?",
    "What is Go?",
    "What is JavaScript?"
]

# Sequential (slow): 4 × 2s = 8 seconds
results = []
for query in queries:
    result = graph.invoke({"query": query, "response": ""})
    results.append(result)

# Parallel with threads (fast): ~2 seconds
def process_query(query):
    return graph.invoke({"query": query, "response": ""})

with ThreadPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(process_query, queries))

# Async version (best for many requests):
async def process_async(query):
    # If graph supports async
    return await graph.ainvoke({"query": query, "response": ""})

# Run many concurrently:
tasks = [process_async(q) for q in queries * 100]  # 400 queries
results = asyncio.run(asyncio.gather(*tasks))
`} />
      </section>

      <section id="llm-optimization" style={{ marginBottom: 52 }}>
        <h2 style={h2}>LLM Optimization</h2>
        
        <div style={{ marginTop: 20 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>1. Use Faster Models</div>
            <CodeBlock python={`# Slow (but powerful): GPT-4 - 60s, \\$0.03 per call
llm_powerful = LLM(provider="openai", model="gpt-4o")

# Fast (lighter): GPT-4o-mini - 5s, \\$0.00015 per call
llm_fast = LLM(provider="openai", model="gpt-4o-mini")

# Pattern: Use fast model first, escalate only if needed
def smart_routing(state):
    # Try fast model
    response = llm_fast.chat([Message.user(state['query'])])
    if response.confidence < 0.5:
        # Escalate to powerful model
        response = llm_powerful.chat([Message.user(state['query'])])
    return {**state, 'response': response.content}
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>2. Prompt Optimization</div>
            <CodeBlock python={`# Bad (verbose): Many tokens, slower
prompt = "Please analyze this text and tell me if it's positive or negative sentiment"

# Good (concise): Fewer tokens, faster
prompt = "Classify sentiment: positive/negative"

# Tips:
# - Remove superfluous words
# - Use examples only if needed
# - Structure for parsing (JSON, frontmatter)
# - Use constraints to limit output
`} />
          </div>

          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 600, color: '#58a6ff', marginBottom: 12 }}>3. Context Window Optimization</div>
            <CodeBlock python={`# Too much context: Expensive and slow
context = entire_document_store  # 100MB

# Optimized: Only relevant context
from flowgentra_ai.rag import VectorStore

vs = VectorStore()
vs.add_documents(documents)
relevant = vs.search(query, top_k=5)  # Only 5 docs, not 1000

# Use in RAG:
def rag_retrieve(state):
    docs = vs.search(state['query'], top_k=5)  # Not top_k=1000
    context = "\\n".join(d.content for d in docs)
    prompt = f"Use this context to answer: {state['query']}\\n{context}"
    response = llm.chat([Message.user(prompt)])
    return {**state, 'response': response.content}
`} />
          </div>
        </div>
      </section>

      <section id="benchmarks" style={{ marginBottom: 52 }}>
        <h2 style={h2}>Benchmarks & Cost Tracking</h2>
        
        <CodeBlock python={`class CostTracker:
    """Track execution costs across LLM calls."""
    
    # Pricing per token (approximate)
    PRICES = {
        'gpt-4-turbo': {'input': 0.01/1000, 'output': 0.03/1000},
        'gpt-4o-mini': {'input': 0.00015/1000, 'output': 0.00060/1000},
        'claude-3-haiku': {'input': 0.00025/1000, 'output': 0.00125/1000},
    }
    
    def __init__(self):
        self.calls = []
    
    def record_call(self, model, input_tokens, output_tokens):
        cost = self._calculate_cost(model, input_tokens, output_tokens)
        self.calls.append({
            'model': model,
            'input_tokens': input_tokens,
            'output_tokens': output_tokens,
            'cost': cost,
        })
    
    def _calculate_cost(self, model, input_t, output_t):
        prices = self.PRICES.get(model, {'input': 0, 'output': 0})
        return (input_t * prices['input']) + (output_t*prices['output'])
    
    def total_cost(self):
        return sum(c['cost'] for c in self.calls)
    
    def estimate_batch_cost(self, batch_size):
        return self.total_cost() * batch_size

# Usage:
tracker = CostTracker()
for call in llm_calls:
    tracker.record_call("gpt-4o-mini", call['input_tokens'], call['output_tokens'])

# Display costs
cost = round(tracker.total_cost(), 4)
batch_cost = round(tracker.estimate_batch_cost(1000), 2)
print(f"Cost per call: \\${cost}")
print(f"Cost per 1000 calls: \\${batch_cost}")
`} />
      </section>

      <section id="next" style={{ borderTop: '1px solid #21262d', paddingTop: 40, marginTop: 60 }}>
        <h2 style={h2}>Next Steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { href: '/docs/observability', label: '📊 Observability', desc: 'Tracing & metrics' },
            { href: '/docs/best-practices', label: '✓ Best Practices', desc: 'Production patterns' },
            { href: '/docs/error-handling', label: '⚠️ Error Handling', desc: 'Recovery strategies' },
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
