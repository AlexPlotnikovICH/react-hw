import './App.css'
import LoginForm from './components/Login.form'
import { AppBar, Toolbar, Typography } from '@mui/material'

function App() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography>My Application</Typography>
        </Toolbar>
      </AppBar>
      <LoginForm />
    </>
  )
}
export default App
