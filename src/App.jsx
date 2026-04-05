import AppShell from './components/layout/AppShell.jsx'
import CoinListPage from './pages/CoinListPage.jsx'
import CoinDetailPage from './pages/CoinDetailPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'
import { useEffect, useRef, useState } from 'react'
import coinData from './Services/coin.js'

function App() {
  const marketSectionRef = useRef(null)

  const [coins, setCoins] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const handleAddToWatchlist = (coin) => {
    setWatchlist((prev) => {
      const alreadyAdded = prev.some((item) => item.id === coin.id)

      if (alreadyAdded) {
      alert('already added')
      return prev
    }
    console.log('coin:',coin, 'prev:',prev)
    alert('coin added')
    return [...prev, coin]
    })
  }

  const handleRemoveFromWatchlist = (coinId) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== coinId))
  }

  const scrollToMarketSnapshot = ()=>{
    marketSectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  const limit = 5
  const start = currentPage * limit

  useEffect(() => {
    const loadCoinData = async () => {
      const renderData = await coinData({ start, limit })
      setCoins(renderData.data)
    }

    loadCoinData()
  }, [start])

  const handlePrevPage = ()=>(
    setCurrentPage((prev)=>Math.max(prev-1,0))
  )
  const handleNextPage = ()=>(
    setCurrentPage((prev)=>prev+1)
  )


  return (
    <AppShell>
      <CoinListPage
        coins={coins}
        marketSectionRef={marketSectionRef}
        onAddToWatchlist={handleAddToWatchlist}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
      <CoinDetailPage />
      <WatchlistPage
        scrollToMarketSnapshot={scrollToMarketSnapshot}
        watchlist={watchlist}
        onRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
    </AppShell>
  )
}

export default App
