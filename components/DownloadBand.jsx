import { links } from '@/lib/site'

export default function DownloadBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-gold/20">
      <img src="/assets/img/7.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="flex-1">
          <h2 className="section-title">Descárgalo gratis</h2>
          <p className="mt-3 max-w-xl text-lg text-text/80">Free-to-play ahora y siempre. Crea tu cuenta, descarga el cliente y empieza tu viaje hoy.</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={links.download} className="btn-gold">Descargar cliente</a>
          <a href={links.register} className="btn-ghost">Crear cuenta</a>
        </div>
      </div>
    </section>
  )
}
