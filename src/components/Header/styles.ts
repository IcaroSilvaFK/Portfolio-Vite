import styled from "styled-components";
import { FaCode } from "react-icons/fa";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 3px var(--purple-400);
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    strong {
      font-size: 18px;
      background: linear-gradient(
        100deg,
        var(--puprle-700),
        var(--purple-400),
        var(--blue-600)
      );
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      span {
        font-size: 14px;
      }
    }
  }
`;

export const IconHeader = styled(FaCode)`
  width: 20px;
  height: 20px;
  color: var(--puprle-700);
`;

export const ContainerLinks = styled.div`
  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    margin-right: 20px;
    li {
      a {
        color: var(--puprle-700);
        font-weight: 400px;
        position: relative;
        padding: 10px;
      }
      .active {
        color: var(--purple-600);
        font-weight: 400px;
        position: relative;
        padding: 10px;
        &::after {
          position: absolute;
          content: "";

          height: 2px;
          background-color: var(--purple-600);
          bottom: -3px;
          left: 0;
          right: 0;

          border-radius: 5px;
        }
      }
    }
  }
`;
