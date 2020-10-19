import React from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyle";

const App = (props) => {
  return (
    <div className="App">
      <GlobalStyles />

      <h1>Harry Potter</h1>
    </div>
  );
};

export default App;
