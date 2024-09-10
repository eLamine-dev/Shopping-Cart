import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useOutletContext } from 'react-router-dom';

function ShopPage() {
   const Products = useOutletContext();

   return (
      <div>
         <h1>Shop</h1>

         <div className="product-grid">
            {Object.values(Products)
               .flat()
               .map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
         </div>
      </div>
   );
}

export default ShopPage;
