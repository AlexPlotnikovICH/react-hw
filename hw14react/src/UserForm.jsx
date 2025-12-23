import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from './redux/actions'

const UserForm = ({ setUserInfo }) => {
  const [localName, setLocalName] = useState('')
  const [localStatus, setLocalStatus] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (localName.trim().length < 3 || localStatus.trim() === '') {
      setError(
        'Error: Name must be at least 3 characters long, and Status cannot be empty!'
      )
      return
    }

    setError('')

    // Отправка в Redux
    setUserInfo({
      name: localName,
      status: localStatus,
    })

    // Очистка формы
    setLocalName('')
    setLocalStatus('')
  }

  return (
    <form onSubmit={handleSubmit} className='card'>
      <h2 style={{ marginTop: 0 }}>Edit Profile</h2>

      {error && <div className='error-msg'>{error}</div>}

      <div>
        <input
          className='input-field'
          type='text'
          placeholder='New Name'
          value={localName}
          onChange={e => {
            setLocalName(e.target.value)
            setError('')
          }}
        />
      </div>

      <div>
        <input
          className='input-field'
          type='text'
          placeholder='New Status'
          value={localStatus}
          onChange={e => {
            setLocalStatus(e.target.value)
            setError('')
          }}
        />
      </div>

      <button type='submit' className='save-btn'>
        Save
      </button>
    </form>
  )
}

const mapDispatchToProps = {
  setUserInfo,
}

export default connect(null, mapDispatchToProps)(UserForm)
