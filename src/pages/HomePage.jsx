import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StarRating from '../components/StarRating';
import heroBackground from '/hero-background.jpg';

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
         <div className="page-content">
            <BuildingGuides>
               <div className="section-header">
                  <h2>Our Guides</h2>
                  <p>
                     Learn how to build your ultimate PC and start your own
                     journey.
                  </p>
                  <Link to="/guides">
                     <button>View our Guides</button>
                  </Link>
               </div>
               <div className="guide-cards">
                  <GuideCard>
                     <h3>Gaming PC Build Guide</h3>
                     <p>
                        Step-by-step guide for building a high-end gaming PC.
                     </p>
                     <img src="guide-1.jpg" alt="guid-1" />
                  </GuideCard>
                  <GuideCard>
                     <h3>Choose your motherboard</h3>
                     <p>Learn to choose the best motherboard for your PC.</p>
                     <img src="guide-2.jpg" alt="guid-2" />
                  </GuideCard>
                  <GuideCard>
                     <h3>Upgrade your old PC</h3>
                     <p>
                        Guide for upgrading your existing rig with compatible
                        parts.
                     </p>
                     <img src="guide-3.jpg" alt="guid-3" />
                  </GuideCard>
               </div>
            </BuildingGuides>

            <PartsShopSection>
               <div className="section-header">
                  <h2>Popular PC Parts</h2>
                  <p>Find the latest parts on the market and upgrade your PC</p>
                  <Link to="/shop">
                     <button>Shop Now</button>
                  </Link>
               </div>
               <img src="shop-section.png" alt="shop-section-img" />
            </PartsShopSection>

            <LatestBuildsSection>
               <div className="build-cards">
                  <BuildCard>
                     <img src="build-1.jpg" alt="Ultimate Gaming Powerhouse" />
                     <div className="build-info">
                        <h3>Ultimate Gaming Powerhouse</h3>
                        <p>High-end setup for immersive gaming experiences.</p>
                        <StarRating rating={5} />
                     </div>
                     <div className="key-specs">
                        <h4>Key Specs</h4>
                        <li>Windows 11 Pro</li>
                        <li>Intel Core i9-13900K</li>
                        <li>NVIDIA GeForce RTX 4090</li>
                     </div>
                     <div className="price">$4,199.00</div>
                  </BuildCard>
                  <BuildCard>
                     <img src="build-2.jpg" alt="Creator's Dream Workstation" />
                     <div className="build-info">
                        <h3>Creator's Dream Workstation</h3>
                        <p>
                           Designed for seamless content creation and
                           multitasking.
                        </p>
                        <StarRating rating={4.8} />
                     </div>
                     <div className="key-specs">
                        <h4>Key Specs</h4>
                        <li>Windows 11 Pro</li>
                        <li>AMD Ryzen 9 7950X</li>
                        <li>NVIDIA GeForce RTX 4080</li>
                     </div>
                     <div className="price">$3,299.00</div>
                  </BuildCard>
                  <BuildCard>
                     <img
                        src="build-3.jpg"
                        alt="Engineering Excellence Machine"
                     />
                     <div className="build-info">
                        <h3>Engineering Precision Machine</h3>
                        <p>Optimized for CAD and complex simulations.</p>
                        <StarRating rating={4.5} />
                     </div>
                     <div className="key-specs">
                        <h4>Key Specs</h4>
                        <li>Windows 11 Pro</li>
                        <li>Intel Xeon W-1390P</li>
                        <li>NVIDIA Quadro RTX A5000</li>
                     </div>
                     <div className="price">$3,999.00</div>
                  </BuildCard>
               </div>

               <div className="section-header">
                  <h2>Latest Builds</h2>
                  <p>
                     Check out our latest community builds, ranging from budget
                     to high-end setups.
                  </p>
                  <Link to="/builder">
                     <button>Build Your Computer</button>
                  </Link>
               </div>
            </LatestBuildsSection>

            <TestimonialsSection>
               <div className="section-header">
                  <h2>What Users Say</h2>
               </div>
               <div className="Testimonial-cards">
                  <TestimonialCard>
                     <p>
                        As a first-time builder, this site was incredibly
                        helpful! The guides made everything so easy to
                        understand. I successfully built my PC and couldn’t be
                        happier!
                     </p>
                     <strong>— Emily J.</strong>
                  </TestimonialCard>
                  <TestimonialCard>
                     <p>
                        Fantastic resource for PC enthusiasts! The detailed
                        guides and part recommendations helped me optimize my
                        build. I love how easy it is to find quality components
                        here.
                     </p>
                     <strong>— Sara P.</strong>
                  </TestimonialCard>
                  <TestimonialCard>
                     <p>
                        As a seasoned builder, I appreciate the comprehensive
                        guides and curated parts selection. This site is my
                        go-to for reliable components and expert insights.
                        Highly recommended for all skill levels!
                     </p>
                     <strong>— Michael S.</strong>
                  </TestimonialCard>
               </div>
            </TestimonialsSection>
         </div>
      </Wrapper>
   );
};

