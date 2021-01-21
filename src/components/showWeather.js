import React, {Component, useState, useEffect} from "react";

const ShowWeather = props => {
    if (Object.keys(props).length == 0 || props.cod == 404) {return <p>erorre</p>} else {
    const name = props.name;
    const temperature = props.main.temp;
    const weather = props.weather[0].description;
    const icon = props.weather[0].icon;

    const weatherIcons = {
      'clear sky': '01d',
        'few clouds':'02d',
        'scattered clouds':'03d',
        'broken clouds':'04d',
        'shower rain':'09d',
        'rain':'10d',
        'thunderstorm':'11d',
        'snow':'13d',
        'mist':'50d',
    };

        const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return  <div>
        <img src={urlIcon} />
        <h3>{name}</h3>
        <p>{temperature}</p>
        <p>{weather}</p>

    </div>}
};

export default ShowWeather