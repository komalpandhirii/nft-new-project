import React from "react";
import LeftDiscover from './RightSide';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section2 = () =>{
    return(
        <>
              <Container style={{'textAlign' : 'left'}}>
                <Row>
                    <Col xs={7}>
                        <img className="firstImgSize" src="Images/Main-slider_pic-300x208.jpg"/>
                    </Col>
                    <Col xs={5} ><LeftDiscover/></Col>
                </Row>
              </Container>
        </>
    )
}

export default Section2;