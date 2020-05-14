import React, { Fragment } from 'react';

const Temperature = (props) => {
  return (
    <Fragment>
      <h1>
        {props.temp}°{props.unit}
      </h1>
      <span>
        High: {props.high}°{props.unit}
      </span>
      <span>
        Low: {props.low}°{props.unit}
      </span>
    </Fragment>
  );
};

export default Temperature;
