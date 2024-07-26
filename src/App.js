import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <weather/>
      <footer>
        This project was coded by Onalenna Leso and is {" "}
        <a href="https://github.com/onalennaleso/react-weather-app" target="_blank">
        open-sourced on GitHub
        </a>
        </footer>
        </div>
    </div>
  );
}


