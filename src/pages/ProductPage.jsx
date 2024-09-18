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
         <ProductHeader>
            <div className="product-image">
               <img src={product.image_url} alt={product.name} />
            </div>
            <div className="product-info">
               <h2>{product.name}</h2>
               <p className="product-price">${product.price.toFixed(2)}</p>
               <AddToCart product={product} />
            </div>
         </ProductHeader>

         <ProductDetails>
            <h3>Product Specifications</h3>
            <SpecsTable product={product} />
         </ProductDetails>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;
   min-height: 90vh;
`;

const ProductHeader = styled.div`
   display: flex;
   gap: 30px;
   margin-bottom: 30px;
   align-items: center;
   text-align: left;

   .product-image {
      flex-basis: 40%;
      img {
         width: 100%;
         height: auto;
         border-radius: 8px;
         box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }
   }

   .product-info {
      flex-basis: 60%;
      h2 {
         font-size: 2rem;
         margin-bottom: 20px;
      }

      .product-price {
         font-size: 1.5rem;
         font-weight: bold;
         margin-bottom: 20px;
         color: #007bff;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;

      .product-image,
      .product-info {
         flex-basis: 100%;
      }
   }
`;

const ProductDetails = styled.div`
   margin-top: 40px;

   h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      text-align: left;
   }

   table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;

      th,
      td {
         border: 1px solid #ddd;
         padding: 15px;
         text-align: left;
      }

      th {
         background-color: #f4f4f4;
         font-weight: bold;
      }

      td {
         background-color: #fff;
      }

      @media (max-width: 768px) {
         th,
         td {
            padding: 10px;
         }
      }
   }
`;

export default ProductPage;
