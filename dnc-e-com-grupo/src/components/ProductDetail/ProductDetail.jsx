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
                <p>
                    Cor:{" "}
                    {data.colors.length === 1
                        ? data.colors.map((color,index) =>(
                            <span key={index}>{color}</span>
                        ))
                        : data.colors.map((color, index) =>
                            index + 1 === data.colors.length ? (
                            <span key={index}>{color}</span>
                        ) : (
                            <span key={index}>{color}, </span>
                        )
                    )}
                </p>
                <div className="product-detail__cube-colors">
                    {data.colors.map((color) => (
                        <div style={{
                            width: "64px",
                            height: "60px",
                            border: "1px solid #000",
                            borderRadius: "10px",
                            backgroundColor: color,
                        }}
                        ></div>
                    ))}
                </div>
                <button>
                    <Link to={"/cart"}>Adicionar ao carrinho</Link>
                </button>
            </div>
        </div>
    );
 };