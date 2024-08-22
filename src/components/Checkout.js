import React from 'react'
import './Checkout.css'

const Checkout = () => {
  const handlePayment = (paymentMethod) => {
    // Handle payment logic here
    console.log(`Selected payment method: ${paymentMethod}`)
  }

  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <div className='payment-options'>
        <h2>Select Payment Method:</h2>
        <button onClick={() => handlePayment('Online Payment')}>
          Online Payment (PhonePe, Paytm, etc.)
        </button>
        <button onClick={() => handlePayment('Cash on Delivery')}>
          Cash on Delivery
        </button>
      </div>
    </div>
  )
}

export default Checkout
