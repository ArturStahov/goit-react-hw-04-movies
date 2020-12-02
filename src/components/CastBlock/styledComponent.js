import styled from 'styled-components';

const ListCast = styled.ul`
  padding-top: 50px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CastItem = styled.li`
  max-width: 150px;
  margin-bottom: 20px;
`;
const CastImage = styled.img`
  height: 200px;
`;

export { ListCast, CastItem, CastImage };
