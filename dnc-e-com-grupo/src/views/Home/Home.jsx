import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header/>
      <button type="submit">
            <Link to={"/addToCart"} >add</Link>
      </button>
    </div>
  )
}

export default Home