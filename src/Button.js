import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo"
import './Button.css'


export default function Search(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
    }

    function cityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="input-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The City Name"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onSubmit={handleSubmit}
                        onChange={cityChange}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                    >
                        Search
                   </button>
                    <WeatherInfo data={weatherData} />

                    <button type="submit" className="current-location">
                        {" "}
                        <span role="img" aria-label="location">
                            📍{" "}
                        </span>
                    </button>
                </div>


            </div>
        )
    } else {
        const apiKey = "a61759b6c49305b3341bd63820265f73";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

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



