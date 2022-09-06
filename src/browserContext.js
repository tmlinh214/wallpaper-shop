import React from 'react'
import {data} from "./data"
const ImgContext = React.createContext()
function BrowserContext(props) {
    const [imgArr,setImgArr]=React.useState([])
    const [cartItems,setCartItems]=React.useState([])

    React.useEffect(()=>{
        // fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        //     .then(res=>res.json())
        //     .then(data => setImgArr(data))
        setImgArr(data.map(item=>item))
    },[])

    function toggleFavorite(id){
        setImgArr(imgArr.map(item=>{
            return item.id === id? {...item, isFavorite: !item.isFavorite} : item
        })) 
    }

    function setImage(img){
      setCartItems(prevCart=>{
        return prevCart.some(item=>item.id===img.id) ? prevCart.filter(item=>item.id !== img.id) : [...prevCart,img]
      })
    }
    function emptyCart(){
      setCartItems([])
    }

    return (
      <ImgContext.Provider value={{imgArr,toggleFavorite,cartItems,setImage,emptyCart}}>
        {props.children}
      </ImgContext.Provider>
    )
  
}

export {BrowserContext,ImgContext}