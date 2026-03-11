export default function DashboardLoading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10 animate-pulse">

      {/* Header */}
      <div className="space-y-2">
        <div className="h-7 w-52 rounded-xl bg-f-raised" />
        <div className="h-4 w-72 rounded-lg bg-f-raised" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-f-border bg-f-raised p-5 space-y-2">
            <div className="h-7 w-8 rounded-lg bg-f-border" />
            <div className="h-8 w-10 rounded-lg bg-f-border" />
            <div className="h-3 w-24 rounded bg-f-border" />
          </div>
        ))}
      </div>

      {/* Recent docs */}
      <div className="space-y-3">
        <div className="h-5 w-40 rounded-lg bg-f-raised" />
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-4 ${i < 3 ? 'border-b border-f-border' : ''}`}
            >
              <div className="space-y-1.5">
                <div className="h-4 w-56 rounded bg-f-border" />
                <div className="h-3 w-32 rounded bg-f-border" />
              </div>
              <div className="h-6 w-16 rounded-full bg-f-border" />
            </div>
          ))}
        </div>
      </div>

      {/* Active contracts */}
      <div className="space-y-3">
        <div className="h-5 w-40 rounded-lg bg-f-raised" />
        <div className="rounded-2xl border border-f-border bg-f-raised overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-4 ${i < 2 ? 'border-b border-f-border' : ''}`}
            >
              <div className="space-y-1.5">
                <div className="h-4 w-56 rounded bg-f-border" />
                <div className="h-3 w-24 rounded bg-f-border" />
              </div>
              <div className="h-6 w-20 rounded-full bg-f-border" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
