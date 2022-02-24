import styled from "styled-components";
import { TiArrowRightThick } from "react-icons/ti";
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 35px;
  .containerImage {
    background-color: #fff;
    border-radius: 10px;
  }
`;

export const ContainerContent = styled.div`
  width: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .containerTitle {
    text-align: left;
    h2 {
      text-align: left;
      font-family: "Fira Code", monospace;
    }
    span {
      font-size: 16px;
      color: var(--gray-500);
      margin-left: 15px;
    }
  }
  .containerText {
    margin-left: 10px;
    p {
      font-size: 16px;
      color: var(--gray-500);
    }
  }
  .containerBTN {
    padding-left: 50px;
    button {
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--white);
      background-color: var(--purple-400);
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
        box-shadow: 2px 2px 3px var(--gray-700);
      }
    }
  }
`;

export const ArrowLeft = styled(TiArrowRightThick)`
  width: 20px;
  height: 20px;
`;
