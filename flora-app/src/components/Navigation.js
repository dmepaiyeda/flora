import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button,} from "react-bootstrap";
import cover from "../images/background.png";


class Navigation extends React.Component {
  render() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundImage: `url(${cover})` }}>
        <Navbar.Brand href="/">
            <h2>FLORA</h2>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
                <Button className="nav-button" style={{background: "#F2E1FD", color: "black",  border: "#F2E1FD", borderRadius: "30px"}} onClick={(event) => (window.location.href = "/community")}>
                Join Flora
                </Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
