import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [certItems, SetCartItems] = useState(() => {
    const savedCart = localStorage.getItem("certItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("certItems", JSON.stringify(certItems));
  }, [certItems]);

  const increaseQuantity = (id) => {
    SetCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    SetCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    SetCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    SetCartItems((prevItem) => [...prevItem, { ...item, quantity: 1 }]);
  };

  return (
    <CartContext.Provider
      value={{
        certItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
