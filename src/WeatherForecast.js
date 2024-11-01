import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setLoaded(false);
     }, [props.coordinates]);

    
    function handleResponse(response) {
       //console.log(response.data);//
       setForecast(response.data.daily);
       setLoaded(true);
    }

    function load() {
        let apiKey = "5201594abea9f3e38b70e65b11a80c24";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse); 
    }

    if (loaded) {
      return (
       <div className="WeatherForecast">
        <div className="row"> 
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                    <div className="col" key={index}> 
                        <WeatherForecastDay data={dailyForecast} />
                    </div>
                    );
                    } else {
                        return null;
                    }
                    })}
                </div> 
            </div>
        );
    } else { 
        load();
        return null;
    }
    }
    

 