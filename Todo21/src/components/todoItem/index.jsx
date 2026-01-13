import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../redux/slices/todoSlice'
import { ListItem, Typography, Button, Box, Divider } from '@mui/material'

const TodoItem = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch()

  return (
    <>
      <ListItem sx={{ py: 2 }}>
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            textDecoration: isCompleted ? 'line-through' : 'none',
            color: isCompleted ? 'text.secondary' : 'text.primary',
            fontSize: '1.2rem',
          }}
        >
          {text}
        </Typography>
        {/* кнопочки внутри   */}
        <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
          {/* Complete / Undo */}
          <Button
            variant='contained'
            color='primary'
            onClick={() => dispatch(toggleTodo(id))}
            sx={{ textTransform: 'none' }}
          >
            {isCompleted ? 'Undo' : 'Complete'}
          </Button>

          {/*Delete */}
          <Button
            variant='contained'
            color='error'
            onClick={() => dispatch(deleteTodo(id))}
            sx={{ textTransform: 'none' }}
          >
            Delete
          </Button>
        </Box>
      </ListItem>

      <Divider component='li' />
    </>
  )
}

export default TodoItem
