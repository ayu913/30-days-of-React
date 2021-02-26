import React, { useState } from "react";

const SlotM = (props) => {
  // let x = props.x;
  // let y = props.y;
  // let z = props.z;
  let { x, y, z } = props;

  if (x === y && y == z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not Matching</h1>
        </div>
      </>
    );
  }
};

const App = () => {
  const state = useState();
  console.log(state);

  const [count, setCount] = useState(0);
  //It return two items : state object(current data) and updated function.
  //useState() has initial value
  //count has current value
  //setCount has update value

  const IncNum = () => {
    setCount(count + 1);
  };

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(0);

  const UpdateTime = () => {
    setCtime(newTime);
  };
  let time = new Date().toLocaleTimeString();
  const [clocktime, setClocktime] = useState(time);
  const ClockTime = () => {
    setClocktime(time);
  };
  setInterval(ClockTime, 1000);

  const purple = "#8e44ad";
  let name1 = "Click Me";
  const [bg, setBg] = useState(0);
  const [name, setName] = useState(name1);
  const bgChange = () => {
    setBg(purple);
    let newname = "Magic 🥳";
    setName(newname);
  };

  return (
    <>
      <h1 style={{ backgroundColor: bg }} className="heading_style">
        {" "}
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot machine game</span> 🎰{" "}
      </h1>
      <div style={{ backgroundColor: bg }} className="slotMachine">
        <SlotM x="😁" y="😁" z="😁" />
        <hr />
        <SlotM x="🍔" y="🧂" z="🍜" />
        <hr />
        <SlotM x="🚗" y="🚅" z="🚇" />
        <hr />
        <SlotM x="🎅" y="🎅" z="🎅" />
        <hr />
      </div>
      <h2>{count}</h2>
      <button style={{ backgroundColor: bg }} onClick={IncNum}>
        Click Me
      </button>
      <h2 className="head">{ctime}</h2>
      <button
        style={{ backgroundColor: bg }}
        className="btn"
        onClick={UpdateTime}
      >
        Get Time
      </button>
      <h2 style={{ backgroundColor: bg }} className="head1">
        {clocktime}
      </h2>
      <button
        style={{ backgroundColor: bg }}
        className="btn1"
        onClick={bgChange}
      >
        {name}
      </button>
    </>
  );
};

export default App;
