import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`;

export default function PageMain({ children }) {
  return <Nav>{children}</Nav>;
}
