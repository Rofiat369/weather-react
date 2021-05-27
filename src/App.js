import React from "react";
import WeatherInfo from "./WeatherInfo";
import Button from "./Button";
import './App.css';



function App() {
  return <div className="App" >
    <div className="container">
      <div className="card main mt-5">
        <Button />
        <WeatherInfo defaultCity="Lagos" />

      </div>
    </div>
    <footer>
      This page was coded by Rofiat Olusanya and
      <a href="https://github.com/Rofiat369/weather-react">
        Open-Sourced on github
      </a>
    </footer>
  </div>
}

export default App;
