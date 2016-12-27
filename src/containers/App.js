import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Grid>{this.props.children}</Grid>
      </div>
    );
  }
};

export default App;