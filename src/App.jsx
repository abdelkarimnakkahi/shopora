import { Route, Routes } from "react-router";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
