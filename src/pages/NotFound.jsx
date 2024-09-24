import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdConstruction } from 'react-icons/md';

const NotFound = () => {
   return (
      <Wrapper>
         <MdConstruction className="icon" size={100} />
         <h1>Page under construction</h1>
         <p>Sorry, the page you're looking for does not exist yet.</p>
         <Link to="/">Go back to Home</Link>
      </Wrapper>
   );
};

export default NotFound;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 700px;
   text-align: center;

   .icon {
      color: #ff4800;
   }

   h1 {
      font-size: 3rem;
      margin-bottom: 20px;
   }

   p {
      font-size: 1.2rem;
      margin-bottom: 20px;
   }

   a {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s;

      &:hover {
         background-color: #0056b3;
      }
   }
`;
