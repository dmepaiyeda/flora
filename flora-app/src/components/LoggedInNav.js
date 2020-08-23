import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Row, Col, Image, Container} from "react-bootstrap";
import person from '../images/person.png'
import cover from "../images/background.png";
import { FaCog } from 'react-icons/fa';


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
            </Nav>

        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Container>
                <Row>
                    <Col xs={3} md={1}><Image src={person} fluid/></Col>
                    <Col style={{marginTop:"1em"}}><strong>ThisUserLovesFlora</strong> <FaCog/></Col>
                </Row>
            </Container>

        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
