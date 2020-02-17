
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillReceiveProps(props) {
  }
  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
        Question1 
        -	Write a program to find the greatest common divisor (G.C.D) or least common factor (L.C.M) from input array
        </Typography>
        <Typography variant="h6" gutterBottom>
        Question2
        -- Make an application using react to capture image using camera and show image to user with option(s) to retake 
        </Typography>
        <Typography variant="h6" gutterBottom>
        Question3
        ---	Design a page using react where the user can enter an integer (n as value) as input and out should produce the nth prime number 
        </Typography>
      </>
    )
  }
}

export default Form;
