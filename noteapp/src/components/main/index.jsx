import NoteForm from '../noteForm'
import NoteList from '../noteList'

function Main() {
  return (
    <div className='main-container'>
      <h1>My Notes App</h1>

      <div className='content-wrap'>
        <NoteForm />
        <NoteList />
      </div>
    </div>
  )
}

export default Main
