import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

export function Filter({ categories }) {
   return (
      <div>
         {categories.map((category) => (
            <li key={category}>
               <NavLink to={category}>{category}</NavLink>
            </li>
         ))}
      </div>
   );
}

Filter.propTypes = {
   categories: PropTypes.array.isRequired,
};

export default Filter;
