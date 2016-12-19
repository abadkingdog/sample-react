import React, { Component } from 'react';
import Api from '../libs/api.js';
import Button from '../components/Button';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    Api.getList().then((response) => {
      this.setState({
        list: response
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Sample React</h2>
        </div>
        <div className="intro">
          <p>List of items from mocks</p>
          <ul>
            {this.state.list.map((val) => <li key={val.id}><strong>{val.title}</strong><br />{val.description}</li>)}
          </ul>
          <Button color="green">Button</Button>
        </div>
      </div>
    );
  }
}

// 
export default Main;
