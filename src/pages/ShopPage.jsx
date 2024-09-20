import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductLi from '../components/ProductLi';
import { useOutletContext, useParams } from 'react-router-dom';
import Filter from '../components/FilterSidebar';
import { Link } from 'react-router-dom';
import MosaicGrid from '../components/ShopGrid';

function ShopPage() {
   const products = useOutletContext();
   const { category } = useParams();
   const [manufacturer, setManufacturer] = useState(null);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [priceRange, setPriceRange] = useState([0, 1000]);

   // Predefined category images (or you can add more categories)
   const categoryImages = {
      cpu: '/images/cpu.jpg',
      gpu: '/images/gpu.jpg',
      memory: '/images/memory.jpg',
      motherboard: '/images/motherboard.jpg',
      'power-supply': '/images/power-supply.jpg',
   };

   useEffect(() => {
      if (category) {
         let filteredProducts = manufacturer
            ? products[category].filter(
                 (product) => product.manufacturer === manufacturer
              )
            : products[category];

         filteredProducts = filteredProducts.filter(
            (product) =>
               product.price >= priceRange[0] && product.price <= priceRange[1]
         );

         setFilteredProducts(filteredProducts);
      } else {
         setFilteredProducts([]);
      }
   }, [category, manufacturer, priceRange, products]);

   return (
      <Wrapper>
         <h2 className="title">
            {category ? `${category}` : 'Explore PC Parts'}
         </h2>

         {/* Mosaic Grid for Categories */}
         {!category && <MosaicGrid />}

         {/* Render product list if a category is selected */}
         {category && (
            <>
               <Filter
                  categories={Object.keys(products)}
                  selectedCategory={category}
                  setPriceRange={setPriceRange}
                  setManufacturer={setManufacturer}
                  selectedManufacturer={manufacturer}
               />
               <div className="list-view">
                  {filteredProducts.map((product) => (
                     <ProductLi
                        key={product.id}
                        product={product}
                        selectedCategory={category}
                        selectedManufacturer={manufacturer}
                     />
                  ))}
               </div>
            </>
         )}
      </Wrapper>
   );
}

export default ShopPage;

/* Styled Components */

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto 1fr;
   gap: 2rem;
   max-width: 1600px;
   margin: 0 auto;

   .title {
      grid-column: 1 / -1;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .list-view {
      display: flex;
      flex-direction: column;
   }
`;
