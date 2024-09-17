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

         {/* Building Guides Section */}
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
                  <h3>Gaming PC Build Guide</h3>
                  <p>Step-by-step guide for building a high-end gaming PC.</p>
                  <Link to="/guides/gaming">
                     <button>Read More</button>
                  </Link>
               </GuideCard>
               <GuideCard>
                  <h3>Choose your motherboard</h3>
                  <p>
                     Learn to build how to choose the best motherboard for your
                     PC.
                  </p>
                  <Link to="/guides/workstation">
                     <button>Read More</button>
                  </Link>
               </GuideCard>
               <GuideCard>
                  <h3>Upgrade your old PC </h3>
                  <p>
                     Guide for upgrading you existing rig with compatible parts.
                  </p>
                  <Link to="/guides/budget">
                     <button>Read More</button>
                  </Link>
               </GuideCard>
            </div>
         </BuildingGuides>

         {/* Latest Builds Section */}
         <LatestBuildsSection>
            <div className="build-cards">
               <BuildCard>
                  <div className="image-container">
                     <img src="/images/gaming-beast.jpg" alt="Gaming Beast" />
                  </div>
                  <h3>Gaming Beast</h3>
                  <p>Built for high-end gaming with the latest GPU.</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </BuildCard>
               <BuildCard>
                  <div className="image-container">
                     <img
                        src="/images/workstation-pro.jpg"
                        alt="Workstation Pro"
                     />
                  </div>
                  <h3>Workstation Pro</h3>
                  <p>Ultimate performance for designers and creators.</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </BuildCard>
               <BuildCard>
                  <div className="image-container">
                     <img src="/images/budget-build.jpg" alt="Budget Build" />
                  </div>
                  <h3>Budget Build</h3>
                  <p>
                     Affordable build with great performance for everyday use.
                  </p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </BuildCard>
            </div>
            <div className="section-header">
               <h2>Latest Builds</h2>
               <p>Check out our latest builds from our community.</p>
               <Link to="/builder">
                  <button>Build Your Computer</button>
               </Link>
            </div>
         </LatestBuildsSection>

         {/* Popular Parts Section */}
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
                  <div className="image-container">
                     <img src="/images/intel-core-i9.jpg" alt="Intel Core i9" />
                  </div>
                  <h3>Intel Core i9</h3>
                  <p>Price: $499.99</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </PartCard>
               <PartCard>
                  <div className="image-container">
                     <img
                        src="/images/nvidia-rtx-3080.jpg"
                        alt="NVIDIA RTX 3080"
                     />
                  </div>
                  <h3>NVIDIA RTX 3080</h3>
                  <p>Price: $699.99</p>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
               </PartCard>
               <PartCard>
                  <div className="image-container">
                     <img
                        src="/images/corsair-vengeance.jpg"
                        alt="Corsair Vengeance RAM"
                     />
                  </div>
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

/* Styled-Components */

const Wrapper = styled.div``;

/* Hero Section */
const HeroSection = styled.section`
   height: 700px;
   background-image: url('hero-background.jpg');
   background-size: cover;
   background-position: center;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   text-align: center;
   margin-bottom: 50px;

   @media (max-width: 768px) {
      height: 400px;
      background-position: top;
   }
`;

const HeroText = styled.div`
   h1 {
      font-size: 3rem;
      margin-bottom: 20px;

      @media (max-width: 768px) {
         font-size: 2rem;
      }
   }

   p {
      font-size: 1.5rem;

      @media (max-width: 768px) {
         font-size: 1.2rem;
      }
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

         @media (max-width: 768px) {
            font-size: 1rem;
            padding: 10px 15px;
         }
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

/* Building Guides Section */
const BuildingGuides = styled.section`
   margin: 0 auto;
   max-width: 1200px;
   margin-bottom: 50px;

   .section-header {
      text-align: center;
      margin-bottom: 20px;

      h2 {
         font-size: 2.5rem;
         margin-bottom: 10px;
      }

      p {
         font-size: 1.2rem;
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

   .build-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
   }
`;

const GuideCard = styled.div`
   margin: 0 auto;
   max-width: 1200px;
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

/* Latest Builds Section */
const LatestBuildsSection = styled.section`
   margin: 0 auto;
   max-width: 1200px;
   display: flex;
   flex-direction: column;
   gap: 30px;
   max-width: 1300px;
   margin: 0 auto;
   text-align: center;
   padding: 50px 20px;

   h2 {
      margin-bottom: 30px;
      font-size: 2.5em;
   }

   .build-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
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
`;

/* Popular Parts Section */
const PopularPartsSection = styled.section`
   margin-bottom: 50px;

   .section-header {
      text-align: center;
      margin-bottom: 30px;

      h2 {
         font-size: 2.5rem;
         margin-bottom: 10px;
      }

      p {
         font-size: 1.2rem;
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
