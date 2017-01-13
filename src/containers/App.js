import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';

class App extends Component {
  componentWillMount() {
    // this.props.authActions.getSessionToken();
  }
  render() {
    var {
      auth,
      authActions
    } = this.props;
    return (
      <div className="app">
        <Header
          auth={auth}
          authActions={authActions}
          ></Header>
        <Grid>{this.props.children}</Grid>
      </div>
    );
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(App);