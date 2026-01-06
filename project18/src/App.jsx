import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import bannerImg from './assets/banner.png'

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='container'>
        <img className='banner' src={bannerImg} alt='Banner' />

        <h1 className='page-title'>Товары</h1>

        <div className='sneakers'>
          <p> карточки...</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
