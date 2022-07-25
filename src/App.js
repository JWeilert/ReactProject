import "./App.css";
import Circle from "./Content/Circle";
import React, { useEffect, useState, useRef } from "react";
import Timer from "./Content/Timer";

function App() {
  let [progress, newProgress] = useState(10);
  const state = {
    size: 250,
    strokeWidth: 15,
    circleOneColor: "red",
    circleTwoColor: "blue",
  };

  return (
    <div className="App">
      <h1>Circle</h1>
      <Circle {...state} progress={progress} newProgress={newProgress} />
    </div>
  );
}

export default App;
