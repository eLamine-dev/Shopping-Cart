import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';

function ShopPage() {
   const Products = useLoaderData();

   // useEffect(() => {
   //    // fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
   //    //    .then(res => res.json())
   //    //    .then(data => setProducts(data))
   //    let data = productLoader();

   //    setProducts(data);
   //    console.log(Object.values(Products));
   // }, []);

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
