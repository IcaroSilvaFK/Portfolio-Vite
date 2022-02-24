import React from "react";
import { Link } from "react-router-dom";
import { IconHeader } from "../Header/styles";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  WatsLogo,
  ContainerRow,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <h4>
        <IconHeader />
        <strong>
          Icaro<span>.io</span>
        </strong>
      </h4>
      <ContainerRow>
        <ContainerLeft>
          <h4>Contatos</h4>
          <ul>
            <li>
              <PhoneIcon />
              <span>(62) 9 9835-8542</span>
            </li>
            <li>
              <MailIcon />
              <span>icarovsilva@gmail.com</span>
            </li>
            <li>
              <LinkedinIcon />
              <a href="https://www.linkedin.com/in/icaro-vieira-front-end/">
                LinkedIn
              </a>
            </li>
            <li>
              <WatsLogo />
              <span>(62) 9 9835-8542</span>
            </li>
          </ul>
        </ContainerLeft>
        <ContainerRight>
          <h4>Navegação</h4>
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </ContainerRight>
      </ContainerRow>
    </Container>
  );
}
