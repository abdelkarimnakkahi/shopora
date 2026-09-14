import { Link } from "react-router";
import cartLogo from "../assets/icons/cart-shopping-solid.svg";
import Search from "./Search";

function Navbar({ hasSearch }) {
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
            <Link to={"/cart"}>
              <img src={cartLogo} alt="Cart Logo" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
