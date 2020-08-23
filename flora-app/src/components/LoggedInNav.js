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
            <h2>FLORA</h2>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
            </Nav>

        </Navbar.Collapse>
            <Container>
                <Row>
                    <Col xs={3} md={1}><Image src={person} fluid/></Col>
                    <Col style={{marginTop:"1em"}}>ThisUserLovesFlora <FaCog/></Col>
                </Row>
            </Container>
        </Navbar>
    );
  }
}

export default Navigation;
