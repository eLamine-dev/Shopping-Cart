import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (cartItem) => {
      setCart((prevCart) => [...prevCart, cartItem]);
   };

   const removeFromCart = (cartItemId) => {
      setCart((prevCart) =>
         prevCart.filter((cartItem) => cartItem.id !== cartItemId)
      );
   };

   const updateQuantity = (cartItemId, newQuantity) => {
      setCart((prevCart) =>
         prevCart.map((cartItem) =>
            cartItem.id === cartItemId
               ? { ...cartItem, quantity: newQuantity }
               : cartItem
         )
      );
   };

   return (
      <CartContext.Provider
         value={{ cart, addToCart, removeFromCart, updateQuantity }}
      >
         {children}
      </CartContext.Provider>
   );
};

CartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
