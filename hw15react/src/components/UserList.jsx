function UserList({ users }) {
  console.log('Рендер: Список обновлен, чисто для проверки')
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
