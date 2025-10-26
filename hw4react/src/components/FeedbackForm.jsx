import { useState } from 'react'

function FeedbackForm() {
	const [name, setName] = useState('')
	const [feedback, setFeedback] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		console.log('Отправлено:', { name, feedback })
		// Очистим форму после отправки
		setName('')
		setFeedback('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Ваше имя:
				<input
					type='text'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</label>
			<label>
				Ваш отзыв:
				<textarea
					name='feedback'
					value={feedback}
					onChange={e => setFeedback(e.target.value)}
				/>
			</label>
			<button type='submit'>Отправить</button>
		</form>
	)
}
export default FeedbackForm
