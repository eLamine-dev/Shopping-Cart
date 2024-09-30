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
               <CartItem key={item.cartId}>
                  <div className="image-container">
                     {/* <img src={item.image_url} alt={item.name} /> */}
                     <img src="/placeholder.avif" />
                  </div>
                  <div className="details">
                     {item.category === 'build' ? (
                        <Link
                           className="product-name"
                           to={`/builder/${item.cartId}`}
                        >
                           {item.name}
                        </Link>
                     ) : (
                        <Link
                           className="product-name"
                           to={`/shop/${item.category}/${item.slug}`}
                        >
                           {item.name}
                        </Link>
                     )}

                     <p className="unit-price">1 unit Price: ${item.price}</p>
                     {item.category !== 'build' && (
                        <div className="quantity">
                           <span>Quantity </span>
                           <div className="quantity-btns">
                              <button
                                 onClick={() =>
                                    updateQuantity(
                                       item.cartId,
                                       item.quantity - 1
                                    )
                                 }
                                 disabled={item.quantity <= 1}
                              >
                                 -
                              </button>
                              <span className="quantity-value">
                                 {item.quantity}
                              </span>
                              <button
                                 onClick={() =>
                                    updateQuantity(
                                       item.cartId,
                                       item.quantity + 1
                                    )
                                 }
                              >
                                 +
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
                  <div className="total">
                     <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                     <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.cartId)}
                     >
                        Remove
                     </button>
                  </div>
               </CartItem>
            ))}
         </ProductList>
         <CheckoutSection>
            <div className="total-price">
               Total: $
               {cart
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
            </div>
            <Link to="/checkout" className="checkout-button">
               Proceed to Checkout
            </Link>
         </CheckoutSection>
      </Wrapper>
   );
};

export default CartPage;

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 30px auto;
   padding: 20px;
   /* min-height: 70vh; */
   background-color: var(--sl-1);
   border-radius: 10px;
   padding-bottom: 5rem;

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
`;

const CartItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid #cccccc47;
   padding: 16px;

   .product-name {
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      color: var(--white);

      &:hover {
         color: #68a9ef;
      }
   }

   .image-container {
      width: 120px;
      height: 120px;
      img {
         width: 100%;
         height: auto;
      }
   }

   .details {
      flex-basis: 60%;
      text-align: left;
      align-self: flex-start;
      h3 {
         margin-bottom: 10px;
      }
      p {
         margin-bottom: 10px;
      }

      .unit-price {
         font-size: 1.1rem;
      }

      .quantity {
         display: flex;
         align-items: center;
         gap: 8px;
         font-size: 1.1rem;

         .quantity-btns {
            display: flex;
            gap: 5px;

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
                  background-color: #4fa3fc;
                  cursor: not-allowed;
               }
            }

            .quantity-value {
               margin: 0 10px;
               width: 10px;
            }
         }
      }
   }

   .total {
      flex-basis: 20%;
      text-align: right;
      font-size: large;
      font-weight: bold;

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

   border-top: 1px solid #cccccc47;

   .total-price {
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
