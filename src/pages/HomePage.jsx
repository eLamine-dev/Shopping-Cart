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
                     <button className="build-button">Start your build</button>
                  </Link>
               </div>
            </HeroText>
         </HeroSection>

         <BuildingGuides>
            <div className="section-header">
               <h2>Latest Guides</h2>
               <p>
                  Learn how to build your ultimate PC and start your own
                  journey.
               </p>
               <Link to="/guides">
                  <button>View our guides</button>
               </Link>
            </div>
            <div className="guide-cards">
               <GuideCard>
                  <div className="img"></div>
                  <h3>Gaming PC Build Guide</h3>
                  <p>Step-by-step guide for building a high-end gaming PC.</p>
               </GuideCard>
               <GuideCard>
                  <div className="img"></div>
                  <h3>Choose your motherboard</h3>
                  <p>Learn to choose the best motherboard for your PC.</p>
               </GuideCard>
               <GuideCard>
                  <div className="img"></div>
                  <h3>Upgrade your old PC</h3>
                  <p>
                     Guide for upgrading your existing rig with compatible
                     parts.
                  </p>
               </GuideCard>
            </div>
         </BuildingGuides>

         <LatestBuildsSection>
            <div className="section-header">
               <h2>Latest Builds</h2>
               <p>Check out our latest builds from our community.</p>
               <Link to="/builder">
                  <button>Build Your Computer</button>
               </Link>
            </div>
            <div className="build-cards">
               <BuildCard>
                  <div className="img"></div>
                  <h3>Gaming Beast</h3>
                  <p>Built for high-end gaming with the latest GPU.</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </BuildCard>
               <BuildCard>
                  <div className="img"></div>
                  <h3>Workstation Pro</h3>
                  <p>Ultimate performance for designers and creators.</p>
                  <div className="rating">⭐⭐⭐⭐</div>
               </BuildCard>
               <BuildCard>
                  <div className="img"></div>
                  <h3>Budget Build</h3>
                  <p>
                     Affordable build with great performance for everyday use.
                  </p>
                  <div className="rating">⭐⭐⭐⭐</div>
               </BuildCard>
            </div>
         </LatestBuildsSection>

         <PopularPartsSection>
            <div className="section-header">
               <h2>Popular PC Parts</h2>
               <p>Find the latest parts on the market and upgrade your PC</p>
               <Link to="/shop">
                  <button>Shop Now</button>
               </Link>
            </div>
            <div className="parts-grid">
               <PartCard>
                  <div className="img"></div>
                  <h3>Intel Core i9</h3>
                  <p>Price: $499.99</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </PartCard>
               <PartCard>
                  <div className="img"></div>
                  <h3>NVIDIA RTX 3080</h3>
                  <p>Price: $699.99</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </PartCard>
               <PartCard>
                  <div className="img"></div>
                  <h3>Corsair Vengeance RAM</h3>
                  <p>Price: $159.99</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </PartCard>
            </div>
         </PopularPartsSection>
      </Wrapper>
   );
};

export default HomePage;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;

   .section-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: min-content;
      min-width: 300px;

      h2 {
         font-size: 2.5rem;
         margin: 0;
      }

      p {
         font-size: 1.2rem;
         margin: 0;
         margin-bottom: 20px;
      }

      button {
         background-color: #007bff;
         color: white;
         padding: 10px 20px;
         border: none;
         cursor: pointer;
         border-radius: 5px;

         &:hover {
            background-color: #0056b3;
         }
      }
   }
`;

const HeroSection = styled.section`
   height: 500px;
   /* background-image: url('hero-background.jpg');
   background-size: cover;
   background-position: center; */
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   text-align: center;
   margin-bottom: 50px;
`;

const HeroText = styled.div`
   h1 {
      font-size: 3rem;
      margin-bottom: 20px;
   }

   p {
      font-size: 1.5rem;
   }

   .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;

      button {
         padding: 15px 25px;
         font-size: 1.2rem;
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

const BuildingGuides = styled.section`
   max-width: var(--main-width);
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   margin-bottom: 50px;
   align-items: center;

   .guide-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }
`;

const GuideCard = styled.div`
   background-color: #06121f;
   width: 300px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   cursor: pointer;
   margin: 10px;

   .img {
      width: 300px;
      height: 200px;
      background-image: url('placeholder.avif');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 10px 10px 0 0;
   }

   h3 {
      margin-bottom: 10px;
   }
`;

const LatestBuildsSection = styled.section`
   max-width: var(--main-width);
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   margin-bottom: 50px;
   align-items: center;

   .build-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      /* gap: 20px; */
   }
`;

const BuildCard = styled.div`
   background-color: #06121f;
   width: 300px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   cursor: pointer;
   margin: 10px;

   .img {
      width: 300px;
      height: 200px;
      background-image: url('placeholder.avif');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 10px 10px 0 0;
   }

   h3 {
      margin-bottom: 10px;
   }
`;

const PopularPartsSection = styled.section`
   max-width: var(--main-width);
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   margin-bottom: 50px;
   align-items: center;

   .parts-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }
`;

const PartCard = styled.div`
   background-color: #06121f;
   width: 300px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   cursor: pointer;
   margin: 10px;

   .img {
      width: 300px;
      height: 200px;
      background-image: url('placeholder.avif');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 10px 10px 0 0;
   }

   h3 {
      margin-bottom: 10px;
   }
`;
