import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl font-extrabold text-legal/20 mb-4">404</div>
        <h1 className="text-xl font-extrabold text-f-text mb-3">Page not found</h1>
        <p className="text-sm text-f-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="text-sm text-white bg-legal hover:bg-legal-dark transition-colors px-5 py-2.5 rounded-xl font-semibold"
          >
            Dashboard
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_FAMALII_CORE_URL ?? '/'}
            className="text-sm text-f-muted hover:text-f-text transition-colors"
          >
            ← Famalii Core
          </a>
        </div>
      </div>
    </div>
  )
}
