function EventComponent() {
	const handleSingleClick = () => {
		console.log('одиночный клик')
	}

	const handleDoubleClick = () => {
		console.log('двойной клик')
	}
	const onMouseDown = () => {
		console.log('кнопка зажата')
	}
	const onMouseUp = () => {
		console.log('кнопка отпущена')
	}
	const onMouseEnter = () => {
		console.log('мышка попалась')
	}
	const onMouseLeave = () => {
		console.log('мышка сбежала')
	}
	const onMouseMove = () => {
		console.log('мышка двигается')
	}
	return (
		<>
			<h2 onClick={handleSingleClick}>Кликни меня (одиночный клик)</h2>
			<h2 onDoubleClick={handleDoubleClick}>Кликни меня (двойной клик)</h2>
			<h2 onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
				Нажми и держи эту кнопку
			</h2>
			<h2 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				Наведи - Отведи
			</h2>
			<h2 onMouseMove={onMouseMove}>Двигай мышкой здесь</h2>
		</>
	)
}

export default EventComponent
