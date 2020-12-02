import styled from 'styled-components';

const SearchBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 40px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid grey;
  border-radius: 1rem;
  padding-left: 10px;
  outline: none;
  margin-right: 10px;
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 4px double #000000;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #ff4040;
  }
`;

export { Button, Input, SearchBlock };
