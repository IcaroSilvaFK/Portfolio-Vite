import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: Initialize 0.4s linear;
  .containerImage {
    margin-left: 50px;
  }

  @keyframes Initialize {
    0% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const ContainerPresentation = styled.div`
  margin-top: -50px;
  h1 {
    font-size: 40px;
    font-family: "Fira Code", monospace;
    span {
      letter-spacing: -20px;
      padding: 15px;

      .firstLetter {
        color: var(--purple-200);
      }
      .secondLetter {
        color: var(--puprle-700);
      }
    }
  }
  button {
    margin-top: 20px;
    padding: 15px;
    font-size: 16px;
    background-color: var(--purple-500);
    border-radius: 5px;
    color: var(--white);
    margin-left: 5px;
    &:hover {
      background-color: var(--purple-50);
      color: var(--purple-500);
      box-shadow: 0 0 0 1px var(--purple-500);
      transition: linear 0.3s;
    }
  }
`;
