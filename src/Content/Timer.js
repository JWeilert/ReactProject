import React, { useState, useEffect } from "react";
import "./css/timer.css";

const Timer = (props) => {
  const startTime = 5;
  let [time, totalTime] = useState(startTime);
  let [minute, minuteSet] = useState(0);
  let [second, secondSet] = useState(0);
  var timer;
  var eclipsedTime = 0;
  {
    /* CountDown */
  }
  function countdown() {
    timer = setInterval(() => {
      props.newProgress((eclipsedTime / startTime) * 100);
      eclipsedTime++;
      console.log(eclipsedTime);
      time--;
      totalTime(time);
    }, 1000);
  }
  function pause() {
    clearInterval(timer);
  }
  useEffect(() => {
    minuteSet(Math.floor(time / 60));
    secondSet(Math.floor(time % 60));
  }, [minute, second, time]);
  return (
    <div>
      <div id="timer">
        {minute}:{second}
      </div>
      <button onClick={countdown}>Pause</button>
    </div>
  );
};

export default Timer;
