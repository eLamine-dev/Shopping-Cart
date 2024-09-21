import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (cartItem) => {
      setCart((prevCart) => [...prevCart, cartItem]);
      console.log(cart);
   };

   const removeFromCart = (cartItemId) => {
      setCart((prevCart) =>
         prevCart.filter((cartItem) => cartItem.cartId !== cartItemId)
      );
   };

   const updateBuild = (updatedBuild) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item.cartId === updatedBuild.cartId ? updatedBuild : item
         )
      );
   };

   const updateQuantity = (cartItemId, newQuantity) => {
      setCart((prevCart) =>
         prevCart.map((cartItem) =>
            cartItem.cartId === cartItemId
               ? { ...cartItem, quantity: newQuantity }
               : cartItem
         )
      );
   };

   return (
      <CartContext.Provider
         value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateBuild,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

CartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
