import React, { useContext } from 'react'
import { PRODUCTS } from "../../data"
import { ShopContext } from "../../context/Context"
import "./style.css"
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {items} = useContext(ShopContext)
  var total = 0
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your items</h1>
      </div>
      <div className='cartItems'>
        {
          PRODUCTS.map((product)=>{
            var count = items[product.id]
            if(count !== 0){
              console.log(count)
              total += Number(product.price*items[product.id])
              return <CartItems data={product} />
            }
          })
        }
      </div>
      {
        total ? (
          <div className='checkout'>
          <p>SubTotal is : ${total}</p>
          <button onClick={() => navigate('/')}>Continue</button>
          <button>Checkout</button>
        </div>
        )
        :
        (
          <div className='checkout'> 
            <h1>Your Cart is empty</h1>
            {/* <button onClick={() => navigate("/")}>Let's but something</button> */}
          </div>

        )
        
      }
    </div>
  )
}

export default Cart