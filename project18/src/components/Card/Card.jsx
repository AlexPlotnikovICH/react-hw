import React from 'react'
import styles from './Card.module.css'

import plusIcon from '../../assets/icons/btn-plus.svg'
import checkedIcon from '../../assets/icons/btn-checked.svg'

// Мы деструктурируем пропсы сразу: image, name, price, onClickPlus
function Card({ image, name, price, onClickPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)

  const handleClickPlus = () => {
    onClickPlus() // Сообщаем родителю (App), что нажали
    setIsAdded(!isAdded) // Инвертируем: было false -> стало true
  }

  return (
    <div className={styles.card}>
      {/* Картинка тов*/}
      <img className={styles.image} src={image} alt='Sneakers' />

      {/* Название */}
      <h5 className={styles.title}>{name}</h5>

      {/* Нижняя часть: Цена и Кнопка */}
      <div className={styles.bottom}>
        <div className={styles.priceBlock}>
          <span className={styles.priceTitle}>Цена:</span>
          <b className={styles.priceValue}>{price} €</b>
        </div>

        <img
          className={styles.plus}
          onClick={handleClickPlus}
          src={isAdded ? checkedIcon : plusIcon}
          alt='Plus'
        />
      </div>
    </div>
  )
}

export default Card
