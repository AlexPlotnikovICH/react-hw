import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <div style={{ marginTop: '40px' }}>
          <img
            width='100%'
            src='/img/banner.jpg'
            alt='Banner'
            style={{ borderRadius: '20px' }}
          />
        </div>

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
