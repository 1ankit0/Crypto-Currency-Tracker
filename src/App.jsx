import AppShell from './components/layout/AppShell.jsx'
import CoinListPage from './pages/CoinListPage.jsx'
import CoinDetailPage from './pages/CoinDetailPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'
import { useEffect, useRef, useState } from 'react'
import coinData from './Services/coin.js'

function App() {
  const marketSectionRef = useRef(null)

  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([])

  const watchlistCoin = ((prev))=>{
    const alreadyAdded = prev.some((item)=> item.id === coin.id) 
    if (alreadyAdded) {
      return prev
    }
    return [...prev, coins]
  } 
  setWatchlist(watchlist())

  const scrollToMarketSnapshot = ()=>{
    marketSectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  useEffect(() => {
   const loadCoinData = async () => {
   const renderData = await coinData({ start: 0, limit: 5 });
   setCoins(renderData.data);
 };
 loadCoinData();
}, []);


  return (
    <AppShell>
      <CoinListPage coins={coins} marketSectionRef={marketSectionRef}/>
      <CoinDetailPage />
      <WatchlistPage coins={coins} scrollToMarketSnapshot={scrollToMarketSnapshot} />
    </AppShell>
  )
}

export default App
