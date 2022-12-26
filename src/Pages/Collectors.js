import React from "react";
import TopNavbar from '../Components/TopNavbar';
import FooterMain from "../Components/Footer/FooterMain";
import { positions } from "@mui/system";

const CollectorsPage = () => {
    return(
        <>
        <div className="backgroundImage">
            <TopNavbar/>
            <br/><br/>
        </div>
        <FooterMain style={{position:'fixed',bottom:'0'}}/>
        </>
    )
}

export default CollectorsPage;