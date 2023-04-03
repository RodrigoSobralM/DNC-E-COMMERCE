import React from "react";
import "./index.scss";

const ProductDetailModal = ({ data }) => {
  return (
    <div className="product-detail-modal">
      <div className="product-detail-modal__container">
        <div className="product-detail-modal__left-side">
          <div className="product-detail__card">
            <img src={data.imgPath} alt={data.title} />
          </div>
        </div>
        <div className="product-detail-modal__right-side">
          <h1>Meu Carrinho</h1>
          <h3>{data.title}</h3>
          <h4>{data.price}</h4>


          <div className="product-detail-modal__buttons">
            <button className="btn1" onClick={() => (window.location.href = "/home")}>
                Continuar Comprando
            </button>
            <button className="btn2" onClick={() => (window.location.href = "/checkout")}>
                Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;