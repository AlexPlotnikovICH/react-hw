import React from 'react'

function Header() {
  return (
    <header className='header'>
      <div className='container header-inner'>
        <div className='header-left'>
          <h3>Сникер - магазин</h3>
        </div>

        <ul className='header-right'>
          <li>Главная</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
