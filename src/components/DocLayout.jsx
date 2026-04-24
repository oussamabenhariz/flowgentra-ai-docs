import { useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'

// Ordered flat list — used for Prev/Next navigation
export const ALL_DOC_PAGES = [
  // ── Get Started ──────────────────────────────────────────
  { to: '/docs/getting-started',    label: 'Introduction',          group: 'Get Started' },
  { to: '/docs/quickstart-rust',    label: 'Quick Start — Rust',    group: 'Get Started' },
  { to: '/docs/quickstart-python',  label: 'Quick Start — Python',  group: 'Get Started' },
  { to: '/docs/installation',       label: 'Installation',          group: 'Get Started' },
  // ── Core Concepts ─────────────────────────────────────────
  { to: '/docs/what-is-flowgentra', label: 'What is Flowgentra?',   group: 'Core Concepts' },
  { to: '/docs/concepts/state',     label: 'State',                 group: 'Core Concepts' },
  { to: '/docs/concepts/graphs',    label: 'Graphs & Workflows',    group: 'Core Concepts' },
  { to: '/docs/concepts/nodes',     label: 'Nodes',                 group: 'Core Concepts' },
  // ── Guides ────────────────────────────────────────────────
  { to: '/docs/guides/agents',          label: 'Building Agents',       group: 'Guides' },
  { to: '/docs/guides/llm-client',      label: 'LLM Integration',       group: 'Guides' },
  { to: '/docs/guides/tools',           label: 'Tool Use',              group: 'Guides' },
  { to: '/docs/guides/mcp',             label: 'Model Context Protocol', group: 'Guides' },
  { to: '/docs/guides/plugins',         label: 'Plugins System',         group: 'Guides' },
  { to: '/docs/guides/middleware',      label: 'Middleware',             group: 'Guides' },
  { to: '/docs/guides/validation',      label: 'Validation',             group: 'Guides' },
  { to: '/docs/guides/memory',          label: 'Memory & Conversations', group: 'Guides' },
  { to: '/docs/guides/rag',             label: 'RAG',                   group: 'Guides' },
  { to: '/docs/guides/document-loaders',label: 'Document Loaders',      group: 'Guides' },
  { to: '/docs/guides/supervisor',      label: 'Multi-Agent Systems',   group: 'Guides' },
  { to: '/docs/guides/human-in-loop',   label: 'Human-in-the-Loop',    group: 'Guides' },
  { to: '/docs/guides/error-handling',  label: 'Error Handling & Retries', group: 'Guides' },
  { to: '/docs/guides/evaluation',      label: 'Evaluation',            group: 'Guides' },
  { to: '/docs/guides/observability',   label: 'Observability & Tracing', group: 'Guides' },
  { to: '/docs/guides/advanced-nodes',  label: 'Advanced Nodes',        group: 'Guides' },
  { to: '/docs/guides/reranking',       label: 'Reranking',             group: 'Guides' },
  { to: '/docs/guides/configuration',   label: 'Configuration',         group: 'Guides' },
  // ── API Reference ─────────────────────────────────────────
  { to: '/docs/api/state-graph',     label: 'StateGraph',           group: 'API Reference' },
  { to: '/docs/api/handlers-config', label: 'Handlers & Config',    group: 'API Reference' },
  { to: '/docs/api/agents',          label: 'Agents',               group: 'API Reference' },
  { to: '/docs/api/llm',             label: 'LLMs',          group: 'API Reference' },
  { to: '/docs/api/builtin-nodes',   label: 'Built-in Nodes',       group: 'API Reference' },
  { to: '/docs/api/rag',             label: 'RAG',                  group: 'API Reference' },
  { to: '/docs/api/memory',          label: 'Memory',               group: 'API Reference' },
  { to: '/docs/api/supervisor',      label: 'Supervisor',           group: 'API Reference' },
  { to: '/docs/api/observability',   label: 'Observability',        group: 'API Reference' },
  // ── Resources ─────────────────────────────────────────────
  { to: '/docs/examples',       label: 'Examples',       group: 'Resources' },
  { to: '/docs/best-practices', label: 'Best Practices', group: 'Resources' },
  { to: '/docs/glossary',       label: 'Glossary',       group: 'Resources' },
  { to: '/docs/faq',            label: 'FAQ',            group: 'Resources' },
  { to: '/docs/changelog',      label: 'Changelog',      group: 'Resources' },
]

// Build grouped sidebar from flat list
const GROUPS = ['Get Started', 'Core Concepts', 'Guides', 'API Reference', 'Resources']
const sidebarLinks = GROUPS.map(group => ({
  group,
  links: ALL_DOC_PAGES.filter(p => p.group === group),
}))

export default function DocLayout({ children, anchors = [] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Prev / Next
  const currentIdx = ALL_DOC_PAGES.findIndex(p => p.to === location.pathname)
  const prevPage = currentIdx > 0 ? ALL_DOC_PAGES[currentIdx - 1] : null
  const nextPage = currentIdx >= 0 && currentIdx < ALL_DOC_PAGES.length - 1 ? ALL_DOC_PAGES[currentIdx + 1] : null

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
      width: 230, flexShrink: 0,
      borderRight: '1px solid #21262d',
      padding: '28px 0',
      display: 'flex', flexDirection: 'column', gap: '24px',
    }}>
      {sidebarLinks.map(group => (
        <div key={group.group}>
          <div style={{
            fontSize: '0.7rem', fontWeight: 600, color: '#484f58',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '0 12px', marginBottom: 6,
          }}>
            {group.group}
          </div>
          {group.links.map(l => (
            <NavLink key={l.to} to={l.to} style={linkStyle} end>{l.label}</NavLink>
          ))}
        </div>
      ))}

      {anchors.length > 0 && (
        <div>
          <div style={{
            fontSize: '0.7rem', fontWeight: 600, color: '#484f58',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '0 12px', marginBottom: 6,
          }}>
            On this page
          </div>
          {anchors.map(a => (
            <a key={a.id} href={`#${a.id}`} style={{
              display: 'block', padding: '4px 12px',
              fontSize: '0.8125rem', color: '#8b949e', textDecoration: 'none',
              transition: 'color 0.15s',
            }}
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
    <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px', display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
      {/* Desktop sidebar */}
      <div className="doc-sidebar-desktop" style={{ position: 'sticky', top: 60, height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex' }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', position: 'absolute', inset: 0 }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'relative', background: '#0d1117', width: 270, height: '100%', padding: '20px 0', overflowY: 'auto', borderRight: '1px solid #21262d', zIndex: 1 }}>
            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer', padding: '0 16px', marginBottom: 16 }}>✕ Close</button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <main style={{ flex: 1, padding: '40px 0 80px 52px', minWidth: 0, maxWidth: 820 }}>
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="doc-mobile-toggle"
          style={{ display: 'none', marginBottom: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 6, color: '#e6edf3', cursor: 'pointer', padding: '8px 16px', fontSize: '0.875rem' }}>
          ☰ Menu
        </button>

        {children}

        {/* Prev / Next navigation */}
        {(prevPage || nextPage) && (
          <nav style={{
            display: 'flex', justifyContent: 'space-between', gap: 16,
            marginTop: 64, paddingTop: 32, borderTop: '1px solid #21262d',
          }}>
            {prevPage ? (
              <Link to={prevPage.to} style={{
                display: 'flex', flexDirection: 'column', gap: 2,
                background: '#161b22', border: '1px solid #21262d',
                borderRadius: 8, padding: '14px 18px', textDecoration: 'none',
                flex: 1, maxWidth: '48%', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
                <span style={{ fontSize: '0.75rem', color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.06em' }}>← Previous</span>
                <span style={{ fontSize: '0.9375rem', color: '#e6edf3', fontWeight: 500 }}>{prevPage.label}</span>
              </Link>
            ) : <div />}
            {nextPage ? (
              <Link to={nextPage.to} style={{
                display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end',
                background: '#161b22', border: '1px solid #21262d',
                borderRadius: 8, padding: '14px 18px', textDecoration: 'none',
                flex: 1, maxWidth: '48%', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
                <span style={{ fontSize: '0.75rem', color: '#484f58', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Next →</span>
                <span style={{ fontSize: '0.9375rem', color: '#e6edf3', fontWeight: 500 }}>{nextPage.label}</span>
              </Link>
            ) : <div />}
          </nav>
        )}
      </main>

      <style>{`
        .doc-sidebar-desktop { display: block; }
        .doc-mobile-toggle   { display: none; }
        @media (max-width: 900px) {
          .doc-sidebar-desktop { display: none !important; }
          .doc-mobile-toggle   { display: flex !important; }
          main { padding-left: 0 !important; }
        }
      `}</style>
    </div>
  )
}
