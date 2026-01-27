import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem'
import { OrderForm } from '../../components/OrderForm'

import styles from './CartPage.module.css'

export const CartPage = () => {
  const cartList = useSelector(state => state.cart.list)

  return (
    <section className='container'>
      <div className={styles.header}>
        <h2 className={styles.title}>Shopping cart</h2>
        <div className={styles.line}></div>
        <Link to='/products' className={styles.backButton}>
          Back to the store
        </Link>
      </div>

      {cartList.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Looks like you have no items in your basket currently.</p>
          <Link to='/products' className={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.cartContent}>
          {/* ЛЕВАЯ КОЛОНКА: Список товаров */}
          <div className={styles.itemsColumn}>
            {/* 2. Проходимся по списку и рисуем карточки */}
            {cartList.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          {/* ПРАВАЯ КОЛОНКА: Форма заказа */}
          <div className={styles.orderColumn}>
            <OrderForm />
          </div>
        </div>
      )}
    </section>
  )
}
