import React from "react";
import { Container } from "react-bootstrap";
import FooterCard from './FooterCard';

const FooterMain = () =>{
    return(
        <div className="dark">
        <Container>
        <div >
            <div className="footerImgDiv">
                <img src={'Images/Main-Client1.png'}/>
                <img src={'Images/Main-Client2.png'}/>
                <img src={'Images/Main-Client3.png'}/>
                <img src={'Images/Main-Client4.png'}/>
                <img src={'Images/Main-Client1.png'}/>
            </div>
        </div>
        </Container>
        <hr style={{'color' : 'white'}}/>
        <Container>
        <div>
            <FooterCard/>
        </div>
        </Container>
        </div>
    )
}

export default FooterMain;