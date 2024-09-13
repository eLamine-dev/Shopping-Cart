import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AddButton from './AddButton';

function ProductCard({ product, selectedCategory, selectedManufacturer }) {
   return (
      <div className="product-card">
         <h2>{product.name}</h2>
         <p>Price: ${product.price}</p>
         {selectedManufacturer ? (
            <NavLink
               to={`/shop/${selectedCategory}/manufacturer/${selectedManufacturer}/${product.id}`}
            >
               View Details
            </NavLink>
         ) : (
            <NavLink to={`/shop/${selectedCategory}/${product.id}`}>
               View Details
            </NavLink>
         )}
         <AddButton product={product} />
      </div>
   );
}

ProductCard.propTypes = {
   product: PropTypes.object.isRequired,
   selectedCategory: PropTypes.string,
   selectedManufacturer: PropTypes.string,
};

export default ProductCard;
