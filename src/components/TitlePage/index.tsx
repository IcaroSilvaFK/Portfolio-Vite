import React from "react";
//@ts-ignore
import PagesSVG from "../../assets/pages.svg";

import { Container, ContainerPresentation } from "./styles";
export function TitlePage() {
  return (
    <Container>
      <div className="containerImage">
        <img src={PagesSVG} alt="" width={250} />
      </div>
      <ContainerPresentation>
        <h1>
          Hi, <br />
          I'm
          <span>
            <strong className="firstLetter"> I</strong>
            <strong className="secondLetter">I</strong>
          </span>
          caro,
          <br />
          fron-end developer
        </h1>
        <button>Contact me</button>
      </ContainerPresentation>
    </Container>
  );
}
