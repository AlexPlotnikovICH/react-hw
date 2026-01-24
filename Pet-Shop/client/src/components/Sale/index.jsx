import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Sale.module.css'
import { ProductCard } from '../ProductCard'
import { fetchProducts } from '../../redux/slices/productsSlice'

export const Sale = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.list)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

// Фильтруем товары со скидкой, перемешиваем их в случайном порядке и берем 4 штуки
  // создаем копию, чтобы не злить Redux
  // сортируем копию и отрезаем 4 штуки
  const saleList = [...products]
    .filter(item => item.discont_price !== null)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

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
        {saleList.map((item) => (
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