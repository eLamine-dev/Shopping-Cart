import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AddButton from './AddButton';

function ProductLi({ product, category }) {
   return (
      <li className="product-card">
         <h2>{product.name}</h2>
         <p>Price: ${product.price}</p>
         <NavLink to={`/shop/${category}/${product.id}`}>View Details</NavLink>
         <AddButton product={product} />
      </li>
   );
}

ProductLi.propTypes = {
   product: PropTypes.object.isRequired,
   category: PropTypes.string.isRequired,
};

export default ProductLi;
