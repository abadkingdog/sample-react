import React from 'react';

export default class FrontMessageBox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div style={{border: '1px solid red', padding: '5px'}}>[MessageBox]</div>
    );
  }
}
