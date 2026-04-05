import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage } = useLanguage()

  const activeStyle = {
    backgroundColor: 'var(--accent)',
    color: '#fff',
    borderColor: 'var(--accent)',
  }
  const inactiveStyle = {
    backgroundColor: 'transparent',
    color: '#8b949e',
    borderColor: '#30363d',
  }

  const btnBase = {
    cursor: 'pointer',
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontWeight: 500,
    fontSize: compact ? '0.8125rem' : '0.875rem',
    padding: compact ? '4px 12px' : '5px 16px',
    border: '1px solid',
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
  }

  return (
    <div style={{ display: 'flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #30363d' }}>
      <button
        onClick={() => setLanguage('rust')}
        style={{ ...btnBase, borderRadius: 0, border: 'none', ...(language === 'rust' ? activeStyle : inactiveStyle) }}
        aria-pressed={language === 'rust'}
      >
        <span aria-hidden>🦀</span> Rust
      </button>
      <div style={{ width: '1px', background: '#30363d' }} />
      <button
        onClick={() => setLanguage('python')}
        style={{ ...btnBase, borderRadius: 0, border: 'none', ...(language === 'python' ? activeStyle : inactiveStyle) }}
        aria-pressed={language === 'python'}
      >
        <span aria-hidden>🐍</span> Python
      </button>
    </div>
  )
}
