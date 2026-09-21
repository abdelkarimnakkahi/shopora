import React, { useContext } from "react";
import { Link } from "react-router";
import { CartQuantityContext } from "./CartQuantityContext";
import { toast } from "react-toastify";

function Product({ product, isDescription }) {
  const { id, title, images, description, price } = product;

  const { cart, setCart } = useContext(CartQuantityContext);

  const notifyAdd = () => toast.success("Product added to cart!");

  const addToCart = (productItem) => {
    const existingProduct = cart.find(
      (cartItem) => cartItem.id === productItem.id,
    );

    if (existingProduct) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === productItem.id) {
          return { ...cartItem, quantityInCart: cartItem.quantityInCart + 1 };
        }

        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productItem, quantityInCart: 1 }]);
    }
    notifyAdd();
  };

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
      <div className="buttons-wrapper">
        <Link to={`/product/${id}`} className="btn btn-details">
          Details
        </Link>
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="btn btn-add-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
