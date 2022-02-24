import { createGlobalStyle } from "styled-components";
//!font-family: 'Fira Code', monospace;
//!font-family: 'Montserrat', sans-serif;
export default createGlobalStyle`
:root{
  --white:#fff;
  --black: #000;
  --purple-700:#553C9A;
  --purple-600:#6B46C1;
  --purple-500:#805AD5;
  --purple-400:#9F7AEA;
  --purple-300:#B794F4;
  --purple-200:#D6BCFA;
  --purple-100:#E9D8FD;
  --purple-50:#FAF5FF;

  --gray-900:#171923;
  --gray-800:#1A202C;
  --gray-700:#2D3748;
  --gray-600:#4A5568;
  --gray-500:#718096;
  --gray-400:#A0AEC0;
  --gray-200:#E2E8F0;
  --gray-50:#F7FAFC;

  --blue-600:#2B6CB0;
  --blue-500:#3182CE;
  --blue-400:#4299E1;
  --blue-300:#63B3ED;
  --blue-100:#BEE3F8;
  --blue-50:#e6f7ff;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body,#root{
    width: 100%;
    height: 100%;
  }
  button{
    border:none;
    cursor:pointer
  }
  body,a,input,button{
    font-family: 'Montserrat', sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body{
    &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
   
  &::-webkit-scrollbar-thumb{
    background-color: var(--gray-400)
  }
  }
 
`;
