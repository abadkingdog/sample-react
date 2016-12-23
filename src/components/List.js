import React, { Component, PropTypes } from 'react';
import imgLoader from '../images/default.gif';

class List extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  render() {
    if (this.props.isFetching) { 
      return (
        <img src={imgLoader} alt="" />
      )
    }

    if (this.props.error) { 
      return (
        <p className="errorText">{this.props.error}</p>
      )
    }

    return (
      <ul>
        {this.props.data.map((val) => <li key={val.id}><strong>{val.title}</strong><br />{val.description}</li>)}
      </ul>
    );
  }
}

export default List;