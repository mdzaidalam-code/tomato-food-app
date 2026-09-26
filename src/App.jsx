import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/placedOrder/PlacedOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/c' element={<Cart/>}/>
         <Route path='/order' element={<PlacedOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    )
}

export default App