import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const colorWhite = {
  mode: 'light',
  primary: {
    main: '#2979ff',
    contrastText: '#fff',
  },
  background: {
    default: '#e3f2fd',
    paper: '#ffffff',
  },
}

const colorDark = {
  mode: 'dark',
  primary: {
    main: '#ff1744',
    contrastText: '#fff',
  },
  background: {
    default: '#000000',
    paper: '#1a1a1a',
  },
}

const MyButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  padding: '15px 32px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '50px',
  marginTop: '30px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: `0 0 20px ${theme.palette.primary.main}`,

  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
    boxShadow: `0 0 40px ${theme.palette.primary.main}`,
  },
}))

function App() {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme({
    palette: mode === 'light' ? colorWhite : colorDark,
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'background-color 0.5s, color 0.5s',
        }}
      >
        <Typography variant='h3' gutterBottom style={{ fontWeight: 'bold' }}>
          {mode === 'light' ? 'Светлая тема' : 'Тёмная тема'}
        </Typography>

        <Typography variant='body1' sx={{ mb: 4 }}>
          Активный режим: <strong>{mode.toUpperCase()}</strong>
        </Typography>

        <MyButton onClick={toggleTheme}>Переключить режим</MyButton>
      </Box>
    </ThemeProvider>
  )
}

export default App
