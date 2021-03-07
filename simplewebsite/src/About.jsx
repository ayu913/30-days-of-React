import React from "react";
import web from "../src/Images/home.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
           <Common name="Welcome to About Page"
             imgsrc={web}
             visit="/contact"
             btname="Contact Now"
           />
        </>
    );
};


export default About;

// <div className="container-fluid nav_bg">
//                 <div className="row">
//                     <div className="col-10 mx-auto">
//                     </div>
//                     </div>
//                     </div>