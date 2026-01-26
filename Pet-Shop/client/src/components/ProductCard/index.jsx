import React from 'react'
import { useNavigate } from 'react-router-dom' // Используем хук вместо Link
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import styles from './ProductCard.module.css'

export const ProductCard = ({ id, title, price, discont_price, image }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate() // Хук для навигации
  const imageUrl = `http://localhost:3333${image}`

  const discountPercent = discont_price
    ? Math.round(((price - discont_price) / price) * 100)
    : 0

  // Клик по всей карточке -> переходим на страницу товара
  const handleCardClick = () => {
    navigate(`/products/${id}`)
  }

  // Клик по кнопке -> добавляем в корзину (и НЕ переходим на страницу)
  const handleAddToCart = e => {
    e.stopPropagation() // Останавливаем всплытие, чтобы не сработал клик по карточке
    dispatch(addToCart({ id, title, price, discont_price, image, count: 1 }))
    console.log('Added from card:', title)
  }

  return (
    // Вернули DIV, стили снова работают правильно
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />

        {discont_price && (
          <span className={styles.badge}>-{discountPercent}%</span>
        )}

        {/* Кнопка внутри div валидна и не ломает верстку */}
        <button className={styles.addToCart} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.prices}>
          <span className={styles.price}>${discont_price ?? price}</span>
          {discont_price && <span className={styles.oldPrice}>${price}</span>}
        </div>
      </div>
    </div>
  )
}
