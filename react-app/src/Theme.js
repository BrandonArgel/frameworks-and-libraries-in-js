import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const themes = {
	alita: {
		bg: "#cc5555",
		color: "#ffffff",
	},
	insideout: {
		bg: "#61ffff",
		color: "#000000",
	},
	endgame: {
		bg: "#F55ACF",
		color: "#ffffff",
	},
};

const theme = (props) => (
	<ThemeProvider theme={themes[props.theme.toLowerCase()]}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
);

export default theme;
