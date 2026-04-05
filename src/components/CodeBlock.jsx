import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

let shikiHighlighter = null

async function getHighlighter() {
  if (shikiHighlighter) return shikiHighlighter
  const { createHighlighter } = await import('shiki')
  shikiHighlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['rust', 'python', 'yaml', 'bash', 'toml'],
  })
  return shikiHighlighter
}

export default function CodeBlock({ rust, python, lang, forceLang }) {
  const { language } = useLanguage()
  const [html, setHtml] = useState('')
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  const activeLang = forceLang || (language === 'rust' ? 'rust' : 'python')
  const code = forceLang ? (rust || python) : (language === 'rust' ? rust : python)
  const highlightLang = lang || activeLang

  useEffect(() => {
    if (!code) return
    let cancelled = false
    getHighlighter().then(hl => {
      if (cancelled) return
      const result = hl.codeToHtml(code.trim(), {
        lang: highlightLang,
        theme: 'github-dark',
      })
      setHtml(result)
    })
    return () => { cancelled = true }
  }, [code, highlightLang])

  const handleCopy = () => {
    navigator.clipboard.writeText(code?.trim() || '')
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ position: 'relative', background: '#161b22', borderRadius: '8px', overflow: 'hidden', border: '1px solid #30363d' }}>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #21262d', background: '#0d1117' }}>
        <span style={{ fontSize: '0.75rem', color: '#8b949e', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {highlightLang}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: 'none',
            border: '1px solid #30363d',
            borderRadius: '4px',
            color: copied ? 'var(--accent)' : '#8b949e',
            cursor: 'pointer',
            fontSize: '0.75rem',
            padding: '3px 10px',
            fontFamily: 'IBM Plex Sans, sans-serif',
            transition: 'color 0.15s, border-color 0.15s',
            borderColor: copied ? 'var(--accent)' : '#30363d',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {html
        ? <div dangerouslySetInnerHTML={{ __html: html }} />
        : (
          <pre style={{ padding: '1.25rem 1.5rem', margin: 0, fontSize: '0.8125rem', lineHeight: 1.75, color: '#e6edf3', overflowX: 'auto' }}>
            <code>{code?.trim()}</code>
          </pre>
        )
      }
    </div>
  )
}
