import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductLi from '../components/ProductLi';
import { useOutletContext, useParams } from 'react-router-dom';
import Filter from '../components/FilterSidebar';

function ShopPage() {
   const products = useOutletContext();
   const [randomProducts, setRandomProducts] = useState([]);
   const { category, manufacturer } = useParams();
   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
      const filteredProductsList = category
         ? manufacturer
            ? products[category].filter(
                 (product) => product.manufacturer === manufacturer
              )
            : products[category]
         : [];
      setFilteredProducts(filteredProductsList);
      window.scrollTo(0, 0);
   }, [category, manufacturer]);

   useEffect(() => {
      const allProducts = Object.values(products).flat();
      setRandomProducts(allProducts.sort(() => 0.5 - Math.random()));
   }, [products]);

   return (
      <>
         <h1>Shop</h1>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Filter
               categories={Object.keys(products)}
               selectedCategory={category}
            />

            <div className="product-grid">
               {category
                  ? filteredProducts.map((product) => (
                       <ProductLi
                          key={product.id}
                          product={product}
                          selectedCategory={category}
                          selectedManufacturer={manufacturer}
                       />
                    ))
                  : randomProducts.map((product) => (
                       <ProductCard
                          key={product.id}
                          product={product}
                          category={product.category}
                          selectedManufacturer={manufacturer}
                       />
                    ))}
            </div>
         </div>
      </>
   );
}

export default ShopPage;
