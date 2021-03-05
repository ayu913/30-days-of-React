import React from "react";
import { useLocation, useParams } from "react-router-dom";


// const User = ({ match }) => {
//     return <h1> HELLO, User {match.params.name} PAGE</h1>
// };


const User = () => {
    const { name } = useParams();
    const location = useLocation();
    console.log(location);
    return (<>
        <h1 style={{ color: "blue" }}> HELLO, User {name} PAGE</h1>
        <p> My current location is {location.pathname}</p>
        {location.pathname === `/user/ayush` ? (
            <button> click me</button>
        ) : null
        }
    </>
    );
}

export default User;