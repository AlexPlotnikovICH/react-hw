import { useState } from 'react'
import './App.css'
import CardsList from './components/CardsList'
import Button from './components/Button'
import Calculate from './components/Calculate.jsx'
import Rating from './components/Rating.jsx'
import List from './components/List.jsx'

function App() {
	// --- Логика для счётчика ---
	const [count, setCount] = useState(0)
	const handleIncrement = () => {
		setCount(count + 1)
	}

	const paragraphStyles = {
		backgroundColor: 'lightyellow',
		border: '2px solid orange',
		color: 'darkred',
		padding: '20px',
		borderRadius: '8px',
		marginTop: '20px',
	}
	const teams = [
		{
			name: 'Dragons United',
			members: [
				'David Miller',
				'Ethan Turner',
				'Natalie Clark',
				'Sophie Gomez',
				'Tom Hanks',
			],
		},
		{
			name: 'Golden Eagles',
			members: [
				'Lisa Ray',
				'Harry Ford',
				'Betty Cooper',
				'George King',
				'Alice Morgan',
			],
		},
		{
			name: 'Mighty Warriors',
			members: [
				'Sam Wilson',
				'John Norton',
				'Emma Cartright',
				'Daniel Lewis',
				'Megan Stone',
			],
		},
		{
			name: 'Falcon Flyer',
			members: [
				'Oscar Wilde',
				'Robert Brown',
				'Victoria Smith',
				'Rachel Adams',
				'Matthew Johns',
			],
		},
		{
			name: 'Storm Breakers',
			members: [
				'Lucas White',
				'Eva Taylor',
				'Charles Anderson',
				'Emily Johnson',
				'Aaron Carter',
			],
		},
	]

	return (
		<>
			<Rating />
			<List />

			<div className='card'>
				<p>Текущее значение счётчика: {count}</p>
				<button onClick={handleIncrement}>Увеличить счётчик</button>
			</div>

			<CardsList teams={teams} />

			<div style={paragraphStyles}>
				<p>Этот параграф стилизован при помощи встроенных стилей в React.</p>
				<Button>кнопка 1</Button>
				<Button>кнопка 2</Button>
				<Calculate />
			</div>
		</>
	)
}

export default App
