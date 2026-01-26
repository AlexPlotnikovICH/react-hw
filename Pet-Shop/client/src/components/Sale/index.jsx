import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Sale.module.css'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../ProductCard'
import { SectionHeaderLine } from '../UI/SectionHeaderLine'

export const Sale = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.list)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const list = products
    .filter(item => item.discont_price)
    .slice(0, 4)

  return (
    <section className={styles.section}>
      {/* универсальный компонент */}
      <SectionHeaderLine 
        title="Sale" 
        btnText="All sales" 
        btnLink="/sales" 
      />

      <div className={styles.list}>
        {list.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            discont_price={item.discont_price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  )
}