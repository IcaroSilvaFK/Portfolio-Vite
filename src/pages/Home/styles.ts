import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerBackground = styled.div`
  padding: 40px 60px;
  background-color: var(--blue-50);
  border-bottom-left-radius: 100px;
`;

export const ContainerContent = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 250px;
  .containerImage {
    animation: initialize 0.4s linear;
  }

  @keyframes initialize {
    0% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
