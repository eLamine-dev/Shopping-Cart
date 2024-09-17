import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
   return (
      <FooterWrapper>
         <FooterContainer>
            <FooterSection>
               <h2>PC Builder Pro</h2>
               <p>
                  Your one-stop shop for building the perfect PC for gaming,
                  work, or daily use.
               </p>
               <p>1234 PC Street, Tech City, USA</p>
               <p>Email: support@pcbuilderpro.com</p>
               <p>Phone: +1 (800) 123-4567</p>
            </FooterSection>

            <FooterSection>
               <h3>Quick Links</h3>
               <ul>
                  <li>
                     <Link to="/shop">Shop for Parts</Link>
                  </li>
                  <li>
                     <Link to="/builder">Build a PC</Link>
                  </li>
                  <li>
                     <Link to="/support">Customer Support</Link>
                  </li>
                  <li>
                     <Link to="/about">About Us</Link>
                  </li>
               </ul>
            </FooterSection>

            <FooterSection>
               <h3>Customer Support</h3>
               <ul>
                  <li>
                     <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                     <Link to="/shipping">Shipping Info</Link>
                  </li>
                  <li>
                     <Link to="/returns">Return Policy</Link>
                  </li>
                  <li>
                     <Link to="/warranty">Warranty</Link>
                  </li>
               </ul>
            </FooterSection>

            <FooterSection>
               <h3>Follow Us</h3>
               <div className="social-icons">
                  <a
                     href="https://github.com/eLamine-dev"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <BsGithub />
                  </a>
               </div>
            </FooterSection>

            <FooterSection>
               <h3>Stay Updated</h3>
               <p>
                  Sign up for our newsletter to get the latest updates on
                  products and offers.
               </p>
               <div className="newsletter">
                  <input type="email" placeholder="Your email" />
                  <button>Subscribe</button>
               </div>
            </FooterSection>
         </FooterContainer>

         <FooterBottom>
            <p>&copy; 2024 PC Builder Pro. All rights reserved.</p>
            <div className="legal-links">
               <Link to="/terms">Terms of Service</Link>
               <Link to="/privacy">Privacy Policy</Link>
            </div>
         </FooterBottom>
      </FooterWrapper>
   );
};

const FooterWrapper = styled.footer`
   background-color: #282c34;
   color: white;
   padding: 50px 20px 20px;
`;

const FooterContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: 30px;
   max-width: 1200px;
   margin: 0 auto;
   padding-bottom: 30px;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`;

const FooterSection = styled.div`
   h2,
   h3 {
      font-size: 1.5em;
      margin-bottom: 20px;
   }

   p {
      font-size: 1em;
      line-height: 1.6;
   }

   ul {
      list-style: none;
      padding: 0;
   }

   li {
      margin-bottom: 10px;
   }

   a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
         color: #007bff;
      }
   }

   .social-icons {
      display: flex;
      gap: 15px;

      a {
         font-size: 1.5em;
         color: white;

         &:hover {
            color: #007bff;
         }
      }
   }

   .newsletter {
      display: flex;
      gap: 10px;
      margin-top: 10px;

      input {
         padding: 10px;
         border-radius: 5px;
         border: none;
         flex-grow: 1;
      }

      button {
         padding: 10px 20px;
         background-color: #007bff;
         color: white;
         border: none;
         border-radius: 5px;
         cursor: pointer;
         transition: background-color 0.3s;

         &:hover {
            background-color: #0056b3;
         }
      }
   }
`;

const FooterBottom = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid #444;
   padding-top: 20px;
   max-width: 1200px;
   margin: 0 auto;

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      text-align: center;
   }

   p {
      margin: 0;
   }

   .legal-links {
      display: flex;
      gap: 20px;

      a {
         color: white;
         text-decoration: none;
         font-size: 0.9em;
         transition: color 0.3s;

         &:hover {
            color: #007bff;
         }
      }
   }
`;

export default Footer;
