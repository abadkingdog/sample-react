import React, { Component } from 'react';

class Button extends Component {
  static propTypes = {
    color: React.PropTypes.string,
    isToggleOn: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      isToggleOn: true
    }
  }

  handleClick(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      color: prevState.isToggleOn ? 'gray' : this.props.color
    }));
  }

  render() {
    var btnStyle = {
        background: this.state.color
    }
    return (
      <button 
        type="button"
        className="btn"
        style={btnStyle}
        onClick={() => this.handleClick()}
        {...this.props}>
          {this.props.children} {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}

export default Button;
