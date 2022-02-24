import React from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { HoverNavBar } from "../../components/HoverBar";
export function About() {
  return (
    <Container>
      <Header />
      <h1>About</h1>
      <HoverNavBar />
    </Container>
  );
}
