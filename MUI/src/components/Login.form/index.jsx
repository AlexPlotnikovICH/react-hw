import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material'
function LoginForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedData, setSubmittedData] = useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    setSubmittedData({ name: name, email: email })
    setName('')
    setEmail('')
  }
  return (
    <Container sx={{ mt: 4 }}>
      <Box>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant='h4'>Enter your data</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Name'
              variant='outlined'
              fullWidth
              margin='normal'
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Box mt={2}>
              <Button type='submit' variant='contained' fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
      {submittedData && (
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant='h6' gutterBottom>
              Submitted data
            </Typography>
            <Typography variant='body1'>Name: {submittedData.name}</Typography>
            <Typography variant='body1'>
              Email: {submittedData.email}
            </Typography>
          </Paper>
        </Box>
      )}
    </Container>
  )
}
export default LoginForm
