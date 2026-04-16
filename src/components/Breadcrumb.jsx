import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null
  
  return (
    <nav style={{ 
      fontSize: '0.875rem', 
      color: '#8b949e', 
      marginBottom: 24,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
    }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {i > 0 && <span style={{ color: '#30363d' }}>/</span>}
          {item.href ? (
            <Link 
              to={item.href} 
              style={{ 
                color: '#3a86ff', 
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.target.style.opacity = '0.8'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#8b949e' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
