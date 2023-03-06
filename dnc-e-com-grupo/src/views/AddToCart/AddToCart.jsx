import React from 'react'
import { Link } from 'react-router-dom'

const AddToCart = () => {
  return (
    <div> 
      <h1>add to cart</h1>
      <button type="submit">
        <Link to={"/cart"}>cart</Link>
      </button>
    </div>
  )
}

export default AddToCart