import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Filter({
   categories,
   selectedCategory,
   setManufacturer,
   setPriceRange,
   selectedManufacturer,
}) {
   const products = useOutletContext();
   const [manufacturers, setManufacturers] = useState([]);
   const [localPriceRange, setLocalPriceRange] = useState([0, 1000]);
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(1000);

   useEffect(() => {
      if (selectedCategory) {
         const manufacturersList = [
            ...new Set(
               products[selectedCategory].map((product) => product.manufacturer)
            ),
         ];
         setManufacturers(manufacturersList);

         const shownProducts = selectedManufacturer
            ? products[selectedCategory].filter(
                 (product) => product.manufacturer === selectedManufacturer
              )
            : products[selectedCategory];

         const prices = shownProducts.map((product) => product.price);

         setMinPrice(Math.min(...prices));
         setMaxPrice(Math.max(...prices));
         setLocalPriceRange([Math.min(...prices), Math.max(...prices)]);
         setPriceRange([Math.min(...prices), Math.max(...prices)]);
      } else {
         setManufacturers([]);
      }
   }, [selectedCategory, products, selectedManufacturer]);

   const handlePriceChange = (newRange) => {
      setLocalPriceRange(newRange);
      setPriceRange(newRange);
   };

   return (
      <Wrapper>
         {/* Categories Section */}
         <div className="category-section">
            <h3>Categories</h3>
            <ul className="category-list">
               {categories.map((category) => (
                  <li key={category}>
                     <StyledNavLink
                        to={`/shop/${category}`}
                        isSelected={category === selectedCategory}
                        onClick={() => setManufacturer(null)}
                     >
                        {category}
                     </StyledNavLink>
                  </li>
               ))}
            </ul>
         </div>

         {/* Manufacturers Section */}
         {selectedCategory && manufacturers.length > 0 && (
            <div className="manufacturer-section">
               <h3>Manufacturers</h3>
               <div className="manufacturer-list">
                  {manufacturers.map((manufacturer) => (
                     <label key={manufacturer} className="manufacturer-radio">
                        <input
                           type="radio"
                           value={manufacturer}
                           checked={manufacturer === selectedManufacturer}
                           onChange={() => setManufacturer(manufacturer)}
                        />
                        <span>{manufacturer}</span>
                     </label>
                  ))}
               </div>
            </div>
         )}

         {selectedCategory && (
            <div className="price-filter-section">
               <h3>Filter by Price</h3>
               <div className="price-range">
                  <label htmlFor="priceRange">
                     ${localPriceRange[0]} - ${localPriceRange[1]}
                  </label>
                  <Slider
                     range
                     min={minPrice}
                     max={maxPrice}
                     defaultValue={localPriceRange}
                     value={localPriceRange}
                     onChange={handlePriceChange}
                  />
               </div>
            </div>
         )}
      </Wrapper>
   );
}

export default Filter;

/* Styled Components */

const Wrapper = styled.div`
   background-color: var(--dark1);
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   gap: 20px;
   max-width: 300px;

   h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ddd;
   }

   .category-section,
   .manufacturer-section,
   .price-filter-section {
      margin-bottom: 20px;
   }

   .manufacturer-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
   }

   .manufacturer-radio {
      display: flex;
      align-items: center;
      gap: 10px;

      input[type='radio'] {
         accent-color: #007bff;
         cursor: pointer;
      }

      span {
         font-size: 1rem;
      }
   }

   .price-range {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
         font-size: 1rem;
         color: #333;
      }
   }
`;

const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #333;
   padding: 8px 0;
   font-size: 1rem;
   display: inline-block;
   position: relative;
   transition: all 0.3s ease;

   &:hover {
      color: #007bff;
   }

   ${({ isSelected }) =>
      isSelected &&
      `
         color: #007bff;
         &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #007bff;
            bottom: -3px;
            left: 0;
         }
      `}
`;

Filter.propTypes = {
   categories: PropTypes.array.isRequired,
   selectedCategory: PropTypes.string,
};
