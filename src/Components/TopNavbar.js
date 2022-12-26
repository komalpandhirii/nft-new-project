import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLinkCustom from './NavLink';
import SignIn from "./SignIn";

function TopNavbar() {
    return (
 <>
    <Container>
    <Row className="navbarPadding">
              <Col className="ToppestNavbar">Discover, find and sell extraordinary NFT with us.</Col>
              <Col></Col>
              <Col className="display-flex">
                <div className="icons-flex">
                    <i class="fa fa-telegram">
                    </i>
                    <i class="fa fa-facebook-official"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-linkedin-square"></i>
                </div>
                <div>
                <button className="createNft-btn">CREATE NFT</button>
                </div>
              </Col>
            </Row>
    </Container>
  <hr style={{'color' : 'white'}}/>
    <Container> <Row className="navbarPadding">
              <Col xs={3}>
                    <img src="Images/logo.svg"/>
              </Col>
              <Col xs={6}>
                <NavLinkCustom/>
              </Col>
              <Col>
                <SignIn/>
              </Col>
            </Row>
    </Container>
 
 </>
 
 
      );





  }
  
  export default TopNavbar;