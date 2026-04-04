import PageSection from "../components/layout/PageSection.jsx";
import SearchInput from "../components/common/SearchInput.jsx";
import SortButton from "../components/common/SortButton.jsx";
import PriceChangeUp from "../components/common/PriceChangeUp.jsx";
import PriceChangeDown from "../components/common/PriceChangeDown.jsx";
import CoinRow from "../components/coins/CoinRow.jsx";
import { useEffect, useState } from "react";
import coinData from "../Services/coin.js";

export default function CoinListPage({ coins, marketSectionRef,  }) {
  
  const [searchedCoin, setSearchedCoin] = useState("");

  const handlePriceChange = () => {};


  const onChangeValue = (e) => {
    setSearchedCoin(e.target.value);
  };


   const filteredCoins = coins.filter((coin) => {
   return ( 
    coin.name.toLowerCase().includes(searchedCoin.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(searchedCoin.toLowerCase().trim())
  )
})


  return (
    <div ref={marketSectionRef}>
      <PageSection tag="Coin List" title="Market Snapshot">
        <div className="flex flex-col gap-6">
          <SearchInput
            onChangeValue={onChangeValue}
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Top 100
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                DeFi
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Layer 1
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Meme
              </span>
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
                {filteredCoins.map((coin) => {
                  return (
                    <CoinRow
                      key={coin.id}
                      name={coin.name}
                      badge={coin.nameid}
                      symbol={coin.symbol}
                      price={coin.price_usd}
                      rank={coin.rank}
                      change={handlePriceChange}
                      action={
                        <button
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                          onClick={() => onAddToWatchlist(coin)}
                        >
                          Add
                        </button>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 px-4 py-3 text-xs text-slate-500">
            Showing 4 of 120 asset. Use the search bar to find a specific coin.
          </div>
        </div>
      </PageSection>
    </div>
  );
}
