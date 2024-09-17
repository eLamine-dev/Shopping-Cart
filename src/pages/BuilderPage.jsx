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
         [category]: selectedProduct ?? '',
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

         <div className="form-container">
            <div className="build-name">
               <h3>
                  <label htmlFor="name">Build Name</label>
               </h3>
               <input
                  type="text"
                  id="name"
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
                     <h3 className="part-name">
                        {category === 'internal-hard-drive'
                           ? 'Storage'
                           : category.replace(/-/g, ' ')}
                     </h3>
                     <select
                        value={selectedParts[category]?.id || ''}
                        onChange={(e) => handlePartSelection(category, e)}
                     >
                        <option value="">
                           + Choose {category.replace(/-/g, ' ')}
                        </option>
                        {products[category].map((product) => (
                           <option key={product.id} value={product.id}>
                              {product.name}
                           </option>
                        ))}
                     </select>

                     <span className="price">
                        ${selectedParts[category].price ?? 0}
                     </span>
                  </div>
               ))}
            </form>

            <div className="total-price">
               Total Price: <strong>${totalPrice.toFixed(2)}</strong>
            </div>
         </div>

         <button onClick={handleAddToCart}>Add to Cart</button>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   .form-container {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
      background-color: #020616;
      border-radius: 10px;
      padding: 1rem;
   }

   .build-name {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0 1rem;
      border-bottom: 1px solid #cccccc47;
   }

   .part-choice {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid #cccccc47;
   }

   .part-choice h3 {
      text-transform: capitalize;
      padding-left: 1rem;
   }

   .part-choice select {
      padding: 10px;
      color: #afb8c6;
   }

   .price {
      justify-self: end;
      padding-right: 1rem;
   }

   .total-price {
      padding: 1rem;
      text-align: right;
      font-size: larger;
   }

   input#name {
      font-size: larger;
   }

   input {
      background-color: #020616;
      outline: none;
      border: none;
   }

   select {
      background-color: #020616;
      outline: none;
      border: none;
      font-size: medium;
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
