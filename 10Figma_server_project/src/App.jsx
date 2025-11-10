import './App.css'
import React from 'react'
import Header from './components/header/index.jsx'
import Post from './components/post/index.jsx'

function App() {
  return (
    <div className='app'>
      <Header />

      <main className='content'>
        <section className='columnLeft'>
          <h2>Список постов</h2>
          <Post />
        </section>

        <section className='columnRight'>
          <h2>Написать пост</h2>
        </section>
      </main>
    </div>
  )
}

export default App
