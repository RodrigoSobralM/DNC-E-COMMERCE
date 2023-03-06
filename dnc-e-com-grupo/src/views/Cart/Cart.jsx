import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <h1>cart</h1>
      <button type="submit">
            <Link to={"/checkout"}>checkout</Link>
      </button>
    </div>
  )
}

export default Cart