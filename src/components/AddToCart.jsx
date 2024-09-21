import { useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';

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
      const cartItem = { cartId: uuidv4(), ...product, quantity };
      addToCart(cartItem);
   };

   return (
      <AddToCartWrapper>
         <QuantityControl>
            <button className="decrement" onClick={handleDecrement}>
               -
            </button>
            <input
               type="number"
               min="1"
               max={product.stock}
               value={quantity}
               onChange={handleInputChange}
            />
            <button className="increment" onClick={handleIncrement}>
               +
            </button>
         </QuantityControl>

         <AddButton onClick={handleSubmit}>Add to Cart</AddButton>
      </AddToCartWrapper>
   );
}

const AddToCartWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   max-width: 200px;
`;

const QuantityControl = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   background-color: #020616;
   border-radius: 5px;
   padding: 5px;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

   button {
      background-color: #007bff;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-size: 1.2rem;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
         background-color: #0056b3;
      }

      &:disabled {
         background-color: #ccc;
         cursor: not-allowed;
      }
   }

   input {
      width: 50px;
      text-align: center;
      font-size: 1.1rem;
      border: none;
      background-color: transparent;
      outline: none;
   }
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   input[type='number'] {
      -moz-appearance: textfield;
   }
`;

const AddButton = styled.button`
   background-color: #fff;
   color: #020616;
   border: none;
   padding: 10px 15px;
   font-size: 1.1rem;
   cursor: pointer;
   border-radius: 5px;
   width: 100%;
   transition: background-color 0.3s;

   &:hover {
      background-color: #218838;
   }

   &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
   }
`;

AddToCart.propTypes = {
   product: PropTypes.object.isRequired,
};

export default AddToCart;
