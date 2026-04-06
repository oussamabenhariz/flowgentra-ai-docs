import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const sidebarLinks = [
  {
    group: 'Introduction',
    links: [
      { to: '/docs/getting-started', label: 'Getting Started' },
      { to: '/docs/installation',    label: 'Installation' },
      { to: '/docs/what-is-flowgentra', label: 'What is Flowgentra?' },
    ],
  },
  {
    group: 'Core Concepts',
    links: [
      { to: '/docs/concepts/graphs', label: 'Graphs' },
      { to: '/docs/concepts/nodes', label: 'Nodes' },
      { to: '/docs/concepts/state', label: 'State' },
    ],
  },
  {
    group: 'Guides',
    links: [
      { to: '/docs/guides/agents', label: 'Building Agents' },
      { to: '/docs/guides/graphs', label: 'Working with Graphs' },
      { to: '/docs/guides/human-in-the-loop', label: 'Human-in-the-Loop' },
      { to: '/docs/guides/llm-client', label: 'LLM Integration' },
      { to: '/docs/guides/memory', label: 'Memory & Persistence' },
      { to: '/docs/guides/observability', label: 'Observability' },
      { to: '/docs/guides/rag', label: 'RAG Systems' },
      { to: '/docs/guides/state', label: 'State Management' },
      { to: '/docs/guides/supervisor', label: 'Multi-Agent Systems' },
      { to: '/docs/guides/tools', label: 'Tool Integration' },
    ],
  },
  {
    group: 'API Reference',
    links: [
      { to: '/docs/api/state-graph',     label: 'StateGraph' },
      { to: '/docs/api/handlers-config', label: 'Handlers & Config' },
      { to: '/docs/api/memory',          label: 'Memory' },
      { to: '/docs/api/builtin-nodes',   label: 'Built-in Nodes' },
      { to: '/docs/api/agents',          label: 'Agents' },
      { to: '/docs/api/llm',             label: 'LLM Clients' },
      { to: '/docs/api/rag',             label: 'RAG' },
      { to: '/docs/api/supervisor',      label: 'Supervisor' },
      { to: '/docs/api/observability',   label: 'Observability' },
    ],
  },
  {
    group: 'More',
    links: [
      { to: '/docs/examples',  label: 'Examples' },
      { to: '/docs/best-practices', label: 'Best Practices' },
      { to: '/docs/faq', label: 'FAQ' },
      { to: '/docs/changelog', label: 'Changelog' },
    ],
  },
]

export default function DocLayout({ children, anchors = [] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '5px 12px',
    borderRadius: 4,
    fontSize: '0.875rem',
    color: isActive ? 'var(--accent)' : '#8b949e',
    background: isActive ? 'var(--accent-dim, rgba(206,66,43,0.1))' : 'transparent',
    textDecoration: 'none',
    fontWeight: isActive ? 500 : 400,
    transition: 'color 0.15s, background 0.15s',
  })

  const Sidebar = () => (
    <aside style={{
      width: 220, flexShrink: 0,
      borderRight: '1px solid #21262d',
      padding: '32px 0',
      display: 'flex', flexDirection: 'column', gap: '28px',
    }}>
      {sidebarLinks.map(group => (
        <div key={group.group}>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 12px', marginBottom: 8 }}>
            {group.group}
          </div>
          {group.links.map(l => (
            <NavLink key={l.to} to={l.to} style={linkStyle}>{l.label}</NavLink>
          ))}
        </div>
      ))}
      {anchors.length > 0 && (
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 12px', marginBottom: 8 }}>
            On this page
          </div>
          {anchors.map(a => (
            <a key={a.id} href={`#${a.id}`} style={{ display: 'block', padding: '4px 12px', fontSize: '0.8125rem', color: '#8b949e', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = '#8b949e'}>
              {a.label}
            </a>
          ))}
        </div>
      )}
    </aside>
  )

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
      {/* Desktop sidebar */}
      <div className="doc-sidebar-desktop">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex' }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', position: 'absolute', inset: 0 }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'relative', background: '#0d1117', width: 260, height: '100%', padding: '20px 0', overflowY: 'auto', borderRight: '1px solid #21262d', zIndex: 1 }}>
            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer', padding: '0 16px', marginBottom: 16 }}>✕ Close</button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <main style={{ flex: 1, padding: '40px 0 80px 48px', minWidth: 0 }}>
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="doc-mobile-toggle"
          style={{ display: 'none', marginBottom: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 6, color: '#e6edf3', cursor: 'pointer', padding: '8px 16px', fontSize: '0.875rem' }}>
          ☰ Menu
        </button>
        {children}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .doc-sidebar-desktop { display: none; }
          .doc-mobile-toggle { display: flex !important; }
          main { padding-left: 0 !important; }
        }
      `}</style>
    </div>
  )
}
