import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
  const users = useSelector(state => state.users.users)

  return (
    <div>
      <h2>Список пользователей:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} — <b>{user.email}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
