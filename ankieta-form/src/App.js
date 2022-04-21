import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./_styles/theme";
import { MainPage } from "./_views/MainPage";

function App() {
    
    return (
        <ThemeProvider theme={theme}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
