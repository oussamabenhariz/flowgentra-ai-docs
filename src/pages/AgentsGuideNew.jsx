import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const anchors = [
  { id: 'overview', label: 'What Are Agents?' },
  { id: 'quick-example', label: 'Quick Example' },
  { id: 'how-it-works', label: 'How Agents Work' },
  { id: 'types', label: 'Agent Types' },
  { id: 'when-to-use', label: 'When to Use Each Type' },
  { id: 'common-mistakes', label: 'Common Mistakes' },
  { id: 'next-steps', label: 'Next Steps' },
]

export default function AgentsGuide() {
  const { language } = useLanguage()

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Building Agents
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 40, lineHeight: 1.7 }}>
        Create AI agents that can reason, use tools, and handle complex multi-step tasks.
        <strong style={{ color: '#e6edf3' }}> 5 minutes to your first agent, 15 minutes to customize it.</strong>
      </p>

      <Section id="overview" title="What Are Agents?">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Think of an agent as a smart assistant that can:
        </p>
        <ul style={{ color: '#8b949e', marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Reason step-by-step</strong> about how to solve problems</li>
          <li><strong>Use tools</strong> like web search, calculators, or APIs</li>
          <li><strong>Remember context</strong> across multiple interactions</li>
          <li><strong>Learn from mistakes</strong> and adapt its approach</li>
        </ul>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginTop: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🤔 Mental Model: Agent as a Loop
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            Every agent follows this simple loop:
          </p>
          <div style={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '0.9rem', background: '#161b22', padding: '12px', borderRadius: 6, marginBottom: 12 }}>
            User Input → Agent Thinks → Agent Acts → Gets Result → Agent Thinks Again...
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            The agent keeps looping until it has a good answer or decides it can't help.
          </p>
        </div>
      </Section>

      <Section id="quick-example" title="Quick Example: Build Your First Agent">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Let's create an agent that can search the web and answer questions. This takes 2 minutes to run.
        </p>

        <CodeBlock
          python={`from flowgentra_ai import AgentBuilder
from flowgentra_ai.tools import WebSearchTool

# Create an agent that can search the web
agent = AgentBuilder() \\
    .with_llm("openai/gpt-4") \\
    .with_tools([WebSearchTool()]) \\
    .build()

# Ask it a question
result = agent.run("What's the current population of Tokyo?")
print(result)
# Output: "As of 2024, Tokyo has approximately 14.1 million residents..."`}
        />

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '16px',
          marginTop: 16
        }}>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            <strong style={{ color: '#e6edf3' }}>What just happened:</strong> The agent received your question,
            decided it needed current data, used the web search tool, found the information, and gave you a clear answer.
          </p>
        </div>
      </Section>

      <Section id="how-it-works" title="How Agents Work">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Here's the step-by-step flow of what happens when you call <code style={{ background: 'rgba(177,186,196,0.2)', padding: '2px 6px', borderRadius: 3 }}>agent.run()</code>:
        </p>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ background: '#3572A5', color: 'white', padding: '4px 8px', borderRadius: 12, fontSize: '0.8rem', fontWeight: 600 }}>1</span>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>User Input</span>
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            Your question or request enters the system
          </p>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ background: '#3572A5', color: 'white', padding: '4px 8px', borderRadius: 12, fontSize: '0.8rem', fontWeight: 600 }}>2</span>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>Agent Thinks</span>
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 8 }}>
            The LLM analyzes the input and decides what to do
          </p>
          <ul style={{ color: '#8b949e', fontSize: '0.9rem', paddingLeft: 20, margin: 0 }}>
            <li>Do I have enough information to answer?</li>
            <li>Should I use a tool to get more data?</li>
            <li>What's the best next step?</li>
          </ul>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ background: '#3572A5', color: 'white', padding: '4px 8px', borderRadius: 12, fontSize: '0.8rem', fontWeight: 600 }}>3</span>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>Agent Acts</span>
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            If needed, the agent calls tools (web search, calculator, etc.) and gets results
          </p>
        </div>

        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ background: '#3572A5', color: 'white', padding: '4px 8px', borderRadius: 12, fontSize: '0.8rem', fontWeight: 600 }}>4</span>
            <span style={{ color: '#e6edf3', fontWeight: 600 }}>Loop or Answer</span>
          </div>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>
            The agent either loops back to think again, or gives you the final answer
          </p>
        </div>
      </Section>

      <Section id="types" title="Agent Types">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Flowgentra gives you pre-built agent types so you don't have to implement the thinking loop yourself:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {[
            {
              name: 'ZeroShotReAct',
              description: 'Simple agent that reasons step-by-step without examples',
              bestFor: 'General tool use, straightforward tasks',
              example: 'Web search, basic calculations'
            },
            {
              name: 'FewShotReAct',
              description: 'Agent trained with examples of good reasoning patterns',
              bestFor: 'Complex tasks, consistent behavior needed',
              example: 'Multi-step research, data analysis'
            },
            {
              name: 'Conversational',
              description: 'Agent designed for back-and-forth chat with memory',
              bestFor: 'Customer support, tutoring, ongoing conversations',
              example: 'Help desk, learning assistant'
            },
            {
              name: 'Config-Driven',
              description: 'Agent behavior defined entirely in configuration files',
              bestFor: 'Production deployments, A/B testing',
              example: 'Enterprise chatbots, standardized workflows'
            },
            {
              name: 'MemoryAwareAgent',
              description: 'Agent with built-in conversation memory and context',
              bestFor: 'Long conversations, personalized experiences',
              example: 'Personal assistants, therapy bots'
            },
          ].map(agent => (
            <div key={agent.name} style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 8,
              padding: '20px'
            }}>
              <h4 style={{ color: '#e6edf3', fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>
                {agent.name}
              </h4>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
                {agent.description}
              </p>
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: '#3572A5', fontSize: '0.8rem', fontWeight: 600 }}>Best for:</span>
                <span style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: 8 }}>{agent.bestFor}</span>
              </div>
              <div>
                <span style={{ color: '#3572A5', fontSize: '0.8rem', fontWeight: 600 }}>Example:</span>
                <span style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: 8 }}>{agent.example}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="when-to-use" title="When to Use Each Type">
        <div style={{
          background: '#0d1117',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 20
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            🎯 Quick Decision Guide
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {[
              {
                question: 'Just need basic tool use?',
                answer: 'ZeroShotReAct',
                reason: 'Simple, fast, works for most cases'
              },
              {
                question: 'Need consistent behavior?',
                answer: 'FewShotReAct',
                reason: 'Learns from examples, more reliable'
              },
              {
                question: 'Building a chatbot?',
                answer: 'Conversational',
                reason: 'Built-in memory and context handling'
              },
              {
                question: 'Production deployment?',
                answer: 'Config-Driven',
                reason: 'Easier to update and maintain'
              },
            ].map(item => (
              <div key={item.question} style={{ padding: '12px', background: '#161b22', borderRadius: 6 }}>
                <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 8, fontWeight: 500 }}>
                  {item.question}
                </p>
                <div style={{ color: '#3572A5', fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>
                  → {item.answer}
                </div>
                <p style={{ color: '#8b949e', fontSize: '0.8rem', margin: 0 }}>
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="common-mistakes" title="Common Mistakes & How to Avoid Them">
        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Using the Wrong Agent Type
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> Using ZeroShotReAct for complex tasks where you need consistent behavior.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Solution:</strong> Switch to FewShotReAct and provide good examples in your prompt.
          </p>
          <CodeBlock
            python={`# Good: Use FewShotReAct for complex tasks
agent = AgentBuilder() \\
    .with_agent_type(FewShotReAct()) \\
    .with_examples([
        {"input": "Analyze this data", "reasoning": "First check data quality, then...", "output": "..."},
    ]) \\
    .build()`}
          />
        </div>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 16
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Not Setting Clear Stopping Conditions
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> Agent loops forever or stops too early.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Solution:</strong> Set max_steps and clear success criteria.
          </p>
          <CodeBlock
            python={`agent = AgentBuilder() \\
    .with_max_steps(10) \\
    .with_stop_condition("If you have a clear answer, stop") \\
    .build()`}
          />
        </div>

        <div style={{
          background: '#161b22',
          border: '1px solid #21262d',
          borderRadius: 8,
          padding: '20px'
        }}>
          <h4 style={{ color: '#e6edf3', fontSize: '1rem', fontWeight: 600, marginBottom: 12 }}>
            ❌ Mistake: Ignoring Tool Errors
          </h4>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Problem:</strong> Agent fails silently when tools don't work.
          </p>
          <p style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: 12 }}>
            <strong>Solution:</strong> Add error handling and fallback behavior.
          </p>
          <CodeBlock
            python={`agent = AgentBuilder() \\
    .with_error_handling("If a tool fails, try a different approach") \\
    .with_fallback_tools([BasicSearchTool()]) \\
    .build()`}
          />
        </div>
      </Section>

      <Section id="next-steps" title="Next Steps">
        <p style={{ color: '#8b949e', marginBottom: 16 }}>
          Now that you understand agents, let's put them to work:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            {
              title: 'Add Tools to Your Agent',
              desc: 'Make your agent more capable with custom tools',
              link: '/docs/tools',
              icon: '🔧'
            },
            {
              title: 'Handle Conversations',
              desc: 'Add memory so agents remember previous interactions',
              link: '/docs/memory',
              icon: '🧠'
            },
            {
              title: 'Build Multi-Agent Systems',
              desc: 'Coordinate multiple agents working together',
              link: '/docs/supervisor',
              icon: '👥'
            },
            {
              title: 'Real-World Examples',
              desc: 'See agents solving actual problems',
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
