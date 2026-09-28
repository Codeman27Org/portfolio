import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Flips to true once the element scrolls into view.
export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}

export function useCountUp(target, active = true, duration = 1400) {
  const [value, setValue] = useState(0)
  const fromRef = useRef(0)

  useEffect(() => {
    if (!active || target == null) return
    if (prefersReducedMotion()) {
      fromRef.current = target
      setValue(target)
      return
    }
    let frame
    const from = fromRef.current
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const v = Math.round(from + (target - from) * (1 - Math.pow(1 - t, 3)))
      fromRef.current = v
      setValue(v)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

// Cycles through words: types each one, pauses, deletes, moves on.
export function useTypewriter(words, { typeMs = 70, deleteMs = 35, pauseMs = 1600 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs
    if (!deleting && text === word) delay = pauseMs

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs])

  return text
}

// Reveals `full` one character at a time, keeping any prefix shared with the previous string.
export function useTyped(full, { speed = 14, active = true } = {}) {
  const [shown, setShown] = useState('')
  const shownRef = useRef('')

  useEffect(() => {
    if (!active) return
    const set = (s) => {
      shownRef.current = s
      setShown(s)
    }
    if (prefersReducedMotion()) return set(full)

    const prev = shownRef.current
    let i = 0
    while (i < prev.length && prev[i] === full[i]) i++
    set(full.slice(0, i))
    const id = setInterval(() => {
      i++
      set(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [full, speed, active])

  return shown
}

// Closes on Escape and locks page scroll while `open` is true.
export function useModal(open, onClose) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])
}
