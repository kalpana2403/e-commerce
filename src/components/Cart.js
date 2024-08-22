import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import './Cart.css' // Import the cart context

const Cart = () => {
  const { cart } = useCart()

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>
                {item.name} - {item.price}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <Link to='/checkout'>Proceed to Checkout</Link>
    </div>
  )
}

export default Cart
