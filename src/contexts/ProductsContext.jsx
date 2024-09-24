import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Loading.jsx';

const ProductProvider = () => {
   const products = useLoaderData();

   return (
      <>
         <Outlet context={products} />
      </>
   );
};

export default ProductProvider;
