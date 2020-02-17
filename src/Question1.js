
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Question1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            result: []
        }
    }
    componentDidMount() {
    }
    componentWillReceiveProps(props) {
    }//GCD (greatest common divisor) 
    // 1 - 1M
    // add then remove the val
    gcd_more_than_two_numbers = (input) => {
        if (toString.call(input) !== "[object Array]")
            return false;
        var len, a, b;
        len = input.length;
        if (!len) {
            return null;
        }
        a = input[0];
        for (var i = 1; i < len; i++) {
            b = input[i];
            a = this.gcd_two_numbers(a, b);
        }
        return a;
    }

    gcd_two_numbers = (x, y) => {
        if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while (y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
    addArray = () => {
        var result = document.getElementById("array").value;
        var joined = this.state.array.concat(parseInt(result));
        this.setState({ array: joined });
        document.getElementById("array").value = "";
    }
    addSubmit = () => {
        let res = this.gcd_more_than_two_numbers(this.state.array);
        this.setState({
            result: res,
            array: []
        });
    }
    render() {
        return (
            <Container style={{ margin: '3em' }}>
                <TextField
                    id="array"
                    label="Number (The Max is 10)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" style={{ margin: "11px" }} onClick={() => { this.addArray() }}>
                    Add
                </Button>
                <Button variant="contained" color="primary" style={{ margin: "11px" }}  onClick={() => { this.addSubmit() }}>
                    Submit
                </Button>
                <p>{`Array: [${this.state.array}]`}</p>
                <p>Result: {this.state.result}</p>
            </Container>
        )
    }
}

export default Question1;
