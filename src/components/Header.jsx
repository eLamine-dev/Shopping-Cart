import { styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import { CartContext } from '../contexts/CartContext';

function Header() {
   const { cart } = useContext(CartContext);
   const [isDropdownOpen, setDropdownOpen] = useState(false);

   const categories = [
      'case-fan',
      'case',
      'cpu-cooler',
      'cpu',
      'external-hard-drive',
      'fan-controller',
      'headphones',
      'internal-hard-drive',
      'keyboard',
      'memory',
      'monitor',
      'motherboard',
      'mouse',
      'os',
      'power-supply',
      'sound-card',
      'speakers',
      'ups',
      'video-card',
      'webcam',
      // 'wired-network-card',
      'wireless-network-card',
   ];

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            !event.target.closest('.products-nav') &&
            !event.target.closest('.dropdown')
         ) {
            setDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const toggleDropdown = (e) => {
      e.stopPropagation();
      setDropdownOpen((prev) => !prev);
   };

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
               <div className="nav products-nav" onClick={toggleDropdown}>
                  Products
               </div>
               <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                  <ul className="dropdown-menu">
                     {categories.map((category) => (
                        <li key={category}>
                           <Link
                              to={`/shop/${category}`}
                              onClick={() => setDropdownOpen(false)}
                           >
                              {category}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
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
   position: relative;

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

   .dropdown {
      display: flex;
      justify-content: center;

      position: absolute;
      top: 100%;
      left: 0;
      width: 100vw;
      background-color: var(--dark2);

      overflow: hidden;
      max-height: 0;
      transition: max-height 0.4s ease-in-out;
      z-index: 999;

      &.open {
         max-height: 500px;
         transition: max-height 0.4s ease-in-out;
      }

      .dropdown-menu {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         padding: 20px;
         column-gap: 60px;
         margin: 0;

         li {
            padding: 10px;
            text-align: left;
            list-style: none;

            a {
               color: white;
               text-decoration: none;
               padding: 5px 20px;
               display: block;

               &:hover {
                  color: #007bff;
               }
            }
         }
      }
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
