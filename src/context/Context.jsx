import React, { createContext, useContext, useState } from 'react'
import { PRODUCTS } from '../data.js'


export const ShopContext = createContext(null)

const cart = ()=>{
  let products = {}
  PRODUCTS.map((p)=>{
    products[p.id] = 0 
  })
  return products
}

export const ShopContextProvider = ({children}) => {
  const [items, setItems] = useState(cart())

  const addToCart = (itemId) => {
    setItems((prev) => (
      {...prev, [itemId]: prev[itemId] + 1}
    ) )
  }
  const updateCart = (e, itemId) => {
    setItems((prev) => (
      {...prev, [itemId]: Number(e.target.value)}
    ) )
  }
  const removeFromCart = (itemId) => {
    setItems((prev) => (
      {...prev, [itemId]: prev[itemId] - 1}
    ) )
  }

  return <ShopContext.Provider value={{items, updateCart, addToCart, removeFromCart}}>{children}</ShopContext.Provider>
}