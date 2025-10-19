import { useState } from 'react'
import Button from './Button'

import stars5 from '../assets/picture/stars-5.png'
const ratingList = [
	stars5,
	'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
	'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
	'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
]
function Rating() {
	const [ratingValue, setRatingValue] = useState(0)

	return (
		<div className='card'>
			<h2>Как вам наше приложение?</h2>
			<img src={ratingList[ratingValue]} alt='рейтинг' />

			<div>
				{/* Теперь кнопки соответствуют индексам в массиве */}
				<Button onClick={() => setRatingValue(0)}>Отлично</Button>
				<Button onClick={() => setRatingValue(1)}>Хорошо</Button>
				<Button onClick={() => setRatingValue(2)}>Приемлемо</Button>
				<Button onClick={() => setRatingValue(3)}>Плохо</Button>
			</div>
		</div>
	)
}

export default Rating
