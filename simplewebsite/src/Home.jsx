import React from "react";
import web from "../src/Images/home.svg";

import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};


export default Home;

// <div className="container-fluid nav_bg">
//                 <div className="row">
//                     <div className="col-10 mx-auto">
//                     </div>
//                     </div>
//                     </div>