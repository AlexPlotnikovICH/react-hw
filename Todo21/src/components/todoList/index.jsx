import React from 'react'
import { useSelector } from 'react-redux'
import { List, Typography, Box } from '@mui/material'
import TodoItem from '../todoItem'

const TodoList = () => {
  // Достаем массив задач из Redux
  const todos = useSelector(state => state.todo.items)

  if (!todos.length) {
    return (
      <Typography
        variant='h6'
        align='center'
        color='text.secondary'
        sx={{ mt: 4 }}
      >
        No todos yet. Add your first one!
      </Typography>
    )
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  )
}

export default TodoList
