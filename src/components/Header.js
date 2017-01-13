import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link } from 'react-router';
// import { Popup } from '../components';
import AuthForm from './AuthForm';
import Popup from './Popup'

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(type) {
    switch (type) {
      case "login":
        this.showAuth(true);
        break;
      case "logout":
        this.props.authActions.logout();
        break;
      default:
        return false;
    }
  }

  showAuth(val) {
    this.setState({
      visible: !!val
    })
    return val
  }

  renderAuth() {
    var {
      auth,
      authActions
    } = this.props;

    return (
      <Popup
        showModal={this.state.visible}
        toggle={this.showAuth.bind(this)}
        title="Login">
        <AuthForm
          auth={auth}
          authActions={authActions}></AuthForm>
      </Popup>
    )
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Grid>
            <Navbar.Brand>
              <Link to="/">Petshop</Link>
            </Navbar.Brand>
            <Nav pullRight onSelect={this.handleSelect}>
              {this.props.auth.isAuthorized
                ? <NavItem eventKey="logout" componentClass={Link} href="/" to="/"> Logout</NavItem>
                : <NavItem eventKey="login" href="#" >Sign In</NavItem>}
            </Nav>
          </Grid>
        </Navbar.Header>
        {this.state.visible ? this.renderAuth() : null}
      </Navbar>
    );
  }
}

export default Header;
