import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button type="submit">
            <Link to={"/addToCart"}>add to cart</Link>
      </button>
    </div>
  )
}

export default Home