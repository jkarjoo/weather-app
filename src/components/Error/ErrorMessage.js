import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ErrorMessage = (props) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.close();
  };

  return (
    <div>
      <Snackbar open={props.error} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          Error: City/Country not found!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ErrorMessage;
