import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { ProductCard } from '../../components/ProductCard'
import { FilterBar } from '../../components/FilterBar'
import styles from './AllProductsPage.module.css'

export const AllProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.list)

  // --- ЛОКАЛЬНЫЙ СТЕЙТ ФИЛЬТРОВ ---
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('default')
  const [isDiscounted, setIsDiscounted] = useState(false)

  // Загружаем товары, если их нет
  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  // --- ЛОГИКА ФИЛЬТРАЦИИ И СОРТИРОВКИ ---

  // 1. Сначала фильтруем
  const filteredProducts = products
    .filter(product => {
      // Определяем реальную цену (со скидкой или без)
      const currentPrice = product.discont_price ?? product.price

      // Фильтр по цене "От"
      if (minPrice && currentPrice < +minPrice) return false

      // Фильтр по цене "До"
      if (maxPrice && currentPrice > +maxPrice) return false

      // Фильтр "Только со скидкой" (чекбокс)
      if (isDiscounted && !product.discont_price) return false

      return true
    })
    // 2. Потом сортируем отфильтрованное
    .sort((a, b) => {
      const priceA = a.discont_price ?? a.price
      const priceB = b.discont_price ?? b.price

      if (sort === 'newest') {
        // Считаем, что чем больше ID, тем новее товар
        return b.id - a.id
      }
      if (sort === 'price-high-low') {
        return priceB - priceA
      }
      if (sort === 'price-low-high') {
        return priceA - priceB
      }
      // 'default' - сортировка как пришла с сервера (обычно по id asc)
      return a.id - b.id
    })

  // --- ОБРАБОТЧИКИ (HANDLERS) ---

  const handlePriceChange = (type, value) => {
    // Разрешаем вводить только положительные числа
    if (value < 0) return
    if (type === 'min') setMinPrice(value)
    if (type === 'max') setMaxPrice(value)
  }

  return (
    <section className='container'>
      <h2 className={styles.title}>All products</h2>

      {/* Передаем стейты и функции управления в FilterBar */}
      <FilterBar
        minPrice={minPrice}
        maxPrice={maxPrice}
        sort={sort}
        isDiscounted={isDiscounted}
        onPriceChange={handlePriceChange}
        onSortChange={setSort}
        onDiscountChange={setIsDiscounted}
        showDiscount={true} // чекбокс нужен
      />

      <div className={styles.productList}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
