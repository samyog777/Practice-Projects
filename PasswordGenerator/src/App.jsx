import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);

  const PasswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let Str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
    let RellChar = "!@#$%^&*[{()}]`<>?/.,';";
    let RellNum = "0123456789";

    if (number) Str += RellNum;
    if (character) Str += RellChar;

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * Str.length);
      pass += Str.charAt(char);
    }
    setPassword(pass);
  }, [number, length, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [number, character, length, passwordGenerator]);

  //use Reff

  const HandelCopy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // const HandelCopy = () => {
  //   let text = document.querySelector("#text");
  //   // text.select(); // to show what you selected
  //   navigator.clipboard.writeText(text.value);
  //   // props.ShowAlert("info", ": Text Copied");
  // };
  return (
    <>
      <input id="text" type="text" value={password} readOnly />
      <button
        onClick={HandelCopy}
        className="text-white mx-10 bg-green-600 rounded-xl p-1">
        Copy
      </button>
      <div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(event) => {
            setLength(event.target.value);
          }}
        />
        <label className="text-white">length: {length}</label>
      </div>
      <div>
        <input
          type="checkBox"
          id="NumberInput"
          onChange={() => {
            setNumber((n) => !n);
          }}
        />
        <label className="text-white">Number</label>
      </div>
      <div>
        <input
          type="checkBox"
          id="CharacterInput"
          onClick={() => {
            setCharacter((c) => !c);
          }}
        />
        <label className="text-white">Character</label>
      </div>
    </>
  );
}

export default App;
