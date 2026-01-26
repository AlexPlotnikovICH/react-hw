import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../../components/ProductCard'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './AllSalesPage.module.css'

export const AllSalesPage = () => {
  const dispatch = useDispatch()
  const { list } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Фильтруем только товары, у которых есть цена со скидкой
  const salesProducts = list.filter(product => product.discont_price !== null)

  // Хлебные крошки
  const salesLinks = [
    { label: 'Main page', url: '/' },
    { label: 'All sales', url: '/all_sales' },
  ]

  return (
    <main className='container'>
      {/* 1. Навигация */}
      <Breadcrumbs links={salesLinks} />

      {/* 2. Заголовок из макета (Discounted items) */}
      <h1 className={styles.title}>Discounted items</h1>

      {/* 3. Сетка товаров */}
      <div className={styles.productList}>
        {salesProducts.length > 0 ? (
          salesProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p>Loading sales...</p>
        )}
      </div>
    </main>
  )
}
