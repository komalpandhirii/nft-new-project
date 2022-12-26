import React from "react";
import TopNavbar from '../Components/TopNavbar';
import FooterMain from "../Components/Footer/FooterMain";
import AboutSection1 from "../Components/About/Section1";
import AboutSection2 from "../Components/About/Section2";
import { Container } from "react-bootstrap";

const AboutPage = () => {
    return(
        <>
        <div className="backgroundImage">
            <TopNavbar/>
        </div>
        <AboutSection1/>
        <br/><br/>
        <Container>
            <AboutSection2/>
        </Container>
        <FooterMain/>
        </>
    )
}

export default AboutPage;