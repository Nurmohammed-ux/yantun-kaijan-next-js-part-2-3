"use client";
import { CartContext } from "@/context/CartProvider";
import { use, useState } from "react";

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart} = use(CartContext);

  const handleAddCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddCart}
      disabled={inCart}
      className="flex-1 bg-indigo-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors disabled:bg-indigo-50 disabled:text-gray-500"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButton;
