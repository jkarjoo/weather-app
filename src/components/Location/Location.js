import React from 'react';

const Location = (props) => {
  return (
    <h4>
      {props.city}, {props.country}
    </h4>
  );
};

export default Location;
