import React from "react";
import "../../Styles/productCard.css";
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="imageContainer">
        <img className="img" src={product.image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{product.category}</span>
        <h4 className="product-title">{product.title}</h4>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>${product.price}</small>
          </div>
          <div className="product-links">
            <a href="">
              <i className="fa fa-heart"></i>
            </a>
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
