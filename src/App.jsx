import AppShell from './components/layout/AppShell.jsx'
import CoinListPage from './pages/CoinListPage.jsx'
import CoinDetailPage from './pages/CoinDetailPage.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'

function App() {
  return (
    <AppShell>
      <CoinListPage />
      <CoinDetailPage />
      <WatchlistPage />
    </AppShell>
  )
}

export default App
