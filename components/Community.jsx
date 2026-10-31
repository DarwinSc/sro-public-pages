import { gms, links } from '@/lib/site'
import SectionHeading from './SectionHeading'

export default function Community() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="comunidad">
      <SectionHeading eyebrow="Únete a la aventura" title={<span id="comunidad">Comunidad</span>} />

      <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
        <div className="panel p-5">
          <h3 className="panel-title mb-4">GMs en línea</h3>
          <ul className="grid grid-cols-2 gap-2">
            {gms.map((gm) => (
              <li key={gm.name} className="flex items-center gap-2 rounded-lg bg-surface-2 px-3 py-2 text-sm">
                <span className={`h-2 w-2 rounded-full ${gm.online ? 'bg-live shadow-[0_0_8px_#4ade80]' : 'bg-zinc-600'}`} />
                <span className={gm.online ? 'text-text' : 'text-muted'}>[GM] {gm.name}</span>
                <span className="sr-only">{gm.online ? 'en línea' : 'desconectado'}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={links.donate}
          className="group panel relative flex min-h-[320px] items-end overflow-hidden p-6 transition hover:border-gold/50 sm:p-10 lg:col-span-2 lg:row-span-2 lg:row-start-1"
        >
          <img src="/assets/img/mini-bg1.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="relative">
            <p className="font-display text-xs tracking-[0.35em] text-gold uppercase">Apoya el servidor</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-text">¡Dona y obtén créditos!</h3>
            <p className="mt-2 max-w-md text-text/80">
              Silkroad Latino es gratis. Los servidores se mantienen gracias a las donaciones de jugadores y administradores.
            </p>
            <span className="btn-gold mt-5">Donar ahora</span>
          </div>
        </a>

        <div className="panel overflow-hidden">
          <iframe
            src={links.discordWidget}
            title="Servidor de Discord de Silkroad Latino"
            className="h-full min-h-[260px] w-full"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
