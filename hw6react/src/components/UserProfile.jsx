import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './UserProfile.module.css'

function UserProfile() {
  const [user, setUser] = useState(null)
  const fetchUser = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUser(response.data.results[0])
  }
  useEffect(() => {
    fetchUser()
  }, [])
  if (!user) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.card}>
      <img
        src={user.picture.large}
        alt='User Avatar'
        className={styles.avatar}
      />

      <h2 className={styles.name}>
        {user.name.first} {user.name.last}
      </h2>

      <p className={styles.info}>Email: {user.email}</p>

      <p className={styles.info}>Phone: {user.phone}</p>

      <button
        className={styles.button}
        onClick={fetchUser} // Передаем ССЫЛКУ на функцию, НЕ вызываем ее!
      >
        Load New User
      </button>
    </div>
  )
}

export default UserProfile
