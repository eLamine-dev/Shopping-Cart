import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MosaicGrid = () => {
   const categories = [
      {
         name: 'case-fan',
         img: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
         name: 'case',
         img: 'https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      },
      {
         name: 'cpu-cooler',
         img: 'https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         className: 'tall',
      },
      {
         name: 'cpu',
         img: 'https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         className: 'wide',
      },
      {
         name: 'external-hard-drive',
         img: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      },
      {
         name: 'memory',
         img: 'https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
         className: 'tall',
      },
      {
         name: 'monitor',
         img: 'https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
         className: 'big',
      },
      {
         name: 'motherboard',
         img: 'https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
      },
      {
         name: 'video-card',
         img: 'https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         className: 'wide',
      },
      {
         name: 'power-supply',
         img: 'https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
         className: 'big',
      },
   ];

   return (
      <GridWrapper>
         {categories.map((category, index) => (
            <div key={index} className={`item ${category.className || ''}`}>
               <img src={category.img} alt={category.name} className="img" />
               <div className="overlay">
                  <h3>{category.name.replace('-', ' ')}</h3>
                  <Link to={`/shop/${category.name}`} className="shop-link">
                     Shop Now
                  </Link>
               </div>
            </div>
         ))}
      </GridWrapper>
   );
};

export default MosaicGrid;

const GridWrapper = styled.div`
   display: grid;
   grid-gap: 10px;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   grid-auto-rows: 200px;
   grid-auto-flow: dense;
   grid-column: 1/-1;

   div.item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 5px;
      }

      .overlay {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.5);
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         opacity: 0;
         transition: opacity 0.3s ease-in-out;

         h3 {
            color: white;
            font-size: 1.5rem;
            margin-bottom: 10px;
            text-transform: capitalize;
         }

         .shop-link {
            background-color: #007bff;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            text-transform: uppercase;
            text-decoration: none;
            transition: background-color 0.3s ease;

            &:hover {
               background-color: #0056b3;
            }
         }
      }

      &:hover .overlay {
         opacity: 1;
      }
   }

   .wide {
      grid-column: span 2;
   }

   .tall {
      grid-row: span 2;
   }

   .big {
      grid-column: span 2;
      grid-row: span 2;
   }

   @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: 150px;
   }

   @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-auto-rows: 120px;
   }
`;
