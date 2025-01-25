import axios from 'axios';
import { useState } from 'react';

function Test() {
    const [response, setResponse] = useState("");
    const [score, setScore] = useState("");
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

  
    const handleClose = () => {
      setIsModalOpen(false);
    };
  
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };
    const fetchGPTResponse = async () => {
      let response;
        try {
            response = await axios.post('http://localhost:3000/user-input', {
                userInput: userInput
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
        setIsModalOpen(true);
        setLoading(true);
        setResponse(response.data.casper_response);
        setScore(response.data.score);
        setLoading(false);
    }
  
    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
        <h1 className="text-xl font-bold mb-4">GPT Wrapper</h1>
        <p>You are a medical student on a clinical rotation. You witness a senior doctor making a mistake while prescribing medication, which could potentially harm the patient. The doctor does not seem to notice their error. What would you do?</p>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <p className="text-gray-700 mb-6">
              {response}
              {score}
              </p>
              <div className="flex justify-end">
                <button onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        {response && (
          <div className="mt-4 p-2 border rounded bg-gray-100">
            <h2 className="font-bold">Response:</h2>
            <p>{response}</p>
            <p>{score}</p>
          </div>
        )}
      </div>
    );
} export default Test;