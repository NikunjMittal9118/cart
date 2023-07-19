import React, { useContext, useState } from 'react'
import "./style.css"
import { ShopContext } from '../../context/Context'

const Product = ({data}) => {
  const {id, productName, price, productImage} = data
  const {items, addToCart} = useContext(ShopContext)
  return (
    <div className='product'>
        <img src={productImage} alt='' />
        <div className='description'>
            <p>
                <b>
                    {productName}
                </b>
            </p>
            <p>
                ${price}
            </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {items[id] && <>({items[id]})</>}</button>
    </div>
  )
}

export default Product