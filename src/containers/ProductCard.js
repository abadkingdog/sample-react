import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../actions/product';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Fail from '../components/Fail';
import imgLoader from '../images/default.gif';

class ProductCard extends Component {
  componentWillMount() {
    var _id = this.props.id
    this.props.productActions.getProductById(_id)
  }

  render() {
    var { data, error } = this.props.product;

    if (!!error) {
      return <Fail code={error.code} message={error.message}></Fail>
    }

    if (this.props.product.isFetching) { 
      return (
        <div className="text-center"><img src={imgLoader} alt="" /></div>
      )
    }

    return (
      <Row>
        <Col sm={6}>
          {data.photoUrls ? <img src={data.photoUrls[0]} alt={data.name} /> : null}
        </Col>
        <Col sm={6}>
          <h1>{data.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
