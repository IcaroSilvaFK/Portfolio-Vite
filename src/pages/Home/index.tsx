import React from "react";
import { Header } from "../../components/Header";
import { useUser } from "../../hooks/useUser";
import { HoverNavBar } from "../../components/HoverBar";
import { TitlePage } from "../../components/TitlePage";

//@ts-ignore
import Student from "../../assets/stud.svg";
import { Container, ContainerBackground, ContainerContent } from "./styles";
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
      <HoverNavBar />
    </Container>
  );
}
