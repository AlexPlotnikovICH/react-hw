import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../../redux/slices/authSlice'
function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { email, password, confirmPassword } = formData
  const { isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      navigate('/login')
    }
  }, [isSuccess])
  const handleSubmit = event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    dispatch(register({ email, password }))
  }
  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          placeholder='Confirm Password'
          required
        />
        <button type='submit'>Register</button>
      </form>
      {isError && <p className={styles.message}>Registration failed</p>}
      {isSuccess && <p>Registration successfull</p>}
    </div>
  )
}
export default Register
