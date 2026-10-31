export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="mb-2 font-display text-xs tracking-[0.35em] text-gold uppercase">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
      </div>
      {action}
    </div>
  )
}
