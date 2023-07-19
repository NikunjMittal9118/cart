import React, { useContext } from 'react'
import { ShopContext } from "../../context/Context"
import "./style.css"

const CartItems = ({data}) => {
  const {items, updateCart, addToCart, removeFromCart} = useContext(ShopContext)
  const {id, productName, productImage, price} = data
  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p>
                <b> {productName} </b>
            </p>
            <p> ${price} </p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={items[id]} onChange={(e) => updateCart(e,id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
        <div>Total: ${price*items[id]}</div>
    </div>
  )
}

export default CartItems