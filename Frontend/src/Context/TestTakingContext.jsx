import React, { createContext, useState } from "react";

// Create Context
export const TestTakingContext = createContext();

// Context Provider Component
export const TestTakingProvider = ({ children }) => {
    const [response, setResponse] = useState("");
    const [score, setScore] = useState("");
    const [userInput1, setUserInput1] = useState("");
    const [userInput2, setUserInput2] = useState("");
    const [userInput3, setUserInput3] = useState("");

    return (
        <TestTakingContext.Provider
            value={{
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
            }}
        >
            {children}
        </TestTakingContext.Provider>
    );
};
