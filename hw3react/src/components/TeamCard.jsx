import '../styles/TeamCard.css'

function TeamCard({ team }) {
	return (
		<div className='team-card'>
			<h2>{team.name}</h2>
			<ul>
				{team.members.map(member => (
					<li key={member}>{member}</li>
				))}
			</ul>
		</div>
	)
}

export default TeamCard
