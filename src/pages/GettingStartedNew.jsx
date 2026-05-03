import DocLayout from '../components/DocLayout'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const anchors = [
  { id: 'welcome',       label: 'Welcome to Flowgentra' },
  { id: 'your-journey',  label: 'Your Learning Journey' },
  { id: 'quick-win',     label: 'Your First Agent (2 minutes)' },
  { id: 'why-flowgentra', label: 'Why Flowgentra?' },
  { id: 'what-makes-it-different', label: 'What Makes It Different?' },
  { id: 'next-steps',    label: 'Where to Go Next' },
]

export default function GettingStarted() {
  const { language, setLanguage } = useLanguage()
  const isRust = language === 'rust'

  return (
    <DocLayout anchors={anchors}>
      <h1 style={h1}>Welcome to Flowgentra</h1>
      <p style={lead}>
        Let's build something amazing together. Whether you're new to AI agents or a seasoned developer,
        Flowgentra helps you create reliable, production-ready AI workflows that actually work.
      </p>

      <Section id="welcome" title="Let's Get You Started">
        <p style={muted}>
          You're about to learn how to build AI agents that can reason, use tools, remember context,
          and handle complex multi-step tasks. We'll start simple and build up from there.
        </p>
        <p style={muted}>
          Think of Flowgentra as your AI workflow toolkit. Instead of wrestling with complex state management
          and error handling, you define what you want your agent to do, and Flowgentra handles the rest.
        </p>
      </Section>

      <Section id="your-journey" title="Your Learning Journey">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
          {[
            {
              title: '🚀 Just Starting Out?',
              path: 'Beginner Path',
              steps: ['Install → Quick Start → First Agent'],
              time: '~10 minutes',
              link: isRust ? '/docs/quickstart-rust' : '/docs/quickstart-python'
            },
            {
              title: '⚡ Building Real Apps?',
              path: 'Intermediate Path',
              steps: ['Core Concepts → Workflows → Tools'],
              time: '~30 minutes',
              link: '/docs/graphs'
            },
            {
              title: '🔧 Scaling & Optimizing?',
              path: 'Advanced Path',
              steps: ['Multi-Agent → Performance → Production'],
              time: '~1 hour',
              link: '/docs/supervisor'
            },
          ].map(path => (
            <div key={path.title} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '20px',
              transition: 'border-color 0.2s'
            }}>
              <h3 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>
                {path.title}
              </h3>
              <div style={{ color: '#3572A5', fontSize: '0.9rem', fontWeight: 500, marginBottom: 12 }}>
                {path.path} • {path.time}
              </div>
              <ul style={{ color: '#8b949e', fontSize: '0.9rem', margin: '8px 0', paddingLeft: 16 }}>
                {path.steps.map(step => (
                  <li key={step} style={{ marginBottom: 4 }}>{step}</li>
                ))}
              </ul>
              <Link to={path.link} style={{
                color: '#3572A5',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4
              }}>
                Start here →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section id="quick-win" title="Your First Agent in 2 Minutes">
        <p style={muted}>
          Before we dive deep, let's get you a quick win. Here's a complete, working agent you can copy-paste and run right now.
          It uses OpenAI's GPT-4 to answer questions by searching the web.
        </p>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>Copy-Paste Agent</span>
            <span style={{ background: '#238636', color: 'white', padding: '2px 8px', borderRadius: 12, fontSize: '0.8rem' }}>
              Ready to run
            </span>
          </div>

          <CodeBlock
            python={`import os
from flowgentra_ai import AgentBuilder
from flowgentra_ai.tools import WebSearchTool

# Set your API key
os.environ["OPENAI_API_KEY"] = "your-key-here"

# Build an agent that can search the web
agent = AgentBuilder() \\
    .with_llm("openai/gpt-4") \\
    .with_tools([WebSearchTool()]) \\
    .build()

# Ask it something
result = agent.run("What's the weather in Tokyo?")
print(result)`}
          />

          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #21262d' }}>
            <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 8 }}>
              <strong style={{ color: '#e6edf3' }}>What happens here:</strong>
            </p>
            <ol style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
              <li>The agent receives your question</li>
              <li>It decides to use the web search tool</li>
              <li>Searches for current weather data</li>
              <li>Combines the information into a helpful answer</li>
            </ol>
          </div>
        </div>

        <Callout type="tip" title="Don't have an API key?">
          Get one from <a href="https://platform.openai.com/api-keys" style={{ color: '#3572A5' }}>OpenAI</a>.
          The example above works with GPT-3.5-turbo too — just change the model name.
        </Callout>
      </Section>

      <Section id="why-flowgentra" title="Why Flowgentra?">
        <p style={muted}>
          Building AI agents is hard. You need to manage conversation state, handle tool calls,
          deal with errors, and make sure everything works reliably. Most frameworks leave this to you.
        </p>
        <p style={muted}>
          Flowgentra handles the complexity so you can focus on what matters: building great AI experiences.
          It's like having a reliable co-pilot for your AI development.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginTop: 16 }}>
          {[
            {
              icon: '🚀',
              title: 'Production Ready',
              body: 'Built-in checkpointing, retries, timeouts, and observability. Your agents handle failures gracefully.'
            },
            {
              icon: '⚡',
              title: 'Blazing Fast',
              body: 'Rust core with Python bindings means your agents run at near-native speed, even with complex workflows.'
            },
            {
              icon: '🎯',
              title: 'Simple Yet Powerful',
              body: 'Start with basic agents, then add tools, memory, and multi-agent coordination as you need them.'
            },
          ].map(f => (
            <div key={f.title} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '18px 20px'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 6 }}>{f.title}</div>
              <p style={{ color: '#8b949e', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="what-makes-it-different" title="What Makes Flowgentra Different?">
        <p style={muted}>
          If you've used LangChain or LangGraph, you'll feel right at home. Flowgentra uses the same
          graph-based model but adds performance and reliability features that matter in production.
        </p>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginTop: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🏎️ Performance First
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            The execution engine is written in Rust, giving you:
          </p>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li>Sub-millisecond graph execution</li>
            <li>No GIL blocking on concurrent operations</li>
            <li>Memory-efficient state management</li>
            <li>Built-in performance monitoring</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginTop: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🛡️ Reliability Built-In
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            Production features you shouldn't have to build yourself:
          </p>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li>Automatic checkpointing and recovery</li>
            <li>Configurable retry policies</li>
            <li>Timeout handling</li>
            <li>Structured error propagation</li>
          </ul>
        </div>
      </Section>

      <Section id="next-steps" title="Where to Go Next">
        <p style={muted}>
          You've got this! Based on what you want to build, here's where to head next:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {[
            {
              title: 'Follow the Quick Start',
              desc: 'Step-by-step guide to your first working agent',
              link: isRust ? '/docs/quickstart-rust' : '/docs/quickstart-python',
              icon: '🚀'
            },
            {
              title: 'Explore Core Concepts',
              desc: 'Understand graphs, nodes, and state',
              link: '/docs/graphs',
              icon: '🎯'
            },
            {
              title: 'See Real Examples',
              desc: 'Working agents for common use cases',
              link: '/docs/examples',
              icon: '💡'
            },
          ].map(step => (
            <Link key={step.title} to={step.link} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '20px',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
              display: 'block'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                <span style={{ color: '#e6edf3', fontWeight: 600 }}>{step.title}</span>
              </div>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>{step.desc}</p>
            </Link>
          ))}
        </div>

        <Callout type="info" title="Need Help?">
          Join our <a href="https://discord.gg/flowgentra" style={{ color: '#3572A5' }}>Discord community</a> or
          check the <Link to="/docs/faq" style={{ color: '#3572A5' }}>FAQ</Link> for common questions.
        </Callout>
      </Section>
    </DocLayout>
  )
}

// Styles (keeping existing)
const h1 = { fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }
const lead = { color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }
const muted = { color: '#8b949e', marginBottom: 16 }
const ul = { color: '#8b949e', marginBottom: 16, paddingLeft: 20 }
const inlineCode = { background: 'rgba(177,186,196,0.2)', padding: '2px 6px', borderRadius: 3, fontSize: '0.9em' }

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

function Callout({ type, title, children }) {
  const colors = {
    info: { bg: 'rgba(53,114,165,0.1)', border: 'rgba(53,114,165,0.4)', icon: 'ℹ️' },
    tip: { bg: 'rgba(46,160,67,0.1)', border: 'rgba(46,160,67,0.4)', icon: '💡' },
    warning: { bg: 'rgba(201,142,30,0.1)', border: 'rgba(201,142,30,0.4)', icon: '⚠️' },
  }

  const color = colors[type] || colors.info

  return (
    <div style={{
      background: color.bg,
      border: `1px solid ${color.border}`,
      borderRadius: 8,
      padding: '16px 20px',
      marginTop: 16
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{color.icon}</span>
        <div>
          <div style={{ fontWeight: 600, color: '#e6edf3', marginBottom: 4 }}>{title}</div>
          <div style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.6 }}>{children}</div>
        </div>
      </div>
    </div>
  )
}
