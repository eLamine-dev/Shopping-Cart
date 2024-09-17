import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (productData) => {
      setCart((prevCart) => [...prevCart, productData]);
   };

   const removeFromCart = (productId) => {
      setCart((prevCart) =>
         prevCart.filter((product) => product.id !== productId)
      );
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
         {children}
      </CartContext.Provider>
   );
};

CartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
