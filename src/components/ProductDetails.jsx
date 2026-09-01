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
      {cart.length > 0 ? <h3>{cart.length}</h3> : <h3>No item</h3>}
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
            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="btn btn-cart"
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-go-to-cart">
              Go to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
