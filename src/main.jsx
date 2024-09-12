import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import BuilderPage from './pages/BuilderPage';
import CartPage from './pages/CartPage';
import './assets/css/index.css';
import { ProductsLoader } from './data/ProductsLoader.jsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      loader: ProductsLoader,
      children: [
         { path: '', element: <HomePage /> },

         {
            path: 'shop',
            element: <ShopPage />,
         },
         {
            path: 'shop/:category',
            element: <ShopPage />,
         },
         { path: 'shop/:category/:productId', element: <ProductPage /> },
         { path: 'builder', element: <BuilderPage /> },
         { path: 'cart', element: <CartPage /> },
      ],
   },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
