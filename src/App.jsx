import AppShell from './components/layout/AppShell.jsx'
import CoinListPage from './pages/CoinListPage.jsx'
import CoinDetailPage from './pages/CoinDetailPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'
import { useRef } from 'react'

function App() {
  const marketSectionRef = useRef(null)

  const scrollToMarketSnapshot = ()=>{
    marketSectionRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <AppShell>
      <CoinListPage marketSectionRef={marketSectionRef}/>
      <CoinDetailPage />
      <WatchlistPage scrollToMarketSnapshot={scrollToMarketSnapshot} />
    </AppShell>
  )
}

export default App
