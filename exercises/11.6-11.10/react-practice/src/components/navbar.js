import React from "react"
// import ReactDOM from "react-dom"
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"

function NavbarInstance() {
    return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Business Navbar</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Products</NavItem>
                <NavItem eventKey={2} href="#">Info</NavItem>
                <NavDropdown eventKey={3} title="Locations" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Utah</MenuItem>
                  <MenuItem eventKey={3.2}>Arizona</MenuItem>
                  <MenuItem eventKey={3.3}>Colorado</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Search by zip</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Sign up</NavItem>
                <NavItem eventKey={2} href="#">Log in</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      )};

export default NavbarInstance;
// ReactDOM.render(NavbarInstance, mountNode);
