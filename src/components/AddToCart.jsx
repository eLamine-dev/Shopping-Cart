import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

function AddToCart({ product }) {
   const { addToCart } = useContext(CartContext);
   const [quantity, setQuantity] = useState(1);

   const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
   };

   const handleDecrement = () => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
   };

   const handleInputChange = (event) => {
      const newQuantity = parseInt(event.target.value, 10);
      if (!isNaN(newQuantity) && newQuantity >= 1) {
         setQuantity(newQuantity);
      } else {
         setQuantity(1);
      }
   };

   const handleSubmit = () => {
      addToCart({ ...product, quantity });
   };

   return (
      <div>
         <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input
               type="number"
               min="1"
               max={product.stock}
               value={quantity}
               onChange={handleInputChange}
            />
            <button onClick={handleIncrement}>+</button>
         </div>

         <button onClick={handleSubmit}>Add to Cart</button>
      </div>
   );
}

AddToCart.propTypes = {
   product: PropTypes.object.isRequired,
};

export default AddToCart;
