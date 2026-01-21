import styles from './Banner.module.css'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>

      {/* Кнопка кидает на sales */}
      <Link to='/sales' className={styles.button}>
        Check out
      </Link>
    </section>
  )
}
