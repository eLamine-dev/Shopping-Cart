import { styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Header() {
   const { cart } = useContext(CartContext);
   return (
      <Wrapper>
         <div className="upper-row">
            <div className="logo-cart">
               <h3>Logo</h3>
               <Link to="cart">Cart ({cart.length})</Link>
            </div>
         </div>
         <div className="lower-row">
            <div className="nav-bar">
               <NavLink className="nav" to="/">
                  Home
               </NavLink>
               <NavLink className="nav" to="shop">
                  Shop
               </NavLink>
               <NavLink className="nav" to="builder">
                  Builder
               </NavLink>
            </div>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.header`
   --border-color: rgba(255, 255, 255, 0.1);
   display: grid;
   grid-template-rows: 3fr 2fr;

   .upper-row {
      border-bottom: 1px solid var(--border-color);
   }

   .lower-row {
      border-bottom: 1px solid var(--border-color);
   }

   .logo-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1700px;
      margin: 0 auto;
   }

   .nav-bar {
      display: flex;
      justify-content: start;

      max-width: 1700px;
      margin: 0 auto;
      height: 100%;
   }

   .nav {
      align-content: center;
      text-decoration: none;
      color: white;
      text-align: center;
      width: 100px;
      border-left: 1px solid var(--border-color);
   }

   .nav:hover {
      background-color: var(--border-color);
   }
`;

export default Header;
