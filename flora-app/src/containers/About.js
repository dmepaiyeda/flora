import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap'
import cover from "../images/background.png";


// About page
class About extends React.Component {
  render() {
    return(
      <div className="imageLanding" style={{backgroundImage: `url(${cover})` }}>
        <div className="about-content">

        <h1 className="about-heading">ABOUT FLORA</h1>
        <h5>
            Flora is a community-based website dedicated to breaking the taboo around womxn’s sexual & 
            reproductive health. We believe that womxn should be able to get the care they need 
            without fear of judgment from others. We know how embarrassing and difficult it 
            can be to talk about these topics - trust us, we’ve been there.
        </h5>

        <h2>The Flora Team</h2>
        <h5>
            The Flora team consists of four driven and passionate women - Anika, Doris, Deborah and Isabel. 
            Being womxn of color, we experience additional obstacles related to our sexual & reproductive health. 
            From stigmas within POC families and communities, to the implicit biases against POC womxn 
            perpetuated by health professionals, we are extremely aware that these problems still exist in even the most 
            developed societies. 
        
            We created Flora to address these issues and create a safe space for all womxn to talk 
            about problems they have related to their sexual and reproductive health. 

        </h5>

        </div>
        
      </div>
    );
  }
}

export default About;
