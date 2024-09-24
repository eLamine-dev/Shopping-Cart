import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import BuilderPage from './pages/BuilderPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import { ProductsLoader } from './data/ProductsLoader.jsx';
import ProductsProvider from './contexts/ProductsContext.jsx';
import './assets/css/index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,

      children: [
         { path: '/', element: <HomePage /> },
         {
            path: '/', // Product routes need products provider
            element: <ProductsProvider />, // Acts as a product provider
            loader: ProductsLoader,
            children: [
               {
                  path: 'shop/:category/:productSlug',
                  element: <ProductPage />,
               },
               { path: 'shop/:category', element: <ShopPage /> },
               { path: 'shop', element: <ShopPage /> },
               { path: 'builder/:cartId', element: <BuilderPage /> },
               { path: 'builder', element: <BuilderPage /> },
            ],
         },

         { path: 'cart', element: <CartPage /> },
         { path: '*', element: <NotFound /> },
      ],
   },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
