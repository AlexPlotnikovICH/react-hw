import React from 'react'
import styles from './Home.module.css'

import Card from '../components/Card/Card'
import data from '../assets/data'
import bannerImg from '../assets/banner.png'

function Home({ onAddToCart }) {
  return (
    <div className={styles.content}>
      <img className={styles.banner} src={bannerImg} alt='Banner' />

      <h1 className={styles.title}>Все кроссовки</h1>

      <div className={styles.sneakersGrid}>
        {data.map((item, index) => (
          <Card
            key={item.id || index}
            name={item.name}
            price={item.price}
            image={item.image}
            onClickPlus={() => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
