import React, { useState, useEffect } from 'react';

const TimerButton = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setTimeLeft(8 * 60); // Set timer to 8 minutes
    setTimerActive(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    setTimeLeft(0);
    setTimerActive(false);
  };

  // Function to format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    let timerInterval;
    if (timerActive) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [timerActive]);

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <div>{formatTime(timeLeft)}</div>
    </div>
  );
};

export default TimerButton;
