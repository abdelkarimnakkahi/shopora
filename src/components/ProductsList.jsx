import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import Product from "./Product";
import Categories from "./Categories";
import Navbar from "./Navbar";
import { SearchContext } from "./SearchContext";

function ProductsList() {
  // const apiURL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchQuery } = useContext(SearchContext);

  const getProducts = async (category = "", query = "") => {
    try {
      const apiURL = category
        ? `https://dummyjson.com/products/category/${category}`
        : query
          ? `https://dummyjson.com/products/search?q=${query}`
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
    getProducts("", searchQuery);
  }, [searchQuery]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar hasSearch={true} />
      <section className="products-list">
        <div className="container">
          <h2>Our Products:</h2>
          <div className="products-content">
            <Categories getProducts={getProducts} />
            <div className="products-wrapper">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  isDescription={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsList;
