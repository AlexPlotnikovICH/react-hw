import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contacts from './pages/Contacts' // Не забудь этот импорт!

function App() {
  const [cartItems, setCartItems] = React.useState([])

  // Функция добавления
  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj])
  }

  // Функция удаления
  const onRemoveItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='app'>
      <Header />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home onAddToCart={onAddToCart} />} />

          {/* ОБЯЗАТЕЛЬНО: Передаем onRemove={onRemoveItem} сюда */}
          <Route
            path='/cart'
            element={<Cart items={cartItems} onRemove={onRemoveItem} />}
          />

          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
