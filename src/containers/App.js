import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../actions/ListActions';
import Main from './Main';

class App extends Component {
  render() {
    var { getListData } = this.props.listActions;

    return (
      <div className="app">
        <div className="header">
          <h2>Sample React & Redux</h2>
        </div>
        <Main getListData={getListData} list={this.props.list}></Main>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listActions: bindActionCreators(listActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);