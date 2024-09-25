import { productsData } from './data';

export const fetchProducts = async () => {
   const controller = new AbortController();
   const timeoutId = setTimeout(() => controller.abort(), 3000);

   try {
      const response = await fetch(
         'https://pc-hardware.free.beeceptor.com/products',
         {
            signal: controller.signal,
         }
      );

      if (!response.ok) {
         throw new Error('Failed to fetch from API');
      }

      const data = await response.json();
      console.log('Data fetched from API');
      return data;
   } catch (error) {
      if (error.name === 'AbortError') {
         console.error('Fetch aborted due to timeout, using local data');
      } else {
         console.error('API failed, using local data:', error);
      }

      return productsData; // Fallback to local data if the API fails or is aborted
   } finally {
      clearTimeout(timeoutId);
   }
};
