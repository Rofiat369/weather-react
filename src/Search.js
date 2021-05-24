import React, { useState } from "react";
import axios from "axios";


export default function Search() {
    let [city, setCity] = useState("");
    let [message, setMessage] = useState("");

    function displayWeather(response) {
        setMessage(
            <ul>
                <li>Temperature: {Math.round(response.data.main.temp)}°C </li>
                <li>Description: {response.data.weather[0].description}</li>
                <li>Humidity: {response.data.main.humidity}%</li>
                <li>Wind: {response.data.main.wind}km/h</li>
                <li>
                    {" "}
                    <img
                        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                        alt="Icon"
                    />
                </li>
            </ul>
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a61759b6c49305b3341bd63820265f73&units=metric`;
        axios.get(url).then(displayWeather);
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
            <p>{message}</p>
            <footer>
                This project was coded by Rofiat Olusanya and <a href="https://github.com/Rofiat369/weather-react" target="_blank" rel="noreferrer" >open sourced on Github</a>
            </footer>
        </div>
    );
}