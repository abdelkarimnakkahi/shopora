import { createContext, useEffect, useState } from "react";

export const CartQuantityContext = createContext();

function CartQuantityProvider({ children }) {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(() => (cartStorage ? cartStorage : []));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartQuantityContext.Provider value={{ cart, setCart }}>
      {children}
    </CartQuantityContext.Provider>
  );
}

export default CartQuantityProvider;
