import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const existedDishIndex = cartItems.findIndex((item) => {
      return (
        item.dish === newItem.dish && item.restaurant === newItem.restaurant
      );
    });
    if (existedDishIndex === -1) setCartItems([...cartItems, newItem]);
    else {
      let newCartItems = [...cartItems];
      newCartItems[existedDishIndex].quantity += newItem.quantity;
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { CartProvider, useCart };
