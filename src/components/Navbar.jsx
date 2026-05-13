import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import SearchModal from './SearchModal'

const guides = [
  { to: '/docs/agents',            label: 'Building Agents' },
  { to: '/docs/predefined-agents', label: 'Predefined Agents' },
  { to: '/docs/llm-client',        label: 'LLM Integration' },
  { to: '/docs/tools',             label: 'Tools' },
  { to: '/docs/mcp',               label: 'MCP Integration' },
  { to: '/docs/memory',            label: 'Memory' },
  { to: '/docs/rag',               label: 'RAG Pipeline' },
  { to: '/docs/supervisor',        label: 'Multi-Agent Supervisor' },
  { to: '/docs/human-in-the-loop', label: 'Human-in-the-Loop' },
  { to: '/docs/error-handling',    label: 'Error Handling' },
  { to: '/docs/evaluation',        label: 'Evaluation' },
  { to: '/docs/observability',     label: 'Observability' },
  { to: '/docs/configuration',     label: 'Configuration' },
  { to: '/docs/plugins',           label: 'Plugins' },
  { to: '/docs/middleware',        label: 'Middleware' },
  { to: '/docs/validation',        label: 'Validation' },
  { to: '/docs/performance',       label: 'Performance' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { language } = useLanguage()
  const isRust = language === 'rust'

  // Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handle = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  const linkStyle = (isActive) => ({
    color: isActive ? 'var(--accent)' : '#8b949e',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '4px 0',
    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
    transition: 'color 0.15s',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  })

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(13,17,23,0.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #21262d',
    }}>
      <nav style={{
        maxWidth: '1320px', margin: '0 auto',
        padding: '0 24px', height: '60px',
        display: 'flex', alignItems: 'center', gap: '28px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <img src="/flowgentra-ai-docs/logo.png" alt="Flowgentra" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6 }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#e6edf3', letterSpacing: '-0.02em' }}>
            flowgentra
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }} className="desktop-nav">
          <NavLink to="/docs/getting-started" style={({ isActive }) => linkStyle(isActive)}>
            Docs
          </NavLink>

          {/* Guides dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}>
            <button style={{ ...linkStyle(false), display: 'flex', alignItems: 'center', gap: 4 }}>
              Guides
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.5 }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {guidesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '-12px', marginTop: 8,
                background: '#161b22', border: '1px solid #21262d',
                borderRadius: 8, padding: '8px',
                minWidth: 220, zIndex: 60,
                boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
              }}>
                {guides.map(g => (
                  <NavLink key={g.to} to={g.to} style={({ isActive }) => ({
                    display: 'block', padding: '8px 12px',
                    borderRadius: 5, textDecoration: 'none',
                    fontSize: '0.875rem',
                    color: isActive ? 'var(--accent)' : '#8b949e',
                    background: isActive ? 'var(--accent-dim)' : 'transparent',
                    transition: 'color 0.12s, background 0.12s',
                    whiteSpace: 'nowrap',
                  })}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#8b949e'; e.currentTarget.style.background = 'transparent' }}
                    onClick={() => setGuidesOpen(false)}>
                    {g.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/docs/tutorials/research-assistant" style={({ isActive }) => linkStyle(isActive)}>
            Tutorials
          </NavLink>
          <NavLink to="/docs/api/state-graph" style={({ isActive }) => linkStyle(isActive)}>
            API
          </NavLink>
          <NavLink to="/docs/examples" style={({ isActive }) => linkStyle(isActive)}>
            Examples
          </NavLink>
        </div>

        {/* Search bar */}
        <button
          onClick={() => setSearchOpen(true)}
          className="desktop-nav"
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#161b22', border: '1px solid #21262d',
            borderRadius: 7, padding: '6px 12px',
            color: '#8b949e', fontSize: '0.8rem', cursor: 'pointer',
            transition: 'border-color 0.15s',
            minWidth: 180,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#30363d'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#21262d'}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span style={{ flex: 1, textAlign: 'left' }}>Search docs…</span>
          <kbd style={{ background: '#21262d', border: '1px solid #30363d', borderRadius: 4, padding: '1px 5px', fontSize: '0.65rem', color: '#484f58' }}>⌘K</kbd>
        </button>

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Quickstart CTA */}
          <Link
            to={isRust ? '/docs/quickstart-rust' : '/docs/quickstart-python'}
            className="desktop-nav"
            style={{
              background: 'var(--accent)', color: '#fff',
              padding: '6px 14px', borderRadius: 6, textDecoration: 'none',
              fontWeight: 600, fontSize: '0.8125rem', whiteSpace: 'nowrap',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}>
            Quick Start
          </Link>

          <div className="desktop-nav">
            <LanguageSwitcher compact />
          </div>

          {/* GitHub */}
          <a href="https://github.com/oussamabenhariz" target="_blank" rel="noopener noreferrer"
            style={{ color: '#8b949e', display: 'flex', alignItems: 'center', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
            title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e', padding: 4, display: 'none' }}
            className="mobile-menu-btn"
            aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid #21262d', background: '#0d1117', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { to: '/docs/getting-started',  label: 'Documentation' },
            { to: '/docs/quickstart-rust',  label: '🦀 Rust Quickstart' },
            { to: '/docs/quickstart-python', label: '🐍 Python Quickstart' },
            ...guides,
            { to: '/docs/api/state-graph',  label: 'API Reference' },
            { to: '/docs/examples',         label: 'Examples' },
          ].map(l => (
            <NavLink key={l.to} to={l.to}
              style={({ isActive }) => ({ ...linkStyle(isActive), display: 'block' })}
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
