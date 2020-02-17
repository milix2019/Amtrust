
import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Modal from './modal';
import Snackbar from './Snackbar';

class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      flag: false,
      img: [],
      snackFlag: false
    }
  }
  componentDidMount() {
  }
  componentWillReceiveProps(props) {
  }
  addSubmit = () => {
    this.generatePrime();
  }
  handleTakePhoto = (dataUri) => {
    this.setState({
      img: dataUri
    });
    // Do stuff with the photo...
  }
  onViewClick = () => {
    this.setState({
      flag: true
    });
  }
  onClose = () => {
    this.setState({
      flag: false
    });
  }
  onSnackClose = () => {
    this.setState({
      snackFlag: false
    });
  }
  onUpload = () => {
    this.setState({
      snackFlag: true
    });
    // axios.post('url', {
    //   headers: {
    //     'content-type': 'application/json ',
    //   },
    // }, {
    //   data: {
    //     title,
    //     note,
    //   },
    // }).then((response) => {

    // }).catch((error) => {
    //   // handle error
    //   console.log(error);
    // });
  }
  render() {
    return (
      <Container style={{ margin: '2em', textAlign: 'center' }}>
        <Camera
          onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }}
        />
        <Modal flag={this.state.flag} src={this.state.img} onClose={() => { this.onClose() }} />
        <Snackbar flag={this.state.snackFlag} onClose={() => { this.onSnackClose() }} />
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={() => { this.onViewClick() }}>View</Button>
          <Button onClick={() => { this.onUpload() }}>Upload</Button>
        </ButtonGroup>
      </Container>
    )
  }
}

export default Question3;
