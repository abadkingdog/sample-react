import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as petsActions from '../actions/pets';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {
  List,
  Fail
} from '../components';

class Main extends Component {
  static propTypes = {
    pets: PropTypes.object,
    getPetsByStatus: PropTypes.func
  };

  componentDidMount() {
    this.props.petsActions.getPetsByStatus('available');
  }

  render() {
    if (!this.props.pets) {
        return (<p>No data yet</p>);
    }
    if (!!this.props.pets.error) {
      return <Fail code={this.props.pets.error.code} message={this.props.pets.error.message}></Fail>
    }
    return (
        <Row>
          <Col sm={12}>
          <h1>Very cute pets</h1>
          <List data={this.props.pets.items} error={this.props.pets.error} isFetching={this.props.pets.isFetching}></List>
          {this.props.auth.isAuthorized ? <Button bsStyle="success">Add Animal</Button> : null}
          </Col>
        </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    pets: state.pets,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    petsActions: bindActionCreators(petsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);