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
      startTimer();
    }
    return () => (clearInterval(timer), console.log("test"));
  }, [start]);

  const startTimer = () => {
    timer = setInterval(() => {
      eclipsedTime += 0.5;
      time -= 0.5;
      timeEclipsed(eclipsedTime);
      totalTime(time);
      console.log(eclipsedTime);
      props.newProgress((eclipsedTime / startTime) * 100);
    }, 500);
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
