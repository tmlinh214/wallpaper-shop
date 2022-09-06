import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { ImgContext } from './browserContext'
function Header() {
  const {cartItems} = React.useContext(ImgContext)
  const cartClass = cartItems.length >0 ? "cart-full" : 'none'
  return (
    <header>
        <h1><Link to="/">Wallpaper Shop</Link></h1>
        <Link to="/cart"><FaShoppingCart className={`cart-icon ${cartClass}`}/></Link>
    </header>
  )
}

export default Header