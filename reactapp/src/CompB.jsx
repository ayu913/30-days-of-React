import React, { useContext } from "react";
import CompC from "./CompC";
import { FirstName, LastName } from "./App";


const CompB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1> My name is {fname} {lname}</h1>
            <CompC />
        </>
    );
};

export default CompB;

