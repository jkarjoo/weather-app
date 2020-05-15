import React from 'react';
import classes from './WeatherIcon.module.css';
import cloud from '../../assets/cloud.svg';
import mist from '../../assets/mist.svg';
import partcloudy from '../../assets/partcloudy.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import storm from '../../assets/storm.svg';
import sun from '../../assets/sun.svg';

function WeatherIcon(props) {
  const weatherIconValues = [
    [200, 201, 202, 210, 211, 212, 221, 230, 231, 232], // 11d storm
    [300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531, 500, 501, 502, 503, 504], // 10d rain
    [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622], // 13d snow
    [701, 711, 721, 731, 741, 751, 761, 762, 771, 781], // 50d mist
    [800], // 01d / 01n sun
    [801], // 02d / 02n partcloudy
    [802, 803, 804], // 04d / 04n cloud
  ];

  const WeatherIconTypes = [storm, rain, snow, mist, sun, partcloudy, cloud];

  const getIndex = (id) => {
    for (let i = 0; i < weatherIconValues.length; i++) {
      if (weatherIconValues[i].indexOf(id) !== -1) {
        return i;
      }
    }
  };

  return <img src={WeatherIconTypes[getIndex(props.id)]} alt='' className={classes.icon}></img>;
}

export default WeatherIcon;
