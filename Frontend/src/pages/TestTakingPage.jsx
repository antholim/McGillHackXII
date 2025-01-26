import styles from "./TestTakingPage.module.css";
import Answer from "../components/Answer.jsx";
import Question from "../components/Question.jsx";
import LLMResponse from "../components/LLMResponse.jsx";
import axios from "axios";
import { useContext, useState } from "react";
import { TestTakingContext, TestTakingProvider } from "../Context/TestTakingContext.jsx";

function TestTakingPageContent() {
    // Use context to access shared state
    const { response, setResponse, score, setScore, userInput, setUserInput } =
        useContext(TestTakingContext);

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const fetchGPTResponse = async () => {
        setLoading(true); // Start loading
        try {
            const res = await axios.post("http://localhost:3000/user-input", {
                userInput: userInput,
            });
            console.log(res.data);
            setResponse(res.data.casper_response);
            setScore(res.data.score);
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
                    <Question />
                </div>
                <div className={styles.answerContainer}>
                    <Answer userInput={userInput} handleInputChange={handleInputChange} />
                </div>
                <button onClick={fetchGPTResponse} disabled={loading}>
                    {loading ? "Processing..." : "Submit Answer"}
                </button>
            </div>

            <div className={styles.rightContainer}>
                <LLMResponse response={response} score={score} loading={loading} />
            </div>
        </div>
    );
}

// Wrap the content with the provider
export default function TestTakingPage() {
    return (
        <TestTakingProvider>
            <TestTakingPageContent />
        </TestTakingProvider>
    );
}
