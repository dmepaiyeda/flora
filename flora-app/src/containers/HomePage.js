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
                <Col>
                <h2 className="home-page-heading heading center">
                It’s time to take control of your sexual & reproductive health.
                </h2>
                <h4 className="home-page-subheading center heading">
                Ask questions, get answers from professionals. 
                Simple and convenient, perfect for any womxn.</h4>

                <Button className="home-page-button searchbutton" onClick={(event) => (window.location.href = "/community")}>
                    <strong>Sign up</strong>
                    </Button>
                <Button className="home-page-button searchbutton" onClick={(event) => (window.location.href = "/community")}>
                    <strong>Log in</strong>
                </Button>
                </Col>
                <Col xs={10} md={5}>
                    <Image src={image} fluid/>
                </Col>
            </Row>
        </Container>
          
    </div>
  );
};

export default HomePage;
