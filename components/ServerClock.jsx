'use client'

import { useEffect, useState } from 'react'
import { server } from '@/lib/site'

const format = (date) =>
  date.toLocaleTimeString('es', { timeZone: server.timeZone, hour12: false })

export default function ServerClock() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setTime(format(new Date()))
    const id = setInterval(() => setTime(format(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time ?? '--:--:--'}
    </span>
  )
}
