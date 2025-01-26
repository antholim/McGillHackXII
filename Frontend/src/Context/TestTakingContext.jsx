import React, { createContext, useState } from "react";

// Create Context
export const TestTakingContext = createContext();

// Context Provider Component
export const TestTakingProvider = ({ children }) => {
    const [response, setResponse] = useState("");
    const [score, setScore] = useState("");
    const [userInput, setUserInput] = useState("");

    return (
        <TestTakingContext.Provider
            value={{
                response,
                setResponse,
                score,
                setScore,
                userInput,
                setUserInput,
            }}
        >
            {children}
        </TestTakingContext.Provider>
    );
};
