import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Extend theme
const breakpoints = {
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
	"2xl": "1536px",
};

// const colors = {
// 	brand: {
// 		900: "#1a365d",
// 		800: "#153e75",
// 		700: "#2a69ac",
// 	},
// };

const theme = extendTheme({ breakpoints });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
