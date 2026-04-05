import { useLanguage } from '../context/LanguageContext'
import CodeBlock from './CodeBlock'

export default function ApiEntry({ entry }) {
  const { language } = useLanguage()
  const data = language === 'rust' ? entry.rust : entry.python

  return (
    <section id={entry.id} style={{ marginBottom: 64, paddingBottom: 64, borderBottom: '1px solid #21262d' }}>
      {/* Function name */}
      <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.25rem', color: '#e6edf3', fontWeight: 600, marginBottom: 8, marginTop: 0 }}>
        {entry.name}
      </h2>
      {/* Summary */}
      <p style={{ color: '#8b949e', marginBottom: 20, lineHeight: 1.7 }}>{entry.summary}</p>

      {/* Signature */}
      <div style={{ background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid var(--accent)', borderRadius: '0 6px 6px 0', padding: '12px 16px', marginBottom: 20, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color: '#e6edf3', overflowX: 'auto', whiteSpace: 'pre' }}>
        {data.signature}
      </div>

      {/* Description */}
      <p style={{ color: '#c9d1d9', marginBottom: 24, lineHeight: 1.7 }}>{data.description}</p>

      {/* Parameters table */}
      {data.params?.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12, marginTop: 0 }}>Parameters</h4>
          <div style={{ border: '1px solid #21262d', borderRadius: 6, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#161b22' }}>
                  {['Name', 'Type', 'Description'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 14px', fontSize: '0.75rem', color: '#8b949e', fontWeight: 600, borderBottom: '1px solid #21262d', fontFamily: 'IBM Plex Sans, sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.params.map((p, i) => (
                  <tr key={i} style={{ borderBottom: i < data.params.length - 1 ? '1px solid #21262d' : 'none' }}>
                    <td style={{ padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color: 'var(--accent)' }}>{p.name}</td>
                    <td style={{ padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color: '#79c0ff' }}>{p.type}</td>
                    <td style={{ padding: '8px 14px', fontSize: '0.875rem', color: '#8b949e' }}>{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Returns */}
      <div style={{ marginBottom: 24 }}>
        <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8, marginTop: 0 }}>Returns</h4>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color: '#a5d6ff', margin: 0 }}>{data.returns}</p>
      </div>

      {/* Example */}
      <div>
        <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12, marginTop: 0 }}>Example</h4>
        <CodeBlock rust={entry.rust.example} python={entry.python.example} />
      </div>
    </section>
  )
}
