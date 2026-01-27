import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Discount.module.css'
import petsImg from '../../assets/images/discount-pets.png'

export const Discount = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.status === 'OK' || response.ok) {
        setIsSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error('Error sending discount request:', error)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>5% off on the first order</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={petsImg} alt='Pets' className={styles.image} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* NAME */}
            <div className={styles.inputWrapper}>
              <input
                {...register('name', { required: true })}
                type='text'
                placeholder='Name'
                // 2. ПРИМЕНЯЕМ КЛАСС ОШИБКИ
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              />
            </div>

            {/* PHONE */}
            <div className={styles.inputWrapper}>
              <input
                {...register('phone', {
                  required: true,
                  pattern: /^[0-9]+$/,
                  minLength: 10,
                })}
                type='tel'
                placeholder='Phone number'
                // 2. ПРИМЕНЯЕМ КЛАСС ОШИБКИ
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              />
            </div>

            {/* EMAIL */}
            <div className={styles.inputWrapper}>
              <input
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type='email'
                placeholder='Email'
                // 2. ПРИМЕНЯЕМ КЛАСС ОШИБКИ
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
            </div>

            {isSubmitted ? (
              <button
                type='button'
                className={`${styles.btn} ${styles.btnSubmitted}`}
              >
                Request Submitted
              </button>
            ) : (
              <button type='submit' className={styles.btn}>
                Get a discount
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
