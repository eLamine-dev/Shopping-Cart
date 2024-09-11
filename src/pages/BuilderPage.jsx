import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const BuilderPage = () => {
   const products = useOutletContext();
   const { addToCart } = useContext(CartContext);

   const [selectedParts, setSelectedParts] = useState({
      cpu: '',
      gpu: '',
      memory: '',
   });

   const handlePartSelection = (category, event) => {
      const selectedProductId = event.target.value;
      const selectedProduct = products[category].find(
         (p) => p.id === selectedProductId
      );

      setSelectedParts((prevParts) => ({
         ...prevParts,
         [category]: selectedProduct,
      }));
   };

   const totalPrice = Object.values(selectedParts).reduce(
      (total, part) => total + (part?.price || 0),
      0
   );

   const handleAddToCart = () => {
      const builtPC = {
         id: new Date().toISOString(),
         name: 'Custom PC Build',
         description: `Custom PC with selected parts: CPU, GPU, Memory, etc.`,
         price: totalPrice,
         parts: selectedParts,
      };

      addToCart(builtPC);
   };

   return (
      <div>
         <h1>Build Your Custom PC</h1>

         <form>
            <div>
               <h2>Select CPU</h2>
               <select
                  value={selectedParts.cpu?.id || ''}
                  onChange={(e) => handlePartSelection('cpu', e)}
               >
                  <option value="">Select a CPU</option>
                  {products.cpu.map((product) => (
                     <option key={product.id} value={product.id}>
                        {product.name}
                     </option>
                  ))}
               </select>
               {selectedParts.cpu && <span> - ${selectedParts.cpu.price}</span>}
            </div>

            <div>
               <h2>Select GPU</h2>
               <select
                  value={selectedParts.gpu?.id || ''}
                  onChange={(e) => handlePartSelection('gpu', e)}
               >
                  <option value="">Select a GPU</option>
                  {products.gpu.map((product) => (
                     <option key={product.id} value={product.id}>
                        {product.name}
                     </option>
                  ))}
               </select>
               {selectedParts.gpu && <span> - ${selectedParts.gpu.price}</span>}
            </div>
         </form>

         <div>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
         </div>

         <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
   );
};

export default BuilderPage;
