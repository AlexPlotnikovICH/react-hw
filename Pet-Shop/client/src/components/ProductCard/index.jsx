import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AddToCartBtn } from '../UI/AddToCartBtn'
import styles from './ProductCard.module.css'

export const ProductCard = ({ id, title, price, discont_price, image }) => {
  const navigate = useNavigate()
  const imageUrl = `http://localhost:3333${image}`

  const discountPercent = discont_price
    ? Math.round(((price - discont_price) / price) * 100)
    : 0

  const handleCardClick = () => {
    navigate(`/products/${id}`)
  }

  // Данные для кнопки
  const productData = { id, title, price, discont_price, image }

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />

        {discont_price && (
          <span className={styles.badge}>-{discountPercent}%</span>
        )}

        {/* --- Обертка для позиционирования --- */}
        <div className={styles.overlay}>
          <AddToCartBtn
            product={productData}
            stopPropagation={true}
            className={styles.cartBtn}
          />
        </div>
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
