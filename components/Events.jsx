import { fortressWar, links, liveEvents, upcomingEvents } from '@/lib/site'
import FortressCountdown from './FortressCountdown'

export default function Events() {
  return (
    <section className="panel p-5" aria-labelledby="eventos">
      <h2 id="eventos" className="panel-title mb-4">Eventos</h2>

      <ul className="mb-4 space-y-2">
        {liveEvents.map((name) => (
          <li key={name} className="flex items-center gap-3 rounded-lg border border-live/30 bg-live/5 px-3 py-2">
            <span className="rounded-full bg-live px-2 py-0.5 text-[11px] font-bold tracking-wider text-ink uppercase">En vivo</span>
            <span className="font-semibold">{name}</span>
          </li>
        ))}
      </ul>

      <ol className="relative ml-2 space-y-3 border-l border-line pl-5">
        {upcomingEvents.map((e) => (
          <li key={e.name} className="relative">
            <span className="absolute top-1.5 -left-[25px] h-2 w-2 rounded-full bg-gold/70 ring-4 ring-surface" aria-hidden="true" />
            <span className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-text/90">{e.name}</span>
              <span className="shrink-0 tabular-nums text-xs text-muted">en {e.in} h</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6 overflow-hidden rounded-lg border border-gold/30">
        <div className="relative">
          <img src="/assets/img/fortress-banner.png" alt="" className="h-20 w-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-ink/90 to-ink/20 px-4">
            <h3 className="font-display text-lg font-bold text-gold-light">Fortress War</h3>
            <p className="text-xs text-text/80">{fortressWar.schedule}</p>
          </div>
        </div>
        <div className="bg-ink/60 px-4 pt-3">
          <p className="mb-2 text-[11px] tracking-widest text-muted uppercase">Próxima batalla en</p>
          <FortressCountdown />
        </div>
        <ul className="divide-y divide-line bg-ink/60">
          {fortressWar.fortresses.map((f) => (
            <li key={f.name} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
              <span className="text-muted">{f.name}</span>
              <a href={links.guild(f.owner)} className="font-semibold text-text hover:text-gold-light">
                {f.owner} <span className="text-muted">({f.tax})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
