import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const recentDocs = [
  { name: 'Rental Agreement — Oslo flat', updated: '2 days ago', tag: 'Contract' },
  { name: 'Family Trust Declaration', updated: '1 week ago', tag: 'Trust' },
  { name: 'Gift Deed — Car transfer', updated: '3 weeks ago', tag: 'Deed' },
  { name: 'Last Will & Testament', updated: '2 months ago', tag: 'Will' },
]

const activeContracts = [
  { name: 'Rental Agreement — Oslo flat', expires: 'Dec 2025', status: 'Active' },
  { name: 'Service Agreement — Accountant', expires: 'Mar 2026', status: 'Active' },
  { name: 'Non-Disclosure Agreement', expires: 'Jun 2025', status: 'Expiring soon' },
]

export default async function DashboardPage() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  const user = await currentUser()
  const firstName = user?.firstName ?? 'there'

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

      {/* ── Header ──────────────────────────────── */}
      <div>
        <h1 className="text-2xl font-extrabold text-f-text">
          Hello, {firstName} 👋
        </h1>
        <p className="text-sm text-f-muted mt-1">
          Here&apos;s an overview of your documents and contracts.
        </p>
      </div>

      {/* ── Stats row ───────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Documents', value: '4', icon: '📄' },
          { label: 'Active contracts', value: '3', icon: '🤝' },
          { label: 'Pending signatures', value: '1', icon: '✍️' },
          { label: 'Expiring (90 days)', value: '1', icon: '⚠️' },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-f-border bg-f-raised p-5">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-2xl font-extrabold text-f-text">{s.value}</div>
            <div className="text-xs text-f-muted mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Recent documents ─────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-f-text">Recent documents</h2>
          <a href="/documents" className="text-xs text-legal hover:text-legal-light transition-colors">
            View all →
          </a>
        </div>
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {recentDocs.map((doc, i) => (
            <div
              key={doc.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i < recentDocs.length - 1 ? 'border-b border-f-border' : ''
              } hover:bg-legal/5 transition-colors`}
            >
              <div>
                <p className="text-sm font-medium text-f-text">{doc.name}</p>
                <p className="text-xs text-f-faint mt-0.5">Updated {doc.updated}</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-legal/10 text-legal border border-legal/20">
                {doc.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Active contracts ─────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-f-text">Active contracts</h2>
          <a href="/contracts" className="text-xs text-legal hover:text-legal-light transition-colors">
            View all →
          </a>
        </div>
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {activeContracts.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i < activeContracts.length - 1 ? 'border-b border-f-border' : ''
              } hover:bg-legal/5 transition-colors`}
            >
              <div>
                <p className="text-sm font-medium text-f-text">{c.name}</p>
                <p className="text-xs text-f-faint mt-0.5">Expires {c.expires}</p>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  c.status === 'Active'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
