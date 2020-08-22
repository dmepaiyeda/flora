import React from 'react';
import cover from "../images/background.png";

class About extends React.Component {
    
    render(){
        return(
            <div className="imageLanding" style={{backgroundImage: `url(${cover})` }}>
                <p>hi</p>
            </div>
        );

    }
}

export default About;