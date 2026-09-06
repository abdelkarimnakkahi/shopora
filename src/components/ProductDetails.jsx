import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "./Loading";

function ProductDetails({ cart, setCart }) {
  let { productId } = useParams();
  productId = parseInt(productId, 10);

  const url = "https://dummyjson.com/products/";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getProduct = async (id) => {
    try {
      const res = await fetch(`${url}${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();

      setProduct(data);
      setSelectedImage(data.images[0]);
    } catch (error) {
      console.error("Failed to fetch", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (productItem) => {
    const existingProduct = cart.find(
      (cartItem) => cartItem.id === productItem.id,
    );

    if (existingProduct) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === productItem.id) {
          return { ...cartItem, quantityInCart: cartItem.quantityInCart + 1 };
        }

        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productItem, quantityInCart: 1 }]);
      console.log(cart);
    }
  };
  console.log(cart);

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (loading) return <Loading />;

  return (
    <div className="product-details">
      <div className="container">
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="product-wrapper">
            <div className="product-images">
              <div className="selected-image">
                <img src={selectedImage} alt={product.title} />
              </div>
              <div className="product-thumbnails">
                {product.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={product.title}
                    onClick={() => setSelectedImage(image)}
                    className={image === selectedImage ? "active" : ""}
                  />
                ))}
              </div>
            </div>
            <div className="product-content">
              <h2 className="title">{product.title}</h2>{" "}
              <span className="category">{product.category}</span>
              <p className="description">{product.description}</p>
              <span className="price">{product.price}</span>
              <div className="tags-wrapper">
                <p className="tags-title">Tags:</p>
                {product.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <hr />
              <span className="brand">
                <b>Brand: </b>
                {product.brand}
              </span>
              <span className="rating">
                <b>Rating: </b>
                {product.rating}/5
              </span>
              <span className="discount">
                <b>Discount: </b>
                {product.discountPercentage}% off
              </span>
              {product.availabilityStatus === "In Stock" ||
              product.availabilityStatus === "Low Stock" ? (
                <span className="stock">
                  <b>In Stock: </b> {product.stock} available
                </span>
              ) : (
                <span className="stock">
                  <b>Out of stock</b>
                </span>
              )}
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="btn btn-add-cart"
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-go-cart">
                Go to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
