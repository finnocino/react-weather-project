import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
       //console.log(response.data);//
       setForecast(response.data.daily);
       setLoaded(true);
    }

    if (loaded) {
      return (
       <div className="WeatherForecast">
        <div className="row"> 
            <div className="col"> 
            <WeatherForecastDay data={forecast[0]} />
            </div>
         </div> 
       </div>
        );
    } else {
        let apiKey = "59bd33ccd8e828a167b70a09aa704dfb";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl =  `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);   
    
        return null;
    }
    }
    

 