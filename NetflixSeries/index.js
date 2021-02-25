import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";
import Netflix, { Amazon } from "./Netflix";

const displaydata = Sdata.map((val, indexval) => {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
});
const favSeries = "amazon";
const FavS = () => {
  if (favSeries === "netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
  }
};

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {/* {displaydata} */}
    <FavS />
    {/* {favSeries === "netflix" ? <Netflix /> : <Amazon />} */} 
  </>,
  document.getElementById("root")
);
//MAP
//IF ELSE
//TERNARY OPERATOR