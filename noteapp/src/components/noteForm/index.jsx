import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/actions'

function NoteForm() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()

    // Проверяем, чтобы хотя бы одно поле было заполнено
    if (title.trim() || text.trim()) {
      // ПЕРЕДАЕМ ДВА АРГУМЕНТА: title и text
      dispatch(addNote(title, text))

      // Очищаем поля
      setTitle('')
      setText('')
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='note-form'>
        <input
          className='input-control'
          type='text'
          placeholder='Title' // Заголовок
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className='input-control'
          placeholder='Note text...' // Текст
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='add-btn' type='submit'>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default NoteForm
