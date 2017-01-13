import React, { Component, PropTypes } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

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
      [name]: e.target.value.trim()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.sendAuth(this.state)
    this.props.authActions.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup validationState={this.props.auth.error ? "error" : null}>
            <ControlLabel>Username</ControlLabel>
            <FormControl
                type="text"
                value={this.state.username}
                placeholder="test"
                onChange={ (e) => this.handleChange(e, 'username') } />
            <FormControl.Feedback />
        </FormGroup>
        <FormGroup validationState={this.props.auth.error ? "error" : null}>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="123123"
              onChange={ (e) => this.handleChange(e, 'password') } 
            />
          <FormControl.Feedback />
        </FormGroup>
        {this.props.auth.error ?  <FormGroup  validationState="error"><HelpBlock>{this.props.auth.error}</HelpBlock></FormGroup> : <HelpBlock>Enter any data for signIn</HelpBlock>}
        <Button
          bsStyle="primary"
          type="submit"
          disabled={this.props.auth.isFetching}>
          Sign In
        </Button>
      </form>
    );
  }
}

export default AuthForm;