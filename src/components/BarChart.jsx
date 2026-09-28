import { useInView } from '../hooks.js'

// Horizontal bar chart; bars grow in when scrolled into view. Themes restyle via .bar-* classes.
export default function BarChart({ data, max = 100, format = (v) => v, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className={`bar-chart ${inView ? 'is-in' : ''} ${className}`}>
      {data.map((d, i) => (
        <div className="bar-row" key={d.label} style={{ '--i': i }}>
          <span className="bar-label">{d.label}</span>
          <span className="bar-track">
            <span className="bar-fill" style={{ '--w': `${(d.value / max) * 100}%` }} />
          </span>
          <span className="bar-value">{format(d.value)}</span>
        </div>
      ))}
    </div>
  )
}
