import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import styled from 'styled-components';

const App = () => {
   return (
      <CartProvider>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </CartProvider>
   );
};

export default App;
