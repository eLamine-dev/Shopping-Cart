import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { useLoaderData } from 'react-router-dom';

import './assets/css/App.css';

const App = () => {
   const products = useLoaderData();

   return (
      <CartProvider>
         <Header />
         <main>
            <Outlet context={products} />
         </main>
         <Footer />
      </CartProvider>
   );
};

export default App;
