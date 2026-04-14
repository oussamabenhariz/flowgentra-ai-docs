import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'overview', label: 'Overview' },
  { id: 'supported-formats', label: 'Supported Formats' },
  { id: 'loading-single', label: 'Loading Single Documents' },
  { id: 'loading-directories', label: 'Loading Directories' },
  { id: 'ingestion-pipeline', label: 'Ingestion Pipeline' },
  { id: 'pdf-processing', label: 'PDF Processing' },
  { id: 'custom-loaders', label: 'Custom Loaders' },
  { id: 'error-handling', label: 'Error Handling' },
  { id: 'best-practices', label: 'Best Practices' },
]

export default function DocumentLoadersGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Document Loading
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Flowgentra can load documents from various sources and formats, automatically extracting text content and metadata for use in RAG systems.
      </p>

      <Section id="overview" title="Overview">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Document loading is the first step in building a RAG system. Flowgentra provides comprehensive support for loading documents from files, directories, and various formats with automatic content extraction and metadata preservation.
        </p>
      </Section>

      <Section id="supported-formats" title="Supported Formats">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra supports loading documents from:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Plain text</strong> (.txt) - Direct text loading</li>
          <li><strong style={{ color: '#e6edf3' }}>Markdown</strong> (.md) - Preserves structure and formatting</li>
          <li><strong style={{ color: '#e6edf3' }}>HTML</strong> (.html) - Strips tags, preserves text content</li>
          <li><strong style={{ color: '#e6edf3' }}>PDF</strong> (.pdf) - Extracts text content from PDF documents</li>
          <li><strong style={{ color: '#e6edf3' }}>JSON</strong> (.json) - Structured data loading</li>
          <li><strong style={{ color: '#e6edf3' }}>CSV</strong> (.csv) - Tabular data processing</li>
        </ul>
      </Section>

      <Section id="loading-single" title="Loading Single Documents">
        <CodeBlock
          rust={`use flowgentra_ai::data::load_document;
use std::path::Path;

let doc = load_document(Path::new("./research_paper.pdf"))?;
println!("Loaded: {} ({} chars)", doc.filename, doc.content.len());`}
          python={`from flowgentra_ai.document_loaders import load_document

# Load any supported format
doc = load_document("./research_paper.pdf")
print(f"Filename: {doc.filename}")
print(f"Content length: {len(doc.content)}")
print(f"File type: {doc.file_type}")

# Access metadata
print(f"Title: {doc.metadata.get('title')}")
print(f"Author: {doc.metadata.get('author')}")`}
        />
      </Section>

      <Section id="loading-directories" title="Loading Directories">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Load all documents from a directory recursively:
        </p>
        <CodeBlock
          rust={`use flowgentra_ai::data::load_directory;

let documents = load_directory("./docs")?;
for doc in documents {
    println!("Loaded: {} ({})", doc.filename, doc.file_type);
}`}
          python={`from flowgentra_ai.document_loaders import load_directory

# Load all documents from directory
documents = load_directory("./docs")

for doc in documents:
    print(f"Loaded: {doc.filename} ({doc.file_type})")
    print(f"Content preview: {doc.content[:100]}...")
    print(f"Metadata: {doc.metadata}")`}
        />
      </Section>

      <Section id="ingestion-pipeline" title="Ingestion Pipeline">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          For production use, use the ingestion pipeline which provides progress tracking and error handling:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.document_loaders import IngestionPipeline

# Create pipeline
pipeline = IngestionPipeline()

# Ingest documents with progress tracking
documents = ["doc1.pdf", "doc2.md", "doc3.html"]
stats = pipeline.ingest(documents)

print(f"Processed: {stats.total_documents}")
print(f"Successful: {stats.successful}")
print(f"Failed: {stats.failed}")
print(f"Total characters: {stats.total_characters}")`}
        />
      </Section>

      <Section id="pdf-processing" title="PDF Processing">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Special handling for PDF files:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.document_loaders import extract_pdf

# Extract text from PDF
text = extract_pdf("./document.pdf")
print(f"Extracted {len(text)} characters")

# PDF documents include page information in metadata
doc = load_document("./document.pdf")
print(f"Pages: {doc.metadata.get('pages')}")
print(f"Author: {doc.metadata.get('author')}")
print(f"Subject: {doc.metadata.get('subject')}")`}
        />
      </Section>

      <Section id="custom-loaders" title="Custom Document Types">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          For unsupported formats, you can create custom loaders:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.document_loaders import LoadedDocument, FileType

def load_custom_format(file_path: str) -> LoadedDocument:
    # Your custom loading logic here
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    return LoadedDocument(
        filename=file_path,
        content=content,
        file_type=FileType.TEXT,  # or appropriate type
        metadata={"custom": True}
    )

# Use your custom loader
doc = load_custom_format("./my_custom_format.xyz")`}
        />
      </Section>

      <Section id="error-handling" title="Error Handling">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Document loading can fail for various reasons:
        </p>
        <CodeBlock
          python={`from flowgentra_ai.document_loaders import load_document

try:
    doc = load_document("./missing_file.pdf")
except FileNotFoundError:
    print("File not found")
except Exception as e:
    print(f"Loading failed: {e}")

# With ingestion pipeline - handles errors gracefully
pipeline = IngestionPipeline()
try:
    stats = pipeline.ingest(["valid.pdf", "missing.xyz", "corrupt.pdf"])
    print(f"Loaded {stats.successful}/{stats.total_documents} successfully")
except Exception as e:
    print(f"Pipeline failed: {e}")`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: '20px' }}>
          <li><strong style={{ color: '#e6edf3' }}>Use ingestion pipeline</strong> for batch processing with progress tracking</li>
          <li><strong style={{ color: '#e6edf3' }}>Check file sizes</strong> - very large files may need chunking before processing</li>
          <li><strong style={{ color: '#e6edf3' }}>Handle encoding</strong> - specify encoding for text files when needed</li>
          <li><strong style={{ color: '#e6edf3' }}>Validate content</strong> - check that extracted text is meaningful</li>
          <li><strong style={{ color: '#e6edf3' }}>Use metadata</strong> - leverage title, author, and other metadata for better retrieval</li>
          <li><strong style={{ color: '#e6edf3' }}>Monitor performance</strong> - PDF processing can be slow for large documents</li>
          <li><strong style={{ color: '#e6edf3' }}>Handle mixed formats</strong> - directories often contain different file types</li>
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