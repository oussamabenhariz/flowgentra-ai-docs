import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'why-evaluate', label: 'Why Evaluate?' },
  { id: 'retrieval-metrics', label: 'Retrieval Metrics' },
  { id: 'hit-rate', label: 'Hit Rate' },
  { id: 'mrr', label: 'Mean Reciprocal Rank' },
  { id: 'ndcg', label: 'Normalized Discounted Cumulative Gain' },
  { id: 'full-evaluation', label: 'Full Evaluation Pipeline' },
  { id: 'generation-evaluation', label: 'Generation Evaluation' },
  { id: 'custom-metrics', label: 'Custom Metrics' },
  { id: 'ab-testing', label: 'A/B Testing' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function EvaluationGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Evaluation & Metrics
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Evaluate your RAG systems and agent workflows with comprehensive metrics and automated evaluation pipelines.
      </p>

      <Section id="why-evaluate" title="Why Evaluate?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Evaluation helps you:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Measure retrieval quality</strong> - How well do you find relevant documents?</li>
          <li><strong style={{ color: '#e6edf3' }}>Assess generation accuracy</strong> - How good are the answers?</li>
          <li><strong style={{ color: '#e6edf3' }}>Compare different configurations</strong> - Which setup works best?</li>
          <li><strong style={{ color: '#e6edf3' }}>Monitor production performance</strong> - Is your system degrading?</li>
          <li><strong style={{ color: '#e6edf3' }}>Debug issues systematically</strong> - Where are the problems?</li>
        </ul>
      </Section>

      <Section id="retrieval-metrics" title="Retrieval Metrics">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Standard metrics for measuring retrieval system quality:
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
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Metric</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>What it measures</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Range</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #21262d', color: '#e6edf3' }}>Good value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace' }}>Hit Rate</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Fraction of queries with ≥1 relevant result</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>0.0 - 1.0</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>≥ 0.8</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace' }}>MRR</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Average reciprocal rank of first relevant result</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>0.0 - 1.0</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>≥ 0.7</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>NDCG</td>
                <td style={{ padding: '8px' }}>Ranking quality with position discounting</td>
                <td style={{ padding: '8px' }}>0.0 - 1.0</td>
                <td style={{ padding: '8px' }}>≥ 0.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="hit-rate" title="Hit Rate">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Fraction of queries that retrieved at least one relevant document.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::evaluation::{hit_rate};

let hit_rate_score = hit_rate(&retrieval_results, &ground_truth)?;
println!("Hit Rate: {:.3}", hit_rate_score);`}
          python={`from flowgentra_ai.evaluation import hit_rate

# retrieval_results: List[List[SearchResult]]
# ground_truth: List[List[str]] (document IDs)

score = hit_rate(retrieval_results, ground_truth)
print(f"Hit Rate: {score:.3f}")  # e.g., 0.85`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Interpretation:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>1.0 = Perfect (every query found relevant docs)</li>
          <li>0.0 = Terrible (no queries found relevant docs)</li>
          <li>Good baseline: &gt; 0.8 for most applications</li>
          <li>Simple but effective effectiveness check</li>
        </ul>
      </Section>

      <Section id="mrr" title="Mean Reciprocal Rank (MRR)">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Measures how highly relevant documents are ranked.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::evaluation::mrr;

let mrr_score = mrr(&retrieval_results, &ground_truth)?;
println!("MRR: {:.3}", mrr_score);`}
          python={`from flowgentra_ai.evaluation import mrr

score = mrr(retrieval_results, ground_truth)
print(f"MRR: {score:.3f}")  # e.g., 0.72`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Interpretation:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Rewards high rankings of relevant documents</li>
          <li>Perfect score = 1.0 (relevant doc always first)</li>
          <li>Good score: &gt; 0.7 for information retrieval</li>
          <li>Focuses on first relevant result position</li>
        </ul>
      </Section>

      <Section id="ndcg" title="Normalized Discounted Cumulative Gain (NDCG)">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Sophisticated ranking metric that considers position and relevance grades.
        </p>
        <CodeBlock
          python={`from flowgentra_ai.evaluation import mean_ndcg

# Evaluate at different cutoffs
ndcg_5 = mean_ndcg(retrieval_results, ground_truth, k=5)
ndcg_10 = mean_ndcg(retrieval_results, ground_truth, k=10)

print(f"NDCG@5: {ndcg_5:.3f}")
print(f"NDCG@10: {ndcg_10:.3f}")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Interpretation:</strong>
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li>Considers graded relevance (not just binary)</li>
          <li>Perfect = 1.0</li>
          <li>Good for comparing ranking quality</li>
          <li>Discounts lower-ranked results</li>
        </ul>
      </Section>

      <Section id="full-evaluation" title="Full Evaluation Pipeline">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Run comprehensive evaluations with multiple metrics:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.evaluation import rag_evaluate, EvaluationConfig, GradingConfig

# Configure evaluation
config = EvaluationConfig(
    metrics=["hit_rate", "mrr", "ndcg@5", "ndcg@10"],
    grading_config=GradingConfig(
        temperature=0.1,  # Low temperature for consistent grading
        model="gpt-4"     # Use strong model for grading
    )
)

# Run evaluation
results = rag_evaluate(
    queries=queries,
    results=retrieval_results,
    ground_truth=ground_truth,
    config=config
)

# Results summary
print(f"Mean Hit Rate: {results.hit_rate:.3f}")
print(f"Mean MRR: {results.mrr:.3f}")
print(f"Mean NDCG@5: {results.ndcg_at_5:.3f}")

# Per-query results
for i, query_result in enumerate(results.query_results):
    print(f"Query {i}: HR={query_result.hit_rate}, MRR={query_result.mrr}")`}
        />
      </Section>

      <Section id="generation-evaluation" title="Generation Evaluation">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Evaluate answer quality beyond retrieval:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.evaluation import evaluate_output_score

# Evaluate generated answers
scores = []
for query, answer, context in zip(queries, answers, contexts):
    score = evaluate_output_score(
        query=query,
        output=answer,
        context=context,
        grading_config=GradingConfig(model="gpt-4")
    )
    scores.append(score)

print(f"Average answer quality: {sum(scores)/len(scores):.3f}")`}
        />
      </Section>

      <Section id="custom-metrics" title="Custom Metrics">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Create your own evaluation metrics:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.evaluation import EvaluationResult

def custom_metric(results, ground_truth):
    """Custom evaluation logic"""
    total_score = 0.0
    for retrieved, truth in zip(results, ground_truth):
        # Your custom scoring logic
        score = calculate_custom_score(retrieved, truth)
        total_score += score
    return total_score / len(results)

# Use in evaluation
config = EvaluationConfig(
    metrics=["hit_rate", "mrr"],  # Built-in metrics
    custom_metrics={"my_metric": custom_metric}
)`}
        />
      </Section>

      <Section id="ab-testing" title="A/B Testing Configurations">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Compare different RAG configurations:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.rag import RAGConfig
