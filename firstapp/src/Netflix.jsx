import React from "react"
import Card from "./Card";
import Sdata from "./Sdata";


const Netflix = () => {
   
    return(
        <Card
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].link}

        />
    );
}

const Amazon = () => {
   
    return(
        <Card
            key={Sdata[3].id}
            imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].link}

        />
    );
}

export default Netflix;

export {Amazon};