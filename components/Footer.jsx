import { footer, links } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#08080b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          <img src="/assets/img/logo.png" alt="Silkroad Latino" className="h-20 w-auto" />
          <p className="mt-4 text-sm text-muted">Silkroad Latino es absolutamente libre de jugar.</p>
        </div>
        {footer.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-4 font-display text-sm font-semibold tracking-widest text-gold-light uppercase">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted transition hover:text-text">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© 2011–{new Date().getFullYear()} Silkroad Latino. Todos los derechos reservados a sus respectivos propietarios.</p>
          <p>
            <a href={links.tos} className="hover:text-text">Términos</a> · <a href={links.privacy} className="hover:text-text">Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
