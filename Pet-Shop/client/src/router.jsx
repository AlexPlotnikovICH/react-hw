import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { CategoriesPage } from './pages/Categories' // Оставляем только правильный импорт
import { Category } from './pages/Category'
import { Products } from './pages/Products'
import { Product } from './pages/Product'
import { Sale } from './pages/Sale'
import { NotFound } from './pages/NotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* Оставляем только одну строку для страницы категорий */}
        <Route path='categories' element={<CategoriesPage />} />

        <Route path='categories/:id' element={<Category />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='sales' element={<Sale />} />
        <Route path='cart' element={<Cart />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
