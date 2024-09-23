import { styled } from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';

const BuilderPage = () => {
   const products = useOutletContext();
   const { cart, addToCart, updateBuild } = useContext(CartContext);
   const { cartId } = useParams();
   const [buildName, setBuildName] = useState('');

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

   useEffect(() => {
      if (cartId) {
         const existingBuild = cart.find((build) => build.cartId === cartId);
         if (existingBuild) {
            setBuildName(existingBuild.name);
            setSelectedParts(existingBuild.parts);
         }
      }
   }, [cartId, cart]);

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

   const handleAddOrUpdateBuild = () => {
      if (!buildName) {
         alert('Please provide a name for your build.');
         return;
      }

      const builtPC = {
         category: 'build',
         cartId: cartId || uuidv4(),
         name: buildName,
         price: totalPrice,
         parts: selectedParts,
         quantity: 1,
      };

      if (cartId) {
         updateBuild(builtPC);
      } else {
         addToCart(builtPC);
      }
   };

   return (
      <Wrapper>
         <div className="title-section">
            <h2 className="product-title">Build Your Custom PC</h2>
         </div>

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

         <button onClick={handleAddOrUpdateBuild}>
            {cartId ? 'Update Build' : 'Save to Cart'}
         </button>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   .title-section {
      text-align: center;
      margin-bottom: -120px;
      background-color: var(--gr-3);
      height: 250px;

      .product-title {
         font-size: 2rem;
         font-weight: bold;
         margin-bottom: 5px;
      }
   }
   .form-container {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
      background-color: var(--sl-1);
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: -28px;
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
      background-color: var(--sl-1);
      outline: none;
      border: none;
   }

   select {
      background-color: var(--sl-1);
      outline: none;
      border: none;
      font-size: medium;
   }

   button {
      padding: 16px 40px;
      background-color: #007bff;
      font-size: 1.2rem;
      color: var(--white);
      border: none;
      cursor: pointer;
      align-self: center;
   }

   button:hover {
      background-color: #0056b3;
   }
`;

export default BuilderPage;
