import React from 'react'
import '../styles/SignInButton.css'

export default function SignInButton({ icon, label, onClick }) {
	return (
		<button className='signin-btn' onClick={onClick}>
			{icon && <img className='signin-btn__icon' src={icon} alt='' />}
			<span className='signin-btn__label'>{label}</span>
		</button>
	)
}
