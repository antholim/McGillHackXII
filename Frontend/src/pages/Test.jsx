import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Test() {
  const [response, setResponse] = useState("");
  const [score, setScore] = useState("");
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const fetchGPTResponse = async () => {
    let response;
    try {
      response = await axios.post("http://localhost:3000/user-input", {
        userInput: userInput,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
    setIsModalOpen(true);
    setLoading(true);
    setResponse(response.data.casper_response);
    setScore(response.data.score);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <button
        onClick={async () => {
          const token = await getAccessTokenSilently({
            audience: "https://dev-fzkfxnygjmq02nja.us.auth0.com/api/v2/",
          });
          console.log(token);
        }}
      >
        TEST
      </button>
      <h1 className="text-xl font-bold mb-4">GPT Wrapper</h1>
      <p>
        You are a medical student on a clinical rotation. You witness a senior
        doctor making a mistake while prescribing medication, which could
        potentially harm the patient. The doctor does not seem to notice their
        error. What would you do?
      </p>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="5"
        placeholder="Type your message here..."
        value={userInput}
        onChange={handleInputChange}
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={fetchGPTResponse}
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
      {response && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <h2 className="font-bold">Response:</h2>
          <p>{response}</p>
          <p>{score}</p>
        </div>
      )}
    </div>
  );
}
export default Test;
