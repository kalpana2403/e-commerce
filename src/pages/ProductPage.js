import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext' // Correct path to CartContext
import './ProductPage.css' // Import CSS file for ProductPage

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  // Sample data for products
  const products = {
    1: {
      name: 'Camera',
      image:
        'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg',
      price: '$1200',
      inStock: true,
    },
    2: {
      name: 'Television',
      image: 'https://m.media-amazon.com/images/I/31aDWE4msZL.jpg',
      price: '$800',
      inStock: true,
    },
    3: {
      name: 'Mobile Phone',
      image:
        'http://5.imimg.com/data5/SELLER/Default/2023/3/296178265/EX/FQ/OZ/186724856/vivo-mobile-phone.jpg',
      price: '$600',
      inStock: true,
    },
  }

  const product = products[id]

  if (!product) {
    return <h2>Product not found</h2>
  }

  const handleAddToCart = () => {
    addToCart(product)
    navigate('/cart') // Redirect to cart after adding product
  }

  return (
    <div className='product-page'>
      <img src={product.image} alt={product.name} className='product-image' />
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      {product.inStock && (
        <button className='add-to-cart-button' onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default ProductPage
