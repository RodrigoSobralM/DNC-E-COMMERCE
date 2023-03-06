import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
      <button type="submit">
            <Link to={"/checkout"} >Checkout</Link>
      </button>
    </div>
  )
}

export default Cart