import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: Urbanist, Arial;
}

html {
    width: auto;
    overflow-x: hidden;
}

body {
    max-width: 100vw;
    height: 100vh;
    background-color: #1B1B1B;
    overflow-x: hidden}
`;