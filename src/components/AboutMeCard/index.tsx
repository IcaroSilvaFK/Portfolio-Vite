import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerContent, ArrowLeft } from "./styles";
//@ts-ignore
import HtmlSVG from "../../assets/html.svg";

export function AboutMe() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="containerImage">
        <img src={HtmlSVG} alt="SVG" width={350} />
      </div>
      <ContainerContent>
        <div className="containerTitle">
          <span>ABOUT ME</span>
          <h2>
            Desenvolvedor Front-end, com foco em React e NextJS, o framework
            mais ultilizado na atualiadade.
          </h2>
        </div>
        <div className="containerText">
          <p>
            Olá sou Icaro Vieira e sou desenvolvedor front-end, estudante de
            Engenharia de Software na UNOPAR e apaixonado por tecnologia e
            games.
          </p>
        </div>
        <div className="containerBTN">
          <button onClick={() => navigate("/about")}>
            Read More <ArrowLeft />
          </button>
        </div>
      </ContainerContent>
    </Container>
  );
}
