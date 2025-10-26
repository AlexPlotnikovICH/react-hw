import { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)

	const handleCount = event => {
		const action = event.target.dataset.action
		if (!action) {
			return
		}

		if (action === 'increment') {
			setCount(prevCount => prevCount + 1)
		} else if (action === 'decrement') {
			setCount(prevCount => prevCount - 1)
		}
	}

	return (
		<div onClick={handleCount}>
			<h2>Счетчик: {count}</h2>
			<button data-action='increment'>Увеличить +</button>
			<button data-action='decrement'>Уменьшить -</button>
		</div>
	)
}

export default Counter
