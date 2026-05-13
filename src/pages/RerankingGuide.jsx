import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'why-rerank', label: 'Why Rerank?' },
  { id: 'available-rerankers', label: 'Available Rerankers' },
  { id: 'rrf', label: 'Reciprocal Rank Fusion' },
  { id: 'cross-encoder', label: 'Cross-Encoder Reranking' },
  { id: 'llm-reranking', label: 'LLM-Based Reranking' },
  { id: 'no-op-reranker', label: 'No-Op Reranker' },
  { id: 'integration', label: 'RAG Integration' },
  { id: 'performance', label: 'Performance Comparison' },
  { id: 'configuration', label: 'Configuration Tips' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function RerankingGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Reranking
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Reranking improves search result quality by reordering retrieved documents. Flowgentra provides multiple reranking strategies optimized for different use cases.
      </p>

      <Section id="why-rerank" title="Why Rerank?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Initial retrieval (like vector similarity search) is fast but may not capture all relevance signals. Reranking applies more sophisticated scoring to improve result quality.
        </p>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>When to rerank:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Hybrid search (semantic + keyword results)</li>
          <li>Large document collections where precision matters</li>
          <li>Question-answering systems requiring high accuracy</li>
          <li>Applications where result order significantly impacts user experience</li>
        </ul>
      </Section>

      <Section id="available-rerankers" title="Available Rerankers">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra provides four reranking strategies:
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Reranker</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Speed</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Accuracy</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace' }}>RRFReranker</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>⚡ Fast</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>⭐ Good</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Hybrid search, production</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace' }}>CrossEncoderReranker</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>🐌 Slow</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>⭐⭐⭐ Excellent</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Quality-critical apps</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace' }}>LLMReranker</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>🐌🐌 Very Slow</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>⭐⭐⭐⭐ Custom</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Complex criteria</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>NoopReranker</td>
                <td style={{ padding: '8px' }}>⚡ Instant</td>
                <td style={{ padding: '8px' }}>❌ None</td>
                <td style={{ padding: '8px' }}>Testing, baseline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="rrf" title="Reciprocal Rank Fusion (RRF)">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Combines multiple ranking sources mathematically. Excellent for hybrid search (semantic + keyword).
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::reranking::RRFReranker;

let reranker = RRFReranker::new(60);
let reranked = reranker.rerank(search_results)?;`}
          python={`from flowgentra_ai.rerankers import RRFReranker

# Create RRF reranker
reranker = RRFReranker(k=60)  # k controls influence of original ranking

# Rerank results
reranked_results = reranker.rerank(search_results)

# Results are reordered by combined score
for result in reranked_results:
    print(f"Score: {result.score:.3f}, Text: {result.text[:50]}...")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>When to use RRF:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Hybrid search (combining semantic and keyword results)</li>
          <li>Multiple retrieval sources</li>
          <li>Need fast, deterministic reranking</li>
          <li>Production systems where speed matters</li>
        </ul>
      </Section>

      <Section id="cross-encoder" title="Cross-Encoder Reranking">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Uses a transformer model to score query-document pairs directly. More accurate but slower.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.rerankers import CrossEncoderReranker

# Use pre-trained cross-encoder model
reranker = CrossEncoderReranker(
    model="cross-encoder/ms-marco-MiniLM-L-6-v2"
)

# Rerank with higher quality scores
reranked = reranker.rerank(search_results, query="What is machine learning?")

# Much slower but more accurate than RRF`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>When to use Cross-Encoder:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Maximum accuracy needed</li>
          <li>Small result sets (&lt;100 documents)</li>
          <li>Can afford 10-100ms per query latency</li>
          <li>Question-answering systems</li>
        </ul>
      </Section>

      <Section id="llm-reranking" title="LLM-Based Reranking">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use an LLM to evaluate document relevance. Most flexible but slowest.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.rerankers import LLMReranker
from flowgentra_ai.llm import LLM

