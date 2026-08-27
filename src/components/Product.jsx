import React from "react";
import { Link } from "react-router";

function Product({ product, isDescription }) {
  const { id, title, images, description, price } = product;
  return (
    <div className="product-card">
      <img className="product-image" src={images[0]} alt={title} />
      <h3 className="product-title">{title.slice(0, 25)}</h3>
      {isDescription && <p className="product-description">{description}</p>}
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </p>
      <Link to={`/product/${id}`} className="btn btn-details">
        Details
      </Link>
    </div>
  );
}

export default Product;
