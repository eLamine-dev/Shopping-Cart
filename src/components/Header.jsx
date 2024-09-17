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
               <h3>PC Build</h3>
               <Link to="cart">Cart ({cart.length})</Link>
            </div>
         </div>
         <div className="lower-row">
            <div className="nav-bar">
               <NavLink className="nav" to="/">
                  Home
               </NavLink>
               <NavLink className="nav" to="shop">
                  Products
               </NavLink>
               <NavLink className="nav" to="builder">
                  Builder
               </NavLink>
               <NavLink className="nav" to="guides">
                  Guides
               </NavLink>
               <NavLink className="nav" to="Benchmarks">
                  Benchmarks
               </NavLink>
               <div className="empty-div"></div>
               <div className="search-bar">
                  <input type="search" name="" id="" placeholder="Search" />
               </div>
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
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      background-color: #020616;
   }

   .lower-row {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      background-color: #141828;
   }

   .logo-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;
      flex-grow: 1;
   }

   .nav-bar {
      display: flex;
      justify-content: space-between;
      max-width: 1400px;
      margin: 0 auto;
      flex-grow: 1;

      /* height: 100%; */
   }

   .nav-bar:first-child {
      border-left: 1px solid var(--border-color);
   }

   .empty-div {
      flex-grow: 1;
      border-right: 1px solid var(--border-color);
   }

   .nav {
      align-content: center;
      text-decoration: none;
      color: white;
      text-align: center;
      width: 120px;
      border-right: 1px solid var(--border-color);
      font-size: large;
      font-weight: 500;
   }

   .search-bar {
      display: flex;
      justify-content: end;
      height: 100%;
      border: none;
      border-right: 1px solid var(--border-color);
      padding: 0 1.5rem;
   }

   input {
      border: #141828;
      background-color: #020616;
      height: 2rem;
      padding: 0 1rem;
      border-radius: 5px;
      outline: none;
   }
`;

export default Header;
