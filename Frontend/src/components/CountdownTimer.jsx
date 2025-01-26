import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

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
    fontFamily: "Courier New, Courier, monospace",
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      padding: "1rem",

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
