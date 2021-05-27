import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (<div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.celsius)} </span>
            <span className="metric">°C | <a href="/" onClick={convertToFahrenheit}> °F </a></span>
        </div>)
    } else {
        let fahrenheitTemperature = (props.celsius * 9) / 5 + 32
        return (<div className="WeatherTemperature">
            <span className="temperature">
                {Math.round(fahrenheitTemperature)} </span>
            <span className="metric"> <a href="/" onClick={convertToCelsius}> °C </a> | °F </span>
        </div>)
    }
}