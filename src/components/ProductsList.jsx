import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Product from "./Product";
import Categories from "./Categories";

function ProductsList() {
  // const apiURL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async (category = "") => {
    try {
      const apiURL = category
        ? `https://dummyjson.com/products/category/${category}`
        : "https://dummyjson.com/products";
      const res = await fetch(apiURL);
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="products-list">
      <div className="container">
        <Categories getProducts={getProducts} />
        <h2>Our Products:</h2>

        <div className="products-wrapper">
          {products.map((product) => (
            <Product key={product.id} product={product} isDescription={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
