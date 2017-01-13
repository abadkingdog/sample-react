import React, { Component, PropTypes}  from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Fail extends Component {
  static propTypes = {
    code: PropTypes.number,
    message: PropTypes.string,
    description: PropTypes.string
  };

  render() {
    var { code, message, description } = this.props;
    return (
      <Row>
        <Col sm={12}>
          <h1>{code} {message}</h1>
          <p>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
        </Col>
      </Row>
    );
  }
}


export default Fail;