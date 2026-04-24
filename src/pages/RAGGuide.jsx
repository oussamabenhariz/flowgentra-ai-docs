import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'rag-overview', label: 'RAG Overview' },
  { id: 'document-loading', label: 'Document Loading' },
  { id: 'text-splitting', label: 'Text Splitting' },
  { id: 'embeddings', label: 'Embeddings & Vector Stores' },
  { id: 'retrieval', label: 'Retrieval' },
  { id: 'generation', label: 'Generation with Context' },
]

export default function RAGGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        RAG Implementation
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Retrieval-Augmented Generation (RAG) combines the power of large language models with your own knowledge base. Flowgentra provides all the components you need to build RAG systems.
      </p>

      <Section id="rag-overview" title="RAG Overview">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          RAG (Retrieval-Augmented Generation) is the pattern of fetching relevant documents and injecting them into the LLM's context before answering. This lets you give your agent access to a private knowledge base without fine-tuning.
        </p>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Traditional LLMs are trained on public data up to a certain point. They can't access your private documents, recent information after training, or domain-specific knowledge. RAG solves this by retrieving relevant information from your knowledge base and adding it to the LLM's context.
        </p>
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20,
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#8b949e',
          textAlign: 'center'
        }}>
          {`Documents ──► Split ──► Embed ──► Store
                              │
                              ▼
User Query ──► Embed ──► Search ──► Retrieve ──► Generate Answer`}
        </div>
      </Section>

      <Section id="document-loading" title="Document Loading">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Load documents from various sources: files, URLs, databases, or APIs.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::document_loader::{FileLoader, WebLoader};

let file_loader = FileLoader::new("./documents");
let web_loader = WebLoader::new();

// Load from files
let docs = file_loader.load_directory("./docs")?;

// Load from URLs
let web_docs = web_loader.load_urls(vec![
    "https://example.com/doc1.pdf",
    "https://example.com/doc2.html"
])?;

// Combine all documents
let all_docs = docs.into_iter().chain(web_docs).collect::<Vec<_>>();`}
          python={`from flowgentra_ai.document_loaders import FileLoader, WebLoader

file_loader = FileLoader("./documents")
web_loader = WebLoader()

# Load from files
docs = file_loader.load_directory("./docs")

# Load from URLs
web_docs = web_loader.load_urls([
    "https://example.com/doc1.pdf",
    "https://example.com/doc2.html"
])

