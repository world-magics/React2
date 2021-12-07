import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sherzod",
    age: "24",
    message: "message for telegram",
  });
  const [name, setName] = useState("Sherzod");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Welcome to Website");
  const changeMessage = () => {
    // setPerson({ ...person, message: "Message for Facebook" });
    setMessage("Salom");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
