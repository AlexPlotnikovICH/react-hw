import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import { clearCart } from '../../redux/slices/cartSlice'
import styles from './OrderForm.module.css'

export const OrderForm = () => {
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cart.list)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalPrice = cartList.reduce((sum, item) => {
    const price = item.discont_price ?? item.price
    return sum + price * item.count
  }, 0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    const orderData = {
      ...data,
      items: cartList,
      total: totalPrice,
    }

    try {
      const response = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (result.status === 'OK' || response.ok) {
        setIsModalOpen(true)
        reset()
      }
    } catch (error) {
      console.error('Error sending order:', error)
    }
  }

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false)
    dispatch(clearCart()) // <--- ОЧИЩАЕМ КОРЗИНУ ТОЛЬКО ЗДЕСЬ (при закрытии)
  }

  return (
    <div className={styles.orderContainer}>
      <h3 className={styles.title}>Order details</h3>

      <div className={styles.infoBlock}>
        <span className={styles.itemsCount}>{cartList.length} items</span>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

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

      <Modal isActive={isModalOpen} onClose={handleCloseModal}>
        <h3 className={styles.modalTitle}>Congratulations!</h3>
        <p className={styles.modalText}>
          Your order has been successfully placed on the website.
        </p>
        <p className={styles.modalText}>
          A manager will contact you shortly to confirm your order.
        </p>
      </Modal>
    </div>
  )
}
