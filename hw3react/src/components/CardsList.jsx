import TeamCard from './TeamCard'
import '../styles/CardsList.css'

function CardsList({ teams }) {
	return (
		<div className='cards-list-container'>
			{teams.map(team => (
				<TeamCard key={team.name} team={team} />
			))}
		</div>
	)
}

export default CardsList
