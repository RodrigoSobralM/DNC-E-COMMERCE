import React from 'react'
import './index.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <button type="submit">
            <Link to={"/addToCart"}>add</Link>
      </button>
    </div>
  )
}

export default Home