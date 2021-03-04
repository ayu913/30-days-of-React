import React, { createContext, useEffect, useState } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();
const App = () => {

    const [num, setNum] = useState(0);

    useEffect(() => {
        //alert("I am Clicked");
        document.title = `you clicked me ${num} times`;
    });
    return (
        <>
            <FirstName.Provider value={"Ayush"}>

                <LastName.Provider value={"Singla"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
            <h1>{num}</h1>
            <button onClick={(() => { setNum(num + 1) })}>Click Me</button>
        </>

    );
};

export default App;

export { FirstName, LastName };