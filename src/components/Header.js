import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link } from 'react-router'

class Header extends Component {
  static propTypes = {
    color: React.PropTypes.string
  };

  signIn() {
    console.log(123)
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Grid>
            <Navbar.Brand>
              <Link to="/">Sample React & Redux</Link>
            </Navbar.Brand>
            <Nav pullRight>
              <NavItem componentClass={Link} href="/auth" to="/auth">Sign In</NavItem>
            </Nav>
          </Grid>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;