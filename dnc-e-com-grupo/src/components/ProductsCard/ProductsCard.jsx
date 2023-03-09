import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({data}) => {
  return (
      <div className="home__card">
        <img src={data.imgPath} alt="model" />
        <div className="home__card-description">
          <p>{data.title}</p>
          <button>
            <Link to={`/addToCart/${data.id}`}>Adicionar ao carrinho</Link>
          </button>
        </div>
      </div>
  );;
};

export default ProductsCard