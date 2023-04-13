
import { Link } from 'react-router-dom'

function ProductsCard({data}) {0
    console.log(data)
  return (
    <div className='home__card'>
        <div>
            <img src={data.imgPath} alt="" />
            <div className='home__card-description'>
                <p>{data.title}</p>
                <button type="submit" className="home__card-button">
                    <Link to={`/addToCart/${data.id}`} >Ver Mais</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard