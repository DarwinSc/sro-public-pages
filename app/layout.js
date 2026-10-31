import './globals.css'

export const metadata = {
  title: 'Silkroad Latino · Servidor privado de Silkroad Online',
  description:
    'Silkroad Latino: servidor gratuito de Silkroad Online con Cap 135, Degree 15 y EXP x35. Rankings, eventos, Fortress War y la comunidad latina más grande.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Silkroad Latino',
    description: 'Servidor gratuito de Silkroad Online · Cap 135 · Degree 15 · EXP x35',
    locale: 'es_LA',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0b0b0f',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
