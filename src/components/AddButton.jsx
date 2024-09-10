import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function AddButton({ product }) {
   const { addToCart } = useContext(CartContext);

   return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}

AddButton.propTypes = {
   product: PropTypes.object.isRequired,
};

export default AddButton;