from flowgentra_ai.evaluation import rag_evaluate

# Configuration A: Basic setup
config_a = RAGConfig(
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=1000),
    embeddings=Embeddings.openai("text-embedding-3-small"),
    retriever=Retriever(top_k=5)
)

# Configuration B: Optimized setup
config_b = RAGConfig(
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=500, overlap=50),
    embeddings=Embeddings.openai("text-embedding-3-large"),
    retriever=Retriever(top_k=10, reranker=RRFReranker(k=60))
)

# Evaluate both
results_a = rag_evaluate(queries, config_a.retrieve_all(queries), ground_truth)
results_b = rag_evaluate(queries, config_b.retrieve_all(queries), ground_truth)

print(f"Config A - Hit Rate: {results_a.hit_rate:.3f}")
print(f"Config B - Hit Rate: {results_b.hit_rate:.3f}")`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Dataset Creation</h4>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Diverse queries</strong> - Cover different types of questions</li>
          <li><strong style={{ color: '#e6edf3' }}>Realistic ground truth</strong> - Use actual relevant documents</li>
          <li><strong style={{ color: '#e6edf3' }}>Sufficient volume</strong> - 100+ queries for reliable metrics</li>
          <li><strong style={{ color: '#e6edf3' }}>Balanced difficulty</strong> - Mix easy and hard queries</li>
        </ul>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Metric Selection</h4>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Hit Rate</strong> - Simple effectiveness check</li>
          <li><strong style={{ color: '#e6edf3' }}>MRR</strong> - Ranking quality for single relevant docs</li>
          <li><strong style={{ color: '#e6edf3' }}>NDCG</strong> - Graded relevance and ranking quality</li>
          <li><strong style={{ color: '#e6edf3' }}>Custom metrics</strong> - Domain-specific evaluation</li>
        </ul>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Statistical Significance</h4>
        <CodeBlock
          python={`# Use confidence intervals for reliable comparisons
import numpy as np
from scipy import stats

def confidence_interval(scores, confidence=0.95):
    mean = np.mean(scores)
    std = np.std(scores)
    n = len(scores)
    h = std * stats.t.ppf((1 + confidence) / 2, n - 1) / np.sqrt(n)
    return mean - h, mean + h

# Check if difference is significant
ci_a = confidence_interval(scores_a)
ci_b = confidence_interval(scores_b)

if ci_a[1] < ci_b[0] or ci_b[1] < ci_a[0]:
    print("Results are statistically different")
else:
    print("Results are not significantly different")`}
        />

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Common Pitfalls</h4>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Small test sets</strong> - Need 100+ queries for reliable results</li>
          <li><strong style={{ color: '#e6edf3' }}>Biased ground truth</strong> - Ensure relevance judgments are accurate</li>
          <li><strong style={{ color: '#e6edf3' }}>Over-optimization</strong> - Don't tune too closely to test set</li>
          <li><strong style={{ color: '#e6edf3' }}>Ignoring context</strong> - Consider query type and user intent</li>
          <li><strong style={{ color: '#e6edf3' }}>Single metrics</strong> - Use multiple complementary metrics</li>
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