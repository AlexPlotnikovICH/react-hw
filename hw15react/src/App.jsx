import { useState } from 'react'
import { useCallback, useMemo } from 'react'
import UserList from './components/UserList'
import './App.css'

const users = [
  { id: 1, name: 'Анна' },
  { id: 2, name: 'Александр' },
  { id: 3, name: 'Марк' },
  { id: 4, name: 'Михаил' },
  { id: 5, name: 'Денис' },
  { id: 6, name: 'Дарья' },
]
function App() {
  const [filter, setFilter] = useState('')

  const filterUsers = useCallback(text => {
    return users.filter(
      user => user.name.toLowerCase().includes(text.toLowerCase()),
      // что б отрабатывало и с маленькой буквы
    )
  }, [])
  const filteredUsers = useMemo(
    () => filterUsers(filter), // Вызываем функцию фильтрации
    [filter, filterUsers], //  Зависимости: пересчитываем, только если изменился текст фильтра или сама функция
  )

  return (
    <div className='app'>
      <h1>Список пользователей</h1>
      <input
        type='text'
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder='Поиск по имени...'
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <UserList users={filteredUsers} />
    </div>
  )
}

export default App
