import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

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

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()

  const handleSearch = () => {
    const result = Object.entries(products).find(([key, product]) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (result) {
      const [key, product] = result
      if (product.inStock) {
        setSearchResult({ productId: key, product })
        setNotFound(false)
      } else {
        setSearchResult(null)
        setNotFound(true) // Product not available
      }
    } else {
      setSearchResult(null)
      setNotFound(true) // No product found
    }
  }

  return (
    <div className='home-container'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search for products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {notFound ? (
        <div className='not-found'>
          <img
            src='https://www.shutterstock.com/shutterstock/photos/631953104/display_1500/stock-vector-sorry-vector-sign-on-white-background-631953104.jpg'
            alt='Sorry, not available'
            className='sorry-image'
          />
          <h2>Item Not Available</h2>
          <p>Sorry, the item you are looking for is not available.</p>
          <Link to='/' className='back-to-home'>
            Back to Home
          </Link>
        </div>
      ) : searchResult ? (
        <div className='image-grid'>
          <div className='image-item'>
            <Link to={`/product/${searchResult.productId}`}>
              <img
                src={searchResult.product.image}
                alt={searchResult.product.name}
              />
              <p>{searchResult.product.name}</p>
              <p>{searchResult.product.price}</p>
              <button onClick={() => navigate('/cart')}>Add to Cart</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='image-grid'>
          {Object.entries(products).map(([key, product]) => (
            <div key={key} className='image-item'>
              <Link to={`/product/${key}`}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
