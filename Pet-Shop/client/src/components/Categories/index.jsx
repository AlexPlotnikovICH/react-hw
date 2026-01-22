import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Categories.module.css'

import foodImg from '../../assets/images/food.png'
import traysImg from '../../assets/images/trays.png'
import bedsImg from '../../assets/images/beds.png'
import toysImg from '../../assets/images/toys.png'

export const Categories = () => {
  const categoriesList = [
    { id: 1, title: 'Dry & Wet Food', image: foodImg, link: '/categories/1' },
    {
      id: 2,
      title: 'Litter Boxes & Litter Trays',
      image: traysImg,
      link: '/categories/2',
    },
    { id: 3, title: 'Baskets & Beds', image: bedsImg, link: '/categories/3' },
    { id: 4, title: 'Toys', image: toysImg, link: '/categories/4' },
  ]

  const [list] = useState(() => {
    return [...categoriesList].sort(() => Math.random() - 0.5)
  })

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Categories</h2>

        <div className={styles.line}></div>

        <Link to='/categories' className={styles.btn}>
          All categories
        </Link>
      </div>

      <div className={styles.list}>
        {list.map(item => (
          <Link to={item.link} key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <p className={styles.categoryTitle}>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
