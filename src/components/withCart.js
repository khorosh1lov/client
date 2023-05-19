import React, {createContext, useContext, useEffect, useState} from "react";
import Cart from "./Cart/Cart";
import useLocalStorageCart from "./Cart/useLocalStorageCart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorageCart('cartItems', []);
  const [isOpen, setIsOpen] = useState(false);


  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  const openCart = ()=> setIsOpen(true);
  const closeCart = ()=> setIsOpen(false);
  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

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
    setCartItems(cartItems.filter((item, index) => index !== itemId));
    };

  const clearCart = () => {
    setCartItems([]);
  };
  function increaseItemQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find((item, index) => index === id) == null) {
        return [...currentItems, {id, quantity: 1}]
      } else {
        return currentItems.map((item, index) => {
          return index === id ? {...item, quantity: item.quantity + 1} : item;
        })
      }
    })
  }
  function decreaseItemQuantity(id) {
    setCartItems(currentItems => {
      if (currentItems.find((item, index) => index === id)?.quantity === 1) {
        return currentItems.filter((item, index) => index !== id)
      } else {
        return currentItems.map((item, index) => {
          return index === id ? {...item, quantity: item.quantity - 1} : item;
        })
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        openCart,
        closeCart,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity, }}
    >
      {children}
      <Cart isOpen={isOpen} />
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