# Combine all documents
all_docs = docs + web_docs`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra supports PDF, HTML, Markdown, JSON, CSV, and plain text files out of the box.
        </p>
      </Section>

      <Section id="text-splitting" title="Text Splitting">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Before embedding, split large documents into smaller chunks. Why?
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Context limits</strong>: LLMs have maximum context windows (e.g., 4K-128K tokens)</li>
          <li><strong style={{ color: '#e6edf3' }}>Relevance</strong>: Smaller chunks are more likely to be entirely relevant</li>
          <li><strong style={{ color: '#e6edf3' }}>Cost</strong>: Smaller chunks = fewer tokens = lower API costs</li>
        </ul>
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra provides multiple splitting strategies:
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::text_splitter::{RecursiveTextSplitter, ChunkConfig};

let splitter = RecursiveTextSplitter::new(ChunkConfig {
    chunk_size: 1000,        // Characters per chunk
    chunk_overlap: 200,      // Overlap between chunks
    separators: vec!["\\n\\n", "\\n", " ", ""].into_iter().map(|s| s.to_string()).collect(),
});

let chunks = splitter.split_documents(all_docs)?;

// Each chunk has text, metadata, and source information
for chunk in &chunks {
    println!("Chunk: {} chars from {}", chunk.text.len(), chunk.source);
}`}
          python={`from flowgentra_ai.rag import (
    chunk_text,
    chunk_text_by_tokens,
    estimate_tokens,
    RecursiveCharacterTextSplitter,
    MarkdownTextSplitter,
    HTMLTextSplitter,
    TokenTextSplitter,
    CodeTextSplitter,
)

# Simple character-based splitting
chunks = chunk_text("long text...", chunk_size=500, overlap=50)

# Token-based splitting (more accurate for LLM limits)
chunks = chunk_text_by_tokens("long text...", max_tokens=200, overlap_tokens=20)

# Estimate token count (approximate)
count = estimate_tokens("some text")

# Smart splitters that respect content structure
splitter = RecursiveCharacterTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split("long document text...")  # Tries paragraph → sentence → word boundaries

splitter = MarkdownTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(markdown_content)  # Splits on headers/sections

splitter = HTMLTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(html_content)  # Strips tags, respects structure

splitter = TokenTextSplitter(max_tokens=200, overlap_tokens=20)
chunks = splitter.split(text)  # Splits by token count

splitter = CodeTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(source_code)  # Respects function/class boundaries`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Choosing chunk size:</strong> Too small: Loses context. Too large: May exceed context limits. Good starting point: 500-1000 characters, 50-200 character overlap.
        </p>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Text Splitter Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>chunk_size</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>1000</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Maximum characters per chunk</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>chunk_overlap</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>200</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Number of characters to overlap between chunks</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>separators</td>
                <td style={{ padding: '8px' }}>List[str]</td>
                <td style={{ padding: '8px' }}>["\n\n", "\n", " ", ""]</td>
                <td style={{ padding: '8px' }}>Ordered list of separators to try for splitting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="embeddings" title="Embeddings & Vector Stores">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Embeddings convert text into numerical vectors that capture semantic meaning. Similar texts have similar vectors.
        </p>
        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Embedding Providers</h4>
        <CodeBlock
          rust={`use flowgentra_ai::rag::{OpenAIEmbeddings, CachedEmbeddings, EmbeddingsProvider};

let emb = OpenAIEmbeddings::new("sk-...", "text-embedding-3-small");
let cached = CachedEmbeddings::new(emb);  // Wrap with cache

let vector = cached.embed("Hello world").await?;`}
          python={`from flowgentra_ai.rag import Embeddings

# OpenAI (recommended for quality) - costs money but very good
emb = Embeddings.openai("sk-...", "text-embedding-3-small")

# With custom dimension (reduce storage for speed)
emb = Embeddings.openai_with_dimension("sk-...", "text-embedding-3-small", 256)

# With caching (avoids re-embedding the same text)
emb = Embeddings.openai_cached("sk-...")

# Ollama (free, runs locally) - requires Ollama installed
emb = Embeddings.ollama("nomic-embed-text")

# Mock (for testing - deterministic, no API calls)
emb = Embeddings.mock(dimension=128)

# Usage
vector = emb.embed("Hello world")          # Single vector
vectors = emb.embed_batch(["Hello", "World"])  # Multiple at once (faster)
dim = emb.get_dimension()                  # Vector size`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Choosing an embedding model:</strong> OpenAI text-embedding-3-small is good for most cases. Use local models for privacy, mock for testing.
        </p>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Vector Store Setup</h4>
        <CodeBlock
          rust={`use flowgentra_ai::rag::{ChromaStore, Embeddings};

// Create embeddings
let emb = OpenAIEmbeddings::new("sk-...", "text-embedding-3-small");

// Create vector store
let store = ChromaStore::new("./chroma_db", emb);

// Add documents (automatically embeds and indexes)
store.add_documents(chunks).await?;`}
          python={`from flowgentra_ai.rag import ChromaStore, Embeddings

# Create embeddings
emb = Embeddings.openai("sk-...", "text-embedding-3-small")

# Create vector store
store = ChromaStore("./chroma_db", emb)

# Add documents (automatically embeds and indexes)
store.add_documents(chunks)`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra supports Chroma, Qdrant, Weaviate, Pinecone, and other vector databases.
        </p>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>ChromaStore Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>persist_directory</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Directory path to persist the vector database</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>embedding_function</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Embeddings</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Embedding function to convert text to vectors</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>collection_name</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>"default"</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Name of the Chroma collection to use</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>client_settings</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Additional Chroma client configuration settings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>OpenAIEmbeddings Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>model</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>"text-embedding-3-small"</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>OpenAI embedding model to use</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>api_key</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>OpenAI API key for authentication</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>base_url</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>str</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>"https://api.openai.com/v1"</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Base URL for OpenAI API</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>max_retries</td>
                <td style={{ padding: '8px' }}>int</td>
                <td style={{ padding: '8px' }}>3</td>
                <td style={{ padding: '8px' }}>Maximum number of retries for failed requests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="retrieval" title="Retrieval">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Find the most relevant documents for a user's query using semantic search.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::rag::{Retriever, RetrievalConfig};

let retriever = Retriever::new(
    store,
    RetrievalConfig::semantic(5, 0.7)  // top_k=5, threshold=0.7
).with_dedup(0.85);

let results = retriever.retrieve("What is Rust?").await?;

for result in &results {
    println!("Score: {:.3}, Text: {}...",
             result.score, &result.text[..100]);
}`}
          python={`from flowgentra_ai.rag import Retriever, RetrievalConfig

# Pure semantic search (vector similarity only)
config = RetrievalConfig.semantic(top_k=5, threshold=0.7)
retriever = Retriever(store, emb, config)

# Hybrid search (semantic + keyword matching)
config = RetrievalConfig.hybrid(keyword_weight=0.3, top_k=10, threshold=0.5)
retriever = Retriever(store, emb, config)

# Enable deduplication (removes near-identical results)
retriever.with_dedup(threshold=0.85)

# Retrieve relevant documents
results = retriever.retrieve("What is Rust?")
for r in results:
    print(f"[{r.score:.2f}] {r.text[:100]}...")`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          <strong style={{ color: '#e6edf3' }}>Retrieval strategies:</strong> Semantic finds conceptually similar content. Hybrid combines semantic with keyword matching (better for exact terms). Threshold filters low-relevance results. Deduplication removes redundant results.
        </p>

        <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, marginTop: 20 }}>Retriever Parameters</h4>
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
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>vectorstore</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>VectorStore</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Required</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Vector store instance to search in</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>top_k</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>int</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>5</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Number of top results to return</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>score_threshold</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>float</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>None</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Minimum similarity score threshold (0.0-1.0)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d', fontFamily: 'monospace', fontSize: '0.9em' }}>rerank</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>bool</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>False</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #21262d' }}>Whether to use reranking for better results</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '0.9em' }}>search_kwargs</td>
                <td style={{ padding: '8px' }}>dict</td>
                <td style={{ padding: '8px' }}>{}</td>
                <td style={{ padding: '8px' }}>Additional search parameters for the vector store</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="generation" title="Generation with Context">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Use retrieved documents as context for generating accurate, grounded answers.
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::{StateGraph, DynState};
use flowgentra_ai::llm::{LLMConfig, LLM, Message};

#[tokio::main]
async fn main() -> Result<()> {
    let client = LLM::from_config(LLMConfig::openai("gpt-4", "sk-..."));
    let retriever = /* ... setup retriever ... */;

    let graph = StateGraph::builder()
        .add_node("retrieve", {
            let retriever = retriever.clone();
            move |mut state: DynState| {
                let retriever = retriever.clone();
                async move {
                    let query = state.get_string("question").unwrap_or_default();
                    let results = retriever.retrieve(&query).await?;
                    let context: Vec<String> = results.iter()
                        .map(|r| r.text.clone())
                        .collect();
                    state.set("context", context.join("\\n\\n"));
                    Ok(state)
                }
            }
        })
        .add_node("answer", {
            let client = client.clone();
            move |mut state: DynState| {
                let client = client.clone();
                async move {
                    let question = state.get_string("question").unwrap_or_default();
                    let context = state.get_string("context").unwrap_or_default();

                    let response = client.chat(vec![
                        Message::system(&format!("Answer based on this context:\\n{}", context)),
                        Message::user(&question),
                    ]).await?;

                    state.set("answer", response.content);
                    Ok(state)
                }
            }
        })
        .entry("retrieve")
        .edge("retrieve", "answer")
        .edge("answer", "__end__")
        .build();

    let mut state = DynState::new();
    state.set("question", "What is Rust?");
    let result = graph.invoke(state).await?;
    println!("{}", result.get_string("answer").unwrap_or_default());
    Ok(())
}`}
          python={`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from flowgentra_ai import State

# Set up LLM and retriever
client = LLM.from_config(LLMConfig("openai", "gpt-4", api_key="sk-..."))
# retriever = ... (from previous steps)

def retrieve_node(state):
    query = state["question"]
    results = retriever.retrieve(query)
    context = "\\n\\n".join(r.text for r in results)
    state["context"] = context
    return state

def answer_node(state):
    response = client.chat([
        Message.system(f"Answer based on this context:\\n{state['context']}"),
        Message.user(state["question"]),
    ])
    state["answer"] = response.content
    return state

# Build RAG graph
builder = StateGraph()
builder.add_node("retrieve", retrieve_node)
builder.add_node("answer", answer_node)
builder.set_entry_point("retrieve")
builder.add_edge("retrieve", "answer")
builder.add_edge("answer", END)
graph = builder.compile()

# Run it
result = graph.invoke(State({"question": "What is Rust?"}))
print(result["answer"])`}
        />
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          This creates a complete RAG pipeline: retrieve relevant context, then generate an answer grounded in that context.
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