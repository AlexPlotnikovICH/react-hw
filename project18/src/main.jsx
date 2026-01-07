import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. Импортируем Router
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css' // Твои глобальные стили

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Оборачиваем всё приложение */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
