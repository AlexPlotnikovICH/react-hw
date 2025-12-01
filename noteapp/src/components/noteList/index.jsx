import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/actions'

function NoteList() {
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  return (
    <div className='list-container'>
      {notes.map(note => (
        <div key={note.id} className='note-card'>
          <div className='note-content'>
            <h4 className='note-title'>Note #{note.id}</h4>
            <p className='note-text'>{note.text}</p>
          </div>
          <div className='note-actions'>

            <button className='btn edit-btn'>Edit</button>
            <button
              className='btn delete-btn'
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
