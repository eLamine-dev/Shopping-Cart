import { Link } from 'react-router-dom';

function Header() {
   return (
      <>
         <Link to="/">Home</Link>
         <Link to="shop">Shop</Link>
         <Link to="builder">Builder</Link>
      </>
   );
}

export default Header;
