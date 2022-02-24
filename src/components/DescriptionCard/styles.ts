import styled from "styled-components";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { BsLinkedin, BsFillCalendarDateFill } from "react-icons/bs";
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ReposIcon = styled(RiGitRepositoryCommitsFill)`
  color: var(--purple-300);
`;

export const LinkedinIcon = styled(BsLinkedin)`
  color: var(--purple-300);
`;

export const CalendarIcon = styled(BsFillCalendarDateFill)`
  color: var(--purple-300);
`;

export const CardOne = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  gap: 20px;
  color: var(--gray-600);
  .containerSVG {
    padding: 30px;
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: 0 0 5px 1px var(--gray-600);
    svg {
      width: 35px;
      height: 35px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h3 {
      font-size: 16px;
    }
    a {
      button {
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        background-color: var(--purple-300);
        color: var(--white);
        &:hover {
          background-color: var(--blue-100);
          color: var(--purple-300);
          box-shadow: 0 0 0 1px var(--purple-300);
          transition: linear 0.3s;
        }
      }
    }
  }
`;
