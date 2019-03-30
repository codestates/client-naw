import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <NavLink to="/">
        <Navbar.Brand>홈</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="reponsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/mymna">
            {({ isActive, onClick, href }) => (
              <Nav.Item>
                <Nav.Link>내 의원</Nav.Link>
              </Nav.Item>
            )}
          </NavLink>
          <Nav.Item>
            <LinkContainer to="/mna">
              <Nav.Link>의원</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <NavLink to="/party">
            <Nav.Link>
              <Nav.Item>정당</Nav.Item>
            </Nav.Link>
          </NavLink>
          <NavLink to="/bill">
            <Nav.Link>
              <Nav.Item>법안</Nav.Item>
            </Nav.Link>
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
