import { Route, Routes } from "react-router";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import SearchProvider from "./components/SearchContext";
import CartQuantityProvider from "./components/CartQuantityContext";

function App() {
  return (
    <>
      <SearchProvider>
        <CartQuantityProvider>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartQuantityProvider>
      </SearchProvider>
    </>
  );
}

export default App;
