import React, { useEffect, useState } from "react";
import "./index.css";
const date = new Date();
export default function App() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <div className="time">
        <div>
          <span id="hour">{dateTime.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span id="minutes">{dateTime.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span id="seconds">{dateTime.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}
