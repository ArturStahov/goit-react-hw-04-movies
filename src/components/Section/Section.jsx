import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

export default function Sections({ children }) {
  return <Section>{children}</Section>;
}
