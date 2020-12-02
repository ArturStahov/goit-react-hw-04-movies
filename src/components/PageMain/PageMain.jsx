import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding: 50px 0px 50px;
  width: 100%;
`;

export default function PageMain({ children }) {
  return <Main>{children}</Main>;
}
