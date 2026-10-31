'use client'

import { useState } from 'react'
import { links, topGuilds, topPlayers } from '@/lib/site'

const medal = ['text-gold-light', 'text-zinc-300', 'text-amber-600']

export default function Rankings() {
  const [tab, setTab] = useState('players')

  return (
    <section className="panel p-5" aria-labelledby="rankings">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 id="rankings" className="panel-title">Rankings</h2>
      </div>

      <div className="mb-4 grid grid-cols-2 rounded-lg border border-line bg-ink p-1" role="tablist">
        <TabButton active={tab === 'players'} onClick={() => setTab('players')}>Jugadores</TabButton>
        <TabButton active={tab === 'guilds'} onClick={() => setTab('guilds')}>Clanes</TabButton>
      </div>

      <ol className="space-y-1" role="tabpanel">
        {tab === 'players'
          ? topPlayers.map((p, i) => (
              <Row key={p.name} rank={i} href={links.player(p.guild, p.name)} name={p.name} sub={p.guild} right={`Nv ${p.level}`} />
            ))
          : topGuilds.map((g, i) => (
              <Row key={g.name} rank={i} href={links.guild(g.name)} name={g.name} sub={`${g.points} pts`} right={`Nv ${g.level}`} />
            ))}
      </ol>

      <form action={links.search} method="POST" className="mt-5 flex overflow-hidden rounded-lg border border-line bg-ink focus-within:border-gold/60">
        <label htmlFor="buscar" className="sr-only">Buscar un jugador o clan</label>
        <select name="by" aria-label="Buscar por" className="border-r border-line bg-transparent px-2 text-sm text-muted outline-none">
          <option value="player">Jugador</option>
          <option value="guild">Clan</option>
        </select>
        <input
          id="buscar"
          name="s"
          required
          minLength={3}
          placeholder="Buscar…"
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted"
        />
        <button type="submit" className="px-3 text-gold transition hover:text-gold-light" aria-label="Buscar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </button>
      </form>

      <a href={links.rankings} className="mt-4 block text-center text-sm font-semibold text-gold transition hover:text-gold-light">
        Ranking completo →
      </a>
    </section>
  )
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-md py-2 text-sm font-semibold transition ${
        active ? 'bg-gradient-to-b from-gold/25 to-gold/5 text-gold-light shadow-[inset_0_0_0_1px_#d4a64a55]' : 'text-muted hover:text-text'
      }`}
    >
      {children}
    </button>
  )
}

function Row({ rank, href, name, sub, right }) {
  return (
    <li>
      <a href={href} className="flex items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-surface-2">
        <span className={`w-6 text-center font-display text-lg font-bold ${medal[rank] ?? 'text-muted'}`}>{rank + 1}</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold text-text">{name}</span>
          <span className="block truncate text-xs text-muted">{sub}</span>
        </span>
        <span className="rounded bg-surface-2 px-2 py-0.5 text-xs font-semibold text-gold-light">{right}</span>
      </a>
    </li>
  )
}
