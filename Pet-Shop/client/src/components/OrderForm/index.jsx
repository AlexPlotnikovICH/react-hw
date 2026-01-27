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

  // Считаем итоговую сумму
  const totalPrice = cartList.reduce((sum, item) => {
    const price = item.discont_price ?? item.price
    return sum + price * item.count
  }, 0)

  // Настройка формы и валидации
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  // Функция отправки данных
  const onSubmit = async data => {
    // Формируем объект заказа для бэкенда
    const orderData = {
      ...data, // name, phone, email
      items: cartList,
      total: totalPrice,
    }

    try {
      // Отправляем реальный запрос
      const response = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      // Если сервер ответил ОК
      if (result.status === 'OK' || response.ok) {
        setIsModalOpen(true) // Показываем модальное окно
        reset() // Очищаем поля формы (но не корзину!)
      }
    } catch (error) {
      console.error('Error sending order:', error)
      // Здесь можно добавить обработку ошибок (например, alert)
    }
  }

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Очищаем корзину ТОЛЬКО после закрытия окна,
    // чтобы компонент не удалился раньше, чем пользователь прочитает сообщение
    dispatch(clearCart())
  }

  return (
    <div className={styles.orderContainer}>
      <h3 className={styles.title}>Order details</h3>

      {/* Информация о заказе */}
      <div className={styles.infoBlock}>
        <span className={styles.itemsCount}>{cartList.length} items</span>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Input Name */}
        <div className={styles.inputWrapper}>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder='Name'
            className={styles.input}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        {/* Input Phone */}
        <div className={styles.inputWrapper}>
          <input
            {...register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9]+$/, // Только цифры
                message: 'Only digits are allowed',
              },
              minLength: {
                value: 10, // Минимум 10 цифр
                message: 'Minimum 10 digits',
              },
            })}
            placeholder='Phone number'
            className={styles.input}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        {/* Input Email */}
        <div className={styles.inputWrapper}>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                // проверка на email
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder='Email'
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <button type='submit' className={styles.submitBtn}>
          Order
        </button>
      </form>

      {/* Модальное окно */}
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
