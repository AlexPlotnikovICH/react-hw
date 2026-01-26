import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../../components/ProductCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './AllProductsPage.module.css'
export const AllProductsPage = () => {
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Данные для хлебных крошек
  const productLinks = [
    { label: 'Main page', url: '/' },
    { label: 'All products', url: '/products' },
  ]

  return (
    <main className='container'>
      {/* Передаем данные именно в пропс links */}
      <Breadcrumbs links={productLinks} />

      <h1 className={styles.title}>All products</h1>

      <div className={styles.productList}>
        {list.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  )
}
