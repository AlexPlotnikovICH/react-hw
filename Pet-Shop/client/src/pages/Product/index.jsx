import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { fetchCategories } from '../../redux/slices/categoriesSlice'
import { AddToCartBtn } from '../../components/UI/AddToCartBtn'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import styles from './Product.module.css'

export const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state =>
    state.products.list.find(p => p.id === +id),
  )
  const categories = useSelector(state => state.categories.list)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (!product) dispatch(fetchProducts())
    if (categories.length === 0) dispatch(fetchCategories())
  }, [dispatch, product, categories.length])

  const handleDecrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1))
  const handleIncrement = () => setCount(prev => prev + 1)

  if (!product) return <div className='container'>Loading...</div>

  const discountPercent = product.discont_price
    ? Math.round(
        ((product.price - product.discont_price) / product.price) * 100,
      )
    : 0

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
    <section className={styles.section}>
      <div className='container'>
        <Breadcrumbs links={productLinks} />

        <div className={styles.productWrapper}>
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
              {/* СКИДКУ ОТСЮДА УБРАЛИ */}
            </div>
          </div>

          <div className={styles.infoBox}>
            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.priceBlock}>
              {/* 1. Текущая цена (всегда слева) */}
              <span className={styles.currentPrice}>
                ${product.discont_price ?? product.price}
              </span>

              {/* 2. Если есть скидка, рисуем конструкцию "Старая цена + Бейдж" */}
              {product.discont_price && (
                <div className={styles.oldPriceWrapper}>
                  <span className={styles.oldPrice}>${product.price}</span>
                  <div className={styles.discountBadge}>
                    -{discountPercent}%
                  </div>
                </div>
              )}
            </div>

            <div className={styles.actionButtons}>
              <div className={styles.counter}>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <AddToCartBtn
                product={product}
                count={count}
                className={styles.addToCartBtn}
              />
            </div>

            <div className={styles.description}>
              <h4>Description</h4>
              {/* Количество строк теперь 9, как на скрине */}
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
      </div>
    </section>
  )
}
