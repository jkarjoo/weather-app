import React, { Fragment } from 'react';
import water from '../../assets/water.svg';
import classes from '../Display/WeatherDisplay.module.css';

const Humidity = (props) => {
  return (
    <Fragment>
      <img src={water} alt='' className={classes.icon}></img>
      <h4>Humidity</h4>
      <span>{props.humidity}%</span>
    </Fragment>
  );
};

export default Humidity;
