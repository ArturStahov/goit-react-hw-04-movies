import styled from 'styled-components';

const CanvasAnimBlock = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  width: 100vh;
  height: 100vw;
  z-index: -100;
  & > .CanvasStyle {
    width: 100vh;
    height: 100vw;
  }
`;
export { CanvasAnimBlock };
