import { useState } from 'react'
import Answer from './Answer.jsx'

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1

function MathQuiz() {
	const [score, setScore] = useState(0)
	const [numA, setNumA] = useState(getRandomNumber())
	const [numB, setNumB] = useState(getRandomNumber())

	// Функция для проверки ответа и обновления счета
	const checkAnswer = userAnswer => {
		const correctAnswer = numA + numB
		if (parseInt(userAnswer, 10) === correctAnswer) {
			setScore(prevScore => prevScore + 1)
		} else {
			setScore(prevScore => prevScore - 1)
		}
		// Генерируем новые числа для следующего вопроса
		setNumA(getRandomNumber())
		setNumB(getRandomNumber())
	}

	const quizStyle = {
		padding: '20px',
		border: '2px solid #007bff',
		borderRadius: '10px',
		textAlign: 'center',
		margin: '20px 0',
	}

	//Динамическое отображение
	return (
		<div style={quizStyle}>
			<h2>Математическая Викторина</h2>
			<h3>
				Сколько будет {numA} + {numB}?
			</h3>
			<h4>Ваш счёт: {score}</h4>
			<Answer a={numA} b={numB} checkAnswer={checkAnswer} />
		</div>
	)
}

export default MathQuiz
