import { links } from '@/lib/site'
import SectionHeading from './SectionHeading'

const steps = [
  {
    title: 'Crea tu cuenta',
    text: 'Regístrate gratis en menos de un minuto.',
    cta: 'Registrarme',
    href: links.register,
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0M19 8v6m3-3h-6" />,
  },
  {
    title: 'Descarga el cliente',
    text: 'Instala el juego y el launcher de Silkroad Latino.',
    cta: 'Descargar',
    href: links.download,
    icon: <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" />,
  },
  {
    title: 'Comienza tu viaje',
    text: 'Elige tu personaje y recorre la Ruta de la Seda.',
    cta: 'Ver guía',
    href: links.wiki,
    icon: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  },
]

export default function GetStarted() {
  return (
    <section className="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="empieza">
      <SectionHeading eyebrow="Juega en minutos" title={<span id="empieza">Empieza en 3 pasos</span>} />
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="group panel relative overflow-hidden p-6 transition hover:border-gold/50">
            <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[120px] leading-none font-extrabold text-gold/[0.07] transition group-hover:text-gold/[0.12]">
              {i + 1}
            </span>
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {step.icon}
              </svg>
            </span>
            <h3 className="font-display text-xl font-bold text-text">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.text}</p>
            <a href={step.href} className="mt-5 inline-block text-sm font-semibold text-gold transition hover:text-gold-light">
              {step.cta} →
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
