import { Link } from 'react-router-dom'
import styles from './Sale.module.css'

import img1 from '../../assets/images/dry-dog-food.png'
import img2 from '../../assets/images/smart-cat-tray.png'
import img3 from '../../assets/images/dog-bed.png'
import img4 from '../../assets/images/laser-cat-toy.png'

export const Sale = () => {
  // Данные
  const list = [
    {
      id: 1,
      title: 'Dry Dog Food for Adult',
      price: 80,
      oldPrice: 100, // Скидка будет 20%
      image: img1,
    },
    {
      id: 2,
      title: 'Ultra Cat Litter Tray Self',
      price: 450,
      oldPrice: 600,
      image: img2,
    },
    {
      id: 3,
      title: 'Black Dog Bed, Large',
      price: 50,
      oldPrice: 150,
      image: img3,
    },
    {
      id: 4,
      title: 'Cat Toy with Real Random',
      price: 25,
      oldPrice: 50,
      image: img4,
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.line}></div>
        <Link to='/sales' className={styles.btn}>
          All sales
        </Link>
      </div>

      <div className={styles.list}>
        {list.map(item => {
          // 1. Считаем разницу
          const diff = item.oldPrice - item.price
          // 2. Считаем процент и округляем
          const discountPercent = Math.round((diff / item.oldPrice) * 100)

          return (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className={styles.card}
            >
              {/* Стикер скидки */}
              <div className={styles.discountBadge}>-{discountPercent}%</div>

              <img src={item.image} alt={item.title} className={styles.image} />

              <div className={styles.info}>
                <p className={styles.productTitle}>{item.title}</p>
                <div className={styles.prices}>
                  <span className={styles.currentPrice}>${item.price}</span>
                  <span className={styles.oldPrice}>${item.oldPrice}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
