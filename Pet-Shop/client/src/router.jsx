import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Categories } from './pages/Categories'
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

        <Route path='cart' element={<Cart />} />
        <Route path='categories' element={<Categories />} />
        <Route path='categories/:id' element={<Category />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='sales' element={<Sale />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
