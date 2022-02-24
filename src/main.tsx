import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RoutesApplication } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles";
import { QueryClientProvider } from "react-query";
import { client } from "./services";
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <GlobalStyle />
        <RoutesApplication />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
