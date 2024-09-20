import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductLi from '../components/ProductLi';
import { useOutletContext, useParams } from 'react-router-dom';
import Filter from '../components/FilterSidebar';

function ShopPage() {
   const products = useOutletContext();
   const { category } = useParams();
   const [manufacturer, setManufacturer] = useState(null);
   const [randomProducts, setRandomProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [priceRange, setPriceRange] = useState([0, 1000]);

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

      // window.scrollTo(0, 0);
   }, [category, manufacturer, priceRange, products]);

   useEffect(() => {
      const allProducts = Object.values(products).flat();
      setRandomProducts(allProducts.sort(() => 0.5 - Math.random()));
   }, [products]);

   return (
      <Wrapper>
         <h2 className="title">
            {category ? `${category}` : 'Find your next part'}
         </h2>
         <Filter
            categories={Object.keys(products)}
            selectedCategory={category}
            setPriceRange={setPriceRange}
            setManufacturer={setManufacturer}
            selectedManufacturer={manufacturer}
         />

         <div className={category ? 'list-view' : 'grid-view'}>
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
                       selectedCategory={product.category}
                       selectedManufacturer={manufacturer}
                    />
                 ))}
         </div>
      </Wrapper>
   );
}

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

   .grid-view,
   .list-view {
      background-color: var(--dark1);
   }

   .grid-view {
      --grid-layout-gap: 20px;
      --grid-column-count: 4;
      --grid-item--min-width: 250px;

      --gap-count: calc(var(--grid-column-count) - 1);
      --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
      --grid-item--max-width: calc(
         (100% - var(--total-gap-width)) / var(--grid-column-count)
      );

      display: grid;
      grid-template-columns: repeat(
         auto-fill,
         minmax(
            max(var(--grid-item--min-width), var(--grid-item--max-width)),
            1fr
         )
      );
      grid-template-rows: 500px;
      grid-auto-rows: 500px;
   }

   .list-view {
      display: flex;
      flex-direction: column;
   }
`;

export default ShopPage;
