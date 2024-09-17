import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const CartPage = () => {
   const { cart, removeFromCart } = useContext(CartContext);

   if (cart.length === 0) {
      return <p>Your cart is empty</p>;
   }

   return (
      <Wrapper>
         <h2 className="title">Your Cart</h2>
         <div className="product-list">
            {cart.map((item) => (
               <div className="cart-item" key={item.id}>
                  <div className="product-image"></div>
                  {item.name} - ${item.price * item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>
                     Remove
                  </button>
                  <div className="checkout-one"></div>
               </div>
            ))}
         </div>
         <div className="checkout-section">
            <div className="total-price">
               Total: $
               {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
            </div>
            <div className="shipping"></div>
            <div className="checkout"></div>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-content: flex-start;
   margin: 0 auto;
   max-width: 1400px;
   min-height: 90vh;
   .title {
      width: 100%;
   }
`;

export default CartPage;
