import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerBackground = styled.div`
  padding: 40px 60px;
  background-color: var(--blue-100);
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

export const ContainerBody = styled.main`
  h2 {
    padding: 12px;
    text-align: center;
    font-family: "Fira Code", monospace;
  }
`;

export const SectionCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 10px;
  width: 800px;
  margin: 24px auto;
`;

export const SectionAboutMe = styled.section`
  display: flex;
  align-items: center;
  .blueEffect {
    background-color: var(--purple-500);
    height: 550px;
    width: 350px;
    border-top-right-radius: 150px;
    position: relative;
    &::after {
      content: "";
      height: 100px;
      width: 100px;
      position: absolute;

      border-radius: 50%;
      border: 10px solid var(--purple-200);
      bottom: 15px;
      right: 100px;
      z-index: 2;
      opacity: 0.3;
    }
  }
  .content {
    margin-left: -150px;
    margin-top: 80px;
    position: relative;
  }
`;

export const SectionDescription = styled.section`
  margin-top: 150px;
  background-color: var(--blue-100);
`;
