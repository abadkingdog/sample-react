import React, { Component, PropTypes } from 'react';

class Button extends Component {
  static propTypes = {
    color: PropTypes.string,
    isToggleOn: PropTypes.func
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
        className="btn"
        type="button"
        onClick={() => this.handleClick()}
        style={btnStyle}
        {...this.props}>
          {this.props.children} {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}
  
export default Button;
