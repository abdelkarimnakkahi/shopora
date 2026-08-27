import { Route, Routes } from "react-router";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
