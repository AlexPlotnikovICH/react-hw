import React from 'react'
import Header from './Header'
import SignInButton from './SignInButton'
import '../styles/SignInPage.css'

export default function SignInPage() {
	return (
		<main className='sign-page'>
			<img
				src='/src/assets/spotify.svg'
				alt='Spotify'
				className='sign-page__logo'
			/>
			<div className='sign-page__inner'>
				<Header />
				<div className='sign-page__buttons-container'>
					<div className='sign-page__buttons-icons'>
						<img
							src='/src/assets/apple.svg'
							alt=''
							className='sign-page__icon'
						/>
						<img
							src='/src/assets/google.svg'
							alt=''
							className='sign-page__icon'
						/>
						<img src='/src/assets/X.svg' alt='' className='sign-page__icon' />
					</div>
				</div>
			</div>
		</main>
	)
}
