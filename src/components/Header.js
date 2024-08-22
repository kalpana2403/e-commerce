import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
    </header>
  )
}

export default Header
