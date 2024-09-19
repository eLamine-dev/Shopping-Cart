import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

function Filter({
   categories,
   selectedCategory,

   setPriceRange,
}) {
   const products = useOutletContext();
   const [manufacturers, setManufacturers] = useState([]);
   const [priceRange, setLocalPriceRange] = useState([0, 1000]);
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(1000);

   // Update manufacturers list when a category is selected
   useEffect(() => {
      if (selectedCategory) {
         const manufacturersList = [
            ...new Set(
               products[selectedCategory].map((product) => product.manufacturer)
            ),
         ];
         setManufacturers(manufacturersList);

         // Get min and max prices from products in the selected category
         const prices = products[selectedCategory].map(
            (product) => product.price
         );
         setMinPrice(Math.min(...prices));
         setMaxPrice(Math.max(...prices));
         setLocalPriceRange([Math.min(...prices), Math.max(...prices)]);
      } else {
         setManufacturers([]);
      }
   }, [selectedCategory, products]);

   // Handle price range changes
   const handlePriceChange = (e) => {
      const newRange = [Number(e.target.min), Number(e.target.max)];
      setLocalPriceRange(newRange);
      setPriceRange(newRange);
   };

   return (
      <Wrapper>
         <div className="category-section">
            <h3>Categories</h3>
            {categories.map((category) => (
               <NavLink
                  key={category}
                  to={`/shop/${category}`}
                  className="category-link"
               >
                  {category}
               </NavLink>
            ))}
         </div>

         {selectedCategory && manufacturers.length > 0 && (
            <div className="manufacturer-section">
               <h3>Manufacturers</h3>
               {manufacturers.map((manufacturer) => (
                  <NavLink
                     key={manufacturer}
                     to={`/shop/${selectedCategory}/manufacturer/${manufacturer}`}
                     className="manufacturer-link"
                  >
                     {manufacturer}
                  </NavLink>
               ))}
            </div>
         )}

         {/* Filter by Price */}
         {selectedCategory && (
            <div className="price-filter-section">
               <h3>Filter by Price</h3>
               <div className="price-range">
                  <label htmlFor="priceRange">
                     ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                     type="range"
                     id="priceRange"
                     min={minPrice}
                     max={maxPrice}
                     value={priceRange[0]}
                     onChange={handlePriceChange}
                     step="10"
                  />
                  <input
                     type="range"
                     id="priceRangeMax"
                     min={minPrice}
                     max={maxPrice}
                     value={priceRange[1]}
                     onChange={handlePriceChange}
                     step="10"
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
   background-color: #f8f9fa;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   gap: 20px;
   max-width: 300px;

   h3 {
      font-size: 1.2rem;
      margin-bottom: 15px;
   }

   .category-section,
   .manufacturer-section,
   .price-filter-section {
      margin-bottom: 20px;
   }

   .category-link,
   .manufacturer-link {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: #333;
      font-size: 1rem;
      background-color: #ffffff;
      border-radius: 5px;
      margin-bottom: 10px;
      transition: background-color 0.3s ease;

      &:hover {
         background-color: #007bff;
         color: white;
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

      input[type='range'] {
         width: 100%;
         -webkit-appearance: none;
         appearance: none;
         background: #ddd;
         border-radius: 5px;
         height: 6px;
         outline: none;
         margin: 5px 0;

         &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #007bff;
            cursor: pointer;
         }

         &::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #007bff;
            cursor: pointer;
         }
      }
   }
`;

Filter.propTypes = {
   categories: PropTypes.array.isRequired,
   selectedCategory: PropTypes.string,
};
