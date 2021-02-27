import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameNew, setFirstNameNew] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameNew, setLastNameNew] = useState("");

  //Input for firstname
  const inputEvent = (event) => {
    //console.log(event.target.value);
    setFirstName(event.target.value);
  };

  //input for lastname
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  //Submit 
  const onSubmit = (event) => {
    event.preventDefault();
    setFirstNameNew(firstName);
    setLastNameNew(lastName);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            Hello 🙋‍♂️🙋‍♂️ {firstNameNew} {lastNameNew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First firstName"
            onChange={inputEvent}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Enter Your Last firstName"
            onChange={inputEventTwo}
            value={lastName}
          />
          <button type="submit">Submit Me 👍👍</button>
        </div>
      </form>
    </>
  );
};

export default App;

// In a controlled component, form data is handled by a React Component.
// The alternative is uncontrolled components, where form data is handled by the DOM itself
