import React, { useState } from "react";
import logoclone from "./Images/logoclone.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logoclone} alt="" width="50" height="60" />
        <h1>Google Keep Clone</h1>
      </div>
    </>
  );
};

export default Header;
