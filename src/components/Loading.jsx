import styled from 'styled-components';

const Loading = () => {
   return (
      <Wrapper style={{ textAlign: 'center', padding: '50px' }}>
         <div className="spinner"></div>
         <h2>Loading...</h2>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;

   .spinner {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
   }

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;

export default Loading;
