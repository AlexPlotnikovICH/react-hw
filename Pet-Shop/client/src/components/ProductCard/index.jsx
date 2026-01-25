import styles from './ProductCard.module.css'
import { Button } from '../UI/Button'

export const ProductCard = ({ id, title, price, discont_price, image }) => {
  const BASE_URL = 'http://localhost:3333'

  //  Всчитаем процент скидки
  const discountPercent = discont_price
    ? Math.round(((price - discont_price) / price) * 100)
    : 0

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={`${BASE_URL}${image}`} alt={title} className={styles.image} />

        {discont_price && (
          <span className={styles.badge}>-{discountPercent}%</span>
        )}

        <div className={styles.addToCart}>
          <Button variant='blue' size='large'>
            Add to cart
          </Button>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.prices}>
          {discont_price ? (
            /* Если СКИДКА ЕСТЬ: показываем новую цену + старую зачеркнутую */
            <>
              <span className={styles.price}>${discont_price}</span>
              <span className={styles.oldPrice}>${price}</span>
            </>
          ) : (
            /* Если СКИДКИ НЕТ: показываем просто цену */
            <span className={styles.price}>${price}</span>
          )}
        </div>
      </div>
    </div>
  )
}
