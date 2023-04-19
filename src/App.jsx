import { useState } from 'react'

import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage'
import OrderHistoryPage from './pages/OrderHistoryPage'

import './App.css'

function App()
{
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      <h1>SEI Cafe</h1>
      {user ? <NewOrderPage /> : <AuthPage />}
    </main>
  )
}

export default App
