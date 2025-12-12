import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material'

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  const handleChangeNum1 = e => {
    setNum1(e.target.value)
  }

  const handleChangeNum2 = e => {
    setNum2(e.target.value)
  }

  const handleSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2))
  }

  const handleSub = () => {
    setResult(parseFloat(num1) - parseFloat(num2))
  }

  const handleMul = () => {
    setResult(parseFloat(num1) * parseFloat(num2))
  }

  const handleDiv = () => {
    setResult(parseFloat(num1) / parseFloat(num2))
  }

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ padding: '30px', marginTop: '50px' }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Calculator
        </Typography>

        <TextField
          label='Number 1'
          variant='outlined'
          fullWidth
          margin='normal'
          type='number'
          value={num1}
          onChange={handleChangeNum1}
        />

        <TextField
          label='Number 2'
          variant='outlined'
          fullWidth
          margin='normal'
          type='number'
          value={num2}
          onChange={handleChangeNum2}
        />

        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleSum}
          >
            Addition (+)
          </Button>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleSub}
          >
            Subtraction (-)
          </Button>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleMul}
          >
            Multiplication (*)
          </Button>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleDiv}
          >
            Division (/)
          </Button>
        </Box>

        {result !== null && (
          <Box sx={{ mt: 3, p: 2, border: '1px dashed grey', borderRadius: 1 }}>
            <Typography variant='h5' align='center'>
              Result: {result}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  )
}

export default Calculator
