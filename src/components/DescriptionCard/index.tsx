import React from "react";
import {
  Container,
  ReposIcon,
  CalendarIcon,
  LinkedinIcon,
  CardOne,
} from "./styles";
import { DateFormat } from "../../utils";
import { useUser } from "../../hooks/useUser";

export function DescriptionCard() {
  const { data } = useUser();
  return (
    <Container>
      <CardOne>
        <div className="containerSVG">
          <CalendarIcon />
        </div>
        <div>
          <h3>Since</h3>
          <strong>{DateFormat(data?.created_at!)}</strong>
        </div>
      </CardOne>
      <CardOne>
        <div className="containerSVG">
          <LinkedinIcon />
        </div>
        <div>
          <h3>Link para o LinkedIn</h3>
          <a href="https://www.linkedin.com/in/icarovieira/" target="_blanck">
            <button>LinkedIn</button>
          </a>
        </div>
      </CardOne>
      <CardOne>
        <div className="containerSVG">
          <ReposIcon />
        </div>
        <div>
          <h3>Respositórios publicos</h3>
          <strong>{data?.public_repos}</strong>
        </div>
      </CardOne>
    </Container>
  );
}
