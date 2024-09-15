import { PropTypes } from 'prop-types';
import styled from 'styled-components';

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
      <Table>
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
      </Table>
   );
}

const Table = styled.div`
   table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
   }

   table td {
      border: 1px solid #a1a1a1;
      padding: 8px;
   }

   /* table tr:nth-child(even) {
      background-color: #222222;
   } */

   table tr:hover {
      background-color: #222222;
   }

   table th,
   table td {
      text-align: left;
   }
`;

SpecsTable.propTypes = {
   product: PropTypes.object,
};

export default SpecsTable;
