import { styled } from 'styled-components';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import AddToCart from './AddToCart';
import { useEffect } from 'react';

function ProductLi({ product, selectedCategory, selectedManufacturer }) {
   const productSpecs = Object.keys(product)
      .filter(
         (key) =>
            ![
               'name',
               'price',
               'slug',
               'id',
               'category',
               'manufacturer',
            ].includes(key)
      )
      .reduce((specs, key) => {
         const value = product[key];

         specs[key] =
            value === true
               ? 'Yes'
               : value === false
               ? 'No'
               : value == null
               ? '-'
               : Array.isArray(value)
               ? value.join(' - ')
               : value;

         return specs;
      }, {});

   console.log(productSpecs);

   return (
      <Wrapper specsNumber={productSpecs.length - 1}>
         {/* <div className="image"></div> */}
         <div className="left-side">
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
               {Object.entries(productSpecs).map(([label, value]) => (
                  <div key={label}>
                     <span>
                        {label.charAt(0).toUpperCase() +
                           label.slice(1).replace(/_/g, ' ')}
                        :
                     </span>
                     <span> {value}</span>
                  </div>
               ))}
            </div>
         </div>
         <div className="right-side">
            <span className="price">$ {product.price}</span>
            <AddToCart product={product} />
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   border-top: 1px solid rgba(255, 255, 255, 0.1);
   padding: 1rem;

   /* --specsNumber: ${(props) => props.specsNumber};

   display: grid;
   grid-template-columns: 1fr repeat(--specsNumber, 1fr) 1fr; */

   .name {
      flex-grow: 1;
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
   }

   .name:hover {
      color: #9fa4ef;
   }

   .specs {
      display: grid;
      grid-template-columns: 1fr 1fr;
   }
   .spec {
      width: 100px;
   }

   .right-side {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
   }
   .left-side {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      gap: 1rem;
   }
`;

ProductLi.propTypes = {
   product: PropTypes.object.isRequired,
   selectedCategory: PropTypes.string,
   selectedManufacturer: PropTypes.string,
};

export default ProductLi;
