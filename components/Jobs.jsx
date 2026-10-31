import SectionHeading from './SectionHeading'

const jobs = [
  {
    name: 'Comerciante',
    tagline: 'Riqueza',
    text: 'Compra barato, vende caro. Lleva tus mercancías por la Ruta de la Seda y hazte rico con cada caravana.',
    color: 'from-amber-500/25',
    icon: <path d="M3 7h18l-2 13H5L3 7zm5 0V5a4 4 0 018 0v2" />,
  },
  {
    name: 'Cazador',
    tagline: 'Honor',
    text: 'Protege a los comerciantes en su viaje y gana reputación enfrentando a los ladrones del desierto.',
    color: 'from-sky-500/25',
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
  },
  {
    name: 'Ladrón',
    tagline: 'Botín',
    text: 'Embosca caravanas, roba su carga y llévala a tu guarida. El riesgo es alto, la recompensa también.',
    color: 'from-rose-500/25',
    icon: <path d="M14.5 3.5l6 6-11 11H3.5v-6l11-11zM12 6l6 6" />,
  },
]

export default function Jobs() {
  return (
    <section className="reveal relative overflow-hidden py-16" aria-labelledby="camino">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#d4a64a14,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Sistema de oficios" title={<span id="camino">Elige tu camino</span>} />
        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.name}
              className={`group panel relative overflow-hidden bg-gradient-to-b ${job.color} to-surface p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/50`}
            >
              <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-gold-light shadow-[0_0_40px_-10px_#d4a64a] transition group-hover:shadow-[0_0_60px_-6px_#d4a64a]">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {job.icon}
                </svg>
              </span>
              <p className="font-display text-xs tracking-[0.35em] text-gold uppercase">{job.tagline}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-text">{job.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{job.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
