import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <button type="submit">
            <Link to={"/home"} >Send</Link>
      </button>
    </div>
  )
}

export default Checkout