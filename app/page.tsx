import { Show, SignInButton } from '@clerk/nextjs'

const STATS = [
  { value: '400+', label: 'Legal templates' },
  { value: '12',   label: 'Document categories' },
  { value: '256-bit', label: 'AES encryption' },
  { value: 'GDPR',    label: 'Compliant' },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📤', title: 'Upload or create', body: 'Drag-and-drop any PDF or Word doc, or pick a ready-made template and fill in the blanks.' },
  { step: '02', icon: '🗂️', title: 'Organise & track', body: 'Tag documents by type, set expiry reminders, and search your entire vault instantly.' },
  { step: '03', icon: '✍️', title: 'Sign & share', body: 'Request legally binding e-signatures from family members and advisors — no printing required.' },
]

const features = [
  {
    icon: '📄',
    title: 'Contract Templates',
    desc: 'Professionally drafted contract templates for rental agreements, loans, gift deeds, and more.',
  },
  {
    icon: '🗂️',
    title: 'Document Storage',
    desc: 'Encrypted, organised vault for wills, deeds, passports, and all critical family records.',
  },
  {
    icon: '✍️',
    title: 'E-Signatures',
    desc: 'Request and collect legally binding digital signatures — no printing required.',
  },
  {
    icon: '✅',
    title: 'Compliance Tracker',
    desc: 'Track renewal dates, expiries, and compliance obligations across all your documents.',
  },
  {
    icon: '🤝',
    title: 'Family Agreements',
    desc: 'Formalise family loans, property transfers, and shareholder agreements with ease.',
  },
  {
    icon: '🔒',
    title: 'Famalii SSO',
    desc: 'One Famalii account. Seamless access across Core, Invest, Legal — no extra passwords.',
  },
]

export default function LegalHome() {
  return (
    <div className="relative overflow-hidden">

      {/* ── Hero spotlight ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-legal/10 text-legal border border-legal/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-legal animate-pulse" />
          Now in beta — free for Famalii members
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-f-text leading-tight mb-6">
          Family legal made{' '}
          <span className="text-legal">simple</span>
        </h1>
        <p className="text-lg text-f-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Store, manage, and sign legal documents for your entire family — all in one secure,
          beautifully organised place.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Show when="signed-out">
            <SignInButton>
              <button className="bg-legal hover:bg-legal-dark transition-colors text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg shadow-legal/20">
                Get started — it&apos;s free
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <a
              href="/dashboard"
              className="bg-legal hover:bg-legal-dark transition-colors text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg shadow-legal/20"
            >
              Go to dashboard →
            </a>
          </Show>
          <a
            href={process.env.NEXT_PUBLIC_FAMALII_CORE_URL ?? '/'}
            className="text-sm text-f-muted hover:text-f-text transition-colors px-6 py-3.5 rounded-xl border border-f-border hover:border-f-muted"
          >
            ← Back to Famalii Core
          </a>
        </div>
      </section>

      {/* ── Feature grid ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-f-border bg-f-raised p-6 hover:border-legal/40 hover:bg-legal/5 transition-all duration-200 group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-sm font-bold text-f-text mb-2 group-hover:text-legal transition-colors">
                {f.title}
              </h3>
              <p className="text-xs text-f-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────── */}
      <section className="border-y border-f-border bg-f-raised/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-legal mb-1">{s.value}</p>
              <p className="text-xs text-f-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-f-text mb-3">
            Three steps to organised
          </h2>
          <p className="text-f-muted max-w-md mx-auto">
            No legal expertise needed — Famalii Legal guides you through every document.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-f-raised border border-f-border flex items-center justify-center text-3xl">
                  {s.icon}
                </div>
                <span className="absolute -top-2 -right-2 text-[10px] font-black text-legal bg-f-bg border border-legal/30 rounded-full w-5 h-5 flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-f-text mb-1">{s.title}</h3>
                <p className="text-xs text-f-muted leading-relaxed max-w-xs mx-auto">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────── */}
      <section className="border-t border-f-border bg-f-raised/50">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-black text-f-text mb-4">
            Your family&apos;s legal record starts here
          </h2>
          <p className="text-f-muted max-w-md mx-auto mb-8">
            Secure your documents today. Free for Famalii members.
          </p>
          <Show when="signed-out">
            <SignInButton>
              <button className="inline-flex items-center gap-2 bg-legal hover:bg-legal-dark text-white font-bold px-10 py-4 rounded-xl text-base transition-all shadow-xl shadow-legal/20">
                Get started free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <a href="/dashboard" className="inline-flex items-center gap-2 bg-legal hover:bg-legal-dark text-white font-bold px-10 py-4 rounded-xl text-base transition-all shadow-xl shadow-legal/20">
              Open your vault →
            </a>
          </Show>
        </div>
      </section>

    </div>
  )
}
