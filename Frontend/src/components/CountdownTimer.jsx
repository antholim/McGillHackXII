import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false); // To track whether the timer is running

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    // Cleanup the interval on component unmount or when the timer stops
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  // Helper function to format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      fontSize: "2rem",
    }}>
      <div>Time Left: {formatTime(timeLeft)}</div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStart} style={{ marginRight: "10px", padding: "10px 20px", fontSize: "1rem" }}>Start</button>
        <button onClick={handleStop} style={{ padding: "10px 20px", fontSize: "1rem" }}>Stop</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
