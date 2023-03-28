import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ProductDetail = ({ data }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__left-side">
        <div className="product-detail__card">
          <img src={data.imgPath} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
          <h1>Descrição</h1>
          <p>{data.imgPathDetail}</p>
        </div>
      </div>
      <div className="product-detail__right-side">
        <h3>{data.title}</h3>
        <h4>{data.price}</h4>
      
        <button
          className="btn-cart"
          onClick={() => (window.location.href = `/cart/${data.id}`)}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 16.5C4.08333 16.5 3.72933 16.354 3.438 16.062C3.146 15.7707 3 15.4167 3 15C3 14.5833 3.146 14.2293 3.438 13.938C3.72933 13.646 4.08333 13.5 4.5 13.5C4.91667 13.5 5.27067 13.646 5.562 13.938C5.854 14.2293 6 14.5833 6 15C6 15.4167 5.854 15.7707 5.562 16.062C5.27067 16.354 4.91667 16.5 4.5 16.5ZM13.5 16.5C13.0833 16.5 12.7293 16.354 12.438 16.062C12.146 15.7707 12 15.4167 12 15C12 14.5833 12.146 14.2293 12.438 13.938C12.7293 13.646 13.0833 13.5 13.5 13.5C13.9167 13.5 14.2707 13.646 14.562 13.938C14.854 14.2293 15 14.5833 15 15C15 15.4167 14.854 15.7707 14.562 16.062C14.2707 16.354 13.9167 16.5 13.5 16.5ZM4.271 4L6 8H12.271L13.979 4H4.271ZM3.625 2.5H15.5C15.6947 2.5 15.837 2.57633 15.927 2.729C16.017 2.88167 16.0273 3.04133 15.958 3.208L13.646 8.583C13.5207 8.861 13.3367 9.08333 13.094 9.25C12.8507 9.41667 12.5763 9.5 12.271 9.5H5.604L4.729 11H15V12.5H4.75C4.15267 12.5 3.71167 12.25 3.427 11.75C3.14233 11.25 3.146 10.75 3.438 10.25L4.521 8.375L1.792 2H0V0.5H2.771L3.625 2.5Z"
              fill="white"
            />
          </svg>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;