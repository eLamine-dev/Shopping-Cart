import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, useOutletContext } from 'react-router-dom';

export function Filter({ categories }) {
   let products = useOutletContext();
   let manufacturers = [];

   const [selectedCategory, setSelectedCategory] = useState(null);

   if (selectedCategory) {
      products[selectedCategory].forEach((product) => {
         if (!manufacturers.includes(product.manufacturer)) {
            manufacturers.push(product.manufacturer);
         }
      });
   }

   function handleCategoryClick(category) {
      setSelectedCategory(category);
   }
   return (
      <div>
         {categories.map((category) => (
            <li key={category}>
               <NavLink
                  to={`/shop/${category}`}
                  onClick={() => handleCategoryClick(category)}
               >
                  {category}
               </NavLink>
            </li>
         ))}
         {selectedCategory && (
            <ul>
               {manufacturers.map((manufacturer) => (
                  <li key={manufacturer}>
                     <Link to={`/shop/${selectedCategory}/${manufacturer}`}>
                        {manufacturer}
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

Filter.propTypes = {
   categories: PropTypes.array.isRequired,
};

export default Filter;
