import React from 'react';
import cover from "../images/background.png";
import {Image, Container, Col, Row } from 'react-bootstrap';
import image from "../images/person.png"
import comment from "../images/talk-icon.png"
import { FaRegComment } from 'react-icons/fa';


class Posts extends React.Component{
    render(){
        return(
            <div style={{marginTop:"2em", marginLeft:"15em"}}>
                <Container>
                    <Row className="center">
                        <Col xs={3} md={1}>
                        <a href="/response">
                            <Image src={image} fluid/>
                        </a>
                        </Col>
                        <Col xs={3} md={7}>
                            <p>My girlfriend noticed something off down there… <br/> Posted by <strong>sapphicsiren</strong> on 8/19/2020 • Dr. Jane Tripathi replied 2 days ago
                            </p>
                        </Col>
                        <Col xs={3} md={2}> <FaRegComment style={{fontSize: "2em"}}/> 20</Col>
                    </Row>

                    <Row className="center">
                        <Col xs={3} md={1}><Image src={image} fluid/></Col>
                        <Col xs={3} md={7}>
                            <p>Do I have chlamydia? <br/> Posted by <strong>xhlfdos</strong> on 8/22/2020 • no replies yet
                            </p>
                        </Col>
                        <Col xs={3} md={2}> <FaRegComment style={{fontSize: "2em"}}/> 42</Col>
                    </Row>

                    <Row className="center">
                        <Col xs={3} md={1}><Image src={image} fluid/></Col>
                        <Col xs={3} md={7}>
                            <p>HELP! Weird discharge right before period<br/> Posted by <strong>bluesky19</strong> on  8/21/2020 • hannnnn replied 14 minutes ago
                            </p>
                        </Col>
                        <Col xs={3} md={2}> <FaRegComment style={{fontSize: "2em"}}/> 5</Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Posts;