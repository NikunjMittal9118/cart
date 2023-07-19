import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/Context.jsx"
function App(){
  return (
  <ShopContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Shop /> } />
        <Route path="/cart" element={ <Cart /> }/>
      </Routes>
    </BrowserRouter>
  </ShopContextProvider>
  );
}

export default App;

