// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Components/AppContext/AppContext";
import { DarkModeProvider } from "./Components/AppContext/DarkModeContext";

function App() {
  return (
    <h1 className="App">
      <DarkModeProvider>
        <BrowserRouter>
          <AppContext>
            <Pages></Pages>
          </AppContext>
        </BrowserRouter>
      </DarkModeProvider>
    </h1>
  );
}

export default App;
