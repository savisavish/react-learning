// context/Product_context.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  const deleteCartItem = (delId) => {
    console.log(delId)
    setCart(cart.filter(d=>d.id !== delId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
