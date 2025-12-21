import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'
import styles from '../styles/UserList.module.css'

const UserList = ({ users, filter }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(filter.toLowerCase())
  )

  return (
    <div className={styles.listContainer}>
      <h3>Users List</h3>
      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => <UserItem key={user.id} name={user.name} />)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.users,
  filter: state.filter,
})

export default connect(mapStateToProps)(UserList)
