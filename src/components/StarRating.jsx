import { styled } from 'styled-components';

import { PropTypes } from 'prop-types';

import { MdStar, MdStarHalf, MdOutlineStarBorder } from 'react-icons/md';

const StarRating = ({ rating }) => {
   const stars = [];

   for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
         stars.push(<MdStar key={i} className="filled star" />);
      } else if (i - rating > 0 && i - rating < 1) {
         stars.push(<MdStarHalf key={i} className="half star" />);
      } else {
         stars.push(<MdOutlineStarBorder key={i} className="empty star" />);
      }
   }

   return (
      <Wrapper className="star-rating">
         {stars} {rating}
      </Wrapper>
   );
};

export default StarRating;

const Wrapper = styled.div`
   display: flex;
   align-items: center;

   .star {
      color: #2e24f6;
      font-size: 1rem;
   }
`;
