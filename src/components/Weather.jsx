import React from 'react';

const Weather = (props) => {

    return (
        <div>
            Location: {props.weather.name}, {props.weather.sys.country}
            <br/>
             
            Longitude: {props.weather.coord.lon} Latitude: {props.weather.coord.lat}
            <br/>
            Temperature: {props.weather.main.temp} F
            <br/>
            Feels like: {props.weather.main.feels_like} F
            <br/>
            humidity: {props.weather.main.humidity}
            <br/>
            decription: {props.weather.weather[0].description} 
             
        </div>

    )
}

export default Weather;