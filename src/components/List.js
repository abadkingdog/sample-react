import React, { Component, PropTypes } from 'react';
import imgLoader from '../images/default.gif';
import Product from './Product';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    error: PropTypes.object,
    isFetching: PropTypes.bool
  };

  renderItem(val) {
    return (
      <Col sm={3} key={val.id}>
        <Product
          id={val.id}
          name={val.name}
          status={val.status}
          photoUrls={val.photoUrls}>
        </Product>
      </Col>
    )
  }

  render() {
    if (this.props.isFetching) { 
      return (
        <img src={imgLoader} alt="" />
      )
    }

    if (!!this.props.error) { 
      return (
        <p className="errorText">{this.props.error.message}</p>
      )
    }

    return (
      <Row>
        {this.props.data.map((val) => this.renderItem(val))}
      </Row>
    );
  }
}

export default List;
