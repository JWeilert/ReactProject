import App from "../App";
import React, { useEffect, useState, useRef } from "react";
import "./css/circle.css";

const Circle = (props) => {
  const [offset, setOffset] = useState(0);
  const { size, progress, strokeWidth, circleOneColor, circleTwoColor } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumfrerence = 2 * Math.PI * radius;
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumfrerence;
    setOffset(progressOffset);
  }, [progress, circumfrerence, setOffset, offset]);
  return (
    <div>
      {/*

    https://www.w3schools.com/html/html5_svg.asp
    cx = x-axis coord of center
    //cy = y-axis coord of center
    //r = radius
    //pathLength = total lenght of circles circumfrance

    */}
      <svg className="circleChart" width={size} height={size}>
        <circle
          className="circleBig"
          stroke={circleOneColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className="circle"
          stroke={circleTwoColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumfrerence}
          strokeDashoffset={offset}
        ></circle>
        <text x={center} y={center} className="percentage">
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default Circle;
