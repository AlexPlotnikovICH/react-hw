import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const firstNameValue = watch('firstName')
  const lastNameValue = watch('lastName')
  const ageValue = watch('age')
  const onSubmit = data => console.log('ФОРМА ОТПРАВЛЕНА', data)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>РЕГИСТРАЦИЯ</h2>
      <div className={styles.formGroup}>
        <label htmlFor='firstName'>Имя:</label>
        <input
          type='text'
          id='firstName'
          {...register('firstName', {
            required: 'Это поле обязательно!',
            minLength: {
              value: 3,
              message: 'Имя должно быть длиннее 2 символов',
            },
          })}
        />
        {errors.firstName && (
          <p className={styles.error}>{errors.firstName.message}</p>
        )}
      </div>
      {firstNameValue && firstNameValue.length > 2 && (
        <div className={styles.formGroup}>
          <label>Фамилия:</label>
          <input
            {...register('lastName', {
              required: 'Фамилия обязательна!',
              minLength: {
                value: 3,
                message: 'Фамилия должна быть длиннее 2 символов',
              },
            })}
          />
          {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
          )}
        </div>
      )}

      {lastNameValue && lastNameValue.length > 2 && (
        <div className={styles.formGroup}>
          <label>Возраст:</label>
          <input
            type='number'
            {...register('age', {
              required: 'Возраст обязателен!',
              min: { value: 18, message: 'Вам должно быть 18+' },
            })}
          />
          {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        </div>
      )}

      {ageValue && ageValue > 17 && (
        <div className={styles.formGroup}>
          <label>Город:</label>
          <input {...register('city')} />
        </div>
      )}
      <button type='submit' className={styles.button}>
        ОТПРАВИТЬ
      </button>
    </form>
  )
}

export default DynamicForm
