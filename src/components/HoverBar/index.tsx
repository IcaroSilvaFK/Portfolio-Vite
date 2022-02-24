import React, { useState, useEffect } from "react";
import { Container, IconUp } from "./styles";
export function HoverNavBar() {
  const [scroll, setScroll] = useState(false);

  function handleUpBar() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  addEventListener("scroll", () => {
    if (window.scrollY >= 92) {
      setScroll(true);
    } else setScroll(false);
  });
  console.log("renderizou");
  return (
    <>
      {scroll ? (
        <Container onClick={handleUpBar}>
          <IconUp />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
