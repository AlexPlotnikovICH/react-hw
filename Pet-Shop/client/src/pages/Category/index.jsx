import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/slices/categoriesSlice'

export const Category = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // 1. Достаем товары и заголовок категории из Redux
  const products = useSelector(state => state.categories.categoryProducts)
  const categoryTitle = useSelector(state => state.categories.categoryTitle)

  // 2. Как только зашли на страницу — отправляем запрос за данными
  useEffect(() => {
    dispatch(fetchCategory(id))
  }, [dispatch, id])

  return (
    <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px' }}>
      {/* Заголовок категории */}
      <h1>{categoryTitle}</h1>

      {/* Временная сетка для проверки данных */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {products.map(product => (
          <div
            key={product.id}
            style={{ border: '1px solid #ddd', padding: '10px' }}
          >
            {/* Картинка */}
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title}
              style={{ width: '100px' }}
            />
            {/* Название и цена */}
            <p>{product.title}</p>
            <b>${product.price}</b>
          </div>
        ))}
      </div>
    </div>
  )
}
