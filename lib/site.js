// Contenido de la página. Todo lo que se muestra sale de aquí:
// para actualizar rankings, eventos o noticias basta con editar este archivo.

// Dirección del sitio oficial al que apuntan todos los enlaces.
export const SITE_URL = 'https://silkroadlatino.com'

const url = (path = '') => `${SITE_URL}${path}`

export const links = {
  home: url('/'),
  login: url('/login'),
  register: url('/register'),
  recoverPassword: url('/register/recoveryPassword'),
  recoverId: url('/register/recoveryID'),
  recoverSecret: 'http://wiki.srolatino-servers.com/faq/srolatino-serversrecuperacion-de-respuesta-secreta/',
  download: url('/download'),
  community: url('/community'),
  rankings: url('/community/rankings'),
  activityLogs: url('/community/activity_logs'),
  search: url('/search'),
  donate: url('/profile/charge'),
  blog: url('/blog'),
  news: url('/blog/news'),
  updates: url('/blog/updates'),
  events: url('/blog/events'),
  pictures: url('/pictures'),
  uploadPicture: url('/pictures/upload'),
  screenshots: url('/screenshots'),
  info: url('/support/info'),
  faq: url('/support/faq'),
  privacy: url('/support/privacy'),
  tos: url('/support/tos'),
  forum: 'https://sro-latino.com/',
  wiki: 'http://wiki.srolatino-servers.com/',
  discordWidget: 'https://discord.com/widget?id=408379216862773248&theme=dark',
  guild: (name) => url(`/guild/${name}`),
  player: (guild, name) => url(`/guild/${guild}/${name}`),
}

export const nav = [
  { label: 'Noticias', href: links.blog },
  { label: 'Rankings', href: links.rankings },
  { label: 'Comunidad', href: links.community },
  { label: 'Descargas', href: links.download },
  { label: 'Foro', href: links.forum },
  { label: 'Wiki', href: links.wiki },
]

export const server = {
  name: 'Alfa',
  online: true,
  players: 1755,
  capacity: 4000,
  // Zona horaria del servidor (UTC-5).
  timeZone: 'America/Bogota',
  timeZoneLabel: 'UTC-5',
}

export const features = [
  { image: '/assets/img/slide-2-min.png', title: 'Cap 135', text: 'Llega al nivel máximo y domina la Ruta de la Seda.' },
  { image: '/assets/img/slide-3-min.png', title: 'Degree 15', text: 'Equípate con los objetos más poderosos del juego.' },
  { image: '/assets/img/slide-4-min.png', title: 'EXP x35', text: 'Sube de nivel rápido sin perder la esencia clásica.' },
]

export const news = [
  {
    date: '2021-01-06',
    category: 'Actualizaciones',
    title: 'Inspección completada',
    excerpt: 'El evento de Navidad ha finalizado y terminan los descuentos navideños en el Item Mall.',
    image: '/assets/img/2.png',
    href: url('/blog/updates/06012021-INSPECCION-COMPLETADA-96'),
  },
  {
    date: '2020-12-11',
    category: 'Eventos',
    title: 'Evento de Navidad',
    excerpt: 'White Knight, Princess Miyene y Snow Flakes invaden el mundo de Silkroad.',
    image: '/assets/img/navidad2020.png',
    href: url('/blog/updates/11122020-INSPECCION-COMPLETADA-95'),
  },
  {
    date: '2020-11-24',
    category: 'Item Mall',
    title: 'Nuevo avatar: Black Fantasy Knight',
    excerpt: 'Llega un nuevo avatar al Item Mall junto con los descuentos de aniversario.',
    image: '/assets/img/7.jpg',
    href: url('/blog/updates/241120-INSPECCION-COMPLETADA-94'),
  },
  {
    date: '2020-11-02',
    category: 'Actualizaciones',
    title: 'Corrección del modo PvP',
    excerpt: 'Se solucionó el problema de equipamiento del modo PvP al ingresar a los eventos.',
    image: '/assets/img/1.jpg',
    href: url('/blog/updates/021120-INSPECCION-COMPLETADA-93'),
  },
]

