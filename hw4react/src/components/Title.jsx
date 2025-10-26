import { useState } from 'react'

function Title() {
	const [title, setTitle] = useState('ТУТ ОТОБРАЖАЕТСЯ ВОДИМЫЙ ТЕКСТ')

	const handleInputChange = event => {
		setTitle(event.target.value)
	}

	return (
		<div>
			<h1>{title}</h1>
			<input type='text' value={title} onChange={handleInputChange} />
		</div>
	)
}

export default Title
