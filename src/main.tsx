import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./components/theme";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
