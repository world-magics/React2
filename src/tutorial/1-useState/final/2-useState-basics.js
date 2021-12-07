import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("salam");
    } else {
      setText("sata12");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Click the btn
      </button>
    </React.Fragment>
  );
};
export default UseStateBasics;
