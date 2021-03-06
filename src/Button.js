import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast";
import './Button.css'


export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function cityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "a61759b6c49305b3341bd63820265f73";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form className="input-group mt-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The City Name"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={cityChange}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"

                    >
                        Search
                   </button>

                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />

            </div>
        )
    } else {
        search();
        return (
            <Loader
                type="ThreeDots"
                color="black"
                height="50"
                width="50"
            />
        );
    }
}



