import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import AuthPage from './pages/AuthPage/AuthPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar'

import { getUser } from './utilities/users-service'

// import './App.css'
import styles from './App.module.css'

function App()
{
  const [user, setUser] = useState(getUser())

  return (
    <main className={styles.App}>
      {/* if user is truthy, the following routes are available, otherwise send user to AuthPage */}
      {
        user ?
          <>
            {/* <NavBar user={user} setUser={setUser} /> */}
            <Routes>
              <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} />} />
              <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} />} />
              <Route path='/*' element={<Navigate to="/orders/new" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
