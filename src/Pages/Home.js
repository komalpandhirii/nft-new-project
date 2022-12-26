import React from "react";
import TopNavbar from '../Components/TopNavbar';
import Section2 from '../Components/HomeSectionTwo/Section2';
import FooterMain from '../Components/Footer/FooterMain'
import { Container } from "react-bootstrap";

const HomePage = () =>{
    return(
        <>
            <div className="backgroundImage">
                <TopNavbar/>
                <br/><br/>
                <Section2/>
                <br/><br/>
                <Container>
                    <h1 style={{'textAlign':'left'}}>Treading collection</h1>
                </Container>
                <br/><br/>
                <br/><br/>
                <br/><br/>
            </div>
            <FooterMain/>
            
        </>
    )
}

export default HomePage;