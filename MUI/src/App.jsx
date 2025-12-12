import './App.css'
import LoginForm from './components/Login.form'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import Calculator from './components/Calculator'

function App() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography>My Application</Typography>
        </Toolbar>
      </AppBar>

      <LoginForm />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Calculator />
      </Box>
    </>
  )
}

export default App
