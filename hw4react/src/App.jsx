import { useState } from 'react'
import './App.css'
import EventComponent from './components/EventComponent.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'
import ImageCarousel from './components/ImageCarousel.jsx'
import Title from './components/Title.jsx'
import Counter from './components/Counter.jsx'
import CitySelector from './components/CitySelector.jsx'
import CityCard from './components/CityCard.jsx'
import tokyoBg from './assets/tokio-1024x576.jpg'
import MathQuiz from './components/MathQuiz.jsx'

function App() {
	const hallo = item => {
		console.log('ты выбрал ' + item + '!')
	}
	const fruits = ['яблоко', 'банан', 'апельсин']
	const handMouse = () => {
		console.log('Наведение мыши')
	}
	const boxStyle = {
		width: '100px',
		height: '100px',
		backgroundColor: 'lightblue',
		marginTop: '20px',
	}
	const [selectedCity, setSelectedCity] = useState(null)

	const handleCityChange = cityData => {
		setSelectedCity(cityData)
	}

	const citySectionStyle = {
		backgroundImage: `url(${tokyoBg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		padding: '20px',
		borderRadius: '15px',
		color: 'white',
		textShadow: '1px 1px 3px black',
	}

	return (
		<>
			<div style={citySectionStyle}>
				<h1>City Cards</h1>
				<CitySelector onCityChange={handleCityChange} />
				<CityCard city={selectedCity} />
			</div>
			<hr />
			<MathQuiz />
			<hr />
			<h3>выбери фрукт:</h3>
			{fruits.map(fruit => (
				<button key={fruit} onClick={() => hallo(fruit)}>
					{fruit}
				</button>
			))}
			<button onClick={hallo}>ЖМЯКНИ для логирования</button>
			<div onMouseOver={handMouse} style={boxStyle}>
				счетчик наведения курсора
			</div>
			<hr />
			<EventComponent />
			<hr />
			<FeedbackForm />
			<hr />
			<Counter />
			<hr />
			<Title />
			<hr />
			<ImageCarousel />
		</>
	)
}

export default App
