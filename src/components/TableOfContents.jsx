import { useEffect, useState } from 'react'

export default function TableOfContents({ anchors }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const headings = anchors.map(a => ({
        id: a.id,
        el: document.getElementById(a.id),
      })).filter(h => h.el)

      let current = headings[0]?.id
      for (const h of headings) {
        const rect = h.el.getBoundingClientRect()
        if (rect.top < 100) {
          current = h.id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [anchors])

  if (!anchors || anchors.length === 0) return null

  return (
    <div style={{
      fontSize: '0.8125rem',
      position: 'sticky',
      top: 100,
      maxHeight: 'calc(100vh - 120px)',
      overflowY: 'auto',
      color: '#8b949e',
      paddingRight: 16,
    }}>
      <div style={{ 
        fontWeight: 600, 
        marginBottom: 12,
        color: '#e6edf3',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        On this page
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {anchors.map(a => (
          <a
            key={a.id}
            href={`#${a.id}`}
            style={{
              display: 'block',
              color: activeId === a.id ? '#3a86ff' : '#8b949e',
              textDecoration: 'none',
              borderLeft: `2px solid ${activeId === a.id ? '#3a86ff' : '#21262d'}`,
              paddingLeft: 12,
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.color = '#3a86ff'
              e.target.style.borderColor = '#3a86ff'
            }}
            onMouseLeave={e => {
              if (activeId !== a.id) {
                e.target.style.color = '#8b949e'
                e.target.style.borderColor = '#21262d'
              }
            }}
          >
            {a.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
