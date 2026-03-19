export default function WatchlistRow({ name, symbol, price, change, action }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {symbol}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-xs uppercase text-slate-500">{symbol}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-slate-900">{price}</span>
        {change}
      </div>
      <div>{action}</div>
    </div>
  )
}
