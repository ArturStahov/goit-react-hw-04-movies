import styled from 'styled-components';

const NavList = styled.nav`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }

  & > .link {
    padding: 5px 10px;
    color: #200772;
    font-weight: 700;
    border: 4px double grey;
    border-radius: 2rem;
  }
  & > .selected {
    color: #fff;
  }
`;

export { NavItem, NavList };
