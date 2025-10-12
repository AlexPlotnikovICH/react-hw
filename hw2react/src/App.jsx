import './App.css'
import Greeting from './components/Greeting'
import ShoppingList from './components/ShoppingList'
import OrderStatus from './components/OrderStatus.jsx'
import ShowCalc from './components/ShowCalc.jsx'
import CarList from './components/CarList.jsx'
import RandomPhrase from './components/RandomPhrase'
import Content from './components/Content.jsx'
import Card from './components/Card'

// import { v4 as uuidv4 } from 'uuid'

function App() {
	const shoppingItems = ['Доширак', 'Молоко', 'дорогой кошачий корм', 'Молоко']
	const emptyItems = []
	const orders = [
		{ orderId: 2012, status: 'доставлен' },
		{ orderId: 3031, status: 'в пути' },
		{ orderId: 3077, status: 'обработан' },
		{ orderId: 4069, status: 'доставлен' },
	]
	return (
		<>
			<Greeting name=' Алекс' />
			<hr />
			{/* Вызываем компонент с полным списком */}
			<ShoppingList items={shoppingItems} />

			<hr />
			<ShoppingList items={emptyItems} />
			<hr />

			<h2>статусы заказов</h2>
			{orders.map(order => (
				<OrderStatus
					key={order.orderId}
					orderId={order.orderId}
					status={order.status}
				/>
			))}

			<hr />
			<ShowCalc />
			<hr />
			<ShoppingList />
			<hr />
			<CarList />
			<hr />
			<RandomPhrase />
			<hr />
			<h1>деструктуризированные котяты</h1>
			<Content
				titleText='cat1'
				paragraphText='photo1'
				imgSrc='public/1cat.jpeg'
			/>
			<Content
				titleText='cat2'
				paragraphText='photo2'
				imgSrc='public/2cat.jpeg'
			/>
			<Content
				titleText='cat3'
				paragraphText='photo3'
				imgSrc='public/3cat.jpeg'
			/>
			<hr />
			<h1>может все продать и отпраиться в круиз!?</h1>

			<Card itemTitle='Смартфон Pixel 8' itemPrice={799.99} isInStock={true} />

			<Card
				itemTitle='Ноутбук Acer Predator'
				itemPrice={1999.5}
				isInStock={true}
			/>

			<Card itemTitle='Kindle (2024)' itemPrice={170.0} isInStock={false} />
			<hr />
		</>
	)
}

export default App
