import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DocumentsPage() {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-legal/10 border border-legal/20 flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🗂️</span>
      </div>
      <h1 className="text-2xl font-extrabold text-f-text mb-3">Documents</h1>
      <p className="text-f-muted max-w-md mx-auto text-sm">
        Full document vault with upload, search, and version history is coming soon.
        Stay tuned for the next Famalii Legal release.
      </p>
      <a
        href="/dashboard"
        className="inline-block mt-8 text-sm text-legal hover:text-legal-light transition-colors"
      >
        ← Back to dashboard
      </a>
    </div>
  )
}
