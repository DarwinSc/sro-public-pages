import Image from 'next/image'
import { features } from '@/lib/site'

export default function Features() {
  return (
    <section className="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-label="Características del servidor">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="group panel relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold/50"
          >
            <div className="relative aspect-[848/320] overflow-hidden bg-[radial-gradient(ellipse_at_70%_40%,#2a2238,#13131a_70%)]">
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-gold-light">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
