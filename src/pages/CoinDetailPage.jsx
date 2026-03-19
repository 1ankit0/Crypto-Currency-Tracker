import PageSection from '../components/layout/PageSection.jsx'
import PriceChangeUp from '../components/common/PriceChangeUp.jsx'
import PriceChangeDown from '../components/common/PriceChangeDown.jsx'
import StatCard from '../components/coins/StatCard.jsx'

export default function CoinDetailPage() {
  return (
    <PageSection
      tag="Coin Detail"
      title="Bitcoin Overview"
      subtitle="A focused view with price, stats, and watchlist actions."
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-lg font-semibold text-white">
              ₿
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Bitcoin · BTC</p>
              <h3 className="text-2xl font-semibold text-slate-900">$62,140.22</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <PriceChangeUp value="+3.2% (24h)" />
                <span className="text-xs">Market Rank #1</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Add to Watchlist
            </button>
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
              Remove
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Market Cap" value="$1.23T" hint="Dominance 51.3%" />
          <StatCard label="24h Volume" value="$28.4B" hint="Volume Rank #1" />
          <StatCard label="Circulating" value="19.6M BTC" hint="Max 21M" />
          <StatCard label="All Time High" value="$69,000" hint="Nov 2021" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price Trend</p>
                <h4 className="text-lg font-semibold text-slate-900">7 Day Performance</h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <PriceChangeUp value="+8.4%" />
              </div>
            </div>
            <div className="mt-6 h-40 rounded-2xl border border-dashed border-slate-200 bg-[linear-gradient(135deg,#fef3c7_0%,#e0f2fe_55%,#dcfce7_100%)]" />
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">1H</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">24H</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">7D</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">1M</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">1Y</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live Signals</p>
              <h4 className="text-lg font-semibold text-slate-900">Momentum Watch</h4>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-700">Short-term trend</p>
              <p className="text-xs text-slate-500">Bullish, strong bid pressure</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-700">Volatility</p>
              <p className="text-xs text-slate-500">Moderate with quick spikes</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
              <p className="text-sm font-semibold text-slate-700">Price Change</p>
              <div className="mt-2 flex items-center gap-2">
                <PriceChangeUp value="+3.2%" />
                <PriceChangeDown value="-1.1% (1h)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
