// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));


const name = "Ayush Singla";
const fname = "Rohit";
const lname = "Sharma";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/id/237/300/300";
const img2 = "https://picsum.photos/id/1003/300/300";
const img3 = "https://picsum.photos/id/0/300/300";
const link = "https://www.instagram.com/";

const heading = {
  color: 'red',
  textTransform : 'capitalize',
  textAlign:"center",
  fontWeight:"bold",
  textShadow: '0px 2px 4px #ffe987',
  margin: '30px 0',
  fontFamily: '"Josefin Sans",sans-serif'
};

ReactDOM.render(
   <>
 {/* <h1 style={{color:"red" ,textTransform:"capitalize", textAlign:"center",}}>My Name is {name}</h1> */}
 <h1 style={heading}>My Name is {name}</h1>
 <h1>My Name is {fname + " " + lname}</h1>

 <h1>{`My Name is ${fname} ${lname}`}</h1>
  <p>Addition of 2 and 3 is {2+3}</p>
  <p>Random number is {Math.random()}</p>
  <p>Current date is = {currDate}</p>
  <p>Current date is = {currTime}</p>
  <h1 contentEditable="true">MY NAME IS {name}</h1>
  <h1  style={heading}>Gallery</h1>
  <div className="img_div">
  <img src={img1} alt="randomImages"></img>
  <img src={img2} alt="randomImages"></img>
  <img src={img3} alt="randomImages"></img>
  </div>
  <a href={link} target="_blank">Instagram</a>
 </>,

  document.getElementById("root")
);
