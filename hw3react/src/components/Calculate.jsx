import { useState } from 'react'
import Button from './Button'

function Calculate() {
	const [count, setCount] = useState(0)
	const handleIncrement = () => {
		setCount(count + 1)
	}
	const handleDecrement = () => {
		setCount(count - 1)
	}
	const handleReset = () => {
		setCount(0)
	}
	return (
		<div className='card'>
			<h2>Счётчик</h2>
			<p>сейчас равен: {count}</p>
			<Button onClick={handleIncrement}>добавить 1</Button>
			<Button onClick={handleDecrement}>отнять 1</Button>
			<Button onClick={handleReset}>сброс</Button>
		</div>
	)
}
export default Calculate
