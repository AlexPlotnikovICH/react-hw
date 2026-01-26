import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { addToCart } from '../../redux/slices/cartSlice' // 1. Импорт экшена корзины
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './Product.module.css'

export const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // Данные из Redux
  const product = useSelector(state =>
    state.products.list.find(p => p.id === +id),
  )
  const categories = useSelector(state => state.categories.list)

  // Локальные состояния
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [count, setCount] = useState(1) // 2. Состояние счетчика (по умолчанию 1 шт)

  useEffect(() => {
    if (!product) dispatch(fetchProducts())
    if (categories.length === 0) dispatch(fetchCategories())
  }, [dispatch, product, categories.length])

  // --- ЛОГИКА КНОПОК ---

  // Уменьшить количество (не меньше 1)
  const handleDecrement = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }

  // Увеличить количество
  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  // Добавить в корзину
  const handleAddToCart = () => {
    // Отправляем товар + текущее количество "count"
    dispatch(addToCart({ ...product, count }))
    // Можно добавить alert или toast, что товар добавлен
    console.log('Added to cart:', product.title, count, 'pcs')
  }

  // --- РЕНДЕР ---

  if (!product) return <div className='container'>Loading...</div>

  const currentCategory = categories.find(c => c.id === product.categoryId)

  const productLinks = [
    { label: 'Main page', url: '/' },
    { label: 'Categories', url: '/categories' },
    ...(currentCategory
      ? [
          {
            label: currentCategory.title,
            url: `/categories/${currentCategory.id}`,
          },
        ]
      : []),
    { label: product.title, url: `/products/${id}` },
  ]

  const imageUrl = `http://localhost:3333${product.image}`

  return (
    <section className='container'>
      <Breadcrumbs links={productLinks} />

      <div className={styles.productWrapper}>
        {/* Галерея */}
        <div className={styles.imageBox}>
          <div className={styles.thumbnails}>
            <div className={styles.thumbItem}>
              <img src={imageUrl} alt='preview' />
            </div>
            <div className={styles.thumbItem}>
              <img src={imageUrl} alt='preview' />
            </div>
            <div className={styles.thumbItem}>
              <img src={imageUrl} alt='preview' />
            </div>
          </div>
          <div className={styles.mainImage}>
            <img src={imageUrl} alt={product.title} />
          </div>
        </div>

        {/* Контент */}
        <div className={styles.infoBox}>
          <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.priceBlock}>
            <span className={styles.currentPrice}>
              ${product.discont_price ?? product.price}
            </span>
            {product.discont_price && (
              <span className={styles.oldPrice}>${product.price}</span>
            )}
          </div>

          <div className={styles.actionButtons}>
            {/* 3. Привязываем логику к кнопкам */}
            <div className={styles.counter}>
              <button onClick={handleDecrement}>-</button>
              <span>{count}</span>
              <button onClick={handleIncrement}>+</button>
            </div>

            <button onClick={handleAddToCart} className={styles.addToCartBtn}>
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h4>Description</h4>
            <p
              className={
                isDescriptionOpen ? styles.textExpanded : styles.textCollapsed
              }
            >
              {product.description}
            </p>
            <div
              className={styles.readMore}
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              {isDescriptionOpen ? 'Show less' : 'Read more'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
