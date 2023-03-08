import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch"
import Footer from "../../components//Footer/Footer"

const AddToCart = () => {
  return (
    <div>
      <HeaderSearch />
      <div>
        <h2>Add to cart html aqui</h2>
        <button type="submit">
              <Link to={"/cart"} >cart</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default AddToCart