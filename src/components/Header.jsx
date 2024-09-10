import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Header() {
   const { cart } = useContext(CartContext);
   return (
      <>
         <Link to="/">Home</Link>
         <Link to="shop">Shop</Link>
         <Link to="builder">Builder</Link>
         <Link to="/cart">Cart ({cart.length})</Link>
      </>
   );
}

export default Header;
