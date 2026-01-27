import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  decreaseCount,
  increaseCount,
  deleteFromCart,
} from '../../redux/slices/cartSlice'
import styles from './CartItem.module.css'

export const CartItem = ({ id, title, image, price, discont_price, count }) => {
  const dispatch = useDispatch()
  const imageUrl = `http://localhost:3333${image}`

  // 1. Считаем цену за ОДНУ штуку (со скидкой или без)
  const unitPrice = discont_price ?? price

  // 2. Считаем ИТОГОВУЮ цену для всей позиции (Цена x Количество)
  const totalPrice = unitPrice * count

  // 3. Считаем СТАРУЮ итоговую цену (если есть скидка)
  const totalOldPrice = price * count

  return (
    <div className={styles.cartItem}>
      {/* Картинка */}
      <Link to={`/products/${id}`} className={styles.imageLink}>
        <img src={imageUrl} alt={title} />
      </Link>

      <div className={styles.infoWrapper}>
        {/* Верх: Название и Крестик */}
        <div className={styles.header}>
          <Link to={`/products/${id}`} className={styles.title}>
            {title}
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(deleteFromCart(id))}
          >
            ✕
          </button>
        </div>

        {/* Низ: Счетчик и Цены */}
        <div className={styles.footer}>
          <div className={styles.counter}>
            <button onClick={() => dispatch(decreaseCount(id))}>−</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increaseCount(id))}>+</button>
          </div>

          <div className={styles.priceBlock}>
            {/* Показываем умноженную цену */}
            <span className={styles.currentPrice}>${totalPrice}</span>

            {/* Если была скидка, показываем старую умноженную цену */}
            {discont_price && (
              <span className={styles.oldPrice}>${totalOldPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
