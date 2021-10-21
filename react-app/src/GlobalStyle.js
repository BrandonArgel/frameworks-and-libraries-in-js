import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: ${(props) => props.theme.bg};
    }
`;

export default GlobalStyle;
