import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductLi from '../components/ProductLi';
import { useOutletContext, useParams } from 'react-router-dom';
import Filter from '../components/FilterSidebar';
import { Link } from 'react-router-dom';

function ShopPage() {
   const products = useOutletContext();
   const { category } = useParams();
   const [manufacturer, setManufacturer] = useState(null);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [priceRange, setPriceRange] = useState([0, 1000]);

   const getFeaturedProducts = () => {
      const featured = [];
      Object.keys(products).forEach((category) => {
         if (products[category]?.length > 0) {
            const highestPricedProduct = products[category].reduce(
               (max, product) => (product.price > max.price ? product : max)
            );
            featured.push(highestPricedProduct);
         }
      });
      return featured;
   };

   useEffect(() => {
      if (category) {
         let filtered = manufacturer
            ? products[category].filter(
                 (product) => product.manufacturer === manufacturer
              )
            : products[category];

         filtered = filtered.filter(
            (product) =>
               product.price >= priceRange[0] && product.price <= priceRange[1]
         );

         setFilteredProducts(filtered);
      } else {
         setFilteredProducts(getFeaturedProducts());
      }
   }, [category, manufacturer, priceRange, products]);

   return (
      <Wrapper>
         <div className="title-section">
            <h2 className="title">
               {category
                  ? `${category.replace(/-/g, ' ')}`
                  : 'Featured PC Parts'}
            </h2>
         </div>

         <div className="content">
            <Filter
               categories={Object.keys(products)}
               selectedCategory={category}
               setPriceRange={setPriceRange}
               setManufacturer={setManufacturer}
               selectedManufacturer={manufacturer}
            />

            <div className="list-view">
               <div className="list-title">
                  {filteredProducts.length} products
               </div>
               {filteredProducts.map((product) => (
                  <ProductLi
                     key={product.id}
                     product={product}
                     selectedCategory={category || product.category}
                     selectedManufacturer={manufacturer}
                  />
               ))}
            </div>
         </div>
      </Wrapper>
   );
}

export default ShopPage;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   .content {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: start;
      gap: 20px;
      max-width: 1600px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
   }

   .title-section {
      text-align: center;
      margin-bottom: -120px;
      background-color: var(--gr-3);
      height: 250px;

      .title {
         font-size: 2rem;
         font-weight: bold;
         text-transform: uppercase;
      }
   }

   .list-view {
      display: flex;
      flex-direction: column;
      background-color: var(--sl-1);
      padding: 20px;
      border-radius: 10px;

      .list-title {
         font-weight: bold;
         background-color: var(--gr-3);
         border-radius: 3px;
         padding: 10px;
      }
   }
`;
