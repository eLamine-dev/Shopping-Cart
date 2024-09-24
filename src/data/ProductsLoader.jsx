import { productsData } from './data';

export const ProductsLoader = async () => {
   // const apiUrl = 'https://pc-hardware.free.beeceptor.com/products';

   try {
      const response = await fetch(apiUrl);

      const data = await response.json();
      console.log('loader called');
      return data;
   } catch (error) {
      console.error('Failed to fetch products data:', error);
      return productsData; // make sure app keep working if api is down

      // throw new Error('Failed to load products. Please try again later.');
   }
};
