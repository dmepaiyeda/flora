import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import cover from "../images/background.png";


class Navigation extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundImage: `url(${cover})` }}>
        <Navbar.Brand href="/">FLORA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
                <Button className="home-page-button searchbutton" onClick={(event) => (window.location.href = "/community")}>
                    <strong>Log in</strong>
                </Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
