import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Popup extends Component {
  static propTypes = {
    title: PropTypes.string,
    footer: PropTypes.bool,
    ok: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.toggle(false);
  }

  open() {
    this.props.toggle(true);
  }

  render() {
    return (
        <Modal show={true} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          {this.props.footer
            ? <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="primary" onClick={this.props.ok}>Save changes</Button>
            </Modal.Footer>
            : null}
        </Modal>
    );
  }
}

export default Popup;