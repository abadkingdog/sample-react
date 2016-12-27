import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import AuthForm from '../components/AuthForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.sendAuth = this.sendAuth.bind(this);
  }

  sendAuth(data) {
    this.props.authActions.login(data);
  }

  render() {
    return (
      <Col sm={6} smOffset={3}>
        <h1>Login</h1>
        <AuthForm sendAuth={this.sendAuth}></AuthForm>
      </Col>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);