import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink, useOutletContext } from 'react-router-dom';

function Filter({ categories, selectedCategory }) {
   const products = useOutletContext();
   const [manufacturers, setManufacturers] = useState([]);

   useEffect(() => {
      if (selectedCategory) {
         const manufacturersList = [
            ...new Set(
               products[selectedCategory].map((product) => product.manufacturer)
            ),
         ];
         setManufacturers(manufacturersList);
      } else {
         setManufacturers([]);
      }
   }, [selectedCategory, products]);

   return (
      <div>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            {categories.map((category) => (
               <NavLink
                  key={category}
                  to={`/shop/${category}`}
                  style={{ textAlign: 'start' }}
               >
                  {category}
               </NavLink>
            ))}
         </div>

         {selectedCategory && manufacturers.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               {manufacturers.map((manufacturer) => (
                  <NavLink
                     key={manufacturer}
                     to={`/shop/${selectedCategory}/manufacturers/${manufacturer}`}
                     style={{ textAlign: 'start' }}
                  >
                     {manufacturer}
                  </NavLink>
               ))}
            </div>
         )}
      </div>
   );
}

Filter.propTypes = {
   categories: PropTypes.array.isRequired,
   selectedCategory: PropTypes.string,
};

export default Filter;
