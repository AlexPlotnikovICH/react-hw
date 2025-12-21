import React from 'react'
import { connect } from 'react-redux'
import styles from './UserItem.module.css'
import { setFilter } from '../redux/actions'

const Filter = ({ setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div className={styles.filterContainer}>
      <input
        type='text'
        placeholder='Search users...'
        onChange={handleChange}
        className={styles.filterInput}
      />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter,
}

export default connect(null, mapDispatchToProps)(Filter)
