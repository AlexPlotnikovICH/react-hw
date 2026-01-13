import { Container, CssBaseline, Typography, Paper } from '@mui/material'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' sx={{ mt: 5 }}>
        <TodoForm />

        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            sx={{ mb: 4, fontWeight: 'bold', fontFamily: 'serif' }}
          >
            Todo List
          </Typography>

          {/* список задач */}
          <Typography align='center' color='text.secondary'></Typography>
          <TodoList />
        </Paper>
      </Container>
    </>
  )
}

export default App
