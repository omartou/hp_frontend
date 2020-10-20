import React from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyle";
import HouseSelection from "./hooks/HouseSelection";

const App = (props) => {
  return (
    <div className="App">
      <GlobalStyles />
      <HouseSelection/>
      <h1>Harry Potter</h1>
    </div>
  );
};

export default App;
