import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const body = (document.body.style.backgroundColor = color);
  }, [color]);
  // function RedColor() {
  //   setColor("red");
  //   document.querySelector("body").style.color()
  // }
  return (
    <div className="bg-red-300">
      <button
        onClick={() => setColor("blue")}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        Blue
      </button>
      <button
        onClick={() => {
          setColor("black");
        }}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-black to-black text-white focus:ring-2 focus:ring-white hover:shadow-xl transition duration-200">
        Black
      </button>
      <button
        onClick={() => {
          setColor("yellow");
        }}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-yellow-500 to-yellow-600 text-white focus:ring-2 focus:ring-yellow-400 hover:shadow-xl transition duration-200">
        Yellow
      </button>
      <button
        onClick={() => setColor("Red")}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl transition duration-200">
        Red
      </button>
      <button
        onClick={() => setColor("Orange")}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
        Orange
      </button>
      <button
        onClick={() => setColor("white")}
        className="m-4 text-black px-8 py-2 rounded-full bg-gradient-to-b from-white to-white focus:ring-2 focus:ring-black hover:shadow-xl transition duration-200">
        white
      </button>
      <button
        onClick={() => setColor("green")}
        className="m-4 px-8 py-2 rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl transition duration-200">
        green
      </button>
    </div>
  );
}
export default App;
