import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutSection2 = () =>{
    return(
        <>
      <Row>
        <Col>
            <h1 style={{textAlign:'left'}}>Open Your Own Marketplace</h1>
            <br/>
            <p style={{textAlign:'left'}}>
            In hac habitasse platea dictumst. Integer arcu odio, malesuada id eros vel, hendrerit consequat quam. Pellentesque volutpat quis elit at tincidunt. Fusce vel velit augue. Integer gravida justo nec mauris congue, sit amet faucibus nisl dictum. Nullam in urna tincidunt, fringilla nisl a, efficitur neque.
        ```<br/><br/>
            Integer ornare mauris id mauris semper, non fermentum est vestibulum. Sed non laoreet ligula. Praesent tempor scelerisque nulla, non tristique dolor rhoncus ac. Nulla vitae ornare sapien. Quisque non massa ut justo convallis blandit. Curabitur eu lorem quis sem finibus semper.
            </p>
            <br/><br/>
            
            <button style={{display:'flex',AlignItems:'left'}} className="createNft-btn">Discover</button>
            
            <br/>
            <hr/>
            <br/>
            <div className="display-flex">
                <div className="display-flex">
                    <div>
                    <i style={{fontSize:'50px'}} class="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h3>Custimize</h3>
                        <p>You can finally open a fully customizable marketplace</p>
                    </div>
                </div>
                
                <div className="display-flex">
                    <div><i style={{fontSize:'50px'}} class="fa fa-bookmark" aria-hidden="true"></i></div>
                    <div>
                        <h3>Set you free</h3>
                        <p>Get insights to see how your collectibles are trending.</p>
                    </div>
                </div>
            </div>
        </Col>
        
        <Col>
        <img className="AboutSec2Img" src={'Images/About_company.jpg'}/></Col>
      </Row>
      
        <br/>
        <br/>
        <br/>
        </>
    )
}


export default AboutSection2;