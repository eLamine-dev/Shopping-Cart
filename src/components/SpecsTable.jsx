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
         <div className="title">Specifications</div>
         {technicalProperties.map((spec) => (
            <div className="spec" key={spec.key}>
               <div className="spec-name">
                  <strong>{spec.key}</strong>
               </div>
               <div>
                  {Array.isArray(spec.value)
                     ? spec.value.join(' - ')
                     : spec.value || 'N/A'}
               </div>
            </div>
         ))}
      </Table>
   );
}

const Table = styled.div`
   padding: 10px;
   border-radius: 10px;
   background-color: var(--sl-1);
   font-size: 1.1rem;

   .title {
      font-weight: bold;
      background-color: var(--gr-3);
      border-radius: 3px;
      padding: 10px;
   }

   .spec {
      display: flex;
      justify-content: space-between;
      padding: 16px 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .spec-name {
         text-transform: capitalize;
      }
   }
`;

SpecsTable.propTypes = {
   product: PropTypes.object,
};

export default SpecsTable;
