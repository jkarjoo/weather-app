import React, { Fragment } from 'react';

const Description = (props) => {
  return (
    <Fragment>
      <span>{props.descript}</span>
      <span>
        Feels like: {props.feelsLike}°{props.unit}
      </span>
    </Fragment>
  );
};

export default Description;
