import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Импортируем наши комнаты (страницы)
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div className='app'>
      {/* Хедер всегда на месте */}
      <Header />

      <div className='container'>
        {/* Routes - это место, где меняется контент в зависимости от адреса */}
        <Routes>
          {/* Если путь "/", покажи Home */}
          <Route path='/' element={<Home />} />

          {/* Если путь "/cart", покажи Cart */}
          <Route path='/cart' element={<Cart />} />

          {/* Если путь "/contacts", покажи Contacts */}
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>

      {/* Футер всегда на месте */}
      <Footer />
    </div>
  )
}

export default App
