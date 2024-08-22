import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext' // Correct path to CartContext
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
