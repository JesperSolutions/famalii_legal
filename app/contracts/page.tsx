import { auth } from '@clerk/nextjs/server'

const TEMPLATES = [
  { icon: '🏠', name: 'Rental Agreement',      desc: 'Residential lease for landlord / tenant',    tag: 'Property' },
  { icon: '🤝', name: 'Personal Loan',          desc: 'Between family members with repayment plan',  tag: 'Finance'  },
  { icon: '🎁', name: 'Gift Deed',              desc: 'Formal transfer of property or assets',       tag: 'Transfer' },
  { icon: '🔒', name: 'Non-Disclosure (NDA)',   desc: 'Protect confidential family business info',   tag: 'Business' },
  { icon: '🤜', name: 'Partnership Agreement',  desc: 'Co-ownership terms for shared assets',        tag: 'Business' },
  { icon: '📋', name: 'Service Agreement',      desc: 'Hire a contractor or advisor',                tag: 'Service'  },
]

const ACTIVE = [
  { name: 'Rental Agreement — Oslo flat',   expires: 'Dec 2025', status: 'Active',        signed: 2 },
  { name: 'Service Agreement — Accountant',  expires: 'Mar 2026', status: 'Active',        signed: 2 },
  { name: 'Non-Disclosure Agreement',         expires: 'Jun 2025', status: 'Expiring soon', signed: 1 },
]

const STATUS_STYLE: Record<string, string> = {
  'Active':        'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Expiring soon': 'bg-amber-500/10  text-amber-400   border-amber-500/20',
}

export default async function ContractsPage() {
  const { userId } = await auth()
  if (!userId) return null // middleware handles redirect

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-legal font-semibold mb-1">Contracts</p>
          <h1 className="text-3xl font-black text-f-text">Your contracts</h1>
        </div>
        <button disabled className="flex items-center gap-2 bg-legal/30 text-legal/50 font-semibold text-sm px-4 py-2 rounded-xl cursor-not-allowed">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          New contract (coming soon)
        </button>
      </div>

      {/* Active contracts */}
      <section>
        <h2 className="text-sm font-bold text-f-text mb-4">Active contracts</h2>
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {ACTIVE.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i < ACTIVE.length - 1 ? 'border-b border-f-border' : ''
              } hover:bg-legal/5 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-legal/10 border border-legal/20 flex items-center justify-center text-legal">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M2 3h12v10H2z" stroke="currentColor" strokeWidth="1.4" rx="1" />
                    <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-f-text">{c.name}</p>
                  <p className="text-xs text-f-faint mt-0.5">Expires {c.expires} · {c.signed} parties signed</p>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border ${STATUS_STYLE[c.status]}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Template library */}
      <section>
        <h2 className="text-sm font-bold text-f-text mb-4">Template library</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEMPLATES.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-f-border bg-f-raised p-5 hover:border-legal/40 hover:bg-legal/5 transition-all group cursor-default"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-bold text-f-text group-hover:text-legal transition-colors">{t.name}</p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-legal/10 text-legal border border-legal/20">{t.tag}</span>
                  </div>
                  <p className="text-xs text-f-muted">{t.desc}</p>
                </div>
              </div>
              <button disabled className="mt-4 w-full text-xs border border-f-border text-f-faint rounded-lg py-2 cursor-not-allowed">
                Use template (coming soon)
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
