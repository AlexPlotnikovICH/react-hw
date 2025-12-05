import { useState } from 'react'
import './App.css'

import ValueDisplay from './components/ValueDisplay.jsx'

function App() {
  const [value, setValue] = useState('')
  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div className='app-container'>
      <h1>Current and Previous Value</h1>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Type something...'
      />
      <ValueDisplay value={value} />
    </div>
  )
}

export default App
