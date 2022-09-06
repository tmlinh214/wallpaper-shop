import React from 'react'
import {FaCartPlus, FaHeart} from 'react-icons/fa'
import { ImgContext } from './browserContext'
import PropTypes from 'prop-types'
function Pic(props) {
    const [isHovered,setIsHovered]=React.useState(false)
    const {toggleFavorite,setImage,cartItems} = React.useContext(ImgContext)
    function handleHover(){
        setIsHovered(true)
    }
    function handleLeft(){
        setIsHovered(false)
    }
    function heartIcon(){
        if (isHovered || props.img.isFavorite){
            return <FaHeart className='heart-icon' onClick={()=>toggleFavorite(props.img.id)}/>
        }
    }
    function cartIcon(id){
        if (isHovered || cartItems.find(item => item.id===id)){
            return <FaCartPlus className='cart-plus-icon' onClick={()=>setImage(props.img)}/>
        }
    }
  return (
    <div className={`img-container ${props.className}`} onMouseEnter={handleHover} onMouseLeave={handleLeft}>
        <img src={process.env.PUBLIC_URL + props.img.url} className="img-grid" alt="img"/>
        {/* {isHovered && <FaCartPlus className='cart-plus-icon'/>}
        {isHovered && <FaHeart className='heart-icon' onClick={()=>toggleFavorite(props.img.id)}/>} */}
        {heartIcon()}
        {cartIcon(props.img.id)}
    </div>
  )
}

Pic.propTypes = {
    className:PropTypes.string,
    img: PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Pic