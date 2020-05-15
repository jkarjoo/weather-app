import React from 'react';
import classes from './WeatherIcon.module.css';
import cloud from '../../assets/cloud.svg';
import mist from '../../assets/mist.svg';
import partcloudy from '../../assets/partcloudy.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import storm from '../../assets/storm.svg';
import sun from '../../assets/sun.svg';
import clearnight from '../../assets/clearnight.svg';
import nightsnow from '../../assets/nightsnow.svg';
import nightstorm from '../../assets/nightstorm.svg';

function WeatherIcon(props) {
  const weatherIconValues = [
    ['11d'], // storm
    ['09d', '10d'], // rain
    ['13d'], // snow
    ['50d'], // mist
    ['01d'], // clear sky
    ['02d'], // partcloudy
    ['03d', '04d'], // cloudy
    ['01n', '02n', '03n', '04n', '50n'], // Night clear sky/partcloudy/cloudy/mist
    ['09n', '10n'], // Night rain
    ['11n'], // Night storm
    ['13n'], // Night snow
  ];

  const weatherIconTypes = [
    storm,
    rain,
    snow,
    mist,
    sun,
    partcloudy,
    cloud,
    clearnight,
    rain,
    nightstorm,
    nightsnow,
  ];

  const classList = [classes.icon];

  const getIndex = (id) => {
    for (let i = 0; i < weatherIconValues.length; i++) {
      if (weatherIconValues[i].indexOf(id) !== -1) {
        if (i !== 8 && i > 6) {
          classList.push(classes.night);
        }
        return i;
      }
    }
  };

  return (
    <img src={weatherIconTypes[getIndex(props.id)]} alt='' className={classList.join(' ')}></img>
  );
}

export default WeatherIcon;