export const topPlayers = [
  { name: '_TheZeger__', guild: 'HellWalker', level: 135 },
  { name: 'Gus7Diaz', guild: 'InsertGuild', level: 135 },
  { name: 'xMickey', guild: 'InsertGuild', level: 135 },
  { name: 'Infiiniity', guild: 'Thiefs4Life', level: 135 },
  { name: '_P1TUF1NA_', guild: 'AnGeLs_DeMoN', level: 135 },
]

export const topGuilds = [
  { name: 'AnGeLs_DeMoN', level: 5, points: '798.252.815' },
  { name: 'InsertGuild', level: 5, points: '5.214.658' },
  { name: 'Thiefs4Life', level: 5, points: '151.260.947' },
  { name: 'WrathOfGods', level: 5, points: '793.424.909' },
  { name: 'LatinNarcos', level: 5, points: '811.049.773' },
]

export const fortressWar = {
  schedule: 'Miércoles y domingo · 17:30',
  // Para la cuenta regresiva: días (0 = domingo, 3 = miércoles), hora del servidor y su zona.
  time: { days: [0, 3], hour: 17, minute: 30, utcOffset: -5 },
  fortresses: [
    { name: 'Hotan', owner: 'UnitedBrooS', tax: '10%' },
    { name: 'Bandit', owner: 'AnGeLs_DeMoN', tax: '10%' },
  ],
}

export const liveEvents = ['Evento Medusa', 'Arena de batalla']

// "in" = tiempo que falta para el evento (horas:minutos).
export const upcomingEvents = [
  { in: '00:01', name: 'Job War / Templo de Job' },
  { in: '00:02', name: 'Seth / Engendro de Haroeris' },
  { in: '00:32', name: 'Guerra PvP' },
  { in: '01:02', name: 'BA 115/125' },
  { in: '01:33', name: 'Captura la bandera' },
  { in: '02:32', name: 'CTF 115/125' },
  { in: '03:34', name: 'Evento Unique Low' },
  { in: '05:38', name: 'Evento Roc' },
  { in: '11:02', name: 'Engendro de Isis / Anubis' },
  { in: '17:02', name: 'Engendro de Neith / Selket' },
]

export const activityLog = [
  { time: '22:00', text: 'Arena: se repartieron arenas extras. Más kills: itsNegar' },
  { time: '21:58', text: '_Beyon_ mató al unique Tiger Girl' },
  { time: '21:47', text: 'Xouka mató al unique Baal' },
  { time: '21:46', text: 'NatSu_Vzl cambió la apariencia de su Tiger Sword a Egypt Clase B' },
  { time: '21:45', text: 'Windrainer10 mató al unique Khulood' },
  { time: '21:43', text: 'GhisLaine_ mató al unique Haroeris' },
  { time: '21:26', text: 'ZOOM_WIN mató al unique Captain Ivy' },
  { time: '21:10', text: 'Irisariana mató al unique Kidemonas' },
  { time: '21:09', text: 'itsSantiago ganó 30 BPs en la Guerra PvP con 20 victorias' },
]

export const gms = [
  { name: 'xMileZ', online: false },
  { name: 'Grito', online: false },
  { name: 'Rubia', online: true },
  { name: 'No', online: true },
  { name: 'Celes', online: false },
  { name: 'Keila', online: true },
]

export const footer = [
  {
    title: 'Silkroad Latino',
    items: [
      { label: 'Inicio', href: links.home },
      { label: 'Noticias', href: links.news },
      { label: 'Actualizaciones', href: links.updates },
      { label: 'Eventos', href: links.events },
    ],
  },
  {
    title: 'Cuenta',
    items: [
      { label: 'Crear una cuenta', href: links.register },
      { label: 'Recuperar clave', href: links.recoverPassword },
      { label: 'Recuperar ID', href: links.recoverId },
      { label: 'Recuperar RS', href: links.recoverSecret },
    ],
  },
  {
    title: 'Comunidad',
    items: [
      { label: 'Foro', href: links.forum },
      { label: 'Descargas', href: links.download },
      { label: 'Imágenes', href: links.screenshots },
      { label: 'Clasificaciones', href: links.rankings },
    ],
  },
  {
    title: 'Información',
    items: [
      { label: 'Información y reglas', href: links.info },
      { label: 'Preguntas frecuentes', href: links.faq },
      { label: 'Política de privacidad', href: links.privacy },
      { label: 'Términos y condiciones', href: links.tos },
    ],
  },
]
