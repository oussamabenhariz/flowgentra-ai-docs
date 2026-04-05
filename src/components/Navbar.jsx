import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { to: '/docs/getting-started', label: 'Getting Started' },
  { to: '/docs/installation',    label: 'Installation' },
  { to: '/docs/api/state-graph', label: 'API', end: false },
  { to: '/docs/examples',        label: 'Examples' },
  { to: '/docs/changelog',       label: 'Changelog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--accent)' : '#8b949e',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '4px 0',
    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
    transition: 'color 0.15s',
    whiteSpace: 'nowrap',
  })

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(13,17,23,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #21262d',
    }}>
      <nav style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px', height: '60px',
        display: 'flex', alignItems: 'center', gap: '32px',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.875rem', fontWeight: 700, color: '#fff',
            transition: 'background 0.2s',
          }}>F</div>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#e6edf3', letterSpacing: '-0.02em' }}>
            flowgentra
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}
          className="desktop-nav">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} style={linkStyle} end={l.end !== false}>{l.label}</NavLink>
          ))}
        </div>

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="desktop-nav">
            <LanguageSwitcher compact />
          </div>
          {/* GitHub */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            style={{ color: '#8b949e', display: 'flex', alignItems: 'center' }}
            title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e', padding: 4, display: 'none' }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid #21262d', background: '#0d1117', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} style={linkStyle} end={l.end !== false} onClick={() => setMobileOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
