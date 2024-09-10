import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
   const { cart, removeFromCart } = useContext(CartContext);

   if (cart.length === 0) {
      return <p>Your cart is empty</p>;
   }

   return (
      <div>
         <h1>Your Cart</h1>
         <ul>
            {cart.map((item) => (
               <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>
                     Remove
                  </button>
               </li>
            ))}
         </ul>
         <p>
            Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
         </p>
      </div>
   );
};

export default CartPage;
