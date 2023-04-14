import React, { useState } from "react";
import "./index.scss";

const ProductDetailModal = ({ data }) => {
  const [cep, setCep] = useState("");

  function handleCepChange(event) {
    let value = event.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    setCep(value);
  }

  return (
    <div className="product-detail-modal">
      <div className="product-detail-modal__container">
        <div className="product-detail-modal__left-side">
          <div className="product-detail__card">
            <img src={data.imgPath} alt={data.title} />
          </div>
          <div className="product-detail-modal__frete">
            <input type="text" value={cep} onChange={handleCepChange} placeholder="Insira seu CEP" />
            <button className="btnFrete">Calcular Frete</button>
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