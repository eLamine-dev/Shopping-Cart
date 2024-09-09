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
import { ProductLoader } from './data/ProductsLoader.jsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         { path: '', element: <HomePage /> },
         { path: 'shop', element: <ShopPage />, loader: ProductLoader },
         {
            path: 'product/:productId',
            element: <ProductPage />,
            loader: ProductLoader,
         },
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
