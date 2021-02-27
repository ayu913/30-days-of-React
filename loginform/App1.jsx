import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  //Input for firstname and lastname
  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
      //   if (name == "fName") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name == "lName") {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name == "email") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: value,
      //       phone: preValue.phone,
      //     };
      //   } else if (name == "phone") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: value,
      //     };
      //   }
    });
  };

  //Submit values on header
  const onSubmit = (event) => {
    event.preventDefault();

    alert("form submitted");
    
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            Hello 🙋‍♂️🙋‍♂️ {fullName.fname} {fullName.lname}
          </h1>
          <br />
          <p>Email:{fullName.email}</p>
          <br />
          <p>Phone No:{fullName.phone}</p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <input
            type="email"
            placeholder="Enter Your Mail"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
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
