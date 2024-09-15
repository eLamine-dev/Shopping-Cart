import { styled } from 'styled-components';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import AddButton from './AddButton';
import { useEffect } from 'react';

function ProductLi({ product, selectedCategory, selectedManufacturer }) {
   const productSpecs = Object.values(product).filter(
      (val) =>
         ![
            product.name,
            product.price,
            product.slug,
            product.id,
            product.category,
            product.manufacturer,
         ].includes(val)
   );
   // .map((key) => ({
   //    label: key.replace(/_/g, ' '), // Replace underscores with spaces
   //    value: Array.isArray(product[key])
   //       ? product[key].join(' - ')
   //       : product[key], // Join arrays with " - "
   // }));

   console.log(productSpecs);

   return (
      <Wrapper specsNumber={productSpecs.length - 1}>
         {selectedManufacturer ? (
            <NavLink
               className="name"
               to={`/shop/${selectedCategory}/manufacturer/${selectedManufacturer}/${product.slug}`}
            >
               {product.name}
            </NavLink>
         ) : (
            <NavLink
               className="name"
               to={`/shop/${selectedCategory}/${product.slug}`}
            >
               {product.name}
            </NavLink>
         )}
         <div className="specs">
            {productSpecs.map((val) => (
               <span className="spec" key={val}>
                  {Array.isArray(val) ? val.join(' - ') : val || 'N/A'}
               </span>
            ))}
            <span className="spec">{product.price} $</span>
            <AddButton product={product} />
         </div>

         {/* <AddButton product={product} /> */}
      </Wrapper>
   );
}

const Wrapper = styled.div`
   /* display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid rgba(255, 255, 255, 0.1);
   height: 3rem; */

   --specsNumber: ${(props) => props.specsNumber};

   display: grid;
   grid-template-columns: 1fr repeat(--specsNumber, 1fr) 1fr;

   .name {
      flex-grow: 1;
   }

   .specs {
      display: flex;
      align-items: center;
      justify-items: center;
      gap: 1rem;
   }
   .spec {
      width: 100px;
   }
`;

ProductLi.propTypes = {
   product: PropTypes.object.isRequired,
   selectedCategory: PropTypes.string,
   selectedManufacturer: PropTypes.string,
};

export default ProductLi;
