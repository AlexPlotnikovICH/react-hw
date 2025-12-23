import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import User from './User'
import UserForm from './UserForm'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Redux User App
        </h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  )
}

export default App
