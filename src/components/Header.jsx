
import React from 'react';
import { Nav,Navbar, Button } from 'react-bootstrap';
import newslogo from '../assets/news1.png';

function Header({ showSearch }) {
  return (
    <Navbar style={{ backgroundColor: 'darkblue' }} variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img src={newslogo} alt="News Logo" width="60" height="60" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {/* Add Nav.Link items here if needed */}
      </Nav>
      {showSearch && (
        <div className="d-flex ms-auto">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            style={{ width: '200px' }} // Adjust width as needed
          />
          <Button variant="outline-info" className="ms-3">Search</Button>
        </div>
      )}
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;