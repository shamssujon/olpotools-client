import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/exo"
import "@fontsource/exo/400.css";
import "@fontsource/exo/500.css";
import "@fontsource/exo/700.css";
import "@fontsource/exo/900.css";

// Extend theme
const breakpoints = {
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
	"2xl": "1536px",
};
const fonts = {
	heading: `'Exo', sans-serif`,
	body: `'Inter', sans-serif`,
};

const globalTheme = {
	styles: {
		global: (props: any) => ({
			"html, body, #root": {
				minHeight: "100vh",
			},
			// a: {
			// 	color: props.colorMode === "dark" ? "teal.300" : "teal.500",
			// },
		}),
	},
};

const theme = extendTheme({ breakpoints, fonts });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
