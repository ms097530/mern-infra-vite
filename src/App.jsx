import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

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
      {/* if user is truthy, the following routes are available, otherwise send user to AuthPage */}
      {
        user ?
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
          :
          <AuthPage />
      }
      {/* <Routes>
        <Route path='/orders/new' element={<NewOrderPage />} />
        <Route path='/orders' element={<OrderHistoryPage />} />
      </Routes>
      {user ? <NewOrderPage /> : <AuthPage />} */}
    </main>
  )
}

export default App
