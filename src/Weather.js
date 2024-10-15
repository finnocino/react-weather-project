import React, {useState} from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,
            date: "Wednesday 5:30",
        });
        
    }

    if (weatherData.ready) {
          return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Search for a city..." className="form-control"
                    autoFocus="on"/> 
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
         <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
           <div className="col-6">
                <img src = {weatherData.iconUrl}
                 alt={weatherData.description}
                 />
               <span className="temperature">{Math.round(weatherData.temperature)}</span>
                 <span className="unit">°C</span>  
               </div>
           <div className="col-6">
              <ul>
                <li>Precipitation: 40%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}</li>
             </ul>
           </div>
       </div>
    </div>
    ); 
} else {
  const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&&units=metric`;
    /*`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;*/
    

    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
}
   
   }