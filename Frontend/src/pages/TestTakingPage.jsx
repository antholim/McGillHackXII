import styles from "./TestTakingPage.module.css";
import Answer from "../components/Answer.jsx";
import Question from "../components/Question.jsx";
import LLMResponse from "../components/LLMResponse.jsx";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {
  TestTakingContext,
  TestTakingProvider,
} from "../Context/TestTakingContext.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";
import { dataAnswers } from "../data/questions.js";

function TestTakingPageContent() {
  const {
    response,
    setResponse,
    score,
    setScore,
    userInput1,
    setUserInput1,
    userInput2,
    setUserInput2,
    userInput3,
    setUserInput3,
  } = useContext(TestTakingContext);

  const [loading, setLoading] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false); // To detect when the timer starts
  const [wordCount, setWordCount] = useState(0); // Track total word count
  const [elapsedTime, setElapsedTime] = useState(0); // Track time since timer started
  const [idx, setIdx] = useState(0);

  // Function to count words
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length; // Split by spaces and filter empty strings
  };

  // Combined input change handlers
  const handleInputChange1 = (e) => {
    setUserInput1(e.target.value);
    if (!timerStarted && e.target.value) {
      setTimerStarted(true); // Start the timer when user begins typing
    }
  };

  const handleInputChange2 = (e) => {
    setUserInput2(e.target.value);
    if (!timerStarted && e.target.value) {
      setTimerStarted(true);
    }
  };

  const handleInputChange3 = (e) => {
    setUserInput3(e.target.value);
    if (!timerStarted && e.target.value) {
      setTimerStarted(true);
    }
  };

  // Effect to calculate total word count when user inputs change
  useEffect(() => {
    const totalWords =
      countWords(userInput1) + countWords(userInput2) + countWords(userInput3);
    setWordCount(totalWords);
  }, [userInput1, userInput2, userInput3]);

  // Effect to track elapsed time when the timer starts
  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval); // Clean up on component unmount
    }
  }, [timerStarted]);

  // Calculate words per minute (WPM)
  const wordsPerMinute =
    elapsedTime > 0 ? Math.round((wordCount / elapsedTime) * 60) : 0;

  const fetchGPTResponse = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.post(
        "http://localhost:3000/user-input",
        {
          userInput:
            dataAnswers[idx].scenario +
            userInput1 +
            " " +
            userInput2 +
            " " +
            userInput3,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setResponse(res.data.casper_response.casper_response);
      setScore(res.data.casper_response.score);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.questionContainer}>
          <div>{dataAnswers[idx].scenario}</div>
        </div>
        <button
          onClick={() =>
            setIdx((prevIdx) => (prevIdx + 1) % dataAnswers.length)
          }
        >
          Next Question : {idx}
        </button>
        <CountdownTimer start={timerStarted} />
        <div className={styles.wpmTracker}>
          <p>Total Words: {wordCount}</p>
          <p>Words Per Minute: {wordsPerMinute}</p>
        </div>
        <div className={styles.answerContainer}>
          {dataAnswers[idx].question1}
          <Answer
            userInput={userInput1}
            handleInputChange={handleInputChange1}
          />
          {dataAnswers[idx].question2}
          <Answer
            userInput={userInput2}
            handleInputChange={handleInputChange2}
          />
          {dataAnswers[idx].question3}
          <Answer
            userInput={userInput3}
            handleInputChange={handleInputChange3}
          />
        </div>
        <button
          className={styles.submitButton}
          onClick={fetchGPTResponse}
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit Answer"}
        </button>
      </div>

      <div className={styles.rightContainer}>
        <LLMResponse response={response} score={score} loading={loading} />
      </div>
    </div>
  );
}

export default function TestTakingPage() {
  return (
    <TestTakingProvider>
      <TestTakingPageContent />
    </TestTakingProvider>
  );
}
