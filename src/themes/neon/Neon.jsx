import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaBitcoin, FaGamepad } from 'react-icons/fa6'
import { FiRadio, FiDatabase, FiX, FiExternalLink, FiGithub, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { profile, projects, skills, exploring, links, profileImg, logo } from '../../content.js'
import { prefersReducedMotion, useCountUp, useInView, useModal, useTyped, useTypewriter } from '../../hooks.js'
import BarChart from '../../components/BarChart.jsx'
import './neon.css'

const EXPLORE_ICONS = [FaBitcoin, FiRadio, FaGamepad, FiDatabase]

const CODE = [
  [['kw', 'const '], ['var', 'cody'], ['op', ' = {']],
  [['', '  '], ['prop', 'role'], ['op', ': '], ['str', "'independent builder'"], ['op', ',']],
  [['', '  '], ['prop', 'stack'], ['op', ': ['], ['str', "'Python'"], ['op', ', '], ['str', "'React'"], ['op', ', '], ['str', "'SQL'"], ['op', '],']],
  [['', '  '], ['prop', 'exploring'], ['op', ': ['], ['str', "'Bitcoin'"], ['op', ', '], ['str', "'Nostr'"], ['op', ', '], ['str', "'games'"], ['op', '],']],
  [['', '  '], ['prop', 'shipped'], ['op', ': '], ['num', String(projects.length)], ['op', ',']],
  [['', '  '], ['prop', 'coffee'], ['op', ': '], ['num', 'Infinity'], ['op', ',']],
  [['op', '}']],
  [],
  [['kw', 'await '], ['var', 'cody'], ['op', '.'], ['fn', 'build'], ['op', '('], ['var', 'somethingNew'], ['op', ')'], ['cm', '  // coming soon']],
]
const CODE_TEXT = CODE.map((line) => line.map(([, t]) => t).join('')).join('\n')

function ParticleField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -9999, y: -9999 }
    const LINK = 130
    const MOUSE = 170
    let w, h, particles, raf

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(130, Math.floor((w * h) / 11000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.6,
        hue: Math.random() < 0.55 ? 190 : 262,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d > 0 && d < MOUSE) {
          p.x += (dx / d) * 0.7
          p.y += (dy / d) * 0.7
        }
      }
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `hsla(${a.hue}, 90%, 65%, ${(1 - d / LINK) * 0.28})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < MOUSE + 40) {
          ctx.strokeStyle = `hsla(320, 90%, 70%, ${(1 - dm / (MOUSE + 40)) * 0.5})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      for (const p of particles) {
        ctx.fillStyle = `hsla(${p.hue}, 95%, 72%, 0.9)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      cancelAnimationFrame(raf)
      if (prefersReducedMotion()) draw()
      else loop()
    }
    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = mouse.y = -9999
    }
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start())

    resize()
    start()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="nx-canvas" aria-hidden="true" />
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <Tag ref={ref} className={`nx-reveal ${inView ? 'is-in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

function CodeWindow() {
  const typed = useTyped(CODE_TEXT, { speed: 24 })
  let remaining = typed.length

  return (
    <div className="nx-code nx-glass">
      <div className="nx-code-bar">
        <i />
        <i />
        <i />
        <span>cody.js</span>
      </div>
      <pre>
        <code>
          {CODE.map((line, li) => {
            if (remaining < 0) return null
            const lineLen = line.reduce((n, [, t]) => n + t.length, 0)
            const caretHere = remaining <= lineLen
            let budget = remaining
            const tokens = line.map(([cls, text], ti) => {
              const part = text.slice(0, Math.max(budget, 0))
              budget -= text.length
              return part ? (
                <span key={ti} className={cls ? `nx-tok-${cls}` : undefined}>
                  {part}
                </span>
              ) : null
            })
            remaining -= lineLen + 1
            return (
              <div key={li} className="nx-code-line">
                <span className="nx-ln">{li + 1}</span>
                <span>
                  {tokens}
                  {caretHere && <span className="nx-caret" />}
                  {'\u200b'}
                </span>
              </div>
            )
          })}
        </code>
      </pre>
    </div>
  )
}

function Stat({ value, label, suffix = '', active }) {
  const n = useCountUp(value, active)
  return (
    <div className="nx-stat">
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <section className="nx-section" id="nx-about">
      <Reveal className="nx-section-head">
        <span className="nx-eyebrow">01 · about</span>
        <h2>Data brain, builder hands.</h2>
      </Reveal>
      <div className="nx-about">
        <Reveal className="nx-portrait">
          <div className="nx-portrait-ring" />
          <img src={profileImg} alt="Cody Roof" />
        </Reveal>
        <Reveal className="nx-glass nx-about-card">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="nx-stats" ref={ref}>
            <Stat value={projects.length} label="projects shipped" active={inView} />
            <Stat value={new Date().getFullYear() - profile.startedYear} suffix="+" label="years building" active={inView} />
            <Stat value={2} label="Kaggle comps" active={inView} />
          </div>
          <BarChart data={skills} className="nx-bars" />
        </Reveal>
      </div>
    </section>
  )
}

function TiltCard({ project, onOpen, index }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 12}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal className="nx-card-wrap" style={{ '--d': `${index * 80}ms` }}>
      <button ref={ref} className="nx-card" onMouseMove={onMove} onMouseLeave={onLeave} onClick={() => onOpen(project)}>
        <span className="nx-card-glow" aria-hidden="true" />
        <div className="nx-card-img">
          <img src={project.image} alt="" loading="lazy" />
          <span className={`nx-cat nx-cat-${project.category}`}>{project.category}</span>
        </div>
        <div className="nx-card-body">
          <h3>
            {project.title} <FiArrowUpRight />
          </h3>
          <p>{project.summary}</p>
          <div className="nx-chips">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </button>
    </Reveal>
  )
}

