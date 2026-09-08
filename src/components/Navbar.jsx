import { Link } from "react-router";
import cartLogo from "../assets/icons/cart-shopping-solid.svg";
import Search from "./Search";

function Navbar({ hasSearch }) {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <span>Ecom</span>
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {hasSearch && <Search />}
        <div className="cart-shopping">
          <Link to={"/cart"}>
            <img src={cartLogo} alt="Cart Logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
