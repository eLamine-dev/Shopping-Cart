import { Link } from 'react-router-dom';

function Header() {
   return (
      <>
         <Link to="/">Home</Link>
         <Link to="shop">Shop</Link>
         <Link to="builder">Builder</Link>
         {/* <Link to="/cart">Cart ({cart.length})</Link> */}
      </>
   );
}

export default Header;
