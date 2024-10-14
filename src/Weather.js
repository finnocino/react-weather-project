import React from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather() {
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
        <h1>Toronto</h1>
         <ul>
            <li>Friday 4:55</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
           <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                 alt="Cloudy"
                 />
               <span className="temperature">18</span>
                 <span className="unit">°C</span>  
               </div>
           <div className="col-6">
              <ul>
                <li>Precipitation: 40%</li>
                <li>Humidity: 50%</li>
                <li>Wind: 10 km/h</li>
             </ul>
           </div>
       </div>
    </div>
    )
}