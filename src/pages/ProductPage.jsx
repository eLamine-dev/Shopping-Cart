import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function ProductPage() {
   const { productId } = useParams();
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
      </div>
   );
}

export default ProductPage;
