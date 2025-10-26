import React from 'react'

function CityCard({ city }) {
	if (!city) {
		return <div>Пожалуйста, выберите город</div>
	}

	const cardStyle = {
		border: '1px solid #ccc',
		borderRadius: '8px',
		padding: '20px',
		marginTop: '20px',
		maxWidth: '500px',
	}

	return (
		<div style={cardStyle}>
			<h2>{city.name}</h2>
			<p>{city.description}</p>
			<h4>Интересные факты:</h4>
			<ul>
				{city.facts &&
					city.facts.map((fact, index) => <li key={index}>{fact}</li>)}
			</ul>
		</div>
	)
}

export default CityCard
