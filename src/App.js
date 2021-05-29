import React from "react";
import Button from "./Button";
import './App.css';



function App() {
  return <div className="App" >
    <div className="container">
      <div className="card main mt-5">
        <Button defaultCity="Lagos" />


      </div>
    </div>
    <footer>
      This page was coded by Rofiat Olusanya and
      <a href="https://github.com/Rofiat369/weather-react" target="_blank" rel="noopener noreferrer">
        Open-Sourced on github
      </a>
    </footer>
  </div>
}

export default App;
