import { PropTypes } from 'prop-types';
function SpecsTable({ product }) {
   const ignoredProperties = [
      'id',
      'slug',
      'description',
      'name',
      'category',
      'price',
   ];

   const getTechnicalProperties = (product) => {
      return Object.keys(product)
         .filter((key) => !ignoredProperties.includes(key))
         .map((key) => ({
            key: key.replace(/_/g, ' '),
            value: product[key],
         }));
   };

   const technicalProperties = getTechnicalProperties(product);
   return (
      <table>
         <tbody>
            {technicalProperties.map((spec) => (
               <tr key={spec.key}>
                  <td>
                     <strong>{spec.key}:</strong>
                  </td>
                  <td>
                     {Array.isArray(spec.value)
                        ? spec.value.join(' - ')
                        : spec.value || 'N/A'}
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

SpecsTable.propTypes = {
   product: PropTypes.object,
};

export default SpecsTable;
