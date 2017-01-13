import React, { Component, PropTypes } from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

class Product extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    photoUrls: PropTypes.array
  };

  render() {
    return (
      <Thumbnail src={this.props.photoUrls[0]} alt="242x200">
        <h3><Link to={"card/" + this.props.id}>{this.props.name}</Link></h3>
        <p>{this.props.status}</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    );
  }
}

export default Product;

// <img src={val.photoUrls[0]} alt="" />key={val.id}><strong>{val.name}</strong><br />{val.status}