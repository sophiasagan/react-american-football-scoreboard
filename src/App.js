//TODO: STEP 1 - Import the useState hook.
import React, {useState,useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [homeScore, setScoreLions] = useState(0);
  const [awayScore, setScoreTigers] = useState(0);
  //const [inQuarter, setInQuarter] = useState(0);
  //const [timer, setTimer] = useState()

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={ () => setScoreLions(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick ={ () => setScoreLions(homeScore + 3)}>Home Field Goal</button>
          <button className="resetButton" onClick ={ () => setScoreLions(0) }>Reset Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick ={ () => setScoreTigers(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick ={ () => setScoreTigers(awayScore + 3)}>Away Field Goal</button>
          <button className="resetButton" onClick ={ () => setScoreTigers(0) }>Reset Score</button>
        </div>
      </section>
    </div>
  );
	const [ time, setTime ] = useState(900);
	const minutes = Math.floor(time / 60).toString().padStart(2, '0');
	const seconds = (time % 60).toString().padStart(2, '0');
	useEffect(() => {
		setInterval(() => {
			setTime(newTime => newTime - 1);
		}, 1000);
	}, []);
	return (
		<div className="timer">
			{minutes}:{seconds}
		</div>
	);


  
}

export default App;

