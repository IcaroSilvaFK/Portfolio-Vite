import React from "react";
import { Container, IconHeader, ContainerLinks } from "./styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <Container>
      <div>
        <IconHeader />
        <strong>
          Icaro<span>.io</span>
        </strong>
      </div>
      <ContainerLinks>
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
      </ContainerLinks>
    </Container>
  );
}
