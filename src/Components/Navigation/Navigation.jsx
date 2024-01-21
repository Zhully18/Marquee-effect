// navigation.jsx
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import React from 'react';
import MegaMenu from './Megamenu';
import gomycodeLogo from '../Asset/gomycodeLogo.svg'

function NavScrollExample() {
  return (
    <div className='nav'>
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#"><img src={gomycodeLogo} alt="GoMyCode" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='nav-list'>Home</Nav.Link>
            <Nav.Link href="#action2" className='list'>Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className='list'>
              <MegaMenu />
            </NavDropdown>
            <Nav.Link href="#" className='list'>Link</Nav.Link>
          </Nav>
          <Form className='list'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;