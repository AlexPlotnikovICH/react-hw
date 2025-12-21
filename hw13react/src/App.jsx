import React from 'react'
import Filter from './components/Filter'
import UserList from './components/UserList'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <h1>User Filter App</h1>

      <Filter />

      <hr />

      <UserList />
    </div>
  )
}

export default App
