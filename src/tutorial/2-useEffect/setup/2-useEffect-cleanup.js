import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log(size);
  return (
    <>
      <h2>{size}</h2>
    </>
  );

  // <h2>useEffect cleanup</h2>;
};

export default UseEffectCleanup;
