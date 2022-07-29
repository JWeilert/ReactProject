import "./App.css";
import Circle from "./Content/Circle";
import React, { useEffect, useState, useRef } from "react";
import Timer from "./Content/Timer";

function App() {
  let [progress, newProgress] = useState(0);
  const state = {
    size: 250,
    strokeWidth: 15,
    circleOneColor: "#800080",
    circleTwoColor: "#800080",
  };

  return (
    <div className="App">
      <h1>Circle</h1>
      <Circle {...state} progress={progress} newProgress={newProgress} />
    </div>
  );
}

export default App;
