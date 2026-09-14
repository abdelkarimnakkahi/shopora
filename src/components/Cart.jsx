import { useEffect } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";

function Cart({ cart, setCart }) {
  // console.log(cart);

  const totalQuantityInCart = cart.reduce(
    (total, item) => total + item.quantityInCart,
    0,
  );

  const totalPriceInCart = cart.reduce(
    (price, item) => price + item.quantityInCart * item.price,
    0,
  );

  const handleIncrease = (id) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.quantityInCart < cartItem.stock) {
        return { ...cartItem, quantityInCart: cartItem.quantityInCart + 1 };
      }

      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id && cartItem.quantityInCart > 1) {
        return { ...cartItem, quantityInCart: cartItem.quantityInCart - 1 };
      }

      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id != id);
    setCart(updatedCart);
  };

  const handleClearAll = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="container">
          <h2>Shopping Cart:</h2>
          <div className="cart-items">
            {cart.map((cartItem) => (
              <div key={cartItem.id} className="cart-item">
                <img src={cartItem.images[0]} alt={cartItem.title} />
                <div className="cart-item-wrapper">
                  <div className="cart-item-content">
                    <div className="cart-item-details">
                      <h3 className="title">{cartItem.title}</h3>
                      <p className="quantity">
                        Quantity: {cartItem.quantityInCart}
                      </p>
                      <p className="price">${cartItem.price}</p>
                    </div>
                    <div className="cart-item-buttons">
                      <div className="plus-minus-buttons">
                        <button
                          onClick={() => handleDecrease(cartItem.id)}
                          className="btn btn-decrease"
                          disabled={cartItem.quantityInCart === 1}
                        >
                          -
                        </button>
                        <hr />
                        <button
                          onClick={() => handleIncrease(cartItem.id)}
                          className="btn btn-increase"
                          disabled={cartItem.quantityInCart === cartItem.stock}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(cartItem.id)}
                        className="btn btn-delete"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 ? (
            <>
              <div className="subtotal">
                Subtotal {`(${totalQuantityInCart} items)`}
                <span> {`: $ ${totalPriceInCart.toFixed(2)}`}</span>
              </div>
              <div className="delete-all">
                <button
                  onClick={() => handleClearAll()}
                  className="btn btn-clear-cart"
                >
                  Clear All
                </button>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <Link to={"/"}>Back to shop</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
