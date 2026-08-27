import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";

function ProductDetails() {
  let { productId } = useParams();
  productId = parseInt(productId, 10);

  //   console.log(productId);
  //   console.log(typeof productId);

  const url = "https://dummyjson.com/products/";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async (id) => {
    try {
      const res = await fetch(`${url}${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();

      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (loading) return <Loading />;

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <img src={product.images[0]} alt={product.title} />
          <h2>{product.title}</h2> <span>{product.category}</span>
          <p>{product.description}</p>
          <span>{product.price}</span>
          <div className="tags-wrapper">
            {product.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span>{product.brand}</span>
          <span>{product.rating}/5</span>
          <span>{product.discountPercentage}% off</span>
          {product.availabilityStatus === "In Stock" ? (
            <span> In Stock: {product.stock} available </span>
          ) : (
            <span>Out of stock</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
