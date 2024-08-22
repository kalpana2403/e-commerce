import React from 'react'
import Product from './Product'

const ProductList = ({ products, view }) => {
  return (
    <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
