import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../actions/list';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import {
  List
} from '../components';

class Main extends Component {
  static propTypes = {
    list: PropTypes.object,
    getListData: PropTypes.func
  };

  componentDidMount() {
    this.props.listActions.getListData();
  }

  render() {
    if (!this.props.list) {
        return (<p>No data yet</p>);
    }

    return (
        <Grid>
          <p>List of items from mocks</p>
          <List data={this.props.list.items} error={this.props.list.error} isFetching={this.props.list.isFetching}></List>
          <Button color="green">Button</Button>
        </Grid>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);