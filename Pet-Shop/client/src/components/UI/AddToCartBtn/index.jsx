import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/slices/cartSlice'

export const AddToCartBtn = ({
  product,
  count = 1,
  className,
  stopPropagation = false,
}) => {
  const dispatch = useDispatch()

  // Проверяем, есть ли этот товар уже в корзине
  const cartList = useSelector(state => state.cart.list)
  const isAdded = cartList.some(item => item.id === product.id)

  const handleAddToCart = e => {
    // Если кнопка в карточке, нужно остановить переход на страницу товара
    if (stopPropagation) {
      e.stopPropagation()
      e.preventDefault()
    }

    // Если товар уже добавлен, пока ничего не делаем (или можно вести в корзину)
    if (isAdded) return

    // Добавляем в корзину
    dispatch(addToCart({ ...product, count }))
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={className} // Чтобы можно было двигать через CSS-модули
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '6px',
        fontSize: '20px',
        padding: '16px 32px',
        width: '100%',
        lineHeight: 1,

        // --- ЛОГИКА ЦВЕТОВ ---
        ...(isAdded
          ? {
              // Состояние "Added" (Белая)
              bgcolor: '#FFFFFF',
              color: '#282828',
              border: '1px solid #282828',
              '&:hover': {
                bgcolor: '#FFFFFF', // При наведении остается белой
                borderColor: '#282828',
              },
            }
          : {
              // Состояние "Add to cart" (Синяя)
              bgcolor: '#0D50FF',
              color: '#FFFFFF',
              border: '1px solid #0D50FF', // Чтобы размер не прыгал
              // Состояние Hover (Черная)
              '&:hover': {
                bgcolor: '#282828',
                borderColor: '#282828',
              },
            }),
      }}
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </Button>
  )
}
