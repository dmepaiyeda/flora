import React from 'react';
import cover from "../images/background.png";
import Posts from "../components/Posts"
import {NewPostBadge} from "../components/Badge"
import {MostPopularBadge} from "../components/Badge"
import { Container, Col, Row, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';


class Community extends React.Component {
    render(){
        return(
            <div className="imageLanding" style={{backgroundImage: `url(${cover})` }}>
                <div className="community-page-heading" style={{paddingTop:"2em"}}>
                <h1 className="community-page-text"> Welcome to the Flora Community!</h1>
                <h5 style={{paddingBottom:"1em"}}>Ask anything in the forum, and a medical professional will reply within 24 hours.
                    Make sure to read up on our forum guidelines.
                    <h6>
                    Can’t wait? Too embarrassed to post? Use our chatbot for private, quick help!
                    </h6>
                </h5>
                <Container>
                    <Row>
                        <Col>
                            <Button className="nav-button" style={{width:"8em", background: "#C4C4C4", border: "#F2E1FD", color:"black", borderRadius: "30px"}} onClick={(event) => (window.location.href = "/community")}>
                            New Post <FaPlus style={{fontSize: "0.7em"}}/>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="nav-button" style={{width:"10em", background: "#C4C4C4", border: "#F2E1FD", color:"black", borderRadius: "30px"}} onClick={(event) => (window.location.href = "/community")}>
                            Most Popular <FaCaretDown style={{fontSize: "0.7em"}}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Posts/>

                </div>
                

            </div>
        );

    }
}

export default Community;