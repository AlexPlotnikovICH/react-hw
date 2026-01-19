import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { logout } from '../../redux/slices/authSlice'
function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const tokenData = token ? jwtDecode(token) : null
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className={styles.container}>
      <h1>{tokenData ? tokenData.user.id : 'Login into account'}</h1>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  )
}
export default Profile
