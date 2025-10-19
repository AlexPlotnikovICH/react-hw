function Card({ itemTitle, isInStock, itemPrice }) {
	// Можно добавить немного логики для стилизации
	const stockStyles = {
		color: isInStock ? 'green' : 'red',
		fontWeight: 'bold',
	}

	return (
		// Родительский div с классом для будущей стилизации
		<div className='product-card'>
			<h3>{itemTitle}</h3>

			{/* Выводим цену. .toFixed(2) - хороший трюк, 
              чтобы цена всегда отображалась с двумя знаками после запятой (например, 99.50)
            */}
			<p>Цена: {itemPrice.toFixed(2)}$</p>

			{/* Используем тернарный оператор для отображения статуса.
              А также применяем наши динамические стили.
            */}
			<p style={stockStyles}>{isInStock ? 'В наличии' : 'Нет в наличии'}</p>
		</div>
	)
}

export default Card
