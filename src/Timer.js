import React, { useState, useEffect } from 'react';
import "./App.css";

function Timer(props) {
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

export default Timer;