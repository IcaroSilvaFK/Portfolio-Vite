import styled from "styled-components";
import { BsArrowUpCircleFill } from "react-icons/bs";
export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  box-shadow: 0 0 5px #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: Opacity 0.3s linear;
  @keyframes Opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const IconUp = styled(BsArrowUpCircleFill)`
  width: 35px;
  height: 35px;
  color: var(--purple-500);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
