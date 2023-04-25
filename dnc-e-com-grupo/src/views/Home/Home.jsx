import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
<<<<<<< HEAD
import Footer from "../../components/Footer/Footer"
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const Home = ({data}) => {
=======
import Footer from '../../components/Footer/Footer'

const Home = () => {
>>>>>>> main
  return (
    <div>
      <HeaderSearch />
<<<<<<< HEAD
        <div className='home__banner'>
          <img src="./src/assets/banner.png" alt="" />
        </div>
        <div className='home__cards'>
                {data.map((product) => (
                    <ProductsCard key={product.id} data={product} />
                  ))}
        </div>
      <Footer />
    </section>
=======
      <div>
        <h2>Home html aqui</h2>
        <button type="submit">
              <Link to={"/addToCart"} >add</Link>
        </button>
        <Footer />
      </div>
    </div>
>>>>>>> main
  )
}

export default Home
