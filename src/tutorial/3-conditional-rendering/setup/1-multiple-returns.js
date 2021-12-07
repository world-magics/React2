import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setisLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading . . .</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error . . .</h1>
      </div>
    );
  }

  // return "hello eeeee";
  return (
    <div>
      <h1>{user}</h1>
      <h1>{location}</h1>
    </div>
  );
};

export default MultipleReturns;
