import React, { useState, useEffect } from "react";
import "./css/timer.css";

const Timer = (props) => {
  var timer;
  const startTime = 10;
  let [time, totalTime] = useState(startTime);
  let [minute, minuteSet] = useState(0);
  let [second, secondSet] = useState(0);
  let [start, timeStart] = useState(false);
  let [eclipsedTime, timeEclipsed] = useState(0);
  {
    /* CountDown */
  }

  useEffect(() => {
    if (start) {
      console.log(start);
      startTimer();
    }
    return () => (clearInterval(timer), console.log("test"));
  }, [start]);

  const startTimer = () => {
    timer = setInterval(() => {
      timeEclipsed(eclipsedTime++);
      console.log(eclipsedTime);
      time--;
      props.newProgress((eclipsedTime / startTime) * 100);
      console.log("HI");
      totalTime(time);
    }, 1000);
  };

  const change = () => {
    timeStart(!start);
    console.log(start);
  };

  useEffect(() => {
    minuteSet(Math.floor(time / 60));
    secondSet(Math.floor(time % 60));
  }, [minute, second, time, start]);

  {
    /* Returning */
  }

  return (
    <div>
      <div id="timer">
        {minute}:{second}
      </div>
      <button onClick={change}>Start/Stop</button>
    </div>
  );
};

export default Timer;
