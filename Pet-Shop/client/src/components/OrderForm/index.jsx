import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import styles from './OrderForm.module.css'

export const OrderForm = () => {
  const cartList = useSelector(state => state.cart.list)

  // Считаем общую сумму (учитываем скидки)
  const totalPrice = cartList.reduce((sum, item) => {
    const price = item.discont_price ?? item.price
    return sum + price * item.count
  }, 0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log('Order Data:', data)
    // Здесь будет отправка на сервер
  }

  return (
    <div className={styles.orderContainer}>
      <h3 className={styles.title}>Order details</h3>

      {/* Блок информации о количестве и сумме */}
      <div className={styles.infoBlock}>
        <span className={styles.itemsCount}>{cartList.length} items</span>

        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            {...register('name', { required: true })}
            placeholder='Name'
            className={styles.input}
          />
          {errors.name && (
            <span className={styles.error}>Name is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <input
            {...register('phone', { required: true })}
            placeholder='Phone number'
            className={styles.input}
          />
          {errors.phone && (
            <span className={styles.error}>Phone is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <input
            {...register('email', { required: true })}
            placeholder='Email'
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.error}>Email is required</span>
          )}
        </div>

        <button type='submit' className={styles.submitBtn}>
          Order
        </button>
      </form>
    </div>
  )
}
