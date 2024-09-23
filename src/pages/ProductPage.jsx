import { useOutletContext, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import SpecsTable from '../components/SpecsTable';
import AddToCart from '../components/AddToCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProductPage() {
   const { productSlug } = useParams();
   const Products = useOutletContext();

   let product = Object.values(Products)
      .flat()
      .find((p) => p.slug === productSlug);

   if (!product) {
      return <p>Product not found.</p>;
   }

   return (
      <Wrapper>
         <div className="title-section">
            <h2 className="product-title">{product.name}</h2>
            <Link to={`/shop/${product.category}`} className="back-link">
               Back to {product.category}
            </Link>
         </div>

         <div className="content-section">
            <div className="content">
               <div className="left">
                  <div className="product-image">
                     {/* <img src={product.image_url} alt={product.name} /> */}
                     <img src="/placeholder.avif" />
                  </div>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <AddToCart product={product} />
               </div>
               <SpecsTable product={product} />
            </div>
         </div>
      </Wrapper>
   );
}

export default ProductPage;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   .title-section {
      text-align: center;
      margin-bottom: 20px;
      background-color: var(--gr-3);
      height: 140px;
      overflow: hidden;

      .product-title {
         font-size: 2rem;
         font-weight: bold;
         margin-bottom: 5px;
         text-transform: capitalize;
      }

      .back-link {
         font-size: 1rem;
         color: #007bff;
         text-decoration: none;

         &:hover {
            text-decoration: underline;
         }
      }
   }

   .content-section {
      display: flex;
      max-width: 1200px;
      align-self: center;
      width: 100%;

      .content {
         display: grid;
         grid-template-columns: auto 1fr;
         gap: 20px;
         align-items: start;
         width: 100%;

         .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--sl-1);
            padding: 10px;
            border-radius: 10px;

            .product-image {
               width: 100%;
               width: 300px;

               img {
                  width: 100%;
                  height: auto;
                  border-radius: 5px;
               }
            }

            .product-price {
               font-size: 1.5rem;
               font-weight: bold;
               margin: 10px 0;
            }

            button {
               background-color: #007bff;
               color: white;
               padding: 10px 20px;
               border: none;
               border-radius: 5px;
               cursor: pointer;
               font-size: 1rem;

               &:hover {
                  background-color: #0056b3;
               }
            }
         }
      }
   }
`;
