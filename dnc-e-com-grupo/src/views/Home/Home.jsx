import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <section className="home">
      <HeaderSearch />
        <div className='home__banner'>
          <img src="./src/assets/banner.png" alt="" />
        </div>
      <div className='home__main'>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'>
              <img src="./public/image 21.png" alt="xbox preto" />
              <h2>Microsoft Xbox Series X | Preto</h2>
              <button type="submit">
                  <Link to={"/addToCart/1"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'>
              <img src="./public/image 22.png" alt="xbox branco" />
              <h2>Microsoft Xbox Series S | Branco</h2>
              <button type="submit">
                  <Link to={"/addToCart/2"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'>
              <img src="./public/image 23.png" alt="nintendo switch" />
              <h2>Nintendo Switch com Jogo</h2>
              <button type="submit">
                  <Link to={"/addToCart/3"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'> 
              <img src="./public/image 24.png" alt="god of war" />
              <h2>Jogo God of War Playstation</h2>
              <button type="submit">
                  <Link to={"/addToCart/4"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'>
              <img src="./public/image 25.png" alt="uncharted" />
              <h2>Jogo Uncharted: The Nathan Drake Collection</h2>
              <button type="submit">
                  <Link to={"/addToCart/5"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='home__row'>
          <div className='home__col'>
            <div className='home__card'>
              <img src="./public/image 26.png" alt="gran turism" />
              <h2>Jogo Gran Turismo</h2>
              <button type="submit">
                  <Link to={"/addToCart/6"} >Ver Mais</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Home