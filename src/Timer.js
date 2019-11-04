import React, { useState, useEffect } from 'react';
import "./App.css";

//Stretch Task  - Timer function to display count down clock with buttons. This function is then called in the App function below
const Timer = () => {
    const [time, setTimer] = useState(3600);
    const [isActive, setIsActive] = useState(false);

    
    const TimeDisplay = () => {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;

      minutes = minutes.toString().length === 1 ? "0" + Number(minutes) : Number(minutes)
      seconds = seconds.toString().length === 1 ? "0" + Number(seconds) : Number(seconds)

      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setTimer(time => time - 1);
          }, 1000);
        } else if (!isActive && time !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, time]);
      return `${minutes}:${seconds}`;
    }

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimer(0);
    setIsActive(false);
  }


  return (
    <div className='timer'>{TimeDisplay()}
    <br/>
      <button className= "timerBtn" onClick = {toggle}>{isActive ? "Stop" : "Start"}</button>
      <button className = "timerRest" onClick = {reset}>Reset</button>
    </div>
  )
}

export default Timer;
