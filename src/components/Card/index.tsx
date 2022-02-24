import React from "react";

import {
  Container,
  NextIcon,
  ReactIcon,
  SassIcon,
  StyledIcon,
  TypescriptIcon,
  HtmlIcon,
} from "./styles";

export const CaseSwitch = {
  ts: "Typescript",
  next: "Next",
  react: "React",
  sass: "sass",
  styled: "styled",
  html: "Html",
};

interface CardProps {
  description: string;
  type: string;
}

export function CardComponent({ description, type }: CardProps) {
  function handleSvg(identificattion: string) {
    switch (identificattion) {
      case CaseSwitch.ts:
        return <TypescriptIcon />;
      case CaseSwitch.next:
        return <NextIcon />;
      case CaseSwitch.react:
        return <ReactIcon />;
      case CaseSwitch.sass:
        return <SassIcon />;
      case CaseSwitch.styled:
        return <StyledIcon />;
      case CaseSwitch.html:
        return <HtmlIcon />;
    }
  }
  return (
    <Container title={description}>
      <>{handleSvg(type)}</>
      <strong>{description}</strong>
    </Container>
  );
}
