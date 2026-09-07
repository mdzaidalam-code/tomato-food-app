import { createContext, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const [cartItems,SetCartItems] = useState({});

  const addToCart = (itemId) => {

    if (!cartItems[itemId]) {
      SetCartItems((prev)=>({...prev,[itemId]:1}))
    }

    else{
      SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

  }

  const removeFromCart = (itemId) => {
          SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextValue = {
          food_list,
          cartItems,
          SetCartItems,
          addToCart,
          removeFromCart
  }

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  return(
    <StoreContext.Provider value = {contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider;