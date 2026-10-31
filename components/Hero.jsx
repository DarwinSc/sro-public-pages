import { links, server } from '@/lib/site'
import Image from 'next/image'
import heroImage from '@/public/assets/img/bg.jpg'
import Embers from './Embers'
import ServerClock from './ServerClock'

export default function Hero() {
  const load = Math.round((server.players / server.capacity) * 100)

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden pt-28 pb-10">
      <div className="absolute inset-0 -z-10">
        <Image src={heroImage} alt="" priority placeholder="blur" sizes="100vw" className="animate-slow-zoom h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0b0b0f_95%)]" />
        <div className="absolute inset-x-0 top-1/4 mx-auto h-[420px] max-w-3xl rounded-full bg-ink/60 blur-3xl" />
        <Embers />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <p className="mb-4 font-display text-[11px] tracking-[0.2em] text-gold-light uppercase [text-shadow:0_2px_8px_#000] sm:text-sm sm:tracking-[0.4em]">Servidor privado · Free to play</p>
          <h1 className="section-title !text-5xl leading-tight sm:!text-7xl">Silkroad Latino</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text/90 [text-shadow:0_2px_10px_#000]">
            Tu siguiente gran aventura aguarda en la Ruta de la Seda. Únete a la comunidad latina más grande de Silkroad Online.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={links.download} className="btn-gold">
              <DownloadIcon /> Descargar gratis
            </a>
            <a href={links.register} className="btn-ghost">Crear cuenta</a>
          </div>
        </div>

        <dl className="panel mx-auto mt-14 grid max-w-4xl grid-cols-2 divide-line bg-ink/70 backdrop-blur-md sm:grid-cols-4 sm:divide-x fade-up [animation-delay:250ms]">
          <Stat label="Servidor">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
              </span>
              {server.name} · {server.online ? 'Online' : 'Offline'}
            </span>
          </Stat>
          <Stat label="Jugadores">
            <span className="tabular-nums">
              {server.players.toLocaleString('es')}
              <span className="text-muted"> / {server.capacity.toLocaleString('es')}</span>
            </span>
            <span className="mt-2 block h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <span className="block h-full rounded-full bg-gradient-to-r from-gold-dark to-gold-light" style={{ width: `${load}%` }} />
            </span>
          </Stat>
          <Stat label={`Hora servidor · ${server.timeZoneLabel}`}>
            <ServerClock />
          </Stat>
          <Stat label="Rates">EXP x35 · Cap 135</Stat>
        </dl>
      </div>
    </section>
  )
}

function Stat({ label, children }) {
  return (
    <div className="px-5 py-4 text-center sm:text-left">
      <dt className="text-xs tracking-wider text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-base font-semibold text-text">{children}</dd>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" />
    </svg>
  )
}
