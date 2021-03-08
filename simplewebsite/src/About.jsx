import React from "react";
import about from "../src/Images/about.svg";
//import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common name="Welcome to About Page"
        imgsrc={about}
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