import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import './assets/css/App.css';

const App = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default App;
