import { useState } from 'react'
import DocLayout from '../components/DocLayout'
import CodeBlock from '../components/CodeBlock'
import { examples } from '../data/examples'

export default function Examples() {
  const anchors = examples.map(e => ({ id: e.id, label: e.title }))

  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        Examples
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 48, lineHeight: 1.7 }}>
        Real-world usage patterns. Toggle between Rust and Python using the language switcher.
      </p>

      {examples.map((ex, i) => (
        <section key={ex.id} id={ex.id} style={{ marginBottom: 60, paddingBottom: 60, borderBottom: i < examples.length - 1 ? '1px solid #21262d' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid var(--accent)', borderRadius: 10, padding: '2px 10px' }}>
              Example {i + 1}
            </span>
          </div>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#e6edf3', marginBottom: 8, marginTop: 0 }}>{ex.title}</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.7, marginBottom: 20 }}>{ex.description}</p>
          <CodeBlock rust={ex.rust} python={ex.python} />
        </section>
      ))}
    </DocLayout>
  )
}
