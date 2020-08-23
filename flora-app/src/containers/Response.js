import React from 'react';
import cover from "../images/background.png";
import {Image, Container, Col, Row } from 'react-bootstrap';
import image from "../images/person.png"
import doctor from "../images/doctor-lady.png"
import comment from "../images/talk-icon.png"
import star from "../images/star.png"
import { FaRegComment, FaStar } from 'react-icons/fa';


class Response extends React.Component{
    render(){
        return(
            <div className="imageLanding" style={{paddingTop:"4em", backgroundImage: `url(${cover})` }}>
                <Container>
                    <Row>
                        <Col md={1}><Image src={image} fluid/></Col>
                        <Col><p>My girlfriend noticed something off down there… <br/> Posted by <strong>sapphicsiren</strong> on 8/19/2020 • New York, NY</p></Col>
                    </Row>
                    <Row style={{marginTop:"2em"}}>
                    <p>I (F23) live with my girlfriend (F23) so we’ve been seeing a lot of each other lately. She was about to go down on me one day, 
                        but she noticed some dry patches on my labia and around the vaginal area in general. 
                        I’ve never had anything like this - they don’t itch either which is why I didn’t notice them myself. 
                        Is this a cause for concern? Is it a symptom of an STD or STI? I’ve been with my current girlfriend for the past 3 years and haven’t had any new 
                        partners in that time. 
                    </p>
                    <span style={{paddingBottom:"1em"}}><FaRegComment style={{fontSize: "2em"}}/>  20 replies</span>
                    </Row>
                </Container>
                

                <div style={{paddingTop:"2em", backgroundColor:"rgba(240, 235, 207, 0.42)"}}>
                    <Container>
                        <Row>
                            <Col md={1}><Image src={doctor} fluid/></Col>
                            <Col md={5}>
                                <Row>
                                    <span><strong style={{paddingLeft: "1em"}}>Dr. Jane Tripathi, MD</strong> <Image style={{width: "5%", paddingLeft:"0px"}} src={star} fluid/> </span>
                                </Row>
                                <p>
                                Gynecologist with 10+ years of experience
                                Harvard University • New York, NY
                                </p>
                            </Col>
                        </Row>
                        <Row>
                        <p>
                    Hello! I understand how concerning this sounds, especially since you haven’t experienced any adverse symptoms besides the physical dry patches. 
                    Contact dermatitis is an extremely common cause of such dry patches, 
                    it can be caused by anything from underwear to body washes. 
                    I strongly recommend evaluating all the items you use right now to see 
                    if anything could have irritated your vaginal area this way. 
                    STD/STIs could also be a possibility if you’ve had partners before your current girlfriend - 
                    some people can be symptom-free for years before they start experiencing symptoms of these infections. 
                    While I’d recommend going to a clinic for an STD test, I can see why you might not want to do that 
                    given the current pandemic. However, it’s better to be safe than sorry! I hope this helped, 
                    feel free to reply to my comment if you have further questions. 

                    </p>
                        </Row>
                    </Container>

                    
                </div>
            </div>

        );
    }
}

export default Response;