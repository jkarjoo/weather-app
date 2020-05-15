import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './WeatherControls.module.css';

const WeatherControls = (props) => {
  return (
    <ButtonGroup variant='text' aria-label='text primary button group'>
      <Button
        className={classes.bold}
        onClick={() => props.changeUnitHandler('C')}
      >
        C°
      </Button>
      <Button
        className={classes.bold}
        onClick={() => props.changeUnitHandler('F')}
      >
        F°
      </Button>
    </ButtonGroup>
  );
};

export default WeatherControls;
