export default function CoinRow({ name, symbol, badge, price, rank, change, action }) {
  return (
    <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_0.6fr_0.8fr] items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {badge}
        </div>
        <span className="font-semibold text-slate-900">{name}</span>
      </div>
      <span className="text-xs font-semibold uppercase text-slate-500">{symbol}</span>
      <span className="font-semibold text-slate-900">{price}</span>
      <span>{change}</span>
      <span className="font-semibold text-slate-600">#{rank}</span>
      <div className="flex justify-end">{action}</div>
    </div>
  )
}
