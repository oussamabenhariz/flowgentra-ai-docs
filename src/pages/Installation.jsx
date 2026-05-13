import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'

export default function Installation() {
  const { language } = useLanguage()

  return (
    <DocLayout>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Installation
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Get Flowgentra added to your project in under a minute.
      </p>

      {language === 'rust' ? (
        <>
          <Section title="Cargo (Rust)" subtitle="Add to your Cargo.toml:">
            <CodeBlock forceLang="toml" rust={`[dependencies]
flowgentra-ai = "0.2"
tokio = { version = "1", features = ["full"] }`} />
          </Section>

          <Section title="Feature Flags" subtitle="Enable optional features:">
            <CodeBlock forceLang="toml" rust={`[dependencies]
flowgentra-ai = { version = "0.2", features = [
    "openai",    # OpenAI integration helpers
    "tracing",   # Tracing + spans for each node
    "yaml",      # YAML config loading
    "memory",    # Built-in conversation memory
]}`} />
          </Section>

          <Section title="Requirements">
            <ul style={{ color: '#8b949e', lineHeight: 2, paddingLeft: 20 }}>
              <li>Rust <strong style={{ color: '#e6edf3' }}>1.75+</strong></li>
              <li>Tokio async runtime</li>
              <li>Cargo 1.75+</li>
            </ul>
          </Section>

          <Section title="Verify">
            <CodeBlock forceLang="bash" rust={`cargo add flowgentra-ai
cargo build`} />
          </Section>
        </>
      ) : (
        <>
          <Section title="pip (Python)" subtitle="Install from PyPI:">
            <CodeBlock forceLang="bash" python={`pip install flowgentra-ai`} />
          </Section>

          <Section title="With extras">
            <CodeBlock forceLang="bash" python={`# Include all optional integrations
pip install "flowgentra-ai[all]"

# Or individually
pip install "flowgentra-ai[openai]"
pip install "flowgentra-ai[anthropic]"
pip install "flowgentra-ai[tracing]"`} />
          </Section>

          <Section title="Requirements">
            <ul style={{ color: '#8b949e', lineHeight: 2, paddingLeft: 20 }}>
              <li>Python <strong style={{ color: '#e6edf3' }}>3.10+</strong></li>
              <li>Works in both sync and async contexts</li>
            </ul>
          </Section>

          <Section title="Verify">
            <CodeBlock forceLang="bash" python={`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"`} />
          </Section>

          <Section title="Virtual environment (recommended)">
            <CodeBlock forceLang="bash" python={`python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install flowgentra-ai`} />
          </Section>

          <Section title="Import style">
            <p style={{ color: '#8b949e', marginBottom: 12, fontSize: '0.9375rem' }}>
              Import from the appropriate submodule — not from the top-level package:
            </p>
            <CodeBlock forceLang="bash" python={`# Correct — submodule imports
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
from flowgentra_ai.tools import ToolRegistry, CalculatorTool
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings
from flowgentra_ai.supervision import Supervisor
from flowgentra_ai.observability import ExecutionTracer`} />
          </Section>
        </>
      )}
    </DocLayout>
  )
}

function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#e6edf3', marginBottom: subtitle ? 6 : 14, marginTop: 0 }}>{title}</h2>
      {subtitle && <p style={{ color: '#8b949e', marginBottom: 12 }}>{subtitle}</p>}
      {children}
    </div>
  )
}
