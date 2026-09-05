import { useEffect } from "react";
import { Link } from "react-router";

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
    <div className="cart">
      <div className="container">
        <div className="cart-items">
          {cart.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <div className="cart-item-details">
                <img src={cartItem.images[0]} alt={cartItem.title} />
                <h2>{cartItem.title}</h2>
                <p>{cartItem.price}</p>
                <p>Quantity: {cartItem.quantityInCart}</p>
              </div>
              <div className="cart-item-buttons">
                <button
                  onClick={() => handleDecrease(cartItem.id)}
                  className="btn btn-decrease"
                  disabled={cartItem.quantityInCart === 1}
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrease(cartItem.id)}
                  className="btn btn-increase"
                  disabled={cartItem.quantityInCart === cartItem.stock}
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(cartItem.id)}
                  className="btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 ? (
          <>
            <div className="subtotal">
              <p>
                Subtotal
                {`(${totalQuantityInCart} items) : $ ${totalPriceInCart}`}
              </p>
            </div>
            <div className="delete-all">
              <button onClick={() => handleClearAll()} className="btn">
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
  );
}

export default Cart;
