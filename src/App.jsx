import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import styled from 'styled-components';

const Layout = styled.div``;

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
