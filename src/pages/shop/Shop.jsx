import React from 'react'
import {PRODUCTS} from "../../data.js"
import Product from './Product.jsx'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>NiksMart</h1>
      </div>
      <div className='products'>
        {
          PRODUCTS.map(p => <Product data={p}/>)
        }
      </div>
    </div>
  )
}

export default Shop