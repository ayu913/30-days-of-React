import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div style={{ fontSize: "30px" }} className="app">
        <div className="center_div">
          <h1 style={{ backgroundColor: "#6389aa" }}>Counter</h1>
          <h1>{count}</h1>
          <div className="btn_div">
            <button onClick={incNum}>+</button>
            <button onClick={decNum}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
