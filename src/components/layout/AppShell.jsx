export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#f6efe6] text-slate-900">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-200/60 blur-[110px]" />
        <div className="pointer-events-none absolute right-10 top-24 h-80 w-80 rounded-full bg-sky-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-200/60 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 py-12">
          <header className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Crypto Currency Tracker
              </h1>
            </div>
          </header>
          <div className="mt-10 flex flex-col gap-12">{children}</div>
        </div>
      </div>
    </div>
  )
}
