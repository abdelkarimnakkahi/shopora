import { Route, Routes } from "react-router";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import SearchProvider from "./components/SearchContext";

function App() {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));

  const [cart, setCart] = useState(() => (cartStorage ? cartStorage : []));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product/:productId"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
