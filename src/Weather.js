import React from "react";
import "./weather.css";

export default function Weather() {
    return (
        <div classname="weather">
            <form>
                <div classname="row">
                    <div classname="col=9">
                        <imput type="search" placeholder="Entera city.." classname="form-control" autofocus="on"/>
                    </div>
                    <div classname="col-3">
                        <imput type="submit" value="Search" classname="btn btn-primary w-100" />
                    </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div classname="row mt-3">
                <div classname="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy" />
                    <span classname="temperature">6</span>
                    <span classname="unit">°C</span>
                    </div>
                </div>
                <div classname="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 13k/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}