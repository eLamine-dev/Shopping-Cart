import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { useEffect } from 'react';
import { fetchProducts } from './data/fetchProducts.js';

const App = () => {
   const [products, setProducts] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (!products) {
         const getProducts = async () => {
            setIsLoading(true);
            const data = await fetchProducts();
            setProducts(data);
            setIsLoading(false);
         };

         getProducts();
      }
   }, [products]);

   return (
      <CartProvider>
         <Header />
         <main>
            <Outlet context={{ products, isLoading }} />{' '}
         </main>
         <Footer />
      </CartProvider>
   );
};

export default App;
