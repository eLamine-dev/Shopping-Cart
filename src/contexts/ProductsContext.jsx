import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Loading.jsx';

const ProductsProvider = () => {
   const products = useLoaderData();

   if (!products) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <Outlet context={products} />
      </div>
   );
};

export default ProductsProvider;
