import { links, news } from '@/lib/site'
import SectionHeading from './SectionHeading'

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })

export default function News() {
  const [featured, ...rest] = news

  return (
    <section aria-labelledby="noticias">
      <SectionHeading
        eyebrow="Crónicas del reino"
        title={<span id="noticias">Noticias</span>}
        action={
          <a href={links.blog} className="text-sm font-semibold text-gold transition hover:text-gold-light">
            Ver todas →
          </a>
        }
      />

      <a
        href={featured.href}
        className="group panel relative mb-6 block overflow-hidden transition hover:border-gold/50"
      >
        <div className="aspect-[16/8] overflow-hidden">
          <img src={featured.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <Meta item={featured} />
          <h3 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">{featured.title}</h3>
          <p className="mt-2 max-w-2xl text-text/80">{featured.excerpt}</p>
        </div>
      </a>

      <div className="grid gap-6 sm:grid-cols-3">
        {rest.map((item) => (
          <a key={item.href} href={item.href} className="group panel overflow-hidden transition hover:-translate-y-1 hover:border-gold/50">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <Meta item={item} />
              <h3 className="mt-2 font-display text-lg font-bold text-text group-hover:text-gold-light">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{item.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Meta({ item }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-semibold text-gold-light">{item.category}</span>
      <time dateTime={item.date} className="text-muted">{formatDate(item.date)}</time>
    </div>
  )
}
