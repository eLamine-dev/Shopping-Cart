import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
   const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

   if (cart.length === 0) {
      return (
         <Wrapper>
            <EmptyCartMessage>
               <h2>Your Cart is Empty</h2>
               <Link to="/shop">Start Shopping</Link>
            </EmptyCartMessage>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h2 className="title">Your Cart</h2>
         <ProductList>
            {cart.map((item) => (
               <CartItem key={item.id}>
                  <div className="image-container">
                     <img src={item.image_url} alt={item.name} />
                  </div>
                  <div className="details">
                     <h3>{item.name}</h3>
                     <p>Price: ${item.price.toFixed(2)}</p>
                     <div className="quantity">
                        <span>Quantity:</span>
                        <button
                           onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                           }
                           disabled={item.quantity <= 1}
                        >
                           -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                           onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                           }
                        >
                           +
                        </button>
                     </div>
                  </div>
                  <div className="total">
                     <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                     <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                     >
                        Remove
                     </button>
                  </div>
               </CartItem>
            ))}
         </ProductList>
         <CheckoutSection>
            <div className="total-price">
               <h3>
                  Total: $
                  {cart
                     .reduce((sum, item) => sum + item.price * item.quantity, 0)
                     .toFixed(2)}
               </h3>
            </div>
            <Link to="/checkout" className="checkout-button">
               Proceed to Checkout
            </Link>
         </CheckoutSection>
      </Wrapper>
   );
};

export default CartPage;

/* Styled Components */

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 30px auto;
   padding: 20px;
   min-height: 90vh;
   background-color: #020616;
   border-radius: 10px;

   h2.title {
      font-size: 2rem;
      margin-bottom: 20px;
   }
`;

const EmptyCartMessage = styled.div`
   text-align: center;
   margin-top: 50px;

   h2 {
      font-size: 2rem;
      margin-bottom: 20px;
   }

   a {
      text-decoration: none;
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;

      &:hover {
         background-color: #0056b3;
      }
   }
`;

const ProductList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
`;

const CartItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid #cccccc47;
   padding: 20px;

   .image-container {
      flex-basis: 20%;
      img {
         width: 100%;
         height: auto;
         border-radius: 10px;
      }
   }

   .details {
      flex-basis: 60%;
      text-align: left;
      h3 {
         margin-bottom: 10px;
      }
      p {
         margin-bottom: 10px;
      }

      .quantity {
         display: flex;
         align-items: center;
         gap: 10px;

         button {
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;

            &:hover {
               background-color: #0056b3;
            }

            &:disabled {
               background-color: #ccc;
               cursor: not-allowed;
            }
         }

         span {
            font-size: 1.2rem;
         }
      }
   }

   .total {
      flex-basis: 20%;
      text-align: right;

      .remove-button {
         background-color: #dc3545;
         color: white;
         padding: 5px 10px;
         border: none;
         border-radius: 5px;
         cursor: pointer;

         &:hover {
            background-color: #c82333;
         }
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;

      .total {
         text-align: left;
      }
   }
`;

const CheckoutSection = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
   margin-top: 30px;
   border-top: 1px solid #cccccc47;

   .total-price h3 {
      font-size: 1.5rem;
      font-weight: bold;
   }

   .checkout-button {
      background-color: #28a745;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;

      &:hover {
         background-color: #218838;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;

      .checkout-button {
         width: 100%;
         text-align: center;
      }
   }
`;
