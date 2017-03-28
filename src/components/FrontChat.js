import React from 'react';

export default class FrontChat extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div style={{border: '1px solid black', width: '200px', padding: '15px'}}>
        [Chat component]
        {this.props.children}
      </div>
    );
  }
}
