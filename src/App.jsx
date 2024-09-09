import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

import './assets/css/App.css';

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
