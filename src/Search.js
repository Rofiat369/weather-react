import React, { useState } from "react";
import axios from "axios";
import './Search.css'


export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: "Wednesday 07:00",
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });
    }


    if (weatherData.ready) {
        return (
            <div className="Weather">
                <h1>{weatherData.city} </h1>
                <ul>
                    <li> {weatherData.date} </li>
                    <li className="text-capitalize"> {weatherData.description} </li>
                </ul>
                <div className="row">
                    <div className="col-6" >
                        <div className="d-flex" >
                            <img
                                src={weatherData.icon}
                                alt={weatherData.description}
                                className="float-left"
                            />
                            <div className="float-left">
                                <span className="temperature"> {Math.round(weatherData.temperature)} </span>
                                <span className="metric">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" >
                        <ul>
                            <li> Precipitation: 15%</li>
                            <li> Humidity: {weatherData.humidity}</li>
                            <li> Wind: {weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    } else {
        const apiKey = "a61759b6c49305b3341bd63820265f73";
        let city = "New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "loading..."
    }
}