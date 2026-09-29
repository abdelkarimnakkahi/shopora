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
  const [category, setCategory] = useState("");

  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 12;
  const [skip, setSkip] = useState(0);
  const totalPages = Math.ceil(totalProducts / limit);
  const currentPage = skip / limit + 1;

  const { searchQuery } = useContext(SearchContext);

  const getProducts = async (category = "", query = "") => {
    try {
      const apiURL = category
        ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
        : query
          ? `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
          : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      const res = await fetch(apiURL);
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
      setTotalProducts(data.total);
    } catch (error) {
      console.error("Failed to fetch", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    if (skip > 0) {
      setSkip((prev) => prev - limit);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSkip((prev) => prev + limit);
    }
  };

  useEffect(() => {
    getProducts(category, searchQuery);
  }, [searchQuery, skip, category]);

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
              <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                  {"<"}
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsList;
