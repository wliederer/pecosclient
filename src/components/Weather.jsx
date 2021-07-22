import React from 'react';

const Weather = (props) => {
    const mystyle = {
        textAlign:"left"
    }

    return (
        <div style={{textAlign:"justify"}}>

        <div style={{mystyle}}>
            Location: {props.weather.name}
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
        </div>

    )
}

export default Weather;