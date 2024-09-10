import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductPage() {
   const { productId } = useParams();
   const { addToCart } = useContext(CartContext);
   const Products = useLoaderData();
   let product = Object.values(Products)
      .flat()
      .find((p) => p.id === productId);

   if (!product) {
      return <p>Product not found.</p>;
   }
   return (
      <div>
         <h2>{product.name}</h2>
         <p>{product.description}</p>
         <p>{product.price}</p>
         <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
   );
}

export default ProductPage;
