import styled from "styled-components";
import { AiFillPhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTypeBold } from "react-icons/bs";
export const Container = styled.footer`
  margin-top: 100px;
  padding: 25px;
  background-color: var(--blue-100);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--gray-700);
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    strong {
      font-size: 18px;
      background: linear-gradient(
        100deg,
        var(--purple-700),
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
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ContainerLeft = styled.div`
  h4 {
    margin-bottom: 15px;
    margin-left: 35px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
`;

export const ContainerRight = styled.div`
  h4 {
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li a {
      &:hover {
        color: var(--purple-400);
      }
    }
  }
`;

export const PhoneIcon = styled(AiFillPhone)``;

export const MailIcon = styled(CgMail)``;

export const LinkedinIcon = styled(ImLinkedin2)``;

export const WatsLogo = styled(IoLogoWhatsapp)``;
