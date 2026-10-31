# Silkroad Latino · Página pública

Landing page de Silkroad Latino hecha con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

## Desarrollo

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Estructura

```
app/
  layout.js       metadatos, idioma y estilos globales
  page.js         arma la página con los componentes
  globals.css     colores, tipografías y estilos de botones/paneles
components/       una pieza por sección (Header, Hero, News, Rankings, Events…)
lib/site.js       TODO el contenido: enlaces, rankings, eventos, noticias, GMs
public/assets/img imágenes
```

## Actualizar el contenido

Todo el texto y los datos están en `lib/site.js`. Para cambiar noticias, rankings,
eventos o GMs se edita solo ese archivo.

La dirección del sitio oficial está en la constante `SITE_URL`; todos los enlaces
se construyen a partir de ella.

## Despliegue

Vercel lo detecta como proyecto Next.js: cada push a la rama principal se publica solo.
