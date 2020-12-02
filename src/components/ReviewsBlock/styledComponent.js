import styled from 'styled-components';

const ListReview = styled.ul`
  padding-top: 50px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ReviewItem = styled.li`
  max-width: 500px;
  margin-bottom: 20px;
`;

export { ReviewItem, ListReview };
