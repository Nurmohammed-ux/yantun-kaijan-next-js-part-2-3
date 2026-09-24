"use client";
import { CartContext } from "@/context/CartProvider";
import { use, useState } from "react";
import Image from "next/image";

const CartItems = () => {
  const { cart } = use(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total price of all items in cart
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <div className="relative mt-4">
      {/* Cart Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-40 items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer"
      >
        <span className="ml-4">🛒</span>
        <span>Cart</span>
        <span className="bg-white text-indigo-600 text-xs font-bold px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      </button>

      {/* Cart Dropdown / Modal */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col max-h-125">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <h3 className="font-bold text-gray-900">Your Cart ({cart.length})</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="overflow-y-auto grow p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">
                Your cart is currently empty.
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-2.5 rounded-xl"
                >
                  {/* Food Thumbnail */}
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                    <Image
                      src={item.foodImg}
                      alt={item.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  {/* Food Info */}
                  <div className="grow min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm truncate">
                      {item.title}
                    </h4>
                    <span className="text-xs text-indigo-600 font-medium uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Total Amount:</span>
                <span className="text-lg font-extrabold text-green-600">
                  ${totalPrice}
                </span>
              </div>
              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-medium shadow-sm hover:bg-indigo-700 transition-colors text-center cursor-pointer"
              >
                Checkout Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartItems;