import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
        })   
    }

    function search() {
        const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
        /*`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;*/
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
          search();
    }

    function handleCitySearch(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
          return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Search for a city..." 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCitySearch}/> 
                </div>
                <div className="col-3">
                    <input type="submit" 
                    value="Search" 
                    className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        
        <WeatherInfo data={weatherData}/>
        <WeatherForecast />
       
    </div>
    ); 
} else {
    search();
    return "Loading..."
}
   }