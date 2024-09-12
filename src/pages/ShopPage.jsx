import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useOutletContext, useParams } from 'react-router-dom';

function ShopPage() {
   const products = useOutletContext();
   const [randomProducts, setRandomProducts] = useState([]);
   const { category } = useParams();
   const [filters, setFilters] = useState({
      category: '',
      manufacturer: '',
      priceRange: { min: 0, max: 10000 },
   });

   useEffect(() => {
      const allProducts = Object.values(products).flat();
      setRandomProducts(allProducts.sort(() => 0.5 - Math.random()));
   }, [products]);

   return (
      <>
         <h1>Shop</h1>
         {category && (
            <div className="product-grid">
               {products[category].map((product) => (
                  <li key={product.id}>${product.name}</li>
               ))}
            </div>
         )}

         {!category && (
            <div className="product-grid">
               {randomProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </div>
         )}
      </>
   );
}

export default ShopPage;
