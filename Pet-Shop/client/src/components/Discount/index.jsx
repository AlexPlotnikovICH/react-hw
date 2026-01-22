import styles from './Discount.module.css'
import petsImg from '../../assets/images/discount-pets.png'

export const Discount = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Discount request sent')
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>5% off on the first order</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={petsImg} alt='Pets' className={styles.image} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' className={styles.input} />
            <input
              type='tel'
              placeholder='Phone number'
              className={styles.input}
            />
            <input type='email' placeholder='Email' className={styles.input} />

            <button type='submit' className={styles.btn}>
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
