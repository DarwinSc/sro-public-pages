// Brasas que suben por la portada. Posiciones fijas para que el HTML del servidor
// y el del navegador coincidan.
const embers = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + ((i * 7) % 4),
  duration: 9 + ((i * 13) % 10),
  delay: -((i * 17) % 18),
  drift: ((i % 5) - 2) * 18,
}))

export default function Embers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            '--drift': `${e.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
