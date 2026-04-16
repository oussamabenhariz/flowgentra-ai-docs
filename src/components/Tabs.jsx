import { useState } from 'react'

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0)
  
  return (
    <div style={{ marginY: '20px' }}>
      <div style={{ 
        display: 'flex', 
        gap: 8, 
        borderBottom: '1px solid #21262d',
        overflowX: 'auto',
      }}>
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '10px 16px',
              background: i === active ? '#161b22' : 'transparent',
              color: i === active ? '#3a86ff' : '#8b949e',
              border: i === active ? '1px solid #30363d' : 'none',
              borderBottom: i === active ? 'none' : '1px solid transparent',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer',
              fontWeight: i === active ? 500 : 400,
              transition: 'color 0.15s, background 0.15s',
              whiteSpace: 'nowrap',
              fontSize: '0.9rem',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ background: '#161b22', borderRadius: '0 0 8px 8px', border: '1px solid #30363d', borderTop: 'none', padding: '16px' }}>
        {tabs[active].content}
      </div>
    </div>
  )
}
