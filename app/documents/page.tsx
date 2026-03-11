import { auth } from '@clerk/nextjs/server'

const CATEGORIES = [
  { icon: '📜', label: 'Wills & Estates',     count: 2 },
  { icon: '🏠', label: 'Property',             count: 3 },
  { icon: '🚗', label: 'Vehicles',             count: 1 },
  { icon: '🪪', label: 'Identity',             count: 4 },
  { icon: '💼', label: 'Business',             count: 0 },
  { icon: '💳', label: 'Financial',            count: 1 },
]

const RECENT = [
  { name: 'Last Will & Testament',        category: 'Will',     updated: '2 months ago',  status: 'Signed'  },
  { name: 'Property Deed — Oslo flat',     category: 'Property', updated: '5 months ago',  status: 'Active'  },
  { name: 'Family Trust Declaration',     category: 'Trust',    updated: '1 week ago',    status: 'Draft'   },
  { name: 'Passport — Jesper',            category: 'Identity', updated: '3 years ago',   status: 'Expiring'},
  { name: 'Car title — Toyota RAV4',      category: 'Vehicle',  updated: '1 year ago',    status: 'Active'  },
]

const STATUS_STYLE: Record<string, string> = {
  Signed:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Active:   'bg-sky-500/10     text-sky-400     border-sky-500/20',
  Draft:    'bg-f-border/50    text-f-muted     border-f-border',
  Expiring: 'bg-amber-500/10  text-amber-400   border-amber-500/20',
}

export default async function DocumentsPage() {
  const { userId } = await auth()
  if (!userId) return null // middleware handles redirect

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-legal font-semibold mb-1">Documents</p>
          <h1 className="text-3xl font-black text-f-text">Your vault</h1>
        </div>
        <button disabled className="flex items-center gap-2 bg-legal/30 text-legal/50 font-semibold text-sm px-4 py-2 rounded-xl cursor-not-allowed">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          Upload (coming soon)
        </button>
      </div>

      {/* Category grid */}
      <section>
        <h2 className="text-sm font-bold text-f-text mb-4">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-f-border bg-f-raised p-4 text-center hover:border-legal/40 transition-colors cursor-default"
            >
              <div className="text-2xl mb-2">{c.icon}</div>
              <p className="text-xs font-semibold text-f-text">{c.label}</p>
              <p className="text-[10px] text-f-faint mt-0.5">{c.count} doc{c.count !== 1 ? 's' : ''}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent documents */}
      <section>
        <h2 className="text-sm font-bold text-f-text mb-4">Recent documents</h2>
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {RECENT.map((doc, i) => (
            <div
              key={doc.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i < RECENT.length - 1 ? 'border-b border-f-border' : ''
              } hover:bg-legal/5 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-legal/10 border border-legal/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-legal" aria-hidden>
                    <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-f-text">{doc.name}</p>
                  <p className="text-xs text-f-faint mt-0.5">{doc.category} · Updated {doc.updated}</p>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border ${STATUS_STYLE[doc.status]}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Upload CTA */}
      <div className="rounded-2xl border border-dashed border-f-border p-10 text-center">
        <div className="text-4xl mb-4">📁</div>
        <p className="text-sm font-semibold text-f-text mb-1">Drag & drop to upload</p>
        <p className="text-xs text-f-muted max-w-sm mx-auto">Support for PDF, Word, and image files. Full upload UI launching soon.</p>
      </div>

    </div>
  )
}
