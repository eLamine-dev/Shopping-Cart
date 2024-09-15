import { styled } from 'styled-components';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AddButton from './AddButton';

function ProductCard({ product, selectedCategory, selectedManufacturer }) {
   return (
      <Wrapper className="wrapper">
         <img src="public/placeholder.avif" alt={product.name} />
         <h4>{product.name}</h4>
         <p>Price: ${product.price}</p>
         <div>
            {selectedManufacturer ? (
               <NavLink
                  to={`/shop/${selectedCategory}/manufacturer/${selectedManufacturer}/${product.slug}`}
               >
                  View Details
               </NavLink>
            ) : (
               <NavLink to={`/shop/${selectedCategory}/${product.slug}`}>
                  View Details
               </NavLink>
            )}
            <AddButton product={product} />
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 0;
   border: 1px solid rgba(255, 255, 255, 0.1);

   img {
      height: 200px;
      width: 200px;
      align-self: center;
   }
`;

ProductCard.propTypes = {
   product: PropTypes.object.isRequired,
   selectedCategory: PropTypes.string,
   selectedManufacturer: PropTypes.string,
};

export default ProductCard;