# Configure LLM for reranking
llm = LLM(provider="openai", model="gpt-4o", temperature=0.1)

reranker = LLMReranker(
    llm=llm,
    prompt_template="""
    Rate how relevant this document is to the query on a scale of 0-10.
    Query: {query}
    Document: {document}
    Score (0-10): """
)

reranked = reranker.rerank(search_results, query="machine learning basics")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>When to use LLM reranking:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Complex relevance criteria</li>
          <li>Need explainable rankings</li>
          <li>Custom scoring logic required</li>
          <li>Domain-specific relevance rules</li>
        </ul>
      </Section>

      <Section id="no-op-reranker" title="No-Op Reranker">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Pass-through reranker for when you don't want reranking.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.rerankers import NoopReranker

# No reranking - preserves original order
reranker = NoopReranker()
results = reranker.rerank(search_results)  # Returns unchanged`}
        />
      </Section>

      <Section id="integration" title="Integration with RAG">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Rerankers integrate seamlessly with the RAG pipeline:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.rag import RAGConfig, Retriever
from flowgentra_ai.rerankers import RRFReranker

# Configure RAG with reranking
rag_config = RAGConfig(
    retriever=Retriever(
        vectorstore=vectorstore,
        reranker=RRFReranker(k=60),  # Add reranking
        top_k=20  # Retrieve more, then rerank
    )
)

# Retrieval now includes reranking
results = rag_config.retriever.retrieve("What is AI?", top_k=5)`}
        />
      </Section>

      <Section id="performance" title="Performance Comparison">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Here's how the rerankers compare in practice:
        </p>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20,
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#8b949e'
        }}>
          {`Reranker Performance (100 documents, approximate):

RRF:           5-10ms   | Good accuracy, fast
Cross-Encoder: 100-500ms | Excellent accuracy, slower
LLM:           1-5s     | Custom accuracy, very slow
No-Op:         <1ms     | No change, instant`}
        </div>
      </Section>

      <Section id="configuration" title="Configuration Tips">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Choosing RRF Parameters</h4>
        <CodeBlock
          python={`# Conservative (preserves original ranking more)
reranker = RRFReranker(k=100)

# Aggressive (more influence from fusion)
reranker = RRFReranker(k=20)`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Cross-Encoder Models</h4>
        <CodeBlock
          python={`# Fast but less accurate
reranker = CrossEncoderReranker("cross-encoder/ms-marco-TinyBERT-L-2-v2")

# Balanced speed/accuracy
reranker = CrossEncoderReranker("cross-encoder/ms-marco-MiniLM-L-6-v2")

# High accuracy (slower)
reranker = CrossEncoderReranker("cross-encoder/ms-marco-electra-base")`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>LLM Prompt Engineering</h4>
        <CodeBlock
          python={`# More detailed scoring criteria
prompt = """
Rate relevance 0-10 considering:
- Direct answer to query
- Related concepts
- Background context

Query: {query}
Document: {document}
Score: """

reranker = LLMReranker(llm=llm, prompt_template=prompt)`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Start with RRF</strong> - Fast and effective for most use cases</li>
          <li><strong style={{ color: '#e6edf3' }}>Use cross-encoders</strong> - When accuracy is critical and latency allows</li>
          <li><strong style={{ color: '#e6edf3' }}>Retrieve more than needed</strong> - Rerank from larger candidate set (20-50 docs)</li>
          <li><strong style={{ color: '#e6edf3' }}>Tune thresholds</strong> - Set minimum scores to filter irrelevant results</li>
          <li><strong style={{ color: '#e6edf3' }}>Monitor performance</strong> - Track reranking impact on your metrics</li>
          <li><strong style={{ color: '#e6edf3' }}>Consider cost</strong> - LLM reranking can be expensive at scale</li>
          <li><strong style={{ color: '#e6edf3' }}>Test different models</strong> - Performance varies by domain and query type</li>
          <li><strong style={{ color: '#e6edf3' }}>Cache results</strong> - For frequently asked queries</li>
        </ul>
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