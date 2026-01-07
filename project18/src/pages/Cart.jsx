import React from 'react'
import styles from './Cart.module.css'
import removeIcon from '../assets/icons/btn-remove.svg'

function Cart({ items = [], onRemove }) {
  // Считаем общую сумму
  const totalPrice = items.reduce((sum, obj) => sum + Number(obj.price), 0)

  return (
    <div className={styles.content}>
      <h1 className='page-title'>Корзина</h1>

      <div className={styles.cartWrapper}>
        {/* ЛЕВАЯ ЧАСТЬ: Товары */}
        <div className={styles.cartItems}>
          {items.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img
                className={styles.cartItemImg}
                src={item.image}
                alt='Sneaker'
              />

              <div className={styles.cartItemInfo}>
                <p className={styles.cartItemTitle}>{item.name}</p>
                <b className={styles.cartItemPrice}>{item.price} €</b>
              </div>

              <img
                onClick={() => onRemove(item.id)}
                className={styles.removeBtn}
                src={removeIcon}
                alt='Remove'
              />
            </div>
          ))}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Итого (КАК НА СКРИНЕ) */}
        <div className={styles.totalBlock}>
          <h3 className={styles.totalTitle}>Итого</h3>

          {/* Список названий кроссовок */}
          <div className={styles.totalList}>
            {items.map((item, index) => (
              <span key={index} className={styles.totalItemName}>
                {item.name}
              </span>
            ))}
          </div>

          {/* Линия */}
          <div className={styles.separator}></div>

          {/* Цена */}
          <div className={styles.priceInfo}>
            <div className={styles.priceLabel}>Цена:</div>
            <b className={styles.totalPrice}>{totalPrice} €</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
