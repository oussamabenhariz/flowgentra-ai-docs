import DocLayout from '../components/DocLayout'
import ApiEntry from '../components/ApiEntry'
import { apiEntries } from '../data/api'

const anchors = apiEntries.map(e => ({ id: e.id, label: e.name }))

export default function ApiReference() {
  return (
    <DocLayout anchors={anchors}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: 8, marginTop: 0 }}>
        API Reference
      </h1>
      <p style={{ color: '#8b949e', marginBottom: 48, lineHeight: 1.7 }}>
        Full API documentation. Use the language switcher in the navbar to toggle between Rust and Python signatures.
      </p>
      {apiEntries.map(entry => (
        <ApiEntry key={entry.id} entry={entry} />
      ))}
    </DocLayout>
  )
}
