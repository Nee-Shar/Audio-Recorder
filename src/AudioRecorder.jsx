// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function Audioo() {
//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col></Col>
//         <Col className="text-center"> 2 of 3</Col>
//         <Col></Col>
//       </Row>
//     </Container>
//   );
// }

// export default Audioo;

import React, { Component } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };

  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    console.log("audioData", audioData);
  };

  render() {
    const { recordState } = this.state;

    return (
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col className="text-center">
            <AudioReactRecorder
              state={recordState}
              onStop={this.onStop}
              backgroundColor="#A020F0"
              canvasWidth="900px"
              canvasHeight="400px"
            />
            <Button variant="success" onClick={this.start}>
              Start
            </Button>{" "}
            <Button variant="danger" onClick={this.stop}>
              Stop
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
