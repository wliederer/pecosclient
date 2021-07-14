import React from 'react';

const Weather = (props) => {

    return (
        <div>
            Location: {props.weather.name}, {props.weather.sys.country}
            <br/>
            Longitude: {props.weather.coord.lon} Latitude: {props.weather.coord.lat}
            <br/>
            Temperature: {Math.round(((props.weather.main.temp - 273.15) *9)/5 + 32)} F
            <br/>
            Feels like: {Math.round(((props.weather.main.feels_like - 273.15) *9)/5 + 32)} F
            <br/>
            humidity: {props.weather.main.humidity}
            <br/>
            decription: {props.weather.weather[0].description}
        </div>

    )
}

export default Weather;