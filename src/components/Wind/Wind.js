import React, { Fragment } from 'react';
import wind from '../../assets/wind.svg';
import classes from '../Display/WeatherDisplay.module.css';

const Wind = (props) => {
  return (
    <Fragment>
      <img src={wind} alt='' className={classes.icon}></img>
      <h4>Wind</h4>
      <span>
        {props.speed} mph {props.direction}
      </span>
    </Fragment>
  );
};

export default Wind;
