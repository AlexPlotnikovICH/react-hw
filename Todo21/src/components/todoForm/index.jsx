import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlice'
import { TextField, Button, Box } from '@mui/material'

const TodoForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (!text.trim()) return

    dispatch(addTodo(text))

    // Очищаем поле ввода
    setText('')
  }

  return (
    <Box
      component='form' // component="form" и onSubmit позволяют отправлять задачу нажатием Enter
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}
    >
      <TextField
        label='Enter new todo'
        variant='outlined'
        fullWidth
        value={text}
        onChange={e => setText(e.target.value)}
        sx={{ backgroundColor: 'white' }}
      />

      <Button
        type='submit'
        variant='contained'
        size='large'
        fullWidth
        sx={{
          py: 1.5,
          fontWeight: 'bold',
          backgroundColor: '#28a745',
          textTransform: 'none',
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
