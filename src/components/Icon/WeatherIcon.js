import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import snow from '../../assets/snow.svg';

const useStyles = makeStyles({
  icon: {
    paddingTop: 0,
    marginTop: '20px',
    width: 60,
    height: 60,
  },
});

function WeatherIcon() {
  const classes = useStyles();
  return <img src={snow} alt='' className={classes.icon}></img>;
}

export default WeatherIcon;
