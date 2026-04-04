import PageSection from "../components/layout/PageSection.jsx";
import PriceChangeUp from "../components/common/PriceChangeUp.jsx";
import PriceChangeDown from "../components/common/PriceChangeDown.jsx";
import WatchlistRow from "../components/watchlist/WatchlistRow.jsx";
import { useEffect, useRef, useState } from "react";

export default function WatchlistPage({
  coins,
  scrollToMarketSnapshot,
  watchlist,
}) {
  const handleRemoveCoin = (coin) =>
    watchlist.filter((coin) => (
      <WatchlistRow
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.price}
        change={<PriceChangeDown value="..." />}
        action={
          <button
            className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
            onClick={handleRemoveCoin}
          >
            Remove
          </button>
        }
      />
    ));

  return (
    <PageSection
      tag="Watchlist"
      title="Coins You Track"
      subtitle="Save coins you want to monitor with quick add or remove actions."
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Watchlist Summary
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              {watchlist.length} Active Coins
            </h3>
            <p className="text-sm text-slate-500">
              Personalized alerts start here.
            </p>
          </div>
          <button
            className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            onClick={scrollToMarketSnapshot}
          >
            Add New Coin
          </button>
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
              {watchlist.map((coin) => (
                <WatchlistRow
                  key={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.price_usd}
                  rank={coin.rank}
                  change={<PriceChangeDown value="..." />}
                  action={
                    <button
                      className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                      onClick={handleRemoveCoin}
                    >
                      Remove
                    </button>
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Quick Actions
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Edit Alerts
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Price Targets
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Portfolio Notes
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Next Check-In
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Review watchlist every morning to decide if you want to add or
              remove assets.
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
