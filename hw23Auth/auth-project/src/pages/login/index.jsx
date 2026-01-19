import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, isSuccess, isError, message } = useSelector(
    state => state.auth,
  )
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (isSuccess) {
      navigate('/profile')
    }
  }, [isSuccess])
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='Email'
          required
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default Login