function Modal({ project, onClose }) {
  const closeRef = useRef(null)
  useModal(true, onClose)
  useEffect(() => closeRef.current?.focus(), [])

  return createPortal(
    <div className="nx nx-modal-wrap" onClick={onClose}>
      <div
        className="nx-modal nx-glass"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="nx-modal-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>
        <img className="nx-modal-img" src={project.image} alt={`${project.title} screenshot`} />
        <div className="nx-modal-body">
          <span className={`nx-cat nx-cat-${project.category}`}>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="nx-chips">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          {project.insight && (
            <div className="nx-insight">
              <h4>{project.insight.title}</h4>
              <BarChart data={project.insight.data} format={project.insight.format} className="nx-bars" />
            </div>
          )}
          <div className="nx-modal-actions">
            <a className="nx-btn is-primary" href={project.site} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Live site
            </a>
            <a className="nx-btn" href={project.code} target="_blank" rel="noopener noreferrer">
              <FiGithub /> Source
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

function Work() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])
  const shown = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section className="nx-section" id="nx-work">
      <Reveal className="nx-section-head">
        <span className="nx-eyebrow">02 · work</span>
        <h2>Things I've shipped.</h2>
        <div className="nx-filters" role="tablist">
          {['all', 'web', 'data'].map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={filter === f ? 'is-active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
              <small>{f === 'all' ? projects.length : projects.filter((p) => p.category === f).length}</small>
            </button>
          ))}
        </div>
      </Reveal>
      <div className="nx-grid" key={filter}>
        {shown.map((p, i) => (
          <TiltCard key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>
      {selected && <Modal project={selected} onClose={close} />}
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="nx-section nx-contact" id="nx-contact">
      <Reveal className="nx-glass nx-contact-card">
        <span className="nx-eyebrow">04 · contact</span>
        <h2>
          Let's build something <span className="nx-gradient">weird & useful.</span>
        </h2>
        <p>Got an idea in Bitcoin, Nostr, data, or games? I'd love to hear it.</p>
        <button className="nx-btn is-primary nx-email" onClick={copy}>
          {copied ? <FiCheck /> : <FiCopy />} {copied ? 'Copied to clipboard' : profile.email}
        </button>
        <div className="nx-socials">
          {links.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default function Neon() {
  const role = useTypewriter(profile.roles)
  const marquee = [...profile.interests, 'Python', 'React', 'SQL', 'Pandas', 'Flask', 'scikit-learn', 'Lightning']

  return (
    <div className="nx">
      <ParticleField />
      <div className="nx-aurora" aria-hidden="true" />

      <nav className="nx-nav nx-glass">
        <a href="#nx-top" className="nx-brand">
          <img src={logo} alt="" />
          <span>cody roof</span>
        </a>
        <div className="nx-nav-links">
          <a href="#nx-about">About</a>
          <a href="#nx-work">Work</a>
          <a href="#nx-now">Now</a>
          <a href="#nx-contact">Contact</a>
          <a href="https://blog.cody-roof.com" target="_blank" rel="noopener noreferrer">
            Blog <FiArrowUpRight />
          </a>
        </div>
      </nav>

      <header className="nx-hero" id="nx-top">
        <div className="nx-hero-copy">
          <span className="nx-pill">
            <i /> {profile.status}
          </span>
          <h1>
            <span className="nx-hello">Hi, I'm</span>
            <span className="nx-gradient nx-name">{profile.name}</span>
          </h1>
          <p className="nx-role">
            <span className="nx-role-prefix">&gt;</span> {role}
            <span className="nx-caret" />
          </p>
          <p className="nx-lede">{profile.headline}</p>
          <div className="nx-ctas">
            <a className="nx-btn is-primary" href="#nx-work">
              See my work
            </a>
            <a className="nx-btn" href="#nx-contact">
              Say hello
            </a>
          </div>
        </div>
        <CodeWindow />
      </header>

      <div className="nx-marquee" aria-hidden="true">
        <div className="nx-marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>
              {m} <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      <main>
        <About />
        <Work />

        <section className="nx-section" id="nx-now">
          <Reveal className="nx-section-head">
            <span className="nx-eyebrow">03 · now</span>
            <h2>What I'm exploring next.</h2>
          </Reveal>
          <div className="nx-explore">
            {exploring.map((e, i) => {
              const Icon = EXPLORE_ICONS[i % EXPLORE_ICONS.length]
              return (
                <Reveal key={e.title} className="nx-glass nx-explore-card" style={{ '--d': `${i * 90}ms` }}>
                  <span className="nx-explore-icon">
                    <Icon />
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="nx-footer">
        © 2019 – {new Date().getFullYear()} {profile.name} · hand-rolled canvas, zero animation libraries
      </footer>
    </div>
  )
}
