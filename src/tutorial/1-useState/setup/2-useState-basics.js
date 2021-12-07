import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world dwa"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  // console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    setText("hello");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title{text}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
