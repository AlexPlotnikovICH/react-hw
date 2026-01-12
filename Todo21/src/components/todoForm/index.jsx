import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

const TodoForm = () => {
  const [text, setText] = useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
      <TextField
        label='Enter new todo'
        variant='outlined'
        fullWidth
        value={text}
        onChange={e => setText(e.target.value)}
        sx={{ backgroundColor: 'white' }}
      />

      <Button
        variant='contained'
        size='large'
        fullWidth
        sx={{
          py: 1.5,
          fontWeight: 'bold',
          textTransform: 'none',
          backgroundColor: '#28a745',
          '&:hover': {
            backgroundColor: '#218838',
          },
        }}
      >
        Add Todo
      </Button>
    </Box>
  )
}

export default TodoForm
