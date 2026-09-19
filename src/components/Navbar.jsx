import { Link } from "react-router";
import cartLogo from "../assets/icons/cart-shopping-solid.svg";
import Search from "./Search";
import { CartQuantityContext } from "./CartQuantityContext";
import { useContext } from "react";

function Navbar({ hasSearch }) {
  const { cart } = useContext(CartQuantityContext);
  const totalQuantityInCart = cart.reduce(
    (total, item) => total + item.quantityInCart,
    0,
  );
  return (
    <nav>
      <div className="container">
        <div className="left-nav">
          <div className="logo">
            <span>Shopora</span>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          {hasSearch && <Search />}
          <div className="cart-shopping">
            <Link className="cart-link" to={"/cart"}>
              <img src={cartLogo} alt="Cart Logo" />
              <span className="total-items">{totalQuantityInCart}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
