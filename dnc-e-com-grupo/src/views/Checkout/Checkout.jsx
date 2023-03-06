import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Checkout = () => {
  return (
    <div> 
    <h1>checkout</h1>
    <button type="submit">
      <Link to={"/home"}>home</Link>
    </button>
  </div>
  )
}

export default Checkout