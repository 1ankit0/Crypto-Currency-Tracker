import PageSection from '../components/layout/PageSection.jsx'
import SearchInput from '../components/common/SearchInput.jsx'
import SortButton from '../components/common/SortButton.jsx'
import PriceChangeUp from '../components/common/PriceChangeUp.jsx'
import PriceChangeDown from '../components/common/PriceChangeDown.jsx'
import CoinRow from '../components/coins/CoinRow.jsx'

export default function CoinListPage() {
  return (
    <PageSection
      tag="Coin List"
      title="Market Snapshot"
    >
      <div className="flex flex-col gap-6">
        <SearchInput />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Top 100</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">DeFi</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Layer 1</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Meme</span>
          </div>
          <SortButton />
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_0.6fr_0.8fr] gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span>Coin Name</span>
              <span>Symbol</span>
              <span>Price</span>
              <span>24h Change</span>
              <span>Rank</span>
              <span className="text-right">Watchlist</span>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <CoinRow
                name="Bitcoin"
                symbol="BTC"
                badge="BT"
                price="$62,140.22"
                change={<PriceChangeUp value="+3.2%" />}
                rank="1"
                action={
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Add
                  </button>
                }
              />
              <CoinRow
                name="Ethereum"
                symbol="ETH"
                badge="ET"
                price="$3,420.70"
                change={<PriceChangeDown value="-1.4%" />}
                rank="2"
                action={
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Add
                  </button>
                }
              />
              <CoinRow
                name="Solana"
                symbol="SOL"
                badge="SO"
                price="$143.10"
                change={<PriceChangeUp value="+6.8%" />}
                rank="5"
                action={
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Add
                  </button>
                }
              />
              <CoinRow
                name="Dogecoin"
                symbol="DOGE"
                badge="DG"
                price="$0.17"
                change={<PriceChangeDown value="-0.8%" />}
                rank="9"
                action={
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    Add
                  </button>
                }
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 px-4 py-3 text-xs text-slate-500">
          Showing 4 of 120 asset. Use the search bar to find a specific coin.
        </div>
      </div>
    </PageSection>
  )
}
