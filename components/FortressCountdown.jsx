'use client'

import { useEffect, useState } from 'react'
import { fortressWar } from '@/lib/site'

// Próxima Fortress War. El servidor usa UTC-5 fijo, así que se calcula en UTC.
function nextWar(now) {
  const { days, hour, minute, utcOffset } = fortressWar.time
  let best = null
  for (let add = 0; add <= 7; add++) {
    const d = new Date(now)
    d.setUTCDate(d.getUTCDate() + add)
    d.setUTCHours(hour - utcOffset, minute, 0, 0)
    const localDay = new Date(d.getTime() + utcOffset * 3600e3).getUTCDay()
    if (days.includes(localDay) && d > now && (!best || d < best)) best = d
  }
  return best
}

const pad = (n) => String(n).padStart(2, '0')

export default function FortressCountdown() {
  const [left, setLeft] = useState(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setLeft(Math.max(0, nextWar(now) - now))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const s = left === null ? null : Math.floor(left / 1000)
  const parts = s === null
    ? [['--', 'días'], ['--', 'horas'], ['--', 'min'], ['--', 'seg']]
    : [
        [pad(Math.floor(s / 86400)), 'días'],
        [pad(Math.floor((s % 86400) / 3600)), 'horas'],
        [pad(Math.floor((s % 3600) / 60)), 'min'],
        [pad(s % 60), 'seg'],
      ]

  return (
    <div className="grid grid-cols-4 gap-2" role="timer" aria-label="Tiempo para la próxima Fortress War">
      {parts.map(([value, label]) => (
        <div key={label} className="rounded-lg border border-gold/25 bg-ink/70 py-2 text-center">
          <div className="font-display text-xl font-bold text-gold-light tabular-nums">{value}</div>
          <div className="text-[10px] tracking-widest text-muted uppercase">{label}</div>
        </div>
      ))}
    </div>
  )
}
