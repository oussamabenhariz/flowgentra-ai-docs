export default function Alert({ type = 'info', title, children }) {
  const styles = {
    info: { 
      bg: '#0d3b66', 
      border: '#3a86ff', 
      icon: 'ℹ️',
      borderColor: '#3a86ff',
    },
    warning: { 
      bg: '#6a3e06', 
      border: '#ffc300', 
      icon: '⚠️',
      borderColor: '#ffc300',
    },
    tip: { 
      bg: '#1b4332', 
      border: '#52b788', 
      icon: '💡',
      borderColor: '#52b788',
    },
    danger: { 
      bg: '#5a1e1e', 
      border: '#e63946', 
      icon: '🚨',
      borderColor: '#e63946',
    },
  }
  const s = styles[type] || styles.info
  
  return (
    <div style={{
      background: s.bg,
      border: `2px solid ${s.borderColor}`,
      borderLeft: `4px solid ${s.borderColor}`,
      borderRadius: 8,
      padding: 16,
      margin: '20px 0',
      lineHeight: 1.6,
    }}>
      <div style={{ fontWeight: 600, marginBottom: 8, color: s.border }}>
        {s.icon} {title}
      </div>
      <div style={{ fontSize: '0.95rem', color: '#e6edf3' }}>
        {children}
      </div>
    </div>
  )
}
