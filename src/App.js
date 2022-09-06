import React from 'react'
import './styles.css'
import Header from './Header'
import { Route,Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cart" element={<Cart />}/>
        </Routes>
        
        
    </div>
  )
}

export default App