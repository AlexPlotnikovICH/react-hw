import { useState } from 'react'
import Button from './Button'

const initialPeople = [
	{ id: 1, name: 'Иван', age: 40 },
	{ id: 2, name: 'Мария', age: 42 },
	{ id: 3, name: 'Алексей', age: 41 },
	{ id: 4, name: 'Марина', age: 39 },
	{ id: 5, name: 'Даша', age: 43 },
	{ id: 6, name: 'Глеб', age: 34 },
	{ id: 7, name: 'Дима', age: 38 },
	{ id: 8, name: 'Гриша', age: 30 },
	{ id: 9, name: 'Серафим (/КТО!?!)', age: 38 },
]

function List() {
	const [people, setPeople] = useState(initialPeople)

	const handleDelete = id => {
		// Создаем новый массив, в котором нет человека с переданным id
		const newPeople = people.filter(person => person.id !== id)
		// Обновляем состояние
		setPeople(newPeople)
	}

	return (
		<div className='card'>
			<h2>Список приглашенных ({people.length})</h2>
			<ul>
				{people.map(person => (
					<li key={person.id}>
						<span>
							{person.name}, {person.age} лет
						</span>
						<Button onClick={() => handleDelete(person.id)}>Удалить</Button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default List
