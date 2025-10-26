import { useState } from 'react'

const images = [
	'https://aif-s3.aif.ru/images/026/767/18ee0165f11ea8442c26f62fdad19c45.jpg',
	'https://kinoreporter.ru/wp-content/uploads/2022/09/6.jpg',
	'https://cdn.kanobu.ru/articles/pics/d2926e6d-ed62-4a7d-8bc1-c1b6c21625de.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWu4dJcTud_KK7wWIeXClAbll0cSAEDg3m6A&s',
]
function ImageCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const showNextImage = () => {
		const nextIndex = (currentIndex + 1) % images.length
		setCurrentIndex(nextIndex)
	}
	const carouselStyle = {
		textAlign: 'center',
		marginTop: '30px',
		border: '1px solid #ccc',
		padding: '20px',
		borderRadius: '10px',
	}
	const imageStyle = {
		maxWidth: '100%',
		height: 'auto',
		marginBottom: '15px',
	}

	return (
		<div style={carouselStyle}>
			<h2>Карусель изображений</h2>
			<img
				src={images[currentIndex]}
				alt={`Slide ${currentIndex + 1}`}
				style={imageStyle}
			/>
			<button onClick={showNextImage}>Следующее изображение</button>
		</div>
	)
}

export default ImageCarousel
