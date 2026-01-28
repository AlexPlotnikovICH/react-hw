import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../../components/ProductCard'
import { FilterBar } from '../../components/FilterBar'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './AllProductsPage.module.css'

export const AllProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.list)

  // ... (Стейты фильтров) ...
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('default')
  const [isDiscounted, setIsDiscounted] = useState(false)

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  // ... (Логика фильтрации ) ...
  const filteredProducts = products
    .filter(product => {
      const currentPrice = product.discont_price ?? product.price
      if (minPrice && currentPrice < +minPrice) return false
      if (maxPrice && currentPrice > +maxPrice) return false
      if (isDiscounted && !product.discont_price) return false
      return true
    })
    .sort((a, b) => {
      const priceA = a.discont_price ?? a.price
      const priceB = b.discont_price ?? b.price
      if (sort === 'newest') return b.id - a.id
      if (sort === 'price-high-low') return priceB - priceA
      if (sort === 'price-low-high') return priceA - priceB
      return a.id - b.id
    })

  const handlePriceChange = (type, value) => {
    if (value < 0) return
    if (type === 'min') setMinPrice(value)
    if (type === 'max') setMaxPrice(value)
  }

  const breadcrumbLinks = [
    { label: 'Main page', url: '/' },
    { label: 'All products', url: '/products' },
  ]

  return (
    <section className={styles.section}>
      <div className='container'>
        <Breadcrumbs links={breadcrumbLinks} />

        <h1 className='page-title'>All products</h1>

        <FilterBar
          minPrice={minPrice}
          maxPrice={maxPrice}
          sort={sort}
          isDiscounted={isDiscounted}
          onPriceChange={handlePriceChange}
          onSortChange={setSort}
          onDiscountChange={setIsDiscounted}
          showDiscount={true}
        />

        <div className={styles.productList}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
