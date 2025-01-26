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

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    border: "none",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#1e3c72",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    marginRight: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      padding: "1rem",
      fontFamily: "Courier New, Courier, monospace",

    }}>
      <div>Time Left: {formatTime(timeLeft)}</div>
      <div style={{ marginTop: "20px" }}>
        <button
            style={buttonStyle}
            onClick={handleStart} >Start</button>
        <button
              style={buttonStyle}
              onClick={handleStop} >Stop</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
