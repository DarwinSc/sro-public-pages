import { activityLog, links } from '@/lib/site'

export default function ActivityLog() {
  return (
    <section className="panel p-5" aria-labelledby="actividad">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="actividad" className="panel-title flex-1">Actividad reciente</h2>
        <a href={links.activityLogs} className="text-sm font-semibold text-gold hover:text-gold-light">Ver todo →</a>
      </div>
      <ul className="space-y-1 text-sm">
        {activityLog.map((entry) => (
          <li key={entry.time + entry.text} className="flex gap-3 rounded px-2 py-1.5 hover:bg-surface-2">
            <span className="shrink-0 font-mono text-gold/80 tabular-nums">{entry.time}</span>
            <span className="text-text/85">{entry.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
