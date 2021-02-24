import React from "react";
import add, { sub, mul, div } from "./Calc";
import Heading, { you } from "./Heading";
import Para from "./Para";

function App() {
  let currDate = new Date(2020, 5, 5, 4);
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
        <Heading />
        <Para />
        <h2>{you}</h2>
      </div>
      <h1>CALCULATOR</h1>
      <ul>
        <li>Addition of 40 and 4 is {add(40, 4)}</li>
        <li>Subtraction of 40 and 4 is {sub(40, 4)}</li>
        <li>Multiplication of 40 and 4 is {mul(40, 4)}</li>
        <li>Division of 40 and 4 is {div(40, 4)}</li>
      </ul>
    </>
  );
}

export default App;
