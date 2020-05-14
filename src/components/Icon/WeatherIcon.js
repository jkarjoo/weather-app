import React from 'react';
import classes from './WeatherIcon.module.css';
import snow from '../../assets/snow.svg';

function WeatherIcon() {
  return <img src={snow} alt='' className={classes.icon}></img>;
}

export default WeatherIcon;
