
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from './ProgressBar';


class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }
  componentDidMount() {
  }
  componentWillReceiveProps(props) {
  }
  nextPrime = (value) => {
    if (value > 2) {
      var i, q;
      do {
        i = 3;
        value += 2;
        q = Math.floor(Math.sqrt(value));
        while (i <= q && value % i) {
          i += 2;
        }
      } while (i <= q);
      return value;
    }
    return value === 2 ? 3 : 2;
  }
  generatePrime = () => {
    var userValue = document.getElementById("array").value;
    var value = 0, result = [];
    for (var i = 0; i < userValue; i++) {
      value = this.nextPrime(value);
      result.push(value);
    }
    this.setState({
      result: result[userValue - 1]
    });
  }
  addSubmit = () => {
    this.generatePrime();
  }
  render() {
    return (
      <Container style={{ margin: '3em' }}>
        <TextField
          id="array"
          label="Number (The Max is 1M)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" style={{ margin: "11px" }} onClick={() => { this.addSubmit() }}>
          Submit
        {/* {this.state.flag == true ? <ProgressBar /> : null} */}
        </Button>
        <p>Result: {this.state.result}</p>
      </Container>
    )
  }
}

export default Question3;
