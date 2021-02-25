import React from "react";

import "./index.css";
import Images from "./Images";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <Images imgsrc={props.imgsrc}></Images>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
