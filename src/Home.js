import React from 'react'
import {ImgContext} from "./browserContext"
import Pic from './Pic'
import {getClass} from './utils'
function Home() {
    const {imgArr}=React.useContext(ImgContext)
    const imgRender = imgArr.map((item,index)=>{
        return <Pic img={item} key={item.id} className={getClass(index)}/>
    })
  return (
    <main className='images'>
        {imgRender}
    </main>
    
    
  )
}

export default Home