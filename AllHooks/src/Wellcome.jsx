import React from "react";

function Wellcome({ setIsLogedIn, isLogedIn }) {
  const HandelLogin = () => {
    setIsLogedIn(!isLogedIn);
  };
  return (
    <div>
      <h1>Wellcome to my App</h1>
      <MyButton onClick={HandelLogin} />
    </div>
  );
}

function MyButton({ onClick }) {
  return (
    <>
      <button onClick={onClick}>I'm a Button</button>
    </>
  );
}

export default Wellcome;
