import React, { Component, PropTypes } from 'react';
import {
  Button,
  List
} from '../components';

class Main extends Component {
  static propTypes = {
    list: PropTypes.object,
    getListData: PropTypes.func
  };

  componentDidMount() {
    this.props.getListData();
  }

  render() {
    if (!this.props.list) {
        return (<p>No data yet</p>);
    }

    return (
        <div className="intro">
          <p>List of items from mocks</p>
          <List data={this.props.list.items} error={this.props.list.error} isFetching={this.props.list.isFetching}></List>
          <Button color="green">Button</Button>
        </div>
    );
  }
}

export default Main;