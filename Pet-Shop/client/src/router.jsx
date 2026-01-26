import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { CategoriesPage } from './pages/Categories'
import { Category } from './pages/Category'
import { AllProductsPage } from './pages/AllProductsPage'
import { Product } from './pages/Product'
import { AllSalesPage } from './pages/AllSalesPage'
import { NotFound } from './pages/NotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='categories/:id' element={<Category />} />
        <Route path='products' element={<AllProductsPage />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='sales' element={<AllSalesPage />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
