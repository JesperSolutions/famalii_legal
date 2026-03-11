import { Show, SignInButton } from '@clerk/nextjs'

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
      <section className="max-w-6xl mx-auto px-6 pb-28">
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

    </div>
  )
}
