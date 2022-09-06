import React from 'react'
import {ImgContext} from "./browserContext"
import CartItem from './CartItem'
function Cart() {
  const [order,setOrder]=React.useState(false)
  const {cartItems,emptyCart} = React.useContext(ImgContext)
  const cartItemsElements = cartItems.map(item=>{
    return <CartItem key={item.id} item={item}/>
  })

  function placeOrder(){
    setOrder(true)
    setTimeout(()=>{
      setOrder(false)
      emptyCart()
    },3000)
  }

  const buttonText = order? "Ordering..." : "Place order"

  let totalCost = cartItems.length*5.99
  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      {cartItemsElements}
      <p className='total'>Total: {totalCost.toLocaleString("en-US",{style: "currency", currency: "EUR"})}</p>
      {cartItems.length>0 && <button className='order-button' onClick={placeOrder} disabled={order}>{buttonText}</button>}
    </div>
  )
}

export default Cart