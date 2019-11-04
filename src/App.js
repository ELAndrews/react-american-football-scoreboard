//TODO: STEP 1 - Import the useState hook.
// import React from "react";
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

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
      <button className= "timerBtn" onClick = {toggle}>{isActive ? "Stop" : "Start"}</button>
      <button className = "timerRest" onClick = {reset}>Reset</button>
    </div>
  )
}


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, sethomeScore] = React.useState(0);
  const [awayScore, setawayScore] = React.useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <Timer />
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => sethomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => sethomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setawayScore(awayScore + 7)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setawayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
