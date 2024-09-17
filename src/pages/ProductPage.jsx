import { useOutletContext, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import SpecsTable from '../components/SpecsTable';
import AddToCart from '../components/AddToCart';
import styled from 'styled-components';

function ProductPage() {
   const { selectedCategory, selectedManufacturer, productSlug } = useParams();

   const Products = useOutletContext();

   let product = Object.values(Products)
      .flat()
      .find((p) => p.slug === productSlug);

   if (!product) {
      return <p>Product not found.</p>;
   }

   return (
      <Wrapper>
         <h2>{product.name}</h2>
         <p>Price: {product.price}</p>
         <SpecsTable product={product} />
         <AddToCart product={product} />
      </Wrapper>
   );
}

const Wrapper = styled.div`
   max-width: 1400px;
   margin: 0 auto;
   min-height: 90vh;
`;

export default ProductPage;
