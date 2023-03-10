import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <section className="home">
      <HeaderSearch />
      <div>
        <h2>produto 1</h2>
        <button type="submit">
            <Link to={"/addToCart/1"} >adicionar ao carrinho</Link>
        </button>
         <h2>produto 2</h2>
        <button type="submit">
            <Link to={"/addToCart/2"} >adicionar ao carrinho</Link>
        </button>
          <h2>produto 3</h2>
        <button type="submit">
            <Link to={"/addToCart/3"} >adicionar ao carrinho</Link>
        </button>
          <h2>produto 4</h2>
        <button type="submit">
            <Link to={"/addToCart/4"} >adicionar ao carrinho</Link>
        </button>
          <h2>produto 5</h2>
        <button type="submit">
            <Link to={"/addToCart/5"} >adicionar ao carrinho</Link>
        </button>
          <h2>produto 6</h2>
        <button type="submit">
            <Link to={"/addToCart/6"} >adicionar ao carrinho</Link>
      </button>
      </div>
      <Footer />
    </section>
  )
}

export default Home