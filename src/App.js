//TODO: STEP 1 - Import the useState hook.
// import React from "react";
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeScore, sethomeScore] = React.useState(0);
  const [awayScore, setawayScore] = React.useState(0);

  //Stretch Task - button handlers
  
  function amendScore (team, points) {
    if (team === "home") {
      sethomeScore(homeScore + points)
    } else if (team === "away") {
      setawayScore(awayScore + points)
    } else {
      console.log(`Invalid team entry`)
    }
  }

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
          <button onClick = {() => amendScore('home', 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => amendScore('home', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => amendScore('away', 7)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => amendScore('away', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
