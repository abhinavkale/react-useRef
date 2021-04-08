import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumber = () => {
    console.log("Button One goes here");
    console.log(inputOne.current);
    inputOne.current.style.width = "500px";
  };

  const getNumberText = () => {
    console.log("Button One goes here");
    console.log(inputTwo.current);
  };

  return (
    <>
      <h2>useRef</h2>
      <div className="input__class">
        <input
          ref={inputOne}
          type="number"
          value={number}
          style={{ width: "100px" }}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />

        <input
          ref={inputTwo}
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
      </div>
      <h3>Value : {number}</h3>
      <div className="button__class">
        <button className="abc" onClick={() => getNumber()}>
          One
        </button>
        <button className="xyz" onClick={() => getNumberText()}>
          Two
        </button>
      </div>
    </>
  );
};

export default App;
