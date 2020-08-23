import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button} from "react-bootstrap";
import cover from "../images/background.png";


class Navigation extends React.Component {
  render() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" style={{backgroundImage: `url(${cover})` }}>
        <Navbar.Brand href="/">
            <h1 className="main-heading" style={{color: "black"}}>FlorA</h1>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/about" style={{color: "black"}}><strong>About</strong></Nav.Link>
                <Nav.Link href="/community" style={{color: "black"}}><strong>Community</strong></Nav.Link>
                <Button className="nav-button" style={{background: "#F2E1FD", color: "black",  border: "#F2E1FD", borderRadius: "30px"}} onClick={(event) => (window.location.href = "/community")}>
                <strong>Join Flora</strong>
                </Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
