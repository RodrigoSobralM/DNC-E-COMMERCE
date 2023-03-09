import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'

const AddToCart = () => {
  return (
    <div>
      <HeaderSearch/>
      <h1>Add to Cart</h1>
      <button type="submit">
            <Link to={"/cart"} >cart</Link>
      </button>
    </div>
  )
}

export default AddToCart