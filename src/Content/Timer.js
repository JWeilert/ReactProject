import React, { useState, useEffect } from "react";
import "./css/timer.css";

const Timer = (props) => {
  const startTime = 90;
  let [time, totalTime] = useState(startTime);
  let [minutes, minutesSet] = useState(0);
  let [seconds, secondsSet] = useState(0);
  var timer;
  function countdown() {
    var seconds = 0;
    timer = setInterval(() => {
      seconds++;
      time--;
      totalTime(time);
    }, 1000);
  }
  function pause() {
    clearInterval(timer);
  }
  countdown();
  useEffect(() => {
    minutesSet(Math.floor(time / 60));
    secondsSet(Math.floor(time % 60));
  }, [minutes, seconds, time]);
  return (
    <div>
      <div id="timer">
        {minutes}:{seconds}
      </div>
      <button onClick={pause}>Pause</button>
    </div>
  );
};

export default Timer;
