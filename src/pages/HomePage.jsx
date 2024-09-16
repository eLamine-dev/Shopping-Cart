import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
   return (
      <Wrapper>
         <HeroSection>
            <HeroText>
               <h1>Build Your Dream PC</h1>
               <p>
                  Find the best parts and build the ultimate gaming or work PC.
               </p>
               <div className="hero-buttons">
                  <Link to="/shop">
                     <button className="shop-button">Shop for PC Parts</button>
                  </Link>
                  <Link to="/builder">
                     <button className="build-button">
                        Build a Complete Computer
                     </button>
                  </Link>
               </div>
            </HeroText>
         </HeroSection>

         <LatestBuildsSection>
            <h2>Latest Builds</h2>
            <div className="build-cards">
               <BuildCard>
                  <h3>Gaming Beast</h3>
                  <p>Built for high-end gaming with the latest GPU.</p>
                  <Link to="/builder">
                     <button>Build Your Computer</button>
                  </Link>
               </BuildCard>
               <BuildCard>
                  <h3>Workstation Pro</h3>
                  <p>Ultimate performance for designers and creators.</p>
                  <Link to="/builder">
                     <button>Build Your Computer</button>
                  </Link>
               </BuildCard>
               <BuildCard>
                  <h3>Budget Build</h3>
                  <p>
                     Affordable build with great performance for everyday use.
                  </p>
                  <Link to="/builder">
                     <button>Build Your Computer</button>
                  </Link>
               </BuildCard>
            </div>
         </LatestBuildsSection>

         <PopularPartsSection>
            <h2>Popular PC Parts</h2>
            <div className="parts-grid">
               <PartCard>
                  <h3>Intel Core i9</h3>
                  <p>Price: $499.99</p>
               </PartCard>
               <PartCard>
                  <h3>NVIDIA RTX 3080</h3>
                  <p>Price: $699.99</p>
               </PartCard>
               <PartCard>
                  <h3>Corsair Vengeance RAM</h3>
                  <p>Price: $159.99</p>
               </PartCard>
            </div>
         </PopularPartsSection>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;
`;

/* Hero Section */
const HeroSection = styled.section`
   height: 500px;
   background-image: url('https://example.com/computer-background.jpg'); /* Replace with your actual image */
   background-size: cover;
   background-position: center;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
`;

const HeroText = styled.div`
   text-align: center;

   h1 {
      font-size: 3em;
      margin-bottom: 10px;
   }

   p {
      font-size: 1.5em;
      margin-bottom: 20px;
   }

   .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;

      button {
         padding: 15px 25px;
         font-size: 1.2em;
         border: none;
         cursor: pointer;
         border-radius: 5px;
      }

      .shop-button {
         background-color: #007bff;
         color: white;

         &:hover {
            background-color: #0056b3;
         }
      }

      .build-button {
         background-color: #28a745;
         color: white;

         &:hover {
            background-color: #218838;
         }
      }
   }
`;

const LatestBuildsSection = styled.section`
   text-align: center;
   padding: 50px 20px;

   h2 {
      margin-bottom: 30px;
      font-size: 2.5em;
   }

   .build-cards {
      display: flex;
      justify-content: space-between;
      gap: 20px;
   }
`;

const BuildCard = styled.div`
   background-color: #f8f9fa;
   padding: 20px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

   h3 {
      margin-bottom: 10px;
   }

   button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
         background-color: #0056b3;
      }
   }
`;

const PopularPartsSection = styled.section`
   padding: 50px 20px;
   text-align: center;

   h2 {
      margin-bottom: 30px;
      font-size: 2.5em;
   }

   .parts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
   }
`;

const PartCard = styled.div`
   background-color: #fff;
   padding: 20px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

   h3 {
      margin-bottom: 10px;
   }
`;

export default HomePage;
