import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WeatherForecast from '../Forecast/WeatherForecast';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WeatherForecast />
    </div>
  );
}

export default App;
