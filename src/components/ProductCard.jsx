import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';

function ProductCard({ product }) {
   return (
      <div className="product-card">
         <h2>{product.name}</h2>
         <p>Price: ${product.price}</p>
         <Link to={`/product/${product.id}`}>View Details</Link>
         <AddButton product={product} />
      </div>
   );
}

export default ProductCard;
