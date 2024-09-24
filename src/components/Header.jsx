import { styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import { LiaToolsSolid } from 'react-icons/lia';
import { CgFileDocument } from 'react-icons/cg';
import { MdOutlineSpeed } from 'react-icons/md';
import { LuPcCase } from 'react-icons/lu';
import { PiCpuBold } from 'react-icons/pi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { categories } from '../data/categories';

function Header() {
   const { cart } = useContext(CartContext);
   const [isDropdownOpen, setDropdownOpen] = useState(false);

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
            <div className="upper-row-content">
               <div className="logo">
                  <img className="logo-img" src="/logo.png" alt="logo" />
                  <h3 className="logo-name">eBuilder</h3>
               </div>

               <Link className="cart" to="cart">
                  <RiShoppingCartFill className="cart-icon" />{' '}
                  <span className="cart-num">{cart.length}</span>
               </Link>
            </div>
         </div>
         <div className="lower-row">
            <div className="nav-bar">
               <NavLink className="nav" to="/">
                  <LuPcCase className="nav-icon" />
                  <span>Home</span>
               </NavLink>
               <div className="nav products-nav" onClick={toggleDropdown}>
                  <PiCpuBold className="nav-icon" />
                  <span>Products</span>
               </div>
               <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-menu">
                     {categories.map(({ name, icon: Icon }) => (
                        <div className="dropdown-item" key={name}>
                           <Icon className="dropdown-item-icon" />
                           <Link
                              to={`/shop/${name}`}
                              onClick={() => setDropdownOpen(false)}
                           >
                              {name.replace('-', ' ')}
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
               <NavLink className="nav" to="builder">
                  <LiaToolsSolid className="nav-icon" />
                  <span>Builder</span>
               </NavLink>
               <NavLink className="nav" to="guides">
                  <CgFileDocument className="nav-icon" />
                  <span>Guides</span>
               </NavLink>
               <NavLink className="nav" to="Benchmarks">
                  <MdOutlineSpeed className="nav-icon" />
                  <span>Benchmarks</span>
               </NavLink>
               <div className="empty-div"></div>
               <div className="search-bar">
                  <input type="search" placeholder="Search" />
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
   overflow: visible;

   .upper-row {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      background-color: var(--black);

      .logo {
         color: white;
         display: flex;
         align-items: center;
         gap: 0.5rem;
         cursor: pointer;

         .logo-img {
            height: 40px;
         }

         .logo-name {
            font-size: 1.6rem;
            font-weight: 800;
         }
      }

      .upper-row-content {
         display: flex;
         justify-content: space-between;
         align-items: center;
         max-width: 1400px;
         margin: 0 auto;
         padding: 0 1.5rem;
         flex-grow: 1;
         padding: 0 10px;
      }

      .cart {
         color: var(--white);
         position: relative;
         margin-right: 1rem;

         .cart-icon {
            font-size: 1.5rem;
            color: var(--white);

            &:hover {
               color: #ffc800;
            }
         }

         .cart-num {
            top: -10px;
            right: -12px;
            position: absolute;
         }
      }
   }

   .lower-row {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      background-color: var(--sl-3);
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
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      text-decoration: none;
      color: white;
      text-align: center;
      padding: 0 1rem;
      min-width: 120px;
      border-right: 1px solid var(--border-color);
      font-size: large;
      cursor: pointer;

      .nav-icon {
         font-size: 1.3rem;
      }

      &:hover {
         color: #0077ff;
         .nav-icon {
            color: #ffa600;
         }
      }
   }

   .dropdown {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100vw;
      background-color: var(--sl-2);
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.4s ease-in-out, visibility 0.2s ease-in-out;
      z-index: 999;

      &.open {
         max-height: 500px;
         transition: max-height 0.4s ease-in-out, visibility 0.2s ease-in-out;
      }

      .dropdown-menu {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         padding: 20px;
         column-gap: 60px;
         margin: 0;

         .dropdown-item {
            display: flex;
            align-items: center;
            padding: 8px 5px;
            text-align: left;
            list-style: none;
            text-transform: uppercase;

            &:hover {
               a {
                  color: #0066ff;
               }
               .dropdown-item-icon {
                  color: #ffcc00;
               }
            }

            a {
               color: white;
               text-decoration: none;
               padding: 5px 20px;
               display: block;
            }

            .dropdown-item-icon {
               font-size: 1.3rem;
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
