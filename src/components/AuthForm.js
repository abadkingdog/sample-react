import React, { Component, PropTypes } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class AuthForm extends Component {
  static propTypes = {
    sendAuth: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendAuth(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl
                type="text"
                value={this.state.username}
                placeholder="test"
                onChange={ (e) => this.handleChange(e, 'username') } />
        </FormGroup>
        <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="123123"
              onChange={ (e) => this.handleChange(e, 'password') } 
            />
        </FormGroup>
        <Button
          bsStyle="primary"
          type="submit">
          Sign In
        </Button>
      </form>
    );
  }
}

export default AuthForm