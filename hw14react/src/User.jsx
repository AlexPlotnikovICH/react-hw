import React from 'react'
import { connect } from 'react-redux'

const User = ({ name, status }) => {
  return (
    <div className='card'>
      <h2 style={{ marginTop: 0 }}>Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.name,
  status: state.status,
})

export default connect(mapStateToProps)(User)
