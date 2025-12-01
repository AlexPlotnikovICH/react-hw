import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/actions'

function NoteForm() {
  const [text, setText] = useState('')
  // Добавим локальный стейт для title, чтобы инпут работал визуально
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    if (text.trim()) {
      // Отправляем пока ТОЛЬКО текст, так как наш редьюсер настроен только на него
      dispatch(addNote(text))
      setText('')
      setTitle('')
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='note-form'>
        {/* Верхний инпут как на скрине */}
        <input
          className='input-field'
          type='text'
          placeholder='Second note' // Плейсхолдер как на скрине
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        {/* Нижнее поле как на скрине */}
        <textarea
          className='input-field textarea'
          placeholder='Some text' // Плейсхолдер как на скрине
          value={text}
          name='text'
          onChange={event => setText(event.target.value)}
        />

        <button className='add-btn' type='submit'>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default NoteForm
