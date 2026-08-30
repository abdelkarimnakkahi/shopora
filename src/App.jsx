import { Route, Routes } from "react-router";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="about" element={<About />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
