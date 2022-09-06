import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {ImgContext} from './browserContext'
function CartItem(props) {
    const {setImage}=React.useContext(ImgContext)
  return (
    <div className='cart-item'>
        <img src={process.env.PUBLIC_URL + props.item.url} alt="item-img" width="200px" />
        <FaTrash onClick={()=>setImage(props.item)} cursor="pointer"/>
        <p>€5.99</p>
    </div>
  )
}

export default CartItem