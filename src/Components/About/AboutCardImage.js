import React from "react";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

function ImgOverlay() {
  return (
    <Card style={{border:'none'}} className="text-white">
      <img className="AboutImgSize" src="Images/About-bg.jpg"/>
      <Card.ImgOverlay style={{borderRadius:'none'}}>
        <Card.Title style={{fontSize:'50px'}}>About Us at Enefti</Card.Title>
        
        <Card.Text style={{width:'50%', margin:'auto',textAlign:'center'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper pulvinar imperdiet. Fusce rhoncus vel lacus vel tempor. Nullam eu magna congue, auctor nisl ac, tristique urna. In blandit mattis massa.
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;