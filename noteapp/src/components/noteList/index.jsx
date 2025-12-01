import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/actions'

function NoteList() {
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  return (
    <div className='list-container'>
      {notes.map(note => (
        <div key={note.id} className='note-card'>
          {/* ТЕПЕРЬ ТУТ РЕАЛЬНЫЙ ЗАГОЛОВОК */}
          {/* Если заголовка нет, покажем 'Untitled' для красоты */}
          <h3>{note.title || 'Untitled'}</h3>

          <p>{note.text}</p>

          <div className='card-actions'>
            <button className='action-btn'>Edit</button>
            <button
              className='action-btn'
              onClick={() => dispatch(deleteNote(note.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoteList
