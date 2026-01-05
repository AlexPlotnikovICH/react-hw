import React from 'react'
import fbIcon from '../assets/icons/f.svg'
import twIcon from '../assets/icons/t.svg'
import instaIcon from '../assets/icons/i.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-contacts'>
            <h3>Контакты</h3>
            <p>8 800 000 00 00</p>
            <p>emailexample@email.com</p>
          </div>
          <div className='footer-socials'>
            <img width={24} height={24} src={fbIcon} alt='Facebook' />
            <img width={24} height={24} src={twIcon} alt='Twitter' />
            <img width={24} height={24} src={instaIcon} alt='Instagram' />
          </div>
        </div>
        <div className='footer-bottom'>
          <p className='copyright'>2024 Сникер-магазин. Все права защищены</p>

          <div className='subscribe-block'>
            <span className='subscribe-label'>Введите свой email:</span>
            <input className='subscribe-input' type='email' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
