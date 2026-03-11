'use client'

import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">⚠️</div>
        <h1 className="text-xl font-extrabold text-f-text mb-3">Something went wrong</h1>
        <p className="text-sm text-f-muted mb-8">
          An unexpected error occurred. Please try again, or return to Famalii Core.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="text-sm text-white bg-legal hover:bg-legal-dark transition-colors px-5 py-2.5 rounded-xl font-semibold"
          >
            Try again
          </button>
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
