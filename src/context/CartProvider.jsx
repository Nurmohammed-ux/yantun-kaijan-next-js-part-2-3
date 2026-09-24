"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartInfo = {
    addToCart,
    cart,
  };

  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
