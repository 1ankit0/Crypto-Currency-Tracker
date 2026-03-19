export default function PageSection({ tag, title, subtitle, children }) {
  return (
    <section className="animate-fade-up rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {tag}
          </span>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
        <div className="glass rounded-[24px] p-6 sm:p-8">{children}</div>
      </div>
    </section>
  )
}
