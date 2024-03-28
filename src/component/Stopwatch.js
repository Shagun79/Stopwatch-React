import React, { useState } from "react";
import "./main.css";

export const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [intervalId, setIntervalId] = useState(null); //to tell interval is runnig or not

  const start = () => {
    if (!intervalId) {
      //if interval is null or undefined//
      const id = setInterval(() => {
        setTime((prevTime) => {
          let seconds = prevTime.seconds + 1;
          let minutes = prevTime.minutes;
          let hours = prevTime.hours;

          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null); // means interval is not running
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="stopwatch">
      <div className="display">
        {time.hours.toString().padStart(2, "0")}:
        {time.minutes.toString().padStart(2, "0")}:
        {time.seconds.toString().padStart(2, "0")}
      </div>
      <div className="controls">
        <button className="btn btn-start" onClick={start}>
          Start
        </button>
        <button className="btn btn-stop" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
