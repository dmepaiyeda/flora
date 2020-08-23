import React from "react";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import image from '../images/homepage_pic-01.png'
import cover from "../images/background.png";

//home page component

const HomePage = () => {

  return (
    <div className="imageLanding" style={{backgroundImage: `url(${cover})` }}>
        <Container>
            <Row>
                <Col xs={10} md={6} className="home-page-heading">
                <h1 className="center">
                It’s time to take control of your sexual & reproductive health.
                </h1>
                <h4 className="home-page-subheading center">
                Ask questions, get answers from professionals. 
                Simple and convenient, perfect for any womxn.</h4>

                <div className="home-page-buttons">
                    <Button className="home-page-button" style={{background: "#F2E1FD", color: "black", border: "#F2E1FD", borderRadius: "30px", marginRight:"1em"}} onClick={(event) => (window.location.href = "/community")}>
                        <strong>SIGN UP</strong>
                    </Button>
                    <Button className="home-page-button" style={{background: "#F2E1FD", color: "black",  border: "#F2E1FD", borderRadius: "30px"}} onClick={(event) => (window.location.href = "/community")}>
                        <strong>LOG IN</strong>
                    </Button>
                </div>
                </Col>

                <Col xs={10} md={5} className="home-page-img">
                    <Image src={image} fluid/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default HomePage;
