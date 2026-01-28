import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartItem } from '../../components/CartItem'
import { OrderForm } from '../../components/OrderForm'

import styles from './CartPage.module.css'

export const CartPage = () => {
  const cartList = useSelector(state => state.cart.list)

  return (
    // Внешняя обертка (отступ)
    <section className={styles.section}>
      {/* Внутренний контейнер (ширина) */}
      <div className='container'>
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping cart</h1>

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
      </div>
    </section>
  )
}