export default HomePage;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 50px;

   .page-content {
      max-width: var(--main-width);
      margin: 0 auto;
      padding: 0 20px;
   }
`;

const HeroSection = styled.section`
   height: 800px;
   background-image: url(${heroBackground});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--white);
   text-align: center;
   margin-bottom: 20px;
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
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 30px;
   margin-bottom: 30px;
   align-items: center;

   .section-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: min-content;
      min-width: 300px;
      flex: 1;

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

   .guide-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }
`;

const GuideCard = styled.div`
   background-color: var(--gr-3);
   width: 300px;
   border-radius: 10px;
   text-align: center;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   cursor: pointer;
   margin: 10px;
   padding: 8px;

   img {
      width: 100%;

      border-radius: 10px;
   }

   h3 {
      margin-bottom: 10px;
   }
`;

const LatestBuildsSection = styled.section`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap-reverse;
   gap: 30px;
   margin-bottom: 30px;
   align-items: center;

   .section-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: min-content;
      min-width: 300px;
      flex: 1;

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

   .build-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }
`;

const BuildCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: var(--gr-2);
   width: 300px;
   border-radius: 10px;
   text-align: left;

   cursor: pointer;
   margin: 10px;

   img {
      width: 100%;
      border-radius: 10px 10px 0 0;
   }

   h3,
   h4,
   p {
      margin: 4px 0;
   }

   .build-info {
      display: flex;
      flex-direction: column;

      padding: 8px 20px;
   }

   .key-specs {
      padding: 8px 20px;
      border-top: 1px solid #b1becd39;
   }

   .price {
      font-size: 1rem;
      font-weight: bold;
      margin-top: auto;
      padding: 10px 20px;
      border-top: 1px solid #b1becd39;
   }

   li {
      list-style: none;
   }
`;

const PartsShopSection = styled.section`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   gap: 30px;
   margin-bottom: 30px;
   align-items: center;

   width: 100%;
   height: 300px;
   border-radius: 20px;
   justify-items: baseline;
   background: rgb(51, 65, 85);
   background: linear-gradient(
      90deg,
      rgba(51, 65, 85, 0.5) 0%,
      rgba(107, 114, 128, 0.3) 60%
   );

   .section-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: min-content;
      min-width: 300px;
      flex-grow: 1;

      h2 {
         font-size: 2.5rem;
         margin: 0;
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

   img {
      padding: 30px;
      height: 100%;
      border-radius: 0 10px 10px 0;
   }
`;

const TestimonialsSection = styled.section`
   display: flex;
   justify-content: center;
   flex-direction: column;
   gap: 30px;
   margin-bottom: 30px;
   align-items: center;

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
   }

   .Testimonial-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-content: space-between;
      width: 100%;
      gap: 20px;
   }
`;

const TestimonialCard = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   background-color: var(--gr-2);
   min-width: 400px;
   border-radius: 10px;
   text-align: center;
   height: 200px;
   padding: 20px;

   p {
      font-size: 1rem;
   }
`;
