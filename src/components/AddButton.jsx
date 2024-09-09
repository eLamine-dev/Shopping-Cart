import { useCart } from '../contexts/UseCart';

function AddButton({ product }) {
   const { addToCart } = useCart();

   return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}

export default AddButton;
