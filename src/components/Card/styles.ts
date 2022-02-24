import styled from "styled-components";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
} from "react-icons/si";
import { FaSass, FaHtml5 } from "react-icons/fa";
export const Container = styled.div`
  display: flex;
  padding: 25px;
  background-color: var(--gray-200);
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: default;
  &:hover {
    background-color: var(--white);
    box-shadow: 0 0 10px 6px var(--gray-200);
    transition: linear 0.3s;
  }
`;

export const TypescriptIcon = styled(SiTypescript)`
  width: 25px;
  height: 25px;
  color: #0078c9; ;
`;

export const ReactIcon = styled(SiReact)`
  width: 25px;
  height: 25px;
  color: #08ebf9;
  animation: rotate 3s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const NextIcon = styled(SiNextdotjs)`
  width: 25px;
  height: 25px;
`;

export const StyledIcon = styled(SiStyledcomponents)`
  width: 25px;
  height: 25px;
  color: #793361;
`;

export const SassIcon = styled(FaSass)`
  width: 25px;
  height: 25px;
  color: #cf649a;
`;

export const HtmlIcon = styled(FaHtml5)`
  width: 25px;
  height: 25px;
  color: #eb6329;
`;
