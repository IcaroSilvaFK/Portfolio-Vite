import React from "react";
import { Header } from "../../components/Header";
import { useUser } from "../../hooks/useUser";
import { HoverNavBar } from "../../components/HoverBar";
import { TitlePage } from "../../components/TitlePage";

//@ts-ignore
import Student from "../../assets/stud.svg";
import {
  Container,
  ContainerBackground,
  ContainerContent,
  ContainerBody,
  SectionCards,
} from "./styles";
import { CardComponent, CaseSwitch } from "../../components/Card";

export function Home() {
  const { data, isFetching } = useUser();

  console.log(data);
  console.log(isFetching);
  return (
    <Container>
      <ContainerBackground>
        <Header />
        <ContainerContent>
          <TitlePage />
          <div className="containerImage">
            <img src={Student} alt="student" width={450} />
          </div>
        </ContainerContent>
      </ContainerBackground>
      <ContainerBody>
        <h2>Principais competencias</h2>
        <SectionCards>
          <CardComponent description="HTML5" type={CaseSwitch.html} />
          <CardComponent description="Typescript" type={CaseSwitch.ts} />
          <CardComponent description="Next" type={CaseSwitch.next} />
          <CardComponent description="React" type={CaseSwitch.react} />
          <CardComponent description="Sass" type={CaseSwitch.sass} />
          <CardComponent
            description="Styled-components"
            type={CaseSwitch.styled}
          />
        </SectionCards>
      </ContainerBody>
      <HoverNavBar />
    </Container>
  );
}
