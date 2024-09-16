import { styled } from 'styled-components';
import { useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const BuilderPage = () => {
   const products = useOutletContext();
   const { addToCart } = useContext(CartContext);

   const [selectedParts, setSelectedParts] = useState({
      cpu: '',
      'cpu-cooler': '',
      motherboard: '',
      memory: '',
      'internal-hard-drive': '',
      'video-card': '',
      case: '',
      os: '',
      'power-supply': '',
   });

   const [buildName, setBuildName] = useState('');

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
      if (!buildName) {
         alert('Please provide a name for your build.');
         return;
      }

      const builtPC = {
         id: new Date().toISOString(),
         name: buildName,
         price: totalPrice,
         parts: selectedParts,
      };

      addToCart(builtPC);
   };

   return (
      <Wrapper>
         <h1>Build Your Custom PC</h1>

         <div>
            <label htmlFor="build-name">Build Name</label>
            <input
               type="text"
               id="build-name"
               name="name"
               value={buildName}
               onChange={(e) => setBuildName(e.target.value)}
               placeholder="Enter build name"
               required
            />
         </div>

         <form>
            {[
               'cpu',
               'cpu-cooler',
               'motherboard',
               'memory',
               'internal-hard-drive',
               'video-card',
               'case',
               'os',
               'power-supply',
            ].map((category) => (
               <div key={category} className="part-choice">
                  <h4>
                     {category === 'internal-hard-drive'
                        ? 'Storage'
                        : category.replace(/-/g, ' ')}
                  </h4>
                  <select
                     value={selectedParts[category]?.id || ''}
                     onChange={(e) => handlePartSelection(category, e)}
                  >
                     <option value="">
                        Select a {category.replace(/-/g, ' ')}
                     </option>
                     {products[category].map((product) => (
                        <option key={product.id} value={product.id}>
                           {product.name}
                        </option>
                     ))}
                  </select>
                  {selectedParts[category] && (
                     <span> - ${selectedParts[category].price}</span>
                  )}
               </div>
            ))}
         </form>

         <div>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
         </div>

         <button onClick={handleAddToCart}>Add to Cart</button>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   padding: 1rem;

   .part-choice {
      margin-bottom: 20px;
   }

   .part-choice h2 {
      margin-bottom: 10px;
   }

   .part-choice select {
      width: 100%;
      padding: 10px;
      margin-bottom: 5px;
   }

   input#build-name {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
   }

   button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
   }

   button:hover {
      background-color: #0056b3;
   }
`;

export default BuilderPage;
