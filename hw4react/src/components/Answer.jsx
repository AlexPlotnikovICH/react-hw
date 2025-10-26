import { useState } from 'react'

function Answer({ a, b, checkAnswer }) {
	const [userAnswer, setUserAnswer] = useState('')

	const handleSubmit = event => {
		event.preventDefault()

		checkAnswer(userAnswer)

		setUserAnswer('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='number'
				value={userAnswer}
				onChange={e => setUserAnswer(e.target.value)}
				placeholder='Ваш ответ'
				required
			/>
			<button type='submit'>Ответить</button>
		</form>
	)
}

export default Answer
